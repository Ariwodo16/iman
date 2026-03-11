import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(dollars: number): string {
  if (dollars === 0) return "Market Price";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(dollars);
}

export const RESTAURANT = {
  name: "Iman West African Restaurant",
  tagline: "Authentic West African Flavors in Atlanta, Georgia",
  phone: "(917) 231-7217",
  phoneRaw: "9172317217",
  email: "imanatlanta2@gmail.com",
  address: "5929 Jimmy Carter Blvd Norcross, Georgia 30071-2941",
  mapUrl: "https://maps.app.goo.gl/Zo9TxSRWUADeFGsm9",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.7531552484547!2d-84.21357182482876!3d33.921752124610315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5a7a9c7588ed5%3A0x63d473cd6f97961f!2sIman%20West%20African%20Cuisine!5e0!3m2!1sen!2sus!4v1773245703818!5m2!1sen!2sus"
  facebook: "https://facebook.com/imanwestafrican",
  orderUrl: process.env.NEXT_PUBLIC_SQUARE_ORDER_URL ?? "https://squareup.com/your-order-link",
  hours: [
    { day: "Monday",    open: "11:00 AM", close: "9:00 PM",  closed: false },
    { day: "Tuesday",   open: "11:00 AM", close: "9:00 PM",  closed: false },
    { day: "Wednesday", open: "11:00 AM", close: "9:00 PM",  closed: false },
    { day: "Thursday",  open: "11:00 AM", close: "9:00 PM",  closed: false },
    { day: "Friday",    open: "11:00 AM", close: "10:00 PM", closed: false },
    { day: "Saturday",  open: "12:00 PM", close: "10:00 PM", closed: false },
    { day: "Sunday",    open: "12:00 PM", close: "8:00 PM",  closed: false },
  ],
};

export const MENU: { category: string; items: { name: string; price: number; description: string }[] }[] = [
  {
    category: "Rice Dishes",
    items: [
      { name: "Jollof Rice", price: 14.99, description: "West African-style tomato rice slow-cooked with aromatic spices. Served with your choice of protein." },
      { name: "Fried Rice", price: 13.99, description: "Stir-fried rice with mixed vegetables, eggs, and seasoning." },
      { name: "Coconut Rice", price: 13.99, description: "Fluffy rice cooked in rich coconut milk with mild spices." },
      { name: "Ofada Rice & Sauce", price: 15.99, description: "Local Nigerian parboiled rice served with spicy Ofada stew." },
    ],
  },
  {
    category: "Soups",
    items: [
      { name: "Egusi Soup", price: 15.99, description: "Rich melon seed soup with leafy greens cooked in palm oil with assorted proteins." },
      { name: "Groundnut Soup", price: 15.99, description: "Slow-simmered peanut soup with tomatoes, peppers, and your choice of protein." },
      { name: "Okra Soup", price: 14.99, description: "Thick, hearty okra soup with seafood and assorted meats." },
      { name: "Banga Soup", price: 16.99, description: "Palm nut soup with Delta-style spices and fresh fish or meat." },
    ],
  },
  {
    category: "Stews",
    items: [
      { name: "Chicken Stew", price: 14.99, description: "Tender chicken in a rich tomato and pepper base with West African spices." },
      { name: "Beef Stew", price: 15.99, description: "Slow-cooked beef in a deeply flavored tomato and onion sauce." },
      { name: "Fish Stew", price: 15.99, description: "Seasoned fish in a spiced tomato base with bell peppers and onions." },
    ],
  },
  {
    category: "Proteins",
    items: [
      { name: "Suya Skewers", price: 12.99, description: "Spiced grilled beef skewers with West African suya spice blend, served with onions and tomatoes." },
      { name: "Grilled Tilapia", price: 16.99, description: "Whole grilled tilapia marinated in West African herbs and spices." },
      { name: "Peppered Goat Meat", price: 17.99, description: "Slow-cooked tender goat in a bold pepper sauce. A true delicacy." },
      { name: "Fried Chicken", price: 13.99, description: "Crispy whole fried chicken seasoned with our house spice blend." },
    ],
  },
  {
    category: "Sides",
    items: [
      { name: "Fufu", price: 4.99, description: "Smooth, stretchy dough made from cassava. Perfect for dipping in soups." },
      { name: "Pounded Yam", price: 4.99, description: "Silky smooth pounded yam, the classic West African swallow." },
      { name: "Eba (Garri)", price: 3.99, description: "Stiff cassava granule dough, a staple West African side." },
      { name: "Plantains", price: 4.99, description: "Sweet fried ripe plantains. Crispy outside, caramelized inside." },
      { name: "Moi Moi", price: 5.99, description: "Steamed bean pudding with peppers and eggs. Protein-rich and delicious." },
    ],
  },
  {
    category: "Snacks",
    items: [
      { name: "Puff Puff", price: 5.99, description: "Soft, pillowy fried dough balls lightly sweetened. Order by the dozen." },
      { name: "Akara", price: 6.99, description: "Crispy fried bean cakes seasoned with onions and peppers." },
      { name: "Chin Chin", price: 4.99, description: "Crunchy deep-fried dough snacks, lightly sweetened and utterly addictive." },
    ],
  },
  {
    category: "Drinks",
    items: [
      { name: "Chapman", price: 4.99, description: "Classic Nigerian cocktail with grenadine, Fanta, and Sprite over ice." },
      { name: "Zobo (Hibiscus Tea)", price: 3.99, description: "Refreshing chilled hibiscus flower drink with ginger and cloves." },
      { name: "Kunu", price: 3.99, description: "Traditional grain drink made from millet or sorghum, lightly spiced." },
      { name: "Bottled Water", price: 1.99, description: "Still or sparkling." },
    ],
  },
];

export const REVIEWS = [
  { name: "Amara K.",    stars: 5, text: "Best jollof rice I've had outside of West Africa. Rich, smoky, and full of flavor. This place is a hidden gem in Atlanta." },
  { name: "Marcus T.",   stars: 5, text: "Brought my whole family here for my mom's birthday. The food was outstanding — everyone was blown away by the egusi soup." },
  { name: "Daniella O.", stars: 5, text: "Authentic cooking that reminds me of home. The pounded yam and groundnut soup are perfect. Generous portions, warm service." },
  { name: "James W.",    stars: 5, text: "First time having West African food and I'm completely hooked. The suya skewers are unbelievable. My new favorite Atlanta restaurant." },
];
