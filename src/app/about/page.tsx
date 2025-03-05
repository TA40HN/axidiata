"use client";

import { BrandStory } from "../../../components/about/BrandStory";
import { DesignerInfo } from "../../../components/about/DesignerInfo";
import { Values } from "../../../components/about/Values";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[400px] bg-neutral-900">
        <div className="absolute inset-0 bg-[url('/images/about.jpg')] bg-cover bg-center opacity-50" />
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-light">Our Story</h1>
            <p className="max-w-xl mx-auto px-4">
              Discover the artistry and passion behind Axidiata Jewelry
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <BrandStory />

      {/* Values */}
      <Values />

      {/* Designer Info */}
      <DesignerInfo />
    </main>
  );
}
