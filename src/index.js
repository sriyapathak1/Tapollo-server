import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';
// import { UserMutation, UserQuery } from './modules';
import Resolvers from './modules/users';

const typeArrays = fileLoader(path.join(__dirname, './**/*.graphql'));
const typeDefs = mergeTypes(typeArrays, { all: true });

console.log('====here is resolver page ========',Resolvers);

const resolvers = {
    ...Resolvers
}
export {
    resolvers,
    typeDefs,
}