import express from 'express';

const notFound = express.Router();

notFound.use((req, res, next) => {
    const message = 'Not found !';
    res.status(404).json({message});
});

export default notFound;