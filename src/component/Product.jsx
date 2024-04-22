import React from 'react'

const Product = () => {
    const products = [
        { id: 1, name: 'T-Shirt', price: 25.99, image: 'product1.jpg' },
        { id: 2, name: 'Sweatshirt', price: 49.99, image: 'product2.jpg' },
        // ... more products
      ];
  return (
  <>
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="shadow-md rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">{product.name}</h3>
              <span className="text-gray-700 line-through">${product.price + 10}</span>
              <span className="text-green-500 font-bold ml-2">${product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
  )
}

export default Product