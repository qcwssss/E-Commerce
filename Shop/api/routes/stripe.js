const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const dotenv = require("dotenv");
dotenv.config();
const KEY = process.env.STRIPE_KEY;
const stripe = require("stripe")(KEY);

router.post("/payment", (req, res) => {
  //   console.log(KEY);
  //   console.log(process.env.node_env);

  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
