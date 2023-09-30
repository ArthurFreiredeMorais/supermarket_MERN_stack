import express from 'express';
const router = express.Router();

import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
} from '../controllers/productController.js';
import { protect, employee } from '../middleware/authMiddleware.js';

router.route('/').get(getProducts).post(protect, employee, createProduct);
router.route('/:id').get(getProductById);
router.route('/:id').get(getProductById).put(protect, employee, updateProduct);

export default router;

