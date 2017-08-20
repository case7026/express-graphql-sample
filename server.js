var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

//  Let's make a schema
var schema = buildSchema(`
type Query {
    hello: String
}
`);

//  The root will provider resolver functions for each API endpoint
var root = {
    hello: () => {
        return 'Hello World';
    },
};

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))

app.listen(4000);
console.log('Running a GraphQL API server on localhost:4000/graphql');