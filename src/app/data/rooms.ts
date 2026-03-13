export type RoomAmenity = {
  name: string;
  category?: 'In-Room' | 'Bathroom' | 'Services';
};

export type RoomHighlight = {
  title: string;
  description: string;
  icon: string;
};

export type RoomPolicy = {
  label: string;
  value: string;
  icon?: string;
};

export type RoomData = {
  slug: string;
  title: string;
  tagline: string;
  price: string;
  bed: string;
  guests: string;
  size: string;
  view: string;
  bathroom: string;
  checkIn: string;
  checkOut: string;
  description: string;
  quote?: string;
  features: string[];
  amenities: RoomAmenity[];
  highlights: RoomHighlight[];
  policies: RoomPolicy[];
  galleryImages: string[];
};

export const commonAmenities: RoomAmenity[] = [
  { name: "Free WiFi", category: "Services" },
  { name: "Air Conditioning", category: "In-Room" },
  { name: "Smart TV", category: "In-Room" },
  { name: "Room Service", category: "Services" },
  { name: "Attached Bathroom", category: "Bathroom" },
  { name: "Rain Shower", category: "Bathroom" },
  { name: "Mini Bar", category: "In-Room" },
  { name: "Balcony", category: "In-Room" },
  { name: "Lounge Area", category: "In-Room" },
  { name: "Dining Space", category: "In-Room" },
  { name: "Hot Water", category: "Bathroom" },
  { name: "Wardrobe", category: "In-Room" },
  { name: "24/7 Front Desk", category: "Services" },
  { name: "CCTV Security", category: "Services" },
  { name: "Parking", category: "Services" },
  { name: "Power Backup", category: "Services" },
  { name: "Elevator", category: "Services" }
];

export const commonPolicies: RoomPolicy[] = [
  { label: "Check-in", value: "12:00 Noon", icon: "Clock" },
  { label: "Check-out", value: "12:00 Noon", icon: "Clock" },
  { label: "No Smoking", value: "Non-smoking rooms", icon: "Ban" },
  { label: "Valid ID", value: "Required at check-in", icon: "IdCard" },
  { label: "Pets", value: "Not allowed", icon: "Dog" },
  { label: "Extra Bed", value: "Subject to availability", icon: "PlusSquare" }
];

export const roomsData: RoomData[] = [
  {
    slug: "standard-room",
    title: "Standard Room",
    tagline: "Comfortable elegance for a peaceful stay",
    price: "2,500",
    bed: "Queen Bed",
    guests: "2 Guests",
    size: "250 sq. ft",
    view: "Garden View",
    bathroom: "Rain Shower",
    checkIn: "12:00 Noon",
    checkOut: "12:00 Noon",
    quote: "A perfect blend of simplicity and sophisticated comfort.",
    description: "Experience comfort and elegance in our meticulously designed space. Our Standard Room offers a perfect blend of modern amenities and classic comfort. Featuring a plush queen-sized bed, premium linens, and a tranquil atmosphere, it's an ideal choice for both business and leisure travelers looking for a premium stay at Hider Hotel. Every detail is curated to provide a peaceful sanctuary amidst the city.",
    features: ["Cozy queen bed", "Elegant interior finish", "Ideal for solo travelers and couples", "Fast WiFi and modern bathroom"],
    amenities: [
      { name: "Free Wi-Fi" },
      { name: "AC" },
      { name: "Queen Bed" },
      { name: "Rain Shower" }
    ],
    highlights: [
      { title: "Cozy Bedroom", description: "Premium bedding for a restful sleep.", icon: "Bed" },
      { title: "Modern Bath", description: "Rain shower with luxury fixtures.", icon: "Bath" },
      { title: "Fast WiFi", description: "Stay connected with high-speed internet.", icon: "Wifi" },
      { title: "Elegant Finish", description: "Contemporary design for modern travelers.", icon: "Sparkles" }
    ],
    policies: commonPolicies,
    galleryImages: ["/1.jpeg", "/4.jpeg", "/7.jpeg", "/5.jpeg"]
  },
  {
    slug: "deluxe-room",
    title: "Deluxe Room",
    tagline: "Spacious luxury with premium comfort",
    price: "4,500",
    bed: "King Bed",
    guests: "2 to 3 Guests",
    size: "400 sq. ft",
    view: "City View",
    bathroom: "Premium Rain Shower",
    checkIn: "12:00 Noon",
    checkOut: "12:00 Noon",
    quote: "Refined luxury for those who appreciate the finer things.",
    description: "The Deluxe Room offers a refined hospitality experience with a spacious layout, king-size comfort, and upgraded in-room features. Perfect for guests who want added style, comfort, and a more indulgent stay.",
    features: ["Spacious premium layout", "Private balcony", "Mini bar convenience", "Best for couples and premium stays"],
    amenities: commonAmenities.filter(a => !['Lounge Area', 'Dining Space'].includes(a.name)),
    highlights: [
      { title: "King Size Luxury", description: "Expansive bed for ultimate relaxation.", icon: "BedDouble" },
      { title: "Private Balcony", description: "Your own space with city views.", icon: "Eye" },
      { title: "Mini Bar", description: "Premium refreshments at your fingertips.", icon: "Wine" },
      { title: "Indulgent Bath", description: "Premium fixtures for a spa-like feel.", icon: "Bath" }
    ],
    policies: commonPolicies,
    galleryImages: ["/2.jpeg", "/6.jpeg", "/3.jpeg", "/5.jpeg"]
  },
  {
    slug: "super-deluxe-room",
    title: "Super Deluxe Room",
    tagline: "Maximum space and ultimate luxury for groups",
    price: "8,000",
    bed: "2 Bedrooms / premium bedding",
    guests: "4 to 6 Guests",
    size: "750 sq. ft",
    view: "Premium View",
    bathroom: "Two Bathrooms",
    checkIn: "12:00 Noon",
    checkOut: "12:00 Noon",
    quote: "The pinnacle of group luxury and shared experiences.",
    description: "The Super Deluxe Room is our most premium offering, thoughtfully crafted for families and group travelers who need extra space without compromising on comfort. Featuring two bedrooms and premium services, it provides a relaxed and functional luxury stay.",
    features: ["Maximum space and comfort", "Great for families and groups", "Premium views and amenities", "Ultimate luxury stay"],
    amenities: commonAmenities,
    highlights: [
      { title: "Double Suite", description: "Two separate bedrooms for privacy.", icon: "Home" },
      { title: "Grand View", description: "Unobstructed premium landscapes.", icon: "Mountain" },
      { title: "Group Stay", description: "Spacious layout for family bonding.", icon: "Users" },
      { title: "Full Amenities", description: "Everything you need for a premium stay.", icon: "CheckCircle" }
    ],
    policies: commonPolicies,
    galleryImages: ["/8.jpeg", "/9.jpeg", "/3.jpeg", "/6.jpeg"]
  }
];
