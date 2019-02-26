const express = require('express');
const mongoose = require('mongoose');
const schema = require('./schema/schema');
const graphqlHTTP = require('express-graphql');

const app = express();


//connect to database
mongoose.connect('mongodb+srv://root:root@cluster0-qpftn.mongodb.net/test?retryWrites=true')
mongoose.connection.once('open', () => {
	console.log('connected to database')
});

app.use('/graphql',graphqlHTTP({
	schema,
	graphiql: true
}));

app.listen(4000, () => {
	console.log("listening to port 4000");
});
