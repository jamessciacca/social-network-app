//adding api path to the routes
const router = require('express').Router();
const apiRoutes = require('./api_routes');

router.use('/api', apiRoutes);

//adding html path to the routes
router.use((req, res) => {
    res.status(404).send('<h1>404 Error!</h1>');
});

//exporting the router
module.exports = router;
