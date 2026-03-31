import { Product, Testimonial } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Batik Tulis Parang Kencana',
    category: 'Premium Tulis',
    price: 'Rp 2.500.000',
    image: 'https://images.unsplash.com/photo-1590736962104-069967667943?q=80&w=800&auto=format&fit=crop',
    description: 'Motif Parang yang melambangkan jalinan yang tidak pernah putus, dibuat dengan teknik tulis tangan tradisional.'
  },
  {
    id: '2',
    name: 'Batik Cap Megamendung Blue',
    category: 'Cap Modern',
    price: 'Rp 450.000',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800&auto=format&fit=crop',
    description: 'Motif awan Megamendung yang ikonik dengan sentuhan warna biru laut yang menenangkan.'
  },
  {
    id: '3',
    name: 'Kemeja Batik Kawung Exclusive',
    category: 'Menswear',
    price: 'Rp 750.000',
    image: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=800&auto=format&fit=crop',
    description: 'Kemeja pria dengan motif Kawung yang elegan, cocok untuk acara formal maupun semi-formal.'
  },
  {
    id: '4',
    name: 'Dress Batik Buketan Pekalongan',
    category: 'Womenswear',
    price: 'Rp 850.000',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop',
    description: 'Menampilkan keindahan bunga khas Pekalongan dalam balutan dress modern yang anggun.'
  },
  {
    id: '5',
    name: 'Batik Sutra Sekar Jagad',
    category: 'Silk Collection',
    price: 'Rp 3.200.000',
    image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=800&auto=format&fit=crop',
    description: 'Kombinasi kemewahan sutra dengan kerumitan motif Sekar Jagad yang mempesona.'
  },
  {
    id: '6',
    name: 'Syal Batik Indigo Natural',
    category: 'Accessories',
    price: 'Rp 250.000',
    image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=800&auto=format&fit=crop',
    description: 'Syal dengan pewarna alami indigo, ramah lingkungan dan memiliki nilai seni tinggi.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Siti Aminah',
    role: 'Kolektor Batik',
    content: 'Kualitas batik dari Doa Ibu benar-benar luar biasa. Detail tulisnya sangat halus dan warnanya tahan lama.',
    avatar: 'https://i.pravatar.cc/150?u=siti'
  },
  {
    id: '2',
    name: 'Budi Santoso',
    role: 'Pengusaha',
    content: 'Kemeja batiknya sangat nyaman dipakai dan motifnya selalu mendapat pujian di acara kantor.',
    avatar: 'https://i.pravatar.cc/150?u=budi'
  }
];
