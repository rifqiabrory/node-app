import express from 'express';
import * as CustomerService from '../services/customer-service';

const CustomerRouter = express.Router();

CustomerRouter.post('/customer', (req, res, next) => {
    // const customer = 
});

CustomerRouter.get('/customers', (req, res, next) => {
    CustomerService.getCustomers(function (response) {
        console.log(JSON.stringify(response));
        res.json(response);
        res.end();
    });
});

export default CustomerRouter;