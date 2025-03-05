"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CollectionFilter,
  FilterOption,
} from "../../../components/collection/CollectionFilter";
import { CollectionCard } from "../../../components/collection/CollectionCard";
import { ProductDetails } from "../../../components/collection/ProductDetails";

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
