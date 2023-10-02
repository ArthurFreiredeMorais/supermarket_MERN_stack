import express from 'express';
const router = express.Router();

import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js';
import { protect, employee } from '../middleware/authMiddleware.js';
import checkObjectId from '../middleware/checkObjectId.js';

router.route('/').get(getProducts).post(protect, employee, createProduct);
router.route('/:id/reviews').post(protect, checkObjectId, createProductReview);
router.get('/top', getTopProducts);
router
  .route('/:id')
  .get(checkObjectId, getProductById)
  .put(protect, employee, checkObjectId, updateProduct)
  .delete(protect, employee, checkObjectId, deleteProduct);

export default router;

