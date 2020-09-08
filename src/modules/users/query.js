import { ApolloError } from 'apollo-server-express'

const Query = {


    testApollo: () => {
        console.log('===in====')
        return "Apollo server setup"
    },
    // console.log('');
    
    getDataTest: async (_parent, _args, {dataSources}) => {

        try {
            // logger.debug('CONNECTIONS API - getConnections');
            console.log('------tryy outeside=====');
            const result = await dataSources.dataStreamsAPI.getDataResponse();
            console.log('====inside try', result);
            return result;
          } catch (err) {
            console.log('---error---', err);
            throw new ApolloError('Network Error', 404, err);
          }
    },
    
   
}

export default Query;
