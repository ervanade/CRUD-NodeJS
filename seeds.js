const Product = require('./models/product');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test').
  catch(error => handleError(error));


const seedProducts = [
    {
        name: 'Grape',
        price: 1.99,
        category: 'fruit' 
    },
    {
        name: 'Banana',
        price: 2.99,
        category: 'fruit' 
    },
]
Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e =>{
        console.log(e)
    })
