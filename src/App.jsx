import React, { useState, useEffect } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('products');
  const [selectedCategory, setSelectedCategory] = useState('Makeup');
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const categories = ['Makeup', 'Skin', 'Hair', 'Bath & Body'];

  const products = [
    { id: 1, name: "Velvet Lipstick", description: "Rich pigment for bold lips.", image: "https://placehold.co/400x400?text=Velvet+Lipstick", category: "Makeup" },
    { id: 2, name: "Radiant Blush", description: "Soft flush of natural color.", image: "https://placehold.co/400x400?text=Radiant+Blush", category: "Makeup" },
    { id: 3, name: "Eyeliner Precision", description: "Define your eyes with style.", image: "https://placehold.co/400x400?text=Eyeliner", category: "Makeup" },
    { id: 4, name: "Glow Highlighter", description: "Add shimmer to your cheeks.", image: "https://placehold.co/400x400?text=Highlighter", category: "Makeup" },

    { id: 5, name: "Hydrating Face Serum", description: "Nourish your skin deeply.", image: "https://placehold.co/400x400?text=Face+Serum", category: "Skin" },
    { id: 6, name: "Rose Facial Mist", description: "Refresh and tone your skin.", image: "https://placehold.co/400x400?text=Facial+Mist", category: "Skin" },
    { id: 7, name: "Anti-Aging Cream", description: "Reduce fine lines naturally.", image: "https://placehold.co/400x400?text=Anti-Aging+Cream", category: "Skin" },
    { id: 8, name: "Pore Refining Toner", description: "Clarify and refresh skin.", image: "https://placehold.co/400x400?text=Toner", category: "Skin" },

    { id: 9, name: "Silk Shampoo", description: "Smooth and nourish strands.", image: "https://placehold.co/400x400?text=Shampoo", category: "Hair" },
    { id: 10, name: "Volumizing Conditioner", description: "Add body and shine.", image: "https://placehold.co/400x400?text=Conditioner", category: "Hair" },
    { id: 11, name: "Heat Protectant Spray", description: "Protect hair from styling tools.", image: "https://placehold.co/400x400?text=Spray", category: "Hair" },
    { id: 12, name: "Hair Oil Elixir", description: "Revive dry ends.", image: "https://placehold.co/400x400?text=Hair+Oil", category: "Hair" },

    { id: 13, name: "Foaming Body Wash", description: "Cleanse with delicate scent.", image: "https://placehold.co/400x400?text=Body+Wash", category: "Bath & Body" },
    { id: 14, name: "Shea Butter Lotion", description: "Moisturize dry skin.", image: "https://placehold.co/400x400?text=Lotion", category: "Bath & Body" },
    { id: 15, name: "Exfoliating Scrub", description: "Reveal smooth skin.", image: "https://placehold.co/400x400?text=Scrub", category: "Bath & Body" },
    { id: 16, name: "Bath Salts", description: "Relax and unwind.", image: "https://placehold.co/400x400?text=Bath+Salts", category: "Bath & Body" },

    { id: 17, name: "Natural Nail Polish", description: "Eco-friendly color options.", image: "https://placehold.co/400x400?text=Nail+Polish", category: "Makeup" },
    { id: 18, name: "CC Cream", description: "Coverage and care in one.", image: "https://placehold.co/400x400?text=CC+Cream", category: "Skin" },
    { id: 19, name: "Dry Shampoo", description: "Freshen up between washes.", image: "https://placehold.co/400x400?text=Dry+Shampoo", category: "Hair" },
    { id: 20, name: "Body Glow Oil", description: "Illuminate your silhouette.", image: "https://placehold.co/400x400?text=Glow+Oil", category: "Bath & Body" }
  ];

  return (
    <div className="w-screen min-h-screen bg-pink-50 font-sans flex flex-col">
      {/* Top Header */}
      <header
        className={`transition-all duration-300 ease-in-out ${
          isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        } bg-pink-200 shadow-md sticky top-0 z-20 rounded-b-xl`}
      >
        <div className="container max-w-screen-xl mx-auto px-6 py-6 flex flex-col items-center relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 tracking-wide font-serif">PT & The Beauty</h1>
          <p className="text-pink-500 mt-2 italic text-base md:text-lg">Slay the day, the glam way</p>
        </div>
      </header>

      {/* Category Navigation Bar */}
      <nav className="sticky top-0 z-10 bg-pink-100 shadow-md">
        <div className="container max-w-screen-xl mx-auto px-6 py-4 flex justify-center space-x-8 md:space-x-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-lg md:text-xl font-medium transition-all duration-300 hover:text-pink-500 ${
                selectedCategory === category ? 'text-pink-600 font-semibold' : 'text-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="container max-w-screen-xl mx-auto px-6 py-12 flex-grow">
        {activeTab === 'products' && (
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-12 text-center">
              {selectedCategory} Collection
            </h2>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
              style={{
                // Example ratio tweak: scale cards slightly bigger on desktop
                transform: window.innerWidth >= 768 ? 'scale(1)' : 'scale(0.95)',
                transformOrigin: 'top center',
                transition: 'transform 0.3s ease-in-out',
              }}
            >
              {products
                .filter((product) => product.category === selectedCategory)
                .map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-56 md:h-48 object-cover"
                    />
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <h3 className="text-lg md:text-xl font-semibold text-pink-700">{product.name}</h3>
                      <p className="text-gray-600 text-sm md:text-base mt-2">{product.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        )}

        {activeTab === 'contact' && (
          <section className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-4xl font-bold text-pink-600 mb-8 text-center">Contact Us</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p>PTNThebeauty@gmail.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p>09 50241915</p>
              </div>
              <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p>North Oakala, Thunandar Street, Yangon</p>
              </div>
              <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.03 16.97a10 10 0 11-3.536-3.536m0 5.656a10 10 0 103.536 3.536" />
                </svg>
                <a href="https://facebook.com/PTTheBeauty" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">
                  PT&TheBeauty
                </a>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Tab Navigation */}
      <div className="container max-w-screen-xl mx-auto px-6 flex justify-center space-x-10 mb-10">
        <button
          onClick={() => setActiveTab('products')}
          className={`text-lg md:text-xl font-medium transition-all duration-300 hover:text-pink-500 ${activeTab === 'products' ? 'text-pink-600 font-semibold' : 'text-gray-700'}`}
        >
          Products
        </button>
        <button
          onClick={() => setActiveTab('contact')}
          className={`text-lg md:text-xl font-medium transition-all duration-300 hover:text-pink-500 ${activeTab === 'contact' ? 'text-pink-600 font-semibold' : 'text-gray-700'}`}
        >
          Contact
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-pink-200 py-6 mt-auto rounded-t-xl shadow-inner">
        <div className="container max-w-screen-xl mx-auto px-6 flex justify-center space-x-8">
          <a href="tel:+0950241915" className="hover:text-pink-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
          <a href="https://facebook.com/PTTheBeauty" target="_blank" rel="noopener noreferrer" className="hover:text-pink-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
