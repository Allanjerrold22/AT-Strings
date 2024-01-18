export default {
    name: 'products',
    type: 'document',
    title: 'Products',
    fields: [
      {
        name: 'key',
        type: 'string',
        title: 'Key'
      },
      {
        name: 'test',
        type: 'string',
        title: 'Test'
      },
        {
          name: 'name',
          type: 'string',
          title: 'Name'
        },

        {
            name: 'size',
            type: 'string',
            title: 'Size'
          },

        {
          name: 'images',
          type: 'array',
          title: 'Images',
          of: [{ type: 'image' }],
        //   options: {
        //     layout: 'grid'
        //   }
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description'
          },

          {
            name: 'price',
            type: 'number',
            title: 'Price'
          },  

        {
          name: 'ratings',
          type: 'number',
          title: 'Ratings',
          description: 'Enter a value from 1 to 5',
          validation: Rule => Rule.min(1).max(5)
        },

        {
          name: 'reviews',
          type: 'array',
          title: 'Reviews',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'custname',
                  type: 'string',
                  title: 'Customer Name',
                },
                {
                  name: 'rating',
                  type: 'number',
                  title: 'Rating',
                  description: 'Enter a value from 1 to 5',
                  validation: Rule => Rule.min(1).max(5),
                },
                {
                  name: 'date',
                  type: 'date',
                  title: 'Date',
                },
                {
                  name: 'place',
                  type: 'string',
                  title: 'Place',
                },
               
                {
                  name: 'description',
                  type: 'text',
                  title: 'Description',
                },
              ],
            },
          ],
        }
   
        
        
        
      ]
  }