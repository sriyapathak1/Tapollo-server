import { ApolloServer, mergeSchemas, makeExecutableSchema } from 'apollo-server-express';
import express from 'express';
import http from 'http';
// import { createServer } from 'http';
import  { typeDefs, resolvers } from './index';
import config from './config/Configuration'; 
import DataCheckAPI from './services/getDataAPI';


const app = express();


console.log('--typedef, resolveerr=====', typeDefs);
console.log('======resolver====', resolvers);


export const server = new ApolloServer({
  // dataSources: () => (
    
  //   {
  //     // console.log('-----');
      
  //     dataStreamsAPI: new DataCheckAPI(),
  //     // console.log('=====inside server======'),
  //   }),
    schema: makeExecutableSchema({typeDefs, resolvers}),
    
    onHealthCheck: () => new Promise((resolve) => {
      resolve('I am OK');
    }),
    
  }

)
server.applyMiddleware({app});
export const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(config.port, () => {
    console.log('port is here----------');
    
});



 


