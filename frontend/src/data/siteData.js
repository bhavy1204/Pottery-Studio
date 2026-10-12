// ==========================================================
//  ALL EDITABLE CONTENT LIVES HERE. Replace placeholders.
// ==========================================================

// Placeholder images use Cloudinary's public demo account.
// Replace with your own Cloudinary links (any /upload/ URL works,
// optimisation params are added automatically).
import ImageGallery from "../../../image-migration/image-data";
const demo = (name) => `https://res.cloudinary.com/demo/image/upload/${name}`;

export const site = {
  name: "Mewar Pot Makers",
  logo: "/logo.png", // file inside /public (change extension if different)
  city: "Udaipur, Rajasthan",
  address: "sona sehari, 23, Vitthal Nath Temple Rd, near shree nath temple, Old City, kumhar wara, Udaipur, Rajasthan 313001",
  phoneDisplay: "+91 86190 30491 ",
  phone: "+918619030491 ", // used for tel: link
  whatsapp: "918619030491 ", // country code + number, no + or spaces
  email: "mewarpotmaker@gmai.com ",
  instagram: "https://instagram.com/mewar_pot_maker",
  facebook: "https://facebook.com/DevilalPrajapatofficial",
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
  about: "https://res.cloudinary.com/g2xlab58/image/upload/v1791820619/d9a12b93-bcf3-4699-99ae-7558b99a75d5.webp",
  father: demo("cld-sample-4.jpg"),
  son: demo("cld-sample-5.jpg"),
};

// Hero slider images (add as many as you like, 3 to 5 works best).
// Portrait photos look best because they sit inside the arch.
export const heroImages = [
  { src: "https://res.cloudinary.com/g2xlab58/image/upload/v1791819865/IMG-20261007-WA0004.webp", alt: "Handmade pottery from Mewar Pot Makers" },
  { src: "https://res.cloudinary.com/g2xlab58/image/upload/v1791784441/IMG-20261007-WA0018.webp", alt: "Glazed vase on a studio shelf" },
  { src: "https://res.cloudinary.com/g2xlab58/image/upload/v1791820179/IMG-20261007-WA0027.webp", alt: "Stoneware mug made in the studio" },
  { src: "https://res.cloudinary.com/g2xlab58/image/upload/v1791784469/IMG-20261007-WA0065.webp", alt: "Pottery wheel in the studio" },
  { src: "https://res.cloudinary.com/g2xlab58/image/upload/v1791784438/IMG-20261007-WA0016.webp", alt: "Pottery wheel in the studio" },
  { src: "https://res.cloudinary.com/g2xlab58/image/upload/v1791820035/IMG-20261007-WA0012.webp", alt: "Pottery wheel in the studio" },


];

export const facts = [
  { title: "15+ years of practice", text: "Clay has been our daily work since long before the studio opened its doors to students." },
  { title: "Trusted by hotels", text: "We have made pieces for several five-star hotels across Udaipur." },
  { title: "Classes for everyone", text: "Complete beginners, hobbyists, children and returning potters are all welcome." },
];

export const classes = [
  {
    icon: "wheel",
    name: "Wheel Throwing",
    duration: "2 hours",
    level: "Beginner friendly",
    text: "Learn to centre clay and pull up your first bowls and cups on the potter's wheel."
  },
  {
    icon: "hand",
    name: "Hand Building",
    duration: "2 hours",
    level: "All levels",
    text: "Pinch, coil and slab techniques for making plates, planters and sculptural pieces."
  },
  {
    icon: "glaze",
    name: "Glazing & Finishing",
    duration: "1.5 hours",
    level: "All levels",
    text: "Colour and finish the pieces you have made, then we fire them for you."
  },
  {
    icon: "kids",
    name: "Kids & Family",
    duration: "1.5 hours",
    level: "Ages 6 and up",
    text: "A relaxed, messy and fun session for children and parents to make together."
  },
  {
    icon: "private",
    name: "Private & Group Sessions",
    duration: "Flexible",
    level: "Any group size",
    text: "Book the studio for a birthday, team outing or a quiet session of your own."
  },
];

export const instructors = [
  {
    name: "Devi Lal Prajapat",
    role: "Master Potter and Founder",
    image: "https://res.cloudinary.com/g2xlab58/image/upload/v1791736007/7025fa5e-4b93-4919-b17c-a62c26b7452f.png",
    bio: [
      "Placeholder text. Write a few lines about the father's journey here: where he learned the craft, how the studio started and what he is known for.",
      "He has been working with clay for over four decades and has shaped hundreds of pieces for hotels and homes in Udaipur.",
    ],
  },
  {
    name: "Lokesh Prajapat",
    role: "Potter and Lead Instructor",
    image: "https://res.cloudinary.com/g2xlab58/image/upload/v1791736054/6a8793b9-ea45-447d-b86d-6959cf350065-clean.png",
    bio: [
      "Placeholder text. Write a few lines about the son here: how he grew up in the studio and what he enjoys teaching.",
      "He leads most of the classes and brings a fresh, modern eye to the traditions he learned from his father.",
    ],
  },
];

export const galleryCategories = ["All", "Bowls", "Vases", "Mugs", "Studio"];

export const gallery = ImageGallery

// Add your hand-picked reviews here. `image` can be empty, initials are shown instead.
export const reviews = [
  {
    name: "Somi Paul",
    image: "",
    rating: 5,
    text: "We had a wonderful experience with the pottery-making session. The artist was incredibly patient, friendly, and guided us through every step with great care. Their hospitality made us feel welcome and comfortable throughout the experience. It was fun, relaxing, and something we’ll always remember. Overall, it was an amazing experience, and I would highly recommend it to anyone looking to try pottery!"
  },
 {
    name: "Hiren Godhwani",
    image: "",
    rating: 5,
    text: "Absolutely worth the money! The prices are much lower compared to competitors, but the experience is amazing. The artists are incredibly talented, friendly, and make you feel like family. This isn't a promotional review—just a genuinely great experience. Highly recommended!"
  },
 {
    name: "Vanshika Adwani",
    image: "",
    rating: 5,
    text: "Had a great experience at the pottery class! It was fun, relaxing, and well-organized. The instructor was friendly and guided us throughout the session, making it enjoyable even for beginners. Would definitely recommend it and can’t wait to visit again!"
  },
 {
    name: "Abhilasha",
    image: "",
    rating: 5,
    text: "A true and honest artist who will also make the pottery lesson super enjoyable at a very reasonable price. Go to this place to experience what no mainstream itinerary will be able to cover."
  },
 {
    name: "prateeksha Vats",
    image: "",
    rating: 5,
    text: "Udaipur, the crown jewel of Rajasthan, stole my heart, but the pottery session with Mewar Pot Makers took it to new level!🥹❤️. It was my first time ever trying pottery, and I was blown away by the warmth and expertise of the Mewar Pot Makers."
  },
 {
    name: "Sowmya Mohan",
    image: "",
    rating: 5,
    text: "Mewar pot maker aka Lokesh and his family greeted us with warmth and we had the best 2 hours spent learning the art of pottery. Unlike other places, he gave us the entire control and we got the satisfaction of doing it all by ourselves with guidance from him. He went the extra mile in making sure we get to take our work with us back home. Wonderful gift and a great experience . Thank you"
  },
 {
    name: "Ronak Trivedi",
    image: "",
    rating: 5,
    text: "What an amazing way to experience positivity and good vibes in your hand. Loved each and every moment learning to make a pot out of earth with my bare hands. It soothen my soul in some way. Thanking for the experience."
  },
 {
    name: "Durga Menon",
    image: "",
    rating: 5,
    text: "Patiently taught all techniques and lets you make mistakes, which is the fun part. Do visit if you are in Udaipur.He is very skill-full with years of experience."
  },
 {
    name: "Snehaja Kadam",
    image: "",
    rating: 5,
    text: "This is certainly a must have experience. Lokesh Bhaiya and uncle are very helpful and hospitable. It was definitely one of the highlights of my trip"
  },
 {
    name: "Umnah Hussain",
    image: "",
    rating: 5,
    text: "Lokesh ji is a wonderful artist. He's really skilled at his art and takes his time to teach us the intricate details of pottery. This was my favorite experience in Udaipur, definitely worth going :)"
  },
 
];


