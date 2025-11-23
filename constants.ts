
import { Service, Stylist, VisualProofItem, Testimonial } from './types';

export const SERVICES: Service[] = [
  // Cut
  {
    id: 'cut-1',
    name: 'Haircut',
    category: 'Cut',
    price: '50-120',
    duration: 60,
    description: 'Customized cut tailored to your style and texture.',
    fullDescription: 'A complete service including consultation, shampoo, and blowdry style. Price varies based on stylist level and hair complexity.',
    imageUrl: '/images/haircut.jpg',
    benefits: ['Personalized Consultation', 'Shampoo & Condition', 'Blowdry Style']
  },

  // Color
  {
    id: 'col-1',
    name: 'Root Touch Up',
    category: 'Color',
    price: '120+',
    duration: 90,
    description: 'Cover grays or refresh your base color.',
    fullDescription: 'Single process color applied to the new growth area. Includes blowdry style.',
    imageUrl: '/images/root touch up.jpg',
    benefits: ['Gray Coverage', 'Seamless Blending', 'Blowdry Included']
  },
  {
    id: 'col-2',
    name: 'All Over Color',
    category: 'Color',
    price: '170+',
    duration: 120,
    description: 'Rich, single-tone color from roots to ends.',
    fullDescription: 'Complete color transformation or refresh. Includes blowdry style.',
    imageUrl: '/images/all over color.jpg',
    benefits: ['Uniform Color', 'Shine Enhancement', 'Blowdry Included']
  },
  {
    id: 'col-3',
    name: 'Accent Highlight',
    category: 'Color',
    price: '150+',
    duration: 90,
    description: 'A touch of brightness where it counts.',
    fullDescription: 'Strategically placed foils to add dimension around the face or part line.',
    imageUrl: '/images/accent highlight.jpg',
    benefits: ['Face Framing', 'Subtle Dimension', 'Quick Refresh']
  },
  {
    id: 'col-4',
    name: 'Full Highlight',
    category: 'Color',
    price: '200+',
    duration: 150,
    description: 'Maximum dimension and brightness.',
    fullDescription: 'Full head of highlights for an all-over lighter look. Includes blowdry style.',
    imageUrl: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=800&auto=format&fit=crop',
    benefits: ['Maximum Brightness', 'Full Dimension', 'Blowdry Included']
  },
  {
    id: 'col-5',
    name: 'Face Framing Highlight',
    category: 'Color',
    price: '75+',
    duration: 60,
    description: 'Brighten your look with ~10 foils.',
    fullDescription: 'Focuses on the hairline to illuminate the face. Perfect for maintenance between larger services.',
    imageUrl: 'images/face framing.jpg',
    benefits: ['Brightens Face', 'Low Maintenance', 'Quick Service']
  },
  {
    id: 'col-6',
    name: 'Bleach Retouch',
    category: 'Color',
    price: '200+',
    duration: 150,
    description: 'Maintain your platinum or vivid base.',
    fullDescription: 'Lightener applied to regrowth only (less than 1 inch). Includes toner and blowdry.',
    imageUrl: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=800&auto=format&fit=crop',
    benefits: ['Seamless Blonde', 'Toner Included', 'Blowdry Included']
  },
  {
    id: 'col-7',
    name: 'All Over Lightening',
    category: 'Color',
    price: '225+',
    duration: 180,
    description: 'Go blonde from roots to ends.',
    fullDescription: 'Global lightening service for a complete transformation. Includes toner and blowdry.',
    imageUrl: '/images/all over lightening.jpg',
    benefits: ['Dramatic Change', 'Toner Included', 'Blowdry Included']
  },
  {
    id: 'col-8',
    name: 'Gloss',
    category: 'Color',
    price: '70+',
    duration: 45,
    description: 'Add shine and tone.',
    fullDescription: 'Demi-permanent color to refresh tone, add shine, or correct brassiness.',
    imageUrl: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop',
    benefits: ['High Shine', 'Tone Correction', 'No Damage']
  },
  {
    id: 'col-9',
    name: 'Custom Color',
    category: 'Color',
    price: '300+',
    duration: 240,
    description: 'Balayage, Fantasy, or Multicolor.',
    fullDescription: 'Bespoke color service for complex techniques like Balayage, Ombre, or Vivids.',
    imageUrl: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop',
    benefits: ['Custom Technique', 'Artistic Application', 'Unique Look']
  },
  {
    id: 'col-10',
    name: 'Vivid Fashion Color',
    category: 'Color',
    price: 'Consultation',
    duration: 180,
    description: 'Bold, vibrant, creative colors.',
    fullDescription: 'Requires consultation. Price and time vary based on complexity.',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    benefits: ['Creative Expression', 'Bold Look', 'Custom Formulation']
  },
  {
    id: 'col-11',
    name: 'Color Correction',
    category: 'Color',
    price: 'Consultation',
    duration: 240,
    description: 'Fixing color mishaps or major changes.',
    fullDescription: 'Requires consultation. We prioritize the integrity of your hair while achieving your goal.',
    imageUrl: 'images/color correction.jpg',
    benefits: ['Expert Analysis', 'Hair Integrity Focus', 'Corrective Plan']
  },

  // Styling
  {
    id: 'sty-1',
    name: 'BlowOut',
    category: 'Styling',
    price: '50+',
    duration: 45,
    description: 'Wash and professional blowout.',
    fullDescription: 'Includes a relaxing shampoo and conditioning, followed by a round brush blowdry.',
    imageUrl: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop',
    benefits: ['Volume', 'Smooth Finish', 'Long Lasting']
  },
  {
    id: 'sty-2',
    name: 'Hot Tool Use',
    category: 'Styling',
    price: '10 (Add-on)',
    duration: 15,
    description: 'Curls or flat iron styling.',
    fullDescription: 'Add-on to any service. Styling with curling iron or flat iron.',
    imageUrl: '/images/hot tool use.jpg',
    benefits: ['Beach Waves', 'Sleek Straight', 'Polished Look']
  },
  {
    id: 'sty-3',
    name: 'Bride',
    category: 'Styling',
    price: 125,
    duration: 90,
    description: 'Formal styling for the bride.',
    fullDescription: 'Expert updo or styling for your special day. Consultation recommended.',
    imageUrl: '/images/bride.jpg',
    benefits: ['Long Lasting', 'Photo Ready', 'Veil Placement']
  },
  {
    id: 'sty-4',
    name: 'UpStyle',
    category: 'Styling',
    price: 75,
    duration: 60,
    description: 'Formal styling for events.',
    fullDescription: 'Elegant updo or formal style. Shampoo not included, please arrive with clean, dry hair.',
    imageUrl: '/images/upstyle.jpg',
    benefits: ['Event Ready', 'Secure Hold', 'Elegant']
  },

  // Treatment
  {
    id: 'trt-1',
    name: 'Deep Conditioning',
    category: 'Treatment',
    price: '20 (Add-on)',
    duration: 15,
    description: 'Intense moisture boost.',
    fullDescription: 'Add-on treatment to restore moisture and softness to dry hair.',
    imageUrl: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop',
    benefits: ['Hydration', 'Softness', 'Detangling']
  },
  {
    id: 'trt-2',
    name: 'ABC Acidic Bonding',
    category: 'Treatment',
    price: 40,
    duration: 20,
    description: 'Repair damaged bonds.',
    fullDescription: 'Redken Acidic Bonding Concentrate treatment to strengthen and repair damaged hair.',
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop',
    benefits: ['Strengthens', 'Repairs', 'pH Balanced']
  },

  // Smoothing
  {
    id: 'sm-1',
    name: 'Express Blowout',
    category: 'Smoothing',
    price: 150,
    duration: 90,
    description: 'Frizz reduction for up to 6 weeks.',
    fullDescription: 'Keratin Complex Express Blowout. Reduces frizz and cuts styling time.',
    imageUrl: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop',
    benefits: ['Frizz Control', 'Faster Styling', 'Smoother Hair']
  },
  {
    id: 'sm-2',
    name: 'KC Max',
    category: 'Smoothing',
    price: 300,
    duration: 180,
    description: 'Maximum smoothing and straightening.',
    fullDescription: 'Keratin Complex Max. Our strongest smoothing treatment for straighter, smoother results.',
    imageUrl: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?q=80&w=800&auto=format&fit=crop',
    benefits: ['Maximum Smoothness', 'Straightening', 'Long Lasting']
  },
  {
    id: 'sm-3',
    name: 'NKST',
    category: 'Smoothing',
    price: 350,
    duration: 180,
    description: 'Natural Keratin Smoothing Treatment.',
    fullDescription: 'The signature Keratin Complex smoothing treatment. Eliminates frizz and increases manageability.',
    imageUrl: 'images/NKST.jpg',
    benefits: ['Frizz Elimination', 'Heals Damage', 'Blocks Humidity']
  }
];

export const STYLISTS: Stylist[] = [
  {
    id: 's1',
    name: 'Ransome Brown',
    role: 'Owner/Master Stylist',
    // Blonde Image
    avatarUrl: 'images/Ransome-Brown.jpg',
    bio: 'Ransome is the owner of Wip downtown and still works behind the chair taking select new clients. Her priority in customer service is to make the client the most comfortable possible. Starting with a signature shampoo and scalp massage and ending with a styled to perfection result without hair being blown right in the face. She takes time in the consultation to identify the plan that fits best with the clients hair goals. She also won’t try to talk you into or out of any fresh ideas.',
    specialties: ['Precision Cuts', 'Texture', 'Education']
  },
  {
    id: 's2',
    name: 'Seth Stalcup',
    role: '22 Years of Experience',
    // Green/Purple Hair Image Vibe
    avatarUrl: 'images/Seth-Stalcup.jpg',
    bio: 'Having a love of all things vintage he takes great inspiration of the iconic women of the 60’s and 70’s.  He has been specially trained as a colorist since 2003 but loves every aspect of doing hair. With an obsessive eye for detail his goal is always to bring confidence to whomever sits in his chair. ',
    specialties: ['Vivid Colors', 'Balayage', 'Blondes']
  },
  {
    id: 's3',
    name: 'Roo Tynan',
    role: '1 Year of Experience',
    // Brunette with Nose Ring Vibe
    avatarUrl: 'images/Roo-Tynan.jpg',
    bio: 'Fresh out of Tricoci University of Beauty Culture, Roo is bringing bold, fearless energy to Wip Downtown in the heart of Indianapolis. As a licensed cosmetologist, Roo specializes in vivid color transformations and blowouts that turn heads and spark confidence. Come sit in Roo’s chair—you’ll leave feeling more you than ever.',
    specialties: ['Scalp Health', 'Botanical Treatments', 'Textured Hair']
  },
  {
    id: 's4',
    name: 'Ryan Malone',
    role: '1 Year of Experience',
    // Brunette with Glasses Vibe
    avatarUrl: 'images/Ryann-Malone.jpg',
    bio: 'Afters 2 years of attending Paul Mitchell The School, Ryann is eager to change lives behind the chair! As a cosmetologist, she is drawn to the idea of making people more self confident and comfortable in creative, artistic ways. She may be quiet while working, but she’ll happily listen to anything her clients have to say!',
    specialties: ['Short Cuts', 'Styling', 'Bridal']
  }
];

export const VISUAL_PROOF: VisualProofItem[] = [
  { id: 'v3', imageUrl: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop', serviceName: 'Mineral Detox', stylistName: 'Sia' },
  { id: 'v5', imageUrl: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=800&auto=format&fit=crop', serviceName: 'Textured Bob', stylistName: 'Elara' },
  { id: 'v4', imageUrl: 'images/bride.jpg', serviceName: 'Bridal Styling', stylistName: 'Elara' },
  { id: 'v6', imageUrl: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop', serviceName: 'Root Melt', stylistName: 'Julian' },
  { id: 'v1', imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop', serviceName: 'Copper Balayage + Gloss', stylistName: 'Julian' },
  { id: 'v2', imageUrl: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop', serviceName: 'The Structural Cut', stylistName: 'Elara' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 't1', author: 'Sophie M.', service: 'Balayage Revival', text: "I have never felt more listened to. Julian understood exactly the 'lived-in' blonde I was chasing. The atmosphere is pure serenity." },
  { id: 't2', author: 'Claire D.', service: 'The Structural Cut', text: "A transformative experience. Elara didn't just cut my hair; she gave it a shape that actually works with my natural wave. I haven't picked up a straightener in weeks." },
  { id: 't3', author: 'Amara L.', service: 'Velvet Gloss', text: "Wip downtown is a vibe. The products smell like a garden, and my hair has never been this shiny. It's my monthly reset button." }
];
