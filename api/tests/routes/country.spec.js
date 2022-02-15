/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn, Activity } = require('../../src/db.js');

const agent = session(app);
const country = {
  id: 'ARG',
  name: 'Argentina',
  flag: "https://flagcdn.com/ar.svg",
  continent: "South America",
  capital: "Buenos Aires"

};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));
  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
  });
});

// describe('Activity routes', () => {
//   before(() => conn.authenticate()
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   }));
//   beforeEach(() => Country.sync({ force: true })
//     .then(() => countries.forEach(c=>Country.create(c))));
//   beforeEach(() => Activity.sync({ force: true }))
//   describe('GET /activity', () => {
//     it('should get 200', () =>
//       agent.get('/activity').expect(200)
//     );
//   });
//   describe('POST /activity', () => {
//     it('should post an activity and get 200', () =>
//       agent.post('/activities').send(activity1)
//       .then((r)=> expect(r.status).to.equal(200))
//     );
//     it('should get a list of activities created', () =>
//       agent.post('/activities').send(activity1)
//       .then(() => agent.post('/activity').send(Activity))
//       .then(()=>agent.get('/activity'))
//       .then(re => {
//         expect(re.body.length).to.equal(2);
//         expect(re.body[0]).to.equal(activity1.name);
//         expect(re.body[1]).to.equal(activity2.name);
//       })
//     );
//   });

// });