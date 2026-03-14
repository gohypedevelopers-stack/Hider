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
  location?: {
    description: string;
    airport: string;
    city: string;
  };
};

export const commonAmenities: RoomAmenity[] = [
  { name: "Free WiFi", category: "Services" },
  { name: "Air Conditioning", category: "In-Room" },
  { name: "Smart TV", category: "In-Room" },
  { name: "Room Service", category: "Services" },
  { name: "24/7 Front Desk", category: "Services" },
  { name: "CCTV Security", category: "Services" },
  { name: "Breakfast Included", category: "Services" },
  { name: "Laundry Service", category: "Services" },
  { name: "Power Backup", category: "Services" },
  { name: "Elevator", category: "Services" },
  { name: "Hot and Cold water", category: "Bathroom" },
  { name: "Iron with Boards", category: "In-Room" },
  { name: "Hot water kettle", category: "In-Room" },
  { name: "Pick and drop service (Chargeable)", category: "Services" },
  { name: "Wake up call", category: "Services" },
  { name: "Housekeeping", category: "Services" },
  { name: "Child friendly", category: "Services" },
  { name: "Parking", category: "Services" }
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
    tagline: "Comfortable & peaceful stay in the heart of Manesar",
    price: "2,500",
    bed: "Queen Size Bed",
    guests: "2 Guests",
    size: "250 sq. ft",
    view: "Garden View",
    bathroom: "Private Bathroom with Hot & Cold Water",
    checkIn: "12:00 PM",
    checkOut: "12:00 PM",
    quote: "Comfort, cleanliness, and care — all in one peaceful room.",
    description: "The Standard Room at Hotel Hider is designed to provide a comfortable and peaceful stay for guests visiting Manesar. With clean interiors, modern furnishings, and essential amenities, the room is ideal for short stays, business travelers, or couples.",
    features: [
      "Queen Size Bed",
      "Air Conditioning",
      "Free High-Speed WiFi",
      "Entertainment TV",
      "Private Bathroom",
      "Hot & Cold Water",
      "Room Service",
      "Daily Housekeeping"
    ],
    amenities: [
      { name: "Queen Size Bed", category: "In-Room" },
      { name: "Air Conditioning", category: "In-Room" },
      { name: "Free High-Speed WiFi", category: "Services" },
      { name: "Entertainment TV", category: "In-Room" },
      { name: "Private Bathroom", category: "Bathroom" },
      { name: "Hot and Cold water", category: "Bathroom" },
      { name: "Room Service", category: "Services" },
      { name: "Daily Housekeeping", category: "Services" },
      { name: "Breakfast Included", category: "Services" },
      { name: "Iron with Boards", category: "In-Room" },
      { name: "Hot water kettle", category: "In-Room" }
    ],
    highlights: [
      { title: "Queen Size Bed", description: "Comfortable queen bed with fresh premium bedding for a restful night's sleep.", icon: "Bed" },
      { title: "Private Bathroom", description: "Clean private bathroom with hot & cold water supply.", icon: "Bath" },
      { title: "Free High-Speed WiFi", description: "Stay connected with complimentary high-speed internet throughout your stay.", icon: "Wifi" },
      { title: "Daily Housekeeping", description: "Room cleaned and refreshed daily for your comfort and convenience.", icon: "Sparkles" }
    ],
    policies: commonPolicies,
    galleryImages: ["/1.jpeg", "/4.jpeg", "/7.jpeg", "/5.jpeg"],
    location: {
      description: "Conveniently situated in Manesar, our Standard rooms offer a peaceful retreat while being minutes away from major corporate hubs and transport links.",
      airport: "35 mins (22 km)",
      city: "15 mins (6 km)"
    }
  },
  {
    slug: "deluxe-room",
    title: "Deluxe Room",
    tagline: "A sanctuary of style and comfort designed for the modern traveler.",
    price: "4,500",
    bed: "King Size Bed",
    guests: "2 to 3 Guests",
    size: "400 sq. ft",
    view: "City View",
    bathroom: "Premium Rain Shower",
    checkIn: "12:00 PM",
    checkOut: "12:00 PM",
    quote: "Refined luxury for those who appreciate the finer things.",
    description: "The Deluxe Room at Hotel Hider offers more space and enhanced comfort for guests seeking a premium stay experience. The room features modern interiors, comfortable bedding, and a relaxing atmosphere.",
    features: [
      "King Size Bed",
      "Air Conditioning",
      "Free High-Speed WiFi",
      "Entertainment TV",
      "Spacious Interior",
      "Private Bathroom",
      "Hot & Cold Water",
      "Room Service",
      "Daily Housekeeping"
    ],
    amenities: commonAmenities.filter(a => !['Lounge Area', 'Dining Space'].includes(a.name)),
    highlights: [
      { title: "King Size Luxury", description: "Expansive bed for ultimate relaxation.", icon: "BedDouble" },
      { title: "Private Balcony", description: "Your own space with city views.", icon: "Eye" },
      { title: "Mini Bar", description: "Premium refreshments at your fingertips.", icon: "Wine" },
      { title: "Indulgent Bath", description: "Premium fixtures for a spa-like feel.", icon: "Bath" }
    ],
    policies: commonPolicies,
    galleryImages: ["/2.jpeg", "/6.jpeg", "/3.jpeg", "/5.jpeg"],
    location: {
      description: "Our Deluxe rooms offer a perfect balance of luxury and accessibility, placed at the heart of Mansa's cultural and business district.",
      airport: "25 mins (15 km)",
      city: "10 mins (4 km)"
    }
  },
  {
    slug: "super-deluxe-room",
    title: "Super Deluxe Room",
    tagline: "Maximum space and ultimate luxury for groups",
    price: "4,500",
    bed: "King Size Bed",
    guests: "4 to 6 Guests",
    size: "750 sq. ft",
    view: "Premium View",
    bathroom: "Two Bathrooms",
    checkIn: "12:00 PM",
    checkOut: "12:00 PM",
    quote: "The pinnacle of group luxury and shared experiences.",
    description: "The Super Deluxe Room is the most spacious accommodation option at Hotel Hider. Designed with modern interiors and comfortable furnishings, this room is ideal for guests who want a more luxurious stay.",
    features: [
      "King Size Bed",
      "Spacious Layout",
      "Air Conditioning",
      "Free High-Speed WiFi",
      "Entertainment TV",
      "Private Bathroom",
      "Hot & Cold Water",
      "Room Service",
      "Daily Housekeeping"
    ],
    amenities: commonAmenities,
    highlights: [
      { title: "Double Suite", description: "Two separate bedrooms for privacy.", icon: "Home" },
      { title: "Grand View", description: "Unobstructed premium landscapes.", icon: "Mountain" },
      { title: "Group Stay", description: "Spacious layout for family bonding.", icon: "Users" },
      { title: "Full Amenities", description: "Everything you need for a premium stay.", icon: "CheckCircle" }
    ],
    policies: commonPolicies,
    galleryImages: ["/8.jpeg", "/9.jpeg", "/3.jpeg", "/6.jpeg"],
    location: {
      description: "The Super Deluxe experience is complemented by its prime positioning, offering breathtaking city views and unmatched proximity to elite dining and premium shopping.",
      airport: "20 mins (12 km)",
      city: "5 mins (2 km)"
    }
  }
];
