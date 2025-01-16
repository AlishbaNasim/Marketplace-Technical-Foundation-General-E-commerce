// schemas/shipment.js

export default {
    name: 'shipment',
    title: 'Shipment',
    type: 'document',
    fields: [
      {
        name: 'trackingNumber',
        title: 'Tracking Number',
        type: 'string',
        validation: Rule => Rule.required().min(5).max(50),
      },
      {
        name: 'carrier',
        title: 'Carrier',
        type: 'string',
        validation: Rule => Rule.required().min(3).max(50),
      },
      {
        name: 'status',
        title: 'Shipment Status',
        type: 'string',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Shipped', value: 'shipped' },
            { title: 'Delivered', value: 'delivered' },
            { title: 'Cancelled', value: 'cancelled' },
          ],
        },
        validation: Rule => Rule.required(),
      },
      {
        name: 'shipmentDate',
        title: 'Shipment Date',
        type: 'datetime',
        validation: Rule => Rule.required(),
      },
      {
        name: 'deliveryDate',
        title: 'Delivery Date',
        type: 'datetime',
      },
    ],
  };
  