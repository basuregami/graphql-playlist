const _ = require('lodash');
const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;


//faker data
var books = [
    { name: 'Name of the wind', genre: 'Fantasy', id: '1'},
    { name: 'The final Empire', genre: 'Fantasy', id: '2'},
    { name: 'The Long Earth', genre: 'Sci-Fi', id: '3'}

]

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: 'BookType',
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //code to get data from db or other source
        return _find(books, {id: args.id});
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});