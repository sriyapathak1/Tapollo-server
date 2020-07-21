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
            
            return this.get('todos/1/');

          } catch (err) {
            console.log('--api eroor is here');
            
            throw err;
          }
       
        // return this.get('todos/1/');
    }
}

export default DataCheckAPI;



//   async getDataStreamById(id) {
   
//   }
// }

// export default DataStreamsAPI;
