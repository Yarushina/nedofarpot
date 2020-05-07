const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const sectionsRoutes = require('../api/routes/sections');
const usersRoutes = require('../api/routes/users');
const adsRoutes = require('../api/routes/ads');
const reviewsRoutes = require('../api/routes/reviews');
const likeRoutes = require('../api/routes/like');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use((request, response, next) => {
    response.header(
        'Access-Control-Allow-Origin',
        '*'
    );
    response.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (request.method === 'OPTIONS') {
        response.header(
            'Access-Control-Allow-Methods',
            'PUT, POST, PATCH, DELETE, GET'
        );
        return response.status(200).json({});
    }
    next();
});

app.use('/api/ch/sections', sectionsRoutes);
app.use('/api/ch/users', usersRoutes);
app.use('/api/ch/ads', adsRoutes);
app.use('/api/ch/reviews', reviewsRoutes);
app.use('/api/ch/like', likeRoutes);

module.exports = app;