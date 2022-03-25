// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Kh5ubSAVab8m4dQ59nS23eBZCiBfL6efwNDhYUrBmjNA6hR0uYcnAkBoZfqwX9yycRFw2rpNmttPyfUrMhBYUcP0042oiEeuy"
);

// - APP Config
const app = express();

// - Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

// API ROutes
app.get("/", (req, res) => 
  res.status(200).send("Hello")
);

// app.post("/payments/create", async (req, res) => {
//   const total = req.query.total;

//   console.log(total);

//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: total,
//     currency: "usd",
//   });

//   res.status(201).send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });

exports.api = functions.https.onRequest(app);
// app.listen(5000);
