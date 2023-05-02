//setting up the routes 
const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

//adding the routes to the router
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

//exporting the router
module.exports = router;