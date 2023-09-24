import { PRODUCTS_URL } from '../constants';
import { apiSlice } from './apiSlice';

// Im working with slices because it becomes easier just importing constants to fetch the http
export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
     // Define a query endpoint to fetch products from PRODUCTS_URL
    getProducts: builder.query({
      query: () => ({
        url: PRODUCTS_URL,
      }),
      keepUnusedDataFor: 5, // Keep the data in the cache for 5 secs
    }),
    // Define a query endpoint to fetch product details based on productId
    getProductDetails: builder.query({
      query: (productId) => ({
        url: `${PRODUCTS_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5, // Keep the data in the cache for 5 secs
    }),
  }),
});

// Export query hooks for fetching products and product details
export const { useGetProductsQuery, useGetProductDetailsQuery } = productsApiSlice;