const request =require('request');
//api
const _BASE_PATH_API_URL = 'http://localhost:8070/api/';

const getCustomers = (callback) => {
    request(_BASE_PATH_API_URL + 'customers',{json:true}, (err, res,body) => {
        if(err){
            return callback(err);
        }
        return callback(body);
    });
}

export{ getCustomers};