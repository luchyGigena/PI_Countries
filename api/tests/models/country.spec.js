const { Country, conn, Activity } = require('../../src/db.js');
const { expect } = require('chai');


//creo un arreglo
// const countries = [
//   {id: 'ARG',name: 'Argentina',continent: 'America',
//   capital: 'Buenos Aires', flag: 'https://restcountries.com/data/png/arg.png'},
//   {id: 'NOR',name: 'Norway',continent: 'Europe',
//   capital: 'Oslo', flag: 'https://restcountries.com/data/png/nor.png'}
//   ];

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Country.create({ name: 'Argentina' });
      });
    });
  });
});


describe('Activity model', () => {  
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  beforeEach(() => Activity.sync({ force: true }));
  describe('creating activities', () => {
      it('should not create an activity if name is null', (done) => {
        Activity.create({id:1,dificultad:3, duracion:2, temporada:'Verano'})
          .then(() => done(new Error('name is missing')))
          .catch(() => done());
      });
      it('should throw an error if temporada is not equal to Verano ,Primavera, Otoño or Invierno', (done) => {
        Activity.create({id:2,name:'trekking',dificultad:3, duracion:2, temporada:'Verano'})
          .then(() => done(new Error('season name is not valid')))
          .catch(() => done());
      });
      it('should throw an error if dificultad is not between 1 and 5', (done) => {
        Activity.create({id:3, name:'running',dificultad:6, duration:2, temporada:'Verano'})
          .then(() => new Error('difficulty value is incorrect'))
          .catch(() => done());
      });
      it('should create an activity if all parameters are valid',(done)=>{
        Activity.create({id:4, name:'running',dificultad:2, duracion:2, temporada:'Primavera'})
        .then(() => Activity.findAll())
        .then(results => (results.length===1)?done():new Error('wrong'))//expect(results.length).to.be.equal(1)) //what?
        //.catch(() => console.log('it did not work'))
      });
    });
  });
