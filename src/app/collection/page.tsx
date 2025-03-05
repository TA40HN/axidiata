"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Embedded Collection Filter component
export type FilterOption = {
  id: string
  label: string
  value: string
}

function CollectionFilter({
  options,
  selectedFilter,
  onFilterChange,
}: {
  options: FilterOption[]
  selectedFilter: string
  onFilterChange: (value: string) => void
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onFilterChange(option.value)}
          className={`text-sm tracking-wide transition-colors
            ${selectedFilter === option.value 
              ? 'text-black' 
              : 'text-neutral-400 hover:text-neutral-600'
            }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

// Embedded Collection Card component
function CollectionCard({
  title,
  description,
  price,
  image,
  category,
  onViewDetails
}: {
  title: string
  description: string
  price: string
  image: string
  category: string
  onViewDetails: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group max-w-[280px] mx-auto"
    >
      <div className="relative w-[280px] h-[280px] rounded-lg overflow-hidden bg-neutral-50">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="280px"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <button 
          onClick={onViewDetails}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/90 backdrop-blur-sm 
            text-xs text-black rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 
            hover:bg-white"
        >
          View Details
        </button>
      </div>
      
      <div className="mt-3 text-center px-2">
        <p className="text-[11px] tracking-wider text-neutral-500 uppercase">
          {category}
        </p>
        <h3 className="text-sm font-medium mt-1 mb-0.5">{title}</h3>
        <p className="text-xs text-neutral-800">{price}</p>
      </div>
    </motion.div>
  )
}

// Embedded Product Details component
function ProductDetails({ 
  isOpen, 
  onClose, 
  product 
}: {
  isOpen: boolean
  onClose: () => void
  product: {
    title: string
    description: string
    price: string
    image: string
    category: string
  } | null
}) {
  if (!product) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/30 z-40"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-full max-w-[500px] bg-white shadow-lg z-50"
          >
            <div className="relative h-full overflow-auto">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 z-10 p-2 hover:bg-neutral-100 rounded-full"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="p-6">
                {/* Product Image */}
                <div className="relative w-[280px] h-[280px] mx-auto rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="mt-6 space-y-4">
                  <div className="text-sm text-neutral-500 uppercase tracking-wider">
                    {product.category}
                  </div>
                  
                  <h2 className="text-2xl font-medium">{product.title}</h2>
                  
                  <p className="text-neutral-600">{product.description}</p>
                  
                  <div className="text-xl font-medium">{product.price}</div>

                  <div className="pt-4 space-y-3">
                    <button className="w-full py-3 bg-black text-white hover:bg-neutral-800 transition-colors">
                      Add to Cart
                    </button>
                    
                    <button className="w-full py-3 border border-black hover:bg-neutral-50 transition-colors">
                      Add to Wishlist
                    </button>
                  </div>

                  {/* Additional Details */}
                  <div className="pt-8 space-y-4">
                    <div>
                      <h3 className="font-medium mb-2">Product Details</h3>
                      <ul className="space-y-2 text-sm text-neutral-600">
                        <li>Material: Premium 18K Gold</li>
                        <li>Weight: 3.5g</li>
                        <li>Size: Adjustable</li>
                        <li>Origin: Handcrafted in Turkey</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Shipping & Returns</h3>
                      <p className="text-sm text-neutral-600">
                        Free shipping worldwide. Easy returns within 30 days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// Collection data
const filterOptions: FilterOption[] = [
  { id: "1", label: "All", value: "all" },
  { id: "2", label: "Gold", value: "gold" },
  { id: "3", label: "Divinity", value: "divinity" },
  { id: "4", label: "Diamond", value: "diamond" },
  { id: "5", label: "Pearl", value: "pearl" },
];

const collections = [
  {
    id: "1",
    title: "Golden Lotus Ring",
    description:
      "An exquisite 18K gold ring featuring a delicate lotus design, meticulously handcrafted to capture the essence of natural beauty. Each petal is carefully shaped to reflect light in a way that brings the flower to life.",
    price: "$1,299",
    image: "/images/collections/ring-detail.jpg",
    category: "gold",
  },
  {
    id: "2",
    title: "Divine Grace Necklace",
    description:
      "A stunning necklace that embodies divine elegance. The intricate patterns are inspired by celestial motifs, creating a piece that is both timeless and contemporary.",
    price: "$2,499",
    image: "/images/collections/ring-detail.jpg",
    category: "divinity",
  },
  {
    id: "3",
    title: "Celestial Diamond Earrings",
    description:
      "These remarkable earrings feature brilliantly cut diamonds set in white gold, designed to capture and reflect light like stars in the night sky.",
    price: "$3,799",
    image: "/images/collections/ring-detail.jpg",
    category: "diamond",
  },
  {
    id: "4",
    title: "Pearl Cascade Bracelet",
    description:
      "A graceful arrangement of South Sea pearls in a cascading design. Each pearl is carefully selected for its lustre and size, creating a piece that embodies timeless elegance.",
    price: "$1,899",
    image: "/images/collections/ring-detail.jpg",
    category: "pearl",
  },
];

export default function CollectionPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof collections)[0] | null
  >(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const filteredCollections = collections.filter((item) =>
    selectedFilter === "all" ? true : item.category === selectedFilter
  );

  const handleViewDetails = (product: (typeof collections)[0]) => {
    setSelectedProduct(product);
    setIsDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-2xl font-light mb-6">Our Collection</h1>
          <CollectionFilter
            options={filterOptions}
            selectedFilter={selectedFilter}
            onFilterChange={setSelectedFilter}
          />
        </header>

        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-10"
        >
          {filteredCollections.map((item) => (
            <CollectionCard
              key={item.id}
              {...item}
              onViewDetails={() => handleViewDetails(item)}
            />
          ))}
        </motion.div>

        {filteredCollections.length === 0 && (
          <div className="text-center py-16">
            <p className="text-neutral-500 text-sm">
              No items found in this collection
            </p>
          </div>
        )}
      </div>

      <ProductDetails
        isOpen={isDetailsOpen}
        onClose={handleCloseDetails}
        product={selectedProduct}
      />
    </div>
  );
}