const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');
//me traigo tambien los modelos
const {Country , Activity} = require('../db.js')
const router = Router();
const sequelize= require ('sequelize');


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getCountries = async() => {
    const countriesTable = await Country.findAll({
        include: [{model: Activity}],
    })
    if(countriesTable.length === 0){
        try {
            const api = await axios.get("https://restcountries.com/v3/all");
            const apiInfo = await api.data.map(e => {
            return{
                id : e.cca3,
                name: e.name.common,
                flag: e.flags[0],
                continent: e.continents[0],
                capital: e.capital,
                subregion: e.subregion,
                area: e.area,
                population: e.population
            };
        });
        
        apiInfo.map(async (e) => {
            await Country.findOrCreate({
                where: {
                    id: e.id,
                    name: e.name,
                    flag: e.flag,
                    continent: e.continent,
                    capital: e.capital ? e.capital[0] : "Capital not found",
                    subregion: e.subregion ? e.subregion : "Subregion not found",
                    area: e.area,
                    population: e.population
                },
            });
        });
        return apiInfo;
        } catch (error){
            console.log(error);
        }
    }else{
        return (countriesTable);
    }
}


//aca unifico /countries con la peticion por ? de name
router.get('/countries', async(req, res)=>{
    const {name}= req.query //(pregunto si e un nombre pasado por ?)
    const paisesTodos = await  getCountries(); 
    if(name){
        let countriesName = await paisesTodos.filter(e=> e.name.toLowerCase().includes(name.toLocaleLowerCase()))
        countriesName.length ?
        res.status(200).send(countriesName):
        res.status(404).send('Pais no encontrado')
       // console.log(countriesName)
    }else{
        res.status(200).send(paisesTodos)
    }
})

router.get('/countries/:idPais', async(req, res)=>{
    const {idPais} = req.params
    try{
        const getPais = await Country.findByPk(idPais.toUpperCase(),{
            include: {
                model: Activity  
              }
        })
        if(getPais){
            res.send(getPais)
        }else{
            res.send('Pais no encontrado')
        }
    }catch(error){
        console.log(error)
    }
})

router.post('/activities', async(req, res)=> {
    const {name, dificultad , duracion, temporada, inputCountries} = req.body;

    try{

       if(name && dificultad && duracion && temporada && inputCountries){
         const dbCountries = await Country.findAll({
             where :{
                 id: inputCountries,
             }
         })

            if(dbCountries){
                const activityCreated = await Activity.create({
                    name,
                    dificultad,
                    duracion,
                    temporada,
                    inputCountries
                })
                 activityCreated.addCountries(dbCountries)
                res.status(200).send(activityCreated)

            }else{
                res.status(400).send('Pais no encontrado')
            }

        }else{
            res.status(400).send('idiota')
        }
    }catch(error){
        return res.status(400).send({msj: 'Cration Failed'})
    }
})

router.get('/activities', async(req,res)=>{
    try{
        const activities= await Activity.findAll();
        return res.status(200).send(activities)
    }catch(error){
        return res.status(400).send(error);
    }

})



module.exports = router;
