// BRAND LOGO - Single source of truth. Use ONLY this path everywhere.
export const BRAND_LOGO = "/logo.png";

export const siteConfig = {
    hotelName: "Hider",
    tagline: "Comfort & Luxury in Manesar, Gurgaon",
    location: "Manesar, Gurgaon, Haryana, India",
    contact: {
        phone: "+919876543210", // Placeholder
        displayPhone: "+91 98765 43210",
        email: "reservations@hiderhotel.com",
        address: "Manesar, Gurgaon, Haryana, India",
        mapQuery: "Manesar, Gurugram, Haryana"
    },
    whatsapp: {
        number: "919876543210", // No plus sign for API
        message: "Hi Hider Hotel, I want to book a room."
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
