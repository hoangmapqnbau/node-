
const testRoute = require('./test.route');

function route(app) {
    app.get('/', (req, res) =>{
        res.send('hello word')
    });
    
    app.use('/test', testRoute);
}

module.exports = route;
