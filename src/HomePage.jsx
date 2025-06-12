// Muha Vision – Optimized Custom Homepage (Fast & Smooth)
import React, { lazy, Suspense } from 'react';

const LazyImage = ({ src, alt }) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    className="rounded-lg w-full mb-4"
  />
);

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center h-screen px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Welcome to <span className="text-cyan-400">Muha Vision</span>
        </h1>
        <p className="text-lg md:text-xl max-w-xl mb-8 text-gray-300">
          Futuristic AI-powered streetwear. Built for creators, rebels, and visionaries.
        </p>
        <button
          className="px-8 py-3 bg-cyan-400 text-black rounded-xl font-semibold hover:bg-cyan-300 transition"
          onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
        >
          Explore Collection
        </button>
      </section>

      {/* Product Grid Section */}
      <section id="products" className="px-6 py-20 bg-black">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Featured Drops
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <a
              key={item}
              href={`https://muha.shop/products/ai-drop-${item}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-zinc-900 p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer">
                <LazyImage
                  src={`https://via.placeholder.com/400x400?text=Product+${item}`}
                  alt={`Product ${item}`}
                />
                <h3 className="text-xl font-semibold mb-2">AI Drop #{item}</h3>
                <p className="text-gray-400 text-sm">
                  Premium AI-crafted design. Limited edition.
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="px-8 py-24 bg-zinc-950 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          More Than a Brand
        </h2>
        <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
          Muha Vision is not just clothing. It's a coded movement for those who refuse the ordinary.
          We design through the lens of AI and rebel culture — for dreamers, makers, and the misfits
          building the future. Every piece we drop is intentional, rare, and infused with edge.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 py-12 px-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Muha Vision. All rights reserved.</p>
        <p className="mt-2 text-sm">Designed by Muha. Powered by AI.</p>
      </footer>
    </div>
  );
}
