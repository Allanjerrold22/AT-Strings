export default {
  name: 'users',
  type: 'document',
  title: 'Users',
  fields: [
    {
      name: 'User',
      type: 'array',
      of: [
        {
          title: 'User Info',
          type: 'object',
          fields: [
            {
              title: 'UID',
              name: 'uid',
              type: 'string',
            },
            {
              title: 'List',
              name: 'list',
              type: 'array',
              of: [
                {
                  type: 'object', // Change the type to 'object'
                  fields: [
                    {
                      title: 'Name', // Define properties for the object
                      name: 'name',
                      type: 'string',
                    },
                    {
                      title: 'Key', // Define properties for the object
                      name: 'key',
                      type: 'string',
                    },
                    {
                      title: 'Rating',
                      name: 'rating',
                      type: 'number',
                    },
                    {
                      title: 'Price',
                      name: 'price',
                      type: 'number',
                    },
                    {
                      title: 'Size',
                      name: 'size',
                      type: 'string',
                    },
                    
                    {
                      title: 'Image',
                      name: 'cover',
                      type: 'image',
                    },
                    // Add more properties as needed
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
