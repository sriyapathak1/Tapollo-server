import { RESTDataSource } from 'apollo-datasource-rest';
import config from '../config/Configuration';

class DataCheckAPI extends RESTDataSource {
// class  extends RestDataSource {
    constructor(){
        super();
        this.baseURL = config.serviceURL;
    }

    getDataResponse(){
        try {
            console.log('----api success---');
            return this.get('todos');
          } catch (err) {
            console.log('--api eroor is here');
            throw err;
          }
    }
    getPostDataResponse(){
      try {
          console.log('----api success---');
          return this.get('posts');
        } catch (err) {
          console.log('--api eroor is here');
          throw err;
        }
  }
}

export default DataCheckAPI;



//   async getDataStreamById(id) {
   
//   }
// }

// export default DataStreamsAPI;
