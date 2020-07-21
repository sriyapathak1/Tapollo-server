import { ApolloError } from 'apollo-server-express'

const Query = {


    testApollo: () => {
        console.log('===in====')
        return "Apollo server setup"
    },
    // console.log('');
    
//     getDataTest: async (_parent, _args, {dataSources}) => {

//         try {
//             // logger.debug('CONNECTIONS API - getConnections');
//             console.log('------tryy outeside=====');
//             const result = await dataSources.dataStreamsAPI.getDataResponse();
//             console.log('====inside try', result);
//             return result;
//           } catch (err) {
//             throw new ApolloError('Network Error', 404, err);
//           }
//         // try {
//         //     console.log('------tryy outeside=====');
            
//         //     const result = await dataSources.dataStreamsAPI.getDataResponse();
//         //     console.log('====inside try', result);
            
//         //     return result;
//         //     // return {
//         //     //     message: "success",
//         //     //     status: 200,
//         //     //     data: MockDdata,
//         //     // }
//         // } catch (err) {
//         //     console.log('---error---', err);
//         //     throw new ApolloError('Networkwork error', 500, err);
//         //     // return {
//         //     //     message: err.message,
//         //     // }
//         //     //     ;
//         // }
//     },
    
   
}

export default Query;



// const Query = {
//     getConnections: async (_parent, _args, { dataSources }) => {
//       try {
//         logger.debug('CONNECTIONS API - getConnections');
//         const result = await dataSources.ConnectionsAPI.getConnections();
//         return result;
//       } catch (err) {
//         throw new ApolloError('Network Error', 404, err);
//       }
//     },
//     }