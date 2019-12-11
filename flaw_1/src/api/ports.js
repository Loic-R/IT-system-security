const router = require('express').Router();
const nmap = require('libnmap');



router.post('/', (req, res) => {

    let range = req.body.range;
    
    const opts = {
        "range": [range]
    };

    let freePorts = [];

    nmap.scan(opts, function(err, report) {
        if (err) {
            freePorts.push(err.message);
        }
        else {
            for (let item in report) {
                freePorts.push(JSON.stringify(report[item]));
            }
        }
        
        return res.status(200).json({"freePorts":freePorts});
    });
       
    
});

module.exports = router;
