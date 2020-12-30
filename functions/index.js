  const functions = require("firebase-functions");
  const express = require("express");
  const cors = require("cors");
  const stripe = require("stripe")(
      "sk_test_51HUuljARgZFW9hkVrqfz85YovTonKH88aKJ7TEaGGITLfDsHZkAUb3HIapq4VPaUKB9BD1AosFwmZznuX0Jdly2M00nBQvBkhf"
  );



  // API/

  // - App config
  const app = express();

  // - Middlewares
  app.use(cors({ origin: true }));
  app.use(express.json());

  // - API routes
  app.get("/", (request, response) => response.status(200).send("hello prashant"));

  app.post("/payments/create", async(request, response) => {
      const total = request.query.total;

      console.log('request recieved');
      console.log(total);

      const paymentIntent = await stripe.paymentIntents.create({
          amount: total, // subunits of the currency
          currency: "INR",
      });

      // OK - Created
      response.status(201).send({
          clientSecret: paymentIntent.client_secret,
      });
  });

  app.get("/payments/create", (request, response) => {
      const total = request.query.total;
      console.log('request recieved');
      response.status(200).send("hello psr");
  });

  // - Listen command
  exports.api = functions.https.onRequest(app);

  // Example endpoint
  // http://localhost:5001/challenge-4b2b2/us-central1/api