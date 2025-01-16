// schemas/order.js

export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'orderNumber',
        title: 'Order Number',
        type: 'string',
        validation: Rule => Rule.required().min(5).max(20)
      },
      {
        name: 'customerName',
        title: 'Customer Name',
        type: 'string',
        validation: Rule => Rule.required().min(3).max(100)
      },
      {
        name: 'email',
        title: 'Customer Email',
        type: 'string',
        validation: Rule => Rule.required().email()
      },
      {
        name: 'phoneNumber',
        title: 'Customer Phone Number',
        type: 'string',
        validation: Rule => Rule.required().min(10).max(15)
      },
      {
        name: 'address',
        title: 'Shipping Address',
        type: 'text',
        validation: Rule => Rule.required().min(10).max(500)
      },
      {
        name: 'orderDate',
        title: 'Order Date',
        type: 'datetime',
        validation: Rule => Rule.required()
      },
      {
        name: 'status',
        title: 'Order Status',
        type: 'string',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Shipped', value: 'shipped' },
            { title: 'Delivered', value: 'delivered' },
            { title: 'Cancelled', value: 'cancelled' }
          ]
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'products',
        title: 'Products',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'product' }] }],
        validation: Rule => Rule.required()
      },
      {
        name: 'totalPrice',
        title: 'Total Price',
        type: 'number',
        validation: Rule => Rule.required().min(0)
      }
    ]
  }
  