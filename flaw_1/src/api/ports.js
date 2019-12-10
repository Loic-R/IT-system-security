const router = require('express').Router();
const nmap = require('libnmap');



router.post('/', (req, res) => {

    console.log(req.body)

    let range = req.body;
    

   
    return res.status(200).json(range);
});

module.exports = router;
