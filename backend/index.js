const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4000;
const { uuid } = require("uuidv4");
require('dotenv').config()
const stripe = require('stripe')(process.env.SECRET_KEY);


// Middlewares
app.use(express.json())
app.use(cors())


// Get Route
app.get('/', (req,res) => {
    res.send('Hello There😀')
})

// Post Route for payment
app.post('/payment', (req,res) => {

    // Getting the data from the frontend and destructuring it into product and token
    const {product, token} = req.body;

    // Logging them to the console
    console.log("PRODUCT",product);
    console.log("PRICE",product.price);

    // Setting up of uniqueKey for item
    const idempotencyKey = uuid()


    // Using the Stripe route to create a customer
    return stripe.customers.create({
        email: token.email,
        source: token.id
    }).then(customer => {
        stripe.charges.create({
            amount: product.price * 100, //The amount is multiplied by 100 because Stripe keeps track of the amount in cents
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
            description: `Purchase of ${product.name}`,
            shipping: {
                name: token.card.name,
                address: {
                    country: token.card.address_country
                }
            }
        }, idempotencyKey)
    }).then( result => {   //what to do when process is successful.
        res.status(200);
        res.json(result)
    }).catch(err => console.log(err)) //Catching any errors that occurs during the procedure



})




// Listening ports
app.listen(PORT, () => {
    console.log(`Listening at port http://localhost:${PORT}, can't wait to start`);
})