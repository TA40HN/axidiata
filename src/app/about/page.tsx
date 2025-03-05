"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Embed components directly in the page to avoid import issues
// BrandStory component embedded directly
function BrandStory() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-light mb-6">Our Story</h2>
            <div className="space-y-4 text-neutral-600">
              <p>
                Founded in 2020, Axidiata Jewelry emerged from a passion for creating timeless pieces 
                that celebrate both tradition and innovation. Our journey began in a small Istanbul 
                workshop, where centuries-old craftsmanship met contemporary design.
              </p>
              <p>
                Each Axidiata piece tells a story of dedication to excellence, combining precious 
                metals and stones with innovative design techniques. We believe jewelry should be 
                more than accessories – they should be personal statements that last generations.
              </p>
              <p>
                Our commitment to sustainability and ethical sourcing guides every decision we make. 
                We work closely with responsible suppliers and craftsmen who share our values of 
                quality, integrity, and environmental consciousness.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] bg-neutral-100"
          >
            <Image
              src="/images/about/brand-story.jpg"
              alt="Axidiata Jewelry Workshop"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// DesignerInfo component embedded directly
function DesignerInfo() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] bg-neutral-100"
          >
            <Image
              src="/images/about/designer.jpg"
              alt="Axidiata Jewelry Designer"
              fill
              className="object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-light mb-6">The Designer</h2>
            <div className="space-y-4 text-neutral-600">
              <p>
                Meet Alara Yilmaz, the visionary behind Axidiata Jewelry. With a background in 
                fine arts and a lifelong fascination with metalwork, Alara brings a unique 
                perspective to every creation.
              </p>
              <p>
                Trained at the prestigious Istanbul Academy of Fine Arts and with an apprenticeship 
                under master jewelers in Italy, Alara combines traditional techniques with contemporary 
                aesthetics to create pieces that are both timeless and modern.
              </p>
              <p>
                "I believe jewelry should tell a story," says Alara. "Each piece I design carries 
                meaning and intention, creating a connection between the wearer and the art they 
                choose to adorn themselves with."
              </p>
              <p>
                When not in her studio, Alara draws inspiration from nature, architecture, and cultural 
                heritage, constantly exploring new ways to express beauty through her craft.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Values component embedded directly
function Values() {
  const values = [
    {
      title: "Artistry",
      description: "We believe in the power of handcrafted excellence, where each piece receives meticulous attention to detail."
    },
    {
      title: "Sustainability",
      description: "Our commitment to responsible sourcing and ethical production practices is unwavering."
    },
    {
      title: "Heritage",
      description: "We honor traditional craftsmanship while embracing innovation and contemporary design."
    },
    {
      title: "Connection",
      description: "Our jewelry creates meaningful connections between people, stories, and moments."
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-light mb-6">Our Values</h2>
          <p className="max-w-2xl mx-auto text-neutral-600">
            At Axidiata, our values guide every decision we make and shape the essence of our brand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 border border-neutral-200 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-medium mb-3">{value.title}</h3>
              <p className="text-neutral-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

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