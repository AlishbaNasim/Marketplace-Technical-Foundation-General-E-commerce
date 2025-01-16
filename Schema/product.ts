// schemas/product.ts


export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Product Name',
        type: 'string',
        validation: Rule => Rule.required().min(3).max(100)
      },
      {
        name: 'description',
        title: 'Product Description',
        type: 'text',
        validation: Rule => Rule.required().min(10).max(500)
      },
      {
        name: 'price',
        title: 'Product Price',
        type: 'number',
        validation: Rule => Rule.required().min(0)
      },
      {
        name: 'category',
        title: 'Product Category',
        type: 'string',
        validation: Rule => Rule.required().min(3).max(50)
      },
      {
        name: 'stock',
        title: 'Stock Quantity',
        type: 'number',
        validation: Rule => Rule.required().min(0)
      },
      {
        name: 'imageUrl',
        title: 'Product Image',
        type: 'image',
        options: {
          hotspot: true
        }
      }
    ]
  }
  
