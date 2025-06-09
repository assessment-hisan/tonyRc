// src/pages/ProductPage.jsx
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductDetail from './ProductDetail';

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <p className="text-center text-gray-500 mt-10">Product not found.</p>;

  return <ProductDetail product={product} />;
};

export default ProductPage;
