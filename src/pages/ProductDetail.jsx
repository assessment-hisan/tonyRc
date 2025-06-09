// src/pages/ProductDetail.jsx
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const product = products.find((item) => item.id === id);

  // Get related products (excluding current product)
  const relatedProducts = products.filter(p => p.id !== id).slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Product Not Found</h2>
          <p className="text-gray-600">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-screen">
          {/* Fixed Image Section */}
          <div className="flex flex-col h-screen py-8">
            {/* Image Gallery */}
            <div className="flex-1 flex flex-col">
              <div className="relative group flex-1 mb-6">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm rounded-full p-2">
                  <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                </div>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="flex gap-4 overflow-x-auto pb-4 mb-6">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                      selectedImage === i 
                        ? 'border-blue-500 shadow-lg scale-105' 
                        : 'border-gray-200 hover:border-gray-300 hover:scale-102'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`View ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Fixed Quantity & Action Buttons */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 space-y-4">
              {/* Quantity Selector */}
              <div className="flex items-center justify-between">
                <label className="text-gray-700 font-medium">Quantity:</label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    −
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300 min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Add to Cart
                </button>
                <button className="px-4 py-3 border-2 border-gray-300 rounded-xl hover:border-gray-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <button className="px-4 py-3 border-2 border-gray-300 rounded-xl hover:border-gray-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Scrollable Details Section */}
          <div className="h-screen overflow-y-auto py-8 pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-8">
              <span>Home</span> <span className="mx-2">›</span>
              <span>Products</span> <span className="mx-2">›</span>
              <span className="text-gray-800 font-medium">{product.name}</span>
            </nav>

            <div className="space-y-8">
              {/* Product Header */}
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {product.name}
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Price & Rating */}
              <div className="flex items-center gap-6">
                <div className="text-4xl font-bold text-blue-600">
                  ${product.price.toFixed(2)}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(5)}
                  </div>
                  <span className="text-gray-500">(128 reviews)</span>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-200">
                <div className="text-center">
                  <div className="text-2xl mb-2">🚚</div>
                  <div className="text-sm font-medium text-gray-800">Free Shipping</div>
                  <div className="text-xs text-gray-500">Orders over $50</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">↩️</div>
                  <div className="text-sm font-medium text-gray-800">Easy Returns</div>
                  <div className="text-xs text-gray-500">30-day policy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🛡️</div>
                  <div className="text-sm font-medium text-gray-800">Warranty</div>
                  <div className="text-xs text-gray-500">2-year coverage</div>
                </div>
              </div>

              {/* Specifications */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h2>
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  {Object.entries(product.specs).map(([key, value], index) => (
                    <div 
                      key={key} 
                      className={`flex justify-between items-center p-6 ${
                        index !== Object.entries(product.specs).length - 1 ? 'border-b border-gray-100' : ''
                      } hover:bg-gray-50 transition-colors`}
                    >
                      <span className="font-medium text-gray-700 capitalize">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </span>
                      <span className="text-gray-900 font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Products */}
              <div className="pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedProducts.map((relatedProduct) => (
                    <div key={relatedProduct.id} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={relatedProduct.images[0]}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-1 truncate">{relatedProduct.name}</h3>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{relatedProduct.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-blue-600">
                            ${relatedProduct.price.toFixed(2)}
                          </span>
                          <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors">
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extra spacing at bottom */}
              <div className="h-8"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;