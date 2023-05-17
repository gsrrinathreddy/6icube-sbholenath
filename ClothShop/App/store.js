const configureStore = require('@reduxjs/toolkit').configureStore;

const reduxLogger = require('redux-logger');

const  clothReducer = require('./Features/Clothes/clothSlice');

const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer:{
        cloth:clothReducer,
  
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store;