export type Package = {
  slug: string;
  title: string;
  category: "hill" | "waterfall" | "beach" | "pilgrimage" | "adventure";
  region: string;
  image: string;
  description: string;
  highlights: string[];
  duration: string;
  featured?: boolean;
};

// Curated Unsplash imagery — premium travel photography
const u = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=80`;

export const packages: Package[] = [
  // Hill Stations
  { slug: "araku-valley", title: "Araku Valley", category: "hill", region: "Andhra Pradesh", image: u("1602192509154-0b900ee1f851"), description: "Coffee plantations, tribal culture and misty mornings in the Eastern Ghats.", highlights: ["Borra Caves", "Tribal Museum", "Coffee plantations", "Toy train ride"], duration: "2N / 3D", featured: true },
  { slug: "lambasingi", title: "Lambasingi", category: "hill", region: "Andhra Pradesh", image: u("1501785888041-af3ef285b470"), description: "The Kashmir of Andhra — pre-dawn frost, apple orchards and silent valleys.", highlights: ["Frost mornings", "Susan Garden", "Kothapally Falls", "Bonfire camp"], duration: "1N / 2D", featured: true },
  { slug: "paderu", title: "Paderu", category: "hill", region: "Andhra Pradesh", image: u("1470071459604-3b5ec3a7fe05"), description: "Untouched tribal hills with sweeping panoramas and pleasant weather.", highlights: ["Galikonda viewpoint", "Local cuisine", "Forest walks"], duration: "2N / 3D" },
  { slug: "ooty", title: "Ooty", category: "hill", region: "Tamil Nadu", image: u("1580289143186-03f1ba0c45f3"), description: "Queen of the Nilgiris — rolling tea estates, lakes and colonial charm.", highlights: ["Botanical Gardens", "Doddabetta Peak", "Nilgiri Toy Train"], duration: "3N / 4D" },
  { slug: "coorg", title: "Coorg", category: "hill", region: "Karnataka", image: u("1605649487212-47bdab064df7"), description: "Misty coffee country with cascading falls and aromatic spice trails.", highlights: ["Abbey Falls", "Raja's Seat", "Dubare Elephant Camp"], duration: "3N / 4D" },
  { slug: "munnar", title: "Munnar", category: "hill", region: "Kerala", image: u("1602216056096-3b40cc0c9944"), description: "Endless tea carpets, cardamom hills and the cool whisper of the Western Ghats.", highlights: ["Tea Museum", "Eravikulam NP", "Mattupetty Dam"], duration: "3N / 4D" },
  { slug: "kodaikanal", title: "Kodaikanal", category: "hill", region: "Tamil Nadu", image: u("1591474200742-8e512e6f98f8"), description: "Princess of hill stations with star-shaped lakes and pine forests.", highlights: ["Coaker's Walk", "Pillar Rocks", "Bryant Park"], duration: "2N / 3D" },
  { slug: "shimla", title: "Shimla", category: "hill", region: "Himachal Pradesh", image: u("1626621341517-bbf3d9990a23"), description: "Colonial summer capital with snow-dusted ridges and the iconic Mall Road.", highlights: ["Mall Road", "Kufri", "Christ Church"], duration: "4N / 5D" },
  { slug: "manali", title: "Manali", category: "hill", region: "Himachal Pradesh", image: u("1626621341517-bbf3d9990a23"), description: "Snow valleys, apple orchards and the wild beauty of the Beas.", highlights: ["Solang Valley", "Hadimba Temple", "Rohtang Pass"], duration: "4N / 5D" },
  { slug: "darjeeling", title: "Darjeeling", category: "hill", region: "West Bengal", image: u("1544813503-5db83f9621bf"), description: "Sunrise over Kanchenjunga, heritage tea gardens and the Toy Train.", highlights: ["Tiger Hill", "Toy Train", "Tea estates"], duration: "3N / 4D" },

  // Waterfalls
  { slug: "talakona", title: "Talakona Waterfalls", category: "waterfall", region: "Andhra Pradesh", image: u("1501785888041-af3ef285b470"), description: "The tallest waterfall in Andhra hidden in lush Sri Venkateswara forests.", highlights: ["Trek through forest", "Wildlife sanctuary"], duration: "1 Day" },
  { slug: "dudhsagar", title: "Dudhsagar Falls", category: "waterfall", region: "Goa", image: u("1564507592333-c60657eea523"), description: "A four-tiered milky cascade plunging through the Western Ghats.", highlights: ["Jeep safari", "Spice plantation", "Train viewpoint"], duration: "1N / 2D" },
  { slug: "athirappilly", title: "Athirappilly Waterfalls", category: "waterfall", region: "Kerala", image: u("1518684079-3c830dcef090"), description: "The Niagara of India set against vast emerald rainforests.", highlights: ["Vazhachal Falls", "Charpa Falls", "Forest drive"], duration: "1N / 2D" },
  { slug: "hogenakkal", title: "Hogenakkal Falls", category: "waterfall", region: "Tamil Nadu", image: u("1467890947394-8171244e5410"), description: "Smoky rocks and coracle rides on the Kaveri's wild gorge.", highlights: ["Coracle ride", "Fish market", "Oil massage"], duration: "1 Day" },
  { slug: "chitrakote", title: "Chitrakote Falls", category: "waterfall", region: "Chhattisgarh", image: u("1511497584788-876760111969"), description: "India's widest horseshoe-shaped waterfall — pure tribal heartland.", highlights: ["Tirathgarh Falls", "Kanger Valley NP"], duration: "2N / 3D" },

  // Beaches
  { slug: "goa", title: "Goa", category: "beach", region: "Goa", image: u("1512343879784-a960bf40e7f2"), description: "Sun, sand and Susegad — beach hopping from Calangute to Palolem.", highlights: ["North & South beaches", "Old Goa churches", "Sunset cruise"], duration: "3N / 4D", featured: true },
  { slug: "pondicherry", title: "Pondicherry", category: "beach", region: "Puducherry", image: u("1582553081138-19c3acaf30bd"), description: "French-quarter charm, Auroville calm and breezy promenades.", highlights: ["White Town", "Auroville", "Paradise Beach"], duration: "2N / 3D" },
  { slug: "vizag-beach", title: "Vizag Beach Tour", category: "beach", region: "Andhra Pradesh", image: u("1507525428034-b723cf961d3e"), description: "Bay of Bengal coastline with Kailasagiri ropeway and Borra caves.", highlights: ["RK Beach", "Submarine Museum", "Kailasagiri"], duration: "2N / 3D" },
  { slug: "andaman", title: "Andaman Islands", category: "beach", region: "Andaman", image: u("1559128010-7c1ad6e1b6a5"), description: "Crystal lagoons, coral reefs and the silent legacy of Cellular Jail.", highlights: ["Radhanagar Beach", "Scuba diving", "Cellular Jail"], duration: "5N / 6D" },
  { slug: "kovalam", title: "Kovalam", category: "beach", region: "Kerala", image: u("1519046904884-53103b34b206"), description: "Crescent-shaped beaches and ayurvedic retreats by the Arabian Sea.", highlights: ["Lighthouse Beach", "Ayurveda spa", "Sunset views"], duration: "2N / 3D" },

  // Pilgrimage
  { slug: "tirupati", title: "Tirupati Balaji", category: "pilgrimage", region: "Andhra Pradesh", image: u("1606293459339-aa5d34a7b0e1"), description: "Darshan of Lord Venkateswara at the world's most visited shrine.", highlights: ["Tirumala Darshan", "Padmavathi Temple", "Kapila Theertham"], duration: "1N / 2D", featured: true },
  { slug: "srisailam", title: "Srisailam", category: "pilgrimage", region: "Andhra Pradesh", image: u("1582510003544-4d00b7f74220"), description: "Jyotirlinga & Shakti Peeth on the banks of the Krishna river.", highlights: ["Mallikarjuna Temple", "Patala Ganga", "Dam view"], duration: "1N / 2D" },
  { slug: "kanaka-durga", title: "Kanaka Durga, Vijayawada", category: "pilgrimage", region: "Andhra Pradesh", image: u("1561361513-2d000a50f0dc"), description: "Hilltop temple of Goddess Durga overlooking the mighty Krishna.", highlights: ["Indrakeeladri", "Prakasam Barrage", "Undavalli Caves"], duration: "1 Day" },
  { slug: "bhadrachalam", title: "Bhadrachalam", category: "pilgrimage", region: "Telangana", image: u("1518002054494-3a6f94352e9d"), description: "Sacred Sri Rama temple on the banks of Godavari.", highlights: ["Sita Ramachandra Swamy", "Parnasala", "Godavari aarti"], duration: "1N / 2D" },
  { slug: "varanasi", title: "Varanasi & Kashi", category: "pilgrimage", region: "Uttar Pradesh", image: u("1561361513-2d000a50f0dc"), description: "The eternal city — Ganga aarti, ghats and timeless spirituality.", highlights: ["Kashi Vishwanath", "Ganga Aarti", "Sarnath"], duration: "3N / 4D" },
  { slug: "rameswaram", title: "Rameswaram", category: "pilgrimage", region: "Tamil Nadu", image: u("1518002054494-3a6f94352e9d"), description: "Sacred Jyotirlinga island linked by the iconic Pamban bridge.", highlights: ["Ramanathaswamy", "Dhanushkodi", "Pamban Bridge"], duration: "2N / 3D" },
  { slug: "kedarnath", title: "Kedarnath", category: "pilgrimage", region: "Uttarakhand", image: u("1626621341517-bbf3d9990a23"), description: "Himalayan abode of Lord Shiva on the Char Dham circuit.", highlights: ["Kedarnath Mandir", "Trek/Heli", "Gaurikund"], duration: "5N / 6D" },
  { slug: "badrinath", title: "Badrinath", category: "pilgrimage", region: "Uttarakhand", image: u("1626621341517-bbf3d9990a23"), description: "Holy seat of Lord Vishnu nestled in the Garhwal Himalayas.", highlights: ["Badrinath Temple", "Mana Village", "Tapt Kund"], duration: "5N / 6D" },
  { slug: "vaishno-devi", title: "Vaishno Devi", category: "pilgrimage", region: "Jammu & Kashmir", image: u("1605649487212-47bdab064df7"), description: "Trek through the Trikuta hills to the divine Mata's shrine.", highlights: ["Bhawan Darshan", "Bhairon Temple", "Helicopter option"], duration: "3N / 4D" },
  { slug: "puri", title: "Jagannath Puri", category: "pilgrimage", region: "Odisha", image: u("1518002054494-3a6f94352e9d"), description: "Lord Jagannath's sacred dham by the roaring Bay of Bengal.", highlights: ["Jagannath Temple", "Konark Sun Temple", "Puri Beach"], duration: "3N / 4D" },

  // Adventure & Special
  { slug: "leh-ladakh", title: "Leh Ladakh", category: "adventure", region: "Ladakh", image: u("1626015449154-cda9d3aa7e8f"), description: "Moonscapes, monasteries and the highest motorable roads on earth.", highlights: ["Pangong Lake", "Nubra Valley", "Khardung La"], duration: "6N / 7D" },
  { slug: "kashmir", title: "Kashmir", category: "adventure", region: "Jammu & Kashmir", image: u("1566936737687-8f392a237b8b"), description: "Paradise on earth — Dal Lake shikaras, Gulmarg snow and Pahalgam meadows.", highlights: ["Shikara ride", "Gondola Gulmarg", "Betaab Valley"], duration: "5N / 6D", featured: true },
  { slug: "rajasthan", title: "Rajasthan Desert Tour", category: "adventure", region: "Rajasthan", image: u("1599661046827-dacde6976549"), description: "Forts, palaces and Thar dunes — royal India in full color.", highlights: ["Jaisalmer dunes", "Udaipur lakes", "Jodhpur Blue City"], duration: "6N / 7D" },
  { slug: "kerala-backwaters", title: "Kerala Backwaters", category: "adventure", region: "Kerala", image: u("1602216056096-3b40cc0c9944"), description: "Houseboat through Alleppey palms, ayurveda and coconut coast.", highlights: ["Houseboat stay", "Kumarakom", "Marari Beach"], duration: "4N / 5D", featured: true },
  { slug: "meghalaya", title: "Meghalaya", category: "adventure", region: "Meghalaya", image: u("1518684079-3c830dcef090"), description: "Living root bridges, cleanest village and waterfalls of the abode of clouds.", highlights: ["Cherrapunji", "Mawlynnong", "Dawki river"], duration: "4N / 5D" },
  { slug: "north-east", title: "North East India Grand Tour", category: "adventure", region: "North East", image: u("1544735716-392fe2489ffa"), description: "Seven sisters across hidden valleys, monasteries and unspoilt culture.", highlights: ["Tawang", "Kaziranga safari", "Majuli island"], duration: "8N / 9D" },
];

export const getByCategory = (cat: Package["category"]) => packages.filter(p => p.category === cat);
export const featured = packages.filter(p => p.featured);
