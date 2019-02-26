const express = require('express');
const schema = require('./schema/schema');
const graphqlHTTP = require('express-graphql');

const app = express();

app.use('/graphql',graphqlHTTP({
	schema,
	graphiql: true
}));

app.listen(4000, () => {
	console.log("listening to port 4000");
});
