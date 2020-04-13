const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const http = require('http');
const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const { execute, subscribe } = require('graphql');
const { PubSub } = require('graphql-subscriptions');
const { SubscriptionServer } = require('subscriptions-transport-ws');

const mocks = require('./mocks');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const { decodeToken } = require('./services/auth');
const User = require('./models/User');

// NOTE: use "npm run dev" to start server
async function userAuth(req, res, next) {
  try {
    const token = req.headers.authorization
    if (token) {
      const user = await decodeToken(token)
      req.user = user
    } else {
    req.user = null;
  }
    return next();
  } catch (error) {
    throw error;
  }
}

async function driverAuth(req, res, next) {
  try {
    const token = req.headers.authorization
    if (token) {
      const driver = await decodeToken(token)
      req.driver = driver
    } else {
    req.driver = null;
  }
    return next();
  } catch (error) {
    throw error;
  }
}

const app = express();
app.use(bodyParser.json());
app.use(userAuth)
app.use(driverAuth)


mocks().then(() => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, connection }) => {
      if (connection) {
        return connection.context;
      } else {
        return {
          user: req.user,
          driver: req.driver
        }
      }
    },
    uploads: false,
    subscriptions: {
     path: "/subscriptions",
     onConnect: async (connectionParams) => {
       const token = connectionParams.Authorization;
       if (token) {
         const user = await decodeToken(token)
         const currentUser = await User.findById(user._id);
         if (!currentUser) {
           throw new Error('You are not the current user')
         }
         return currentUser;
       }
       console.log(`Subscription client connected using Apollo server's built-in SubscriptionServer.`)
     }
   }
  });

  server.applyMiddleware({ app });
  const httpServer = http.createServer(app);
  server.installSubscriptionHandlers(httpServer);

  httpServer.listen({ port: 5000 }, () => {
    console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`)
    console.log(`🚀 Server ready at http://localhost:3000/graphql${server.subscriptionsPath}`)
  });
});

mongoose.set('debug', true);

try {
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost/commute', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });
} catch (e) {
  mongoose.Promise = global.Promise;
  mongoose.createConnection('mongodb://localhost/commute', { useNewUrlParser: true });
}

mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));
