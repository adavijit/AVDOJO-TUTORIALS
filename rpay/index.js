'use strict'

const Razorpay = require('razorpay')

let instance = new Razorpay({
  key_id: 'rzp_test_ADCNnduzIBMogc', // your `KEY_ID`
  key_secret: 'z0o1dR3R5qr3kZqsrgM9KU2v ' // your `KEY_SECRET`
})
var options = {
    amount: 50000,  // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11",
    payment_capture: '0'
  };
  instance.orders.create(options, function(err, order) {
    console.log(err);
  });
