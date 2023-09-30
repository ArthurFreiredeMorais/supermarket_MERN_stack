import express from 'express';
const router = express.Router();

import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
} from '../controllers/productController.js';
import { protect, employee } from '../middleware/authMiddleware.js';

router.route('/').get(getProducts).post(protect, employee, createProduct);
router.route('/:id/reviews').post(protect, createProductReview);
router
  .route('/:id')
  .get(getProductById)
  .put(protect, employee, updateProduct)
  .delete(protect, employee, deleteProduct);

export default router;

