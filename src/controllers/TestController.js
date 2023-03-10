class TestController {
    index(req, res){
        res.send('hehe')
    }
}

module.exports = new TestController;