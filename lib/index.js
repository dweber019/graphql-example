const { nodeEnv } = require('./util');
console.log(`Running in ${nodeEnv} mode...`);

const app = require('express')();

//const ncSchema = require('../schema');
const graphqlHTTP = require('express-graphql');

const db = require('../database/mdb');
const humanRepository = require('../database/repositories/human.repository');
const warPlaceRepository = require('../database/repositories/war-places.repository');

app.use('/graphql', (req, res) => {
  const repositories = {
    humanRepository,
    warPlaceRepository
  };

  warPlaceRepository.getAllWarPlaces()
    .then(d => res.json(d));

  /*humanRepository.getHumanById('5810427316a719c6a3923595')
    .then(data => {
      res.json(data);
    })
    .catch(err => res.json(err));*/


  /*graphqlHTTP({
    schema: ncSchema,
    graphiql: true,
    context: { repositories }
  })(req, res);*/
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
