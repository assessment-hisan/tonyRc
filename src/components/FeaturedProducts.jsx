// src/components/FeaturedProducts.jsx
import ProductCard from './ProductCard';
import { products } from '../data/products';

const FeaturedProducts = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.slice(0, 8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
