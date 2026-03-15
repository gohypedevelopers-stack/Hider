export const BRAND_LOGO = "/logo.png";

export const siteConfig = {
    hotelName: "Hotel Hider",
    tagline: "Comfort & Luxury in Manesar, Gurgaon",
    location: "Manesar, Gurgaon, India",
    contact: {
        phone: "+919289416262",
        displayPhone: "+91 92894 16262",
        email: "hotelhider@gmail.com",
        address: "Near NH-48, IMT Manesar, Gurgaon, India",
        mapQuery: "Hotel Hider Manesar Gurgaon",
        gstNumber: "@HOTEL HIDER GM" 
    },
    whatsapp: {
        number: "919289416262",
        message: "Hi Hotel Hider, I want to book a room."
    },
    images: {
        // Hero: wide-angle suite bedroom (most impressive shot)
        hero: "/3.jpeg",

        // ROOMS: ONLY bedroom images — NO bathrooms allowed here
        rooms: {
            standard: "/1.jpeg",   // Standard Room  – King bed, chairs, TV unit, AC
            deluxe: "/2.jpeg",   // Deluxe Room    – Premium king bed, mini-bar, wardrobe, sitting area
            family: "/8.jpeg",   // Family Suite   – Spacious suite bedroom (NOT a bathroom)
        },

        // GALLERY: all images including bathrooms, lobby, restaurant, hallway
        gallery: [
            "/1.jpeg",  // Bedroom – Standard room interior
            "/2.jpeg",  // Bedroom – Deluxe room interior
            "/3.jpeg",  // Bedroom – Suite wide angle
            "/4.jpeg",  // Bathroom – Light marble with shower
            "/5.jpeg",  // Lobby – Reception desk & elevator
            "/6.jpeg",  // Restaurant – Dining area
            "/7.jpeg",  // Corridor – Hotel hallway
            "/8.jpeg",  // Bedroom – Suite interior
            "/9.jpeg",  // Bathroom – Dark marble premium bathroom
        ]
    }
};
