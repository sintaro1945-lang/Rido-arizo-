/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  ChevronRight,
  Star,
  Search
} from 'lucide-react';
import { PRODUCTS, TESTIMONIALS } from './constants';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = ['All', 'Premium Tulis', 'Cap Modern', 'Menswear', 'Womenswear', 'Silk Collection'];
  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen relative">
      {/* Background Pattern Overlay */}
      <div className="fixed inset-0 batik-pattern-bg pointer-events-none z-0" />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-batik-cream/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-batik-gold rounded-full flex items-center justify-center text-white font-serif text-xl font-bold">D</div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold tracking-tight leading-none">DOA IBU</span>
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-60">Batik Pekalongan</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Collection', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm uppercase tracking-widest hover:text-batik-gold transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="p-2 hover:bg-batik-gold/10 rounded-full transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 hover:bg-batik-gold/10 rounded-full transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute top-0 right-0 w-4 h-4 bg-batik-gold text-white text-[10px] flex items-center justify-center rounded-full">0</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-batik-cream flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {['Home', 'Collection', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-2xl font-serif"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1590736962104-069967667943?q=80&w=1920&auto=format&fit=crop" 
            alt="Batik Background" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-batik-cream/50 via-transparent to-batik-cream" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1 bg-batik-gold/10 text-batik-gold text-xs uppercase tracking-[0.3em] font-semibold mb-6 rounded-full">
              Warisan Budaya Pekalongan
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[0.9] mb-8 text-batik-dark">
              Keanggunan <br />
              <span className="italic text-batik-gold">Batik Doa Ibu</span>
            </h1>
            <p className="text-lg text-batik-dark/70 mb-10 leading-relaxed font-light max-w-lg">
              Menghadirkan mahakarya batik tulis dan cap terbaik dari jantung kota Pekalongan. Setiap helai kain bercerita tentang doa, dedikasi, dan tradisi.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-batik-dark text-white rounded-full flex items-center gap-2 hover:bg-batik-gold transition-all group">
                Lihat Koleksi <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border border-batik-dark/20 rounded-full hover:bg-batik-dark/5 transition-all">
                Tentang Kami
              </button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
        >
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-batik-dark" />
        </motion.div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-batik-dark text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Koleksi Pilihan</h2>
              <p className="text-white/60 font-light">Eksplorasi ragam motif klasik dan modern yang dirancang khusus untuk menonjolkan karakter Anda.</p>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar w-full md:w-auto">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest whitespace-nowrap transition-all ${selectedCategory === cat ? 'bg-batik-gold text-white' : 'border border-white/20 hover:border-white/50'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, idx) => (
                <motion.div 
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                    <button className="absolute bottom-6 left-6 right-6 py-3 bg-white text-batik-dark rounded-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 font-medium flex items-center justify-center gap-2">
                      <ShoppingBag size={18} /> Tambah ke Keranjang
                    </button>
                    <div className="absolute top-6 right-6">
                      <span className="px-3 py-1 bg-batik-gold/90 text-white text-[10px] uppercase tracking-widest rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-serif mb-1 group-hover:text-batik-gold transition-colors">{product.name}</h3>
                  <p className="text-batik-gold font-medium">{product.price}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=1000&auto=format&fit=crop" 
                  alt="Batik Process" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-batik-gold rounded-2xl p-8 text-white hidden md:block">
                <h4 className="text-3xl font-serif mb-4">30+ Tahun</h4>
                <p className="text-sm opacity-80 leading-relaxed">Berdedikasi melestarikan seni batik Pekalongan dengan kualitas yang tak tertandingi.</p>
              </div>
            </div>
            <div>
              <span className="text-batik-gold text-xs uppercase tracking-[0.3em] font-semibold mb-4 block">Filosofi Kami</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">Doa Ibu dalam Setiap <span className="italic">Goresan Canting</span></h2>
              <p className="text-batik-dark/70 mb-6 leading-relaxed">
                PT. LUTFI BATIK DOA IBU lahir dari kecintaan mendalam terhadap warisan budaya Indonesia. Nama "Doa Ibu" adalah pengingat bahwa setiap kesuksesan dan keindahan berawal dari restu dan doa yang tulus.
              </p>
              <p className="text-batik-dark/70 mb-10 leading-relaxed">
                Kami bekerja sama dengan para pengrajin lokal di Pekalongan, memastikan setiap motif yang dihasilkan memiliki jiwa dan makna mendalam, bukan sekadar kain bermotif.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h5 className="text-2xl font-serif mb-2">Asli Pekalongan</h5>
                  <p className="text-xs text-batik-dark/60 uppercase tracking-widest">Produksi Lokal</p>
                </div>
                <div>
                  <h5 className="text-2xl font-serif mb-2">Kualitas Ekspor</h5>
                  <p className="text-xs text-batik-dark/60 uppercase tracking-widest">Standar Global</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-batik-cream relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4">Apa Kata Mereka</h2>
            <div className="w-24 h-[1px] bg-batik-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="glass-card p-8 rounded-2xl">
                <div className="flex gap-1 text-batik-gold mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-lg italic mb-8 text-batik-dark/80 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h5 className="font-bold">{t.name}</h5>
                    <p className="text-xs opacity-60 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-batik-dark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-serif mb-8">Hubungi Kami</h2>
              <p className="text-white/60 mb-12 max-w-md">Punya pertanyaan atau ingin memesan batik custom? Tim kami siap membantu Anda.</p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-batik-gold">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Alamat Galeri</h5>
                    <p className="text-sm text-white/60">Jl. Batik No. 123, Pekalongan, Jawa Tengah, Indonesia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-batik-gold">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Telepon / WhatsApp</h5>
                    <p className="text-sm text-white/60">+62 812 3456 7890</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-batik-gold">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Email</h5>
                    <p className="text-sm text-white/60">info@batikdoaibu.com</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-12">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-batik-gold hover:border-batik-gold transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-batik-gold hover:border-batik-gold transition-all">
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl bg-white/5 border-white/10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest opacity-60">Nama Lengkap</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-batik-gold transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest opacity-60">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-batik-gold transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest opacity-60">Subjek</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-batik-gold transition-colors" placeholder="Pemesanan Custom" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest opacity-60">Pesan</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-batik-gold transition-colors" placeholder="Tuliskan pesan Anda di sini..."></textarea>
                </div>
                <button className="w-full py-4 bg-batik-gold text-white rounded-lg font-bold hover:bg-batik-gold/80 transition-all">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-batik-dark border-t border-white/5 text-center text-white/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 bg-batik-gold/20 rounded-full flex items-center justify-center text-batik-gold font-serif text-sm font-bold">D</div>
            <span className="text-lg font-serif font-bold tracking-tight text-white/80">DOA IBU</span>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} PT. LUTFI BATIK DOA IBU. All rights reserved.</p>
          <p className="text-[10px] mt-2 uppercase tracking-[0.2em]">Crafted with love in Pekalongan</p>
        </div>
      </footer>
    </div>
  );
}
