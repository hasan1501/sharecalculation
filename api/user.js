const { Router } = require('express');

const router = new Router();

router.get('/add', async function (req, res){
    res.json({hello:"world"});
})

router.post('/add', function (req, res) {
    console.log(req.body);
    res.status(200).json({
        hello : "world"
    });
})

module.exports = router;