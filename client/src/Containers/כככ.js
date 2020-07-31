<html>
<head>
  <script
    src="https://www.paypal.com/sdk/js?client-id=AanUC4kKG0ZEEVf8OibgNOoBJ4U3MGk_pX1q3Sc44phIKJcFQBR94CF34F5acCPAoPCxgojOPLYDF8LU&currency=ILS&disable-funding=card">
  </script>
</head>
<body>
  <div id="paypal-button-container"></div>
  <script>
    let transData;
    // when a message is received from the page code
    window.onmessage = (event) => {
    if (event.data && Object.prototype.hasOwnProperty.call(event.data, 'productName')) {
    transData = event.data;
  }
  }
    paypal.Buttons({
    createOrder: function(data, actions) {
      console.log(transData);
    return actions.order.create({
    purchase_units: [{
    amount: {
    value: transData.productPrice * transData.quantity + transData.deliveryPrice,
    breakdown: {
    item_total: {
    currency_code: 'ILS',
    value: transData.productPrice * transData.quantity,
  },
    shipping: {
    currency_code: 'ILS',
    value: transData.deliveryPrice,
  },
  },
  },
    items: [{
    name: transData.productName,
    unit_amount: {
    currency_code: 'ILS',
    value: transData.productPrice
  },
    quantity: transData.quantity,
  }],
  }],
  });
  },
    onApprove: function(data, actions) {
      window.parent.postMessage(data, 'https://mangomatos84.wixsite.com/mangom');
  }
  }).render('#paypal-button-container');
    // This function displays Smart Payment Buttons on your web page.
  </script>
</body>
</html>
