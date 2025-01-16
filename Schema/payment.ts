// schemas/payment.js

export default {
    name: 'payment',
    title: 'Payment',
    type: 'document',
    fields: [
      {
        name: 'paymentMethod',
        title: 'Payment Method',
        type: 'string',
        options: {
          list: [
            { title: 'Credit Card', value: 'credit_card' },
            { title: 'PayPal', value: 'paypal' },
            { title: 'Bank Transfer', value: 'bank_transfer' },
            { title: 'Cash on Delivery', value: 'cash_on_delivery' },
          ],
        },
        validation: Rule => Rule.required(),
      },
      {
        name: 'amount',
        title: 'Amount',
        type: 'number',
        validation: Rule => Rule.required().min(0),
      },
      {
        name: 'status',
        title: 'Payment Status',
        type: 'string',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Completed', value: 'completed' },
            { title: 'Failed', value: 'failed' },
          ],
        },
        validation: Rule => Rule.required(),
      },
      {
        name: 'paymentDate',
        title: 'Payment Date',
        type: 'datetime',
        validation: Rule => Rule.required(),
      },
      {
        name: 'transactionId',
        title: 'Transaction ID',
        type: 'string',
        validation: Rule => Rule.required().min(5).max(50),
      },
    ],
  };
  