// client.js
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Client for the "production" dataset
export const client = createClient({
  projectId: 'vqzsuhvy',
  dataset: 'production',
  apiVersion: '2023-08-15',
  useCdn: false,
  token: 'skMCPc8outLMRtnPpWSi8cJfR51SvaJoSwnxbwv3vbsMF0spbvKdxVyDDAZrbmpf2uVJg6H2sU6lFx4X2gsxYOhC2EMBp5HQn4pvhcjGxC811e9Vgp8BRQBeGKRkHYxYhiOzrjC6GcERtK1trm1XQvkJAcKCeTGcCQeEKG5hcmaCTNP0Btnv',
});

// Client for the "users" dataset


const builder = imageUrlBuilder(client);


export const urlFor = (source) => builder.image(source);
