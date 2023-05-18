import express from 'express'
const router = express.Router()
import {
  getProducts,
  getTopProducts,
  getNewProducts,
  getNewArrivals,
  getProductsCategory,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getCatProducts,
  getBrandProducts,
  getProductsBrand,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id/reviews').post(protect, createProductReview)
router.get('/top', getTopProducts)
router.get('/new', getNewProducts)
router.get('/cat/:categoryName', getCatProducts)
router.get('/brand/:brandName', getBrandProducts)
router.get('/new-arrivals', getNewArrivals)
router.get('/categories/:categoryName', getProductsCategory)
router.get('/brands/:brandName', getProductsBrand)
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)

export default router
