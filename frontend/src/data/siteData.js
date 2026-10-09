// ==========================================================
//  ALL EDITABLE CONTENT LIVES HERE. Replace placeholders.
// ==========================================================

// Placeholder images use Cloudinary's public demo account.
// Replace with your own Cloudinary links (any /upload/ URL works,
// optimisation params are added automatically).
const demo = (name) => `https://res.cloudinary.com/demo/image/upload/${name}`;

export const site = {
  name: "Mewar Pot Makers",
  logo: "/logo.png", // file inside /public (change extension if different)
  city: "Udaipur, Rajasthan",
  address: "Add full studio address here, Udaipur, Rajasthan 313001",
  phoneDisplay: "+91 00000 00000",
  phone: "+910000000000", // used for tel: link
  whatsapp: "910000000000", // country code + number, no + or spaces
  email: "hello@example.com",
  instagram: "https://instagram.com/yourhandle",
  facebook: "https://facebook.com/yourpage",
  // Replace the q= value with the exact Google Maps place name or address
  mapEmbed: "https://www.google.com/maps?q=Mewar+Pot+Makers+Udaipur&output=embed",
  mapLink: "https://www.google.com/maps/search/?api=1&query=Mewar+Pot+Makers+Udaipur",
};

export const waLink = (message) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const defaultMessage =
  "Hello Mewar Pot Makers, I would like to book a pottery class slot. Could you please share the available timings?";

export const images = {
  hero: demo("sample.jpg"),
  about: demo("cld-sample-3.jpg"),
  father: demo("cld-sample-4.jpg"),
  son: demo("cld-sample-5.jpg"),
};

// Hero slider images (add as many as you like, 3 to 5 works best).
// Portrait photos look best because they sit inside the arch.
export const heroImages = [
  { src: demo("sample.jpg"), alt: "Handmade pottery from Mewar Pot Makers" },
  { src: demo("cld-sample-4.jpg"), alt: "Glazed vase on a studio shelf" },
  { src: demo("cld-sample-5.jpg"), alt: "Stoneware mug made in the studio" },
  { src: demo("cld-sample-3.jpg"), alt: "Pottery wheel in the studio" },
];

export const facts = [
  { title: "15+ years of practice", text: "Clay has been our daily work since long before the studio opened its doors to students." },
  { title: "Trusted by hotels", text: "We have made pieces for several five-star hotels across Udaipur." },
  { title: "Classes for everyone", text: "Complete beginners, hobbyists, children and returning potters are all welcome." },
];

export const classes = [
  { icon: "wheel", name: "Wheel Throwing", duration: "2 hours", level: "Beginner friendly", text: "Learn to centre clay and pull up your first bowls and cups on the potter's wheel." },
  { icon: "hand", name: "Hand Building", duration: "2 hours", level: "All levels", text: "Pinch, coil and slab techniques for making plates, planters and sculptural pieces." },
  { icon: "glaze", name: "Glazing & Finishing", duration: "1.5 hours", level: "All levels", text: "Colour and finish the pieces you have made, then we fire them for you." },
  { icon: "kids", name: "Kids & Family", duration: "1.5 hours", level: "Ages 6 and up", text: "A relaxed, messy and fun session for children and parents to make together." },
  { icon: "private", name: "Private & Group Sessions", duration: "Flexible", level: "Any group size", text: "Book the studio for a birthday, team outing or a quiet session of your own." },
];

export const instructors = [
  {
    name: "Father's Name",
    role: "Master Potter and Founder",
    image: images.father,
    bio: [
      "Placeholder text. Write a few lines about the father's journey here: where he learned the craft, how the studio started and what he is known for.",
      "He has been working with clay for over four decades and has shaped hundreds of pieces for hotels and homes in Udaipur.",
    ],
  },
  {
    name: "Son's Name",
    role: "Potter and Lead Instructor",
    image: images.son,
    bio: [
      "Placeholder text. Write a few lines about the son here: how he grew up in the studio and what he enjoys teaching.",
      "He leads most of the classes and brings a fresh, modern eye to the traditions he learned from his father.",
    ],
  },
];

export const galleryCategories = ["All", "Bowls", "Vases", "Mugs", "Studio"];

export const gallery = [
  { src: demo("sample.jpg"), alt: "Handmade bowl", category: "Bowls" },
  { src: demo("cld-sample-4.jpg"), alt: "Glazed vase", category: "Vases" },
  { src: demo("cld-sample-3.jpg"), alt: "Studio shelves", category: "Studio" },
  { src: demo("cld-sample-5.jpg"), alt: "Stoneware mug", category: "Mugs" },
  { src: demo("cld-sample-2.jpg"), alt: "Serving bowl", category: "Bowls" },
  { src: demo("cld-sample.jpg"), alt: "Tall vase", category: "Vases" },
  { src: demo("sample.jpg"), alt: "Mugs drying", category: "Mugs" },
  { src: demo("cld-sample-3.jpg"), alt: "Wheel in the studio", category: "Studio" },
  { src: demo("cld-sample-4.jpg"), alt: "Small vase set", category: "Vases" },
  { src: demo("cld-sample-4.jpg"), alt: "Small vase set", category: "Vases" },
  { src: demo("cld-sample-4.jpg"), alt: "Small vase set", category: "Vases" },
  { src: demo("sample.jpg"), alt: "Handmade bowl", category: "Bowls" },
  { src: demo("cld-sample-4.jpg"), alt: "Glazed vase", category: "Vases" },
  { src: demo("cld-sample-3.jpg"), alt: "Studio shelves", category: "Studio" },
  { src: demo("cld-sample-5.jpg"), alt: "Stoneware mug", category: "Mugs" },
  { src: demo("cld-sample-2.jpg"), alt: "Serving bowl", category: "Bowls" },
  { src: demo("cld-sample.jpg"), alt: "Tall vase", category: "Vases" },
  { src: demo("sample.jpg"), alt: "Mugs drying", category: "Mugs" },
  { src: demo("cld-sample-3.jpg"), alt: "Wheel in the studio", category: "Studio" },
  { src: demo("cld-sample-4.jpg"), alt: "Small vase set", category: "Vases" },
  { src: demo("cld-sample-4.jpg"), alt: "Small vase set", category: "Vases" },
  { src: demo("cld-sample-4.jpg"), alt: "Small vase set", category: "Vases" },

];

// Add your hand-picked reviews here. `image` can be empty, initials are shown instead.
export const reviews = [
  { name: "Reviewer One", image: "", rating: 5, text: "Placeholder review. A wonderful afternoon at the wheel. The instructors were patient and I left with a bowl I am proud of." },
  { name: "Reviewer Two", image: "", rating: 5, text: "Placeholder review. Warm studio, kind teachers and beautiful work on every shelf." },
  { name: "Reviewer Three", image: "", rating: 5, text: "Placeholder review. We booked a family session and the kids still talk about it." },
  { name: "Reviewer Four", image: "", rating: 5, text: "Placeholder review. Professional, creative and so welcoming to complete beginners." },
  { name: "Reviewer Five", image: "", rating: 4, text: "Placeholder review. A relaxing way to spend a morning in Udaipur. Highly recommended." },
  { name: "Reviewer Six", image: "", rating: 5, text: "Placeholder review. The pieces they made for our venue were exactly what we imagined." },
];


