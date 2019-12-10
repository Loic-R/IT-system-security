const router = require('express').Router();

router.get('/', (req, res) => {
 return res.status(200).json("LE GET FONCTIONNE");
});

module.exports = router;
