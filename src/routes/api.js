const express = require('express');
const { ProductList } = require('../controllers/ProductsController');
const router = express.Router();



router.get('/productList/:pageNo/:perPage/:searchKeyword', ProductList);




module.exports = router;