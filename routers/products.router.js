const express = require('express')

const router = express.Router();

console.log('reading router');

router.get('/', (req, res, _) => {
    console.log('run');
    return res.status(200).json({name: 'new product', price: 30})
})

module.exports = router;