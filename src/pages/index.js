import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import { Instagram, MapPin, Linkedin } from "lucide-react";
import favicon from '../images/favicon.png';

// Menu data (unchanged)
const menuItems = [
  {
    name: "Glorious Red",
    description: "✨ A powerhouse of freshness! 🍏❤️ Glorious Red is a vibrant blend of Apple, Beetroot, and Carrot—naturally sweet, nutrient-packed, and refreshingly delicious! 🥤💪",
    price: "Rs. 70",
    image: "/uploads/gloriousRed.png"
  },
  {
    name: "Theple",
    description: "A classic, flavorful treat from Gujarat! ✨ Thepla is a soft, spiced, and healthy flatbread, made with wheat flour, fresh methi (fenugreek), and aromatic spices—perfect for a nutritious meal or a trave ...Read More",
    price: "Rs. 80",
    image: "/uploads/theple.jpg"
  },
  {
    name: "Sprout Salad",
    description: "🥦 Short Description: A crunchy, protein-packed delight! 🥗 Sprout Salad is a nutritious mix of Chana, Corn, Kheera, Gajar, Paneer, and homemade sauces, perfect for a healthy & fulfilling meal! 🌽🥕",
    price: "Rs. 80",
    image: "/uploads/sprout.jpg"
  },
  {
    name: "Healthy Choclates",
    description: "Decadent, smooth, and naturally sweet! 🍫 DrinkCart Chocolate is crafted with premium cocoa, honey, and coconut oil, delivering a rich, melt-in-your-mouth experience without refined sugars! Available in exciting variants with nuts, cashews, or raisins for an extra delightful crunch! 🌰✨",
    price: "Rs. 80",
    image: "/uploads/choclate.jpeg"
  }
];

// Founders data (unchanged)
const founders = [
  {
    name: "Ishant Garg",
    role: "Co-Founder",
    bio: "A B.Tech engineer and former Operations Manager at Flipkart, Ishant leads the operations at DrinkCart, ensuring smooth and efficient management.",
    image: "/uploads/ishant.jpg"
  },
  {
    name: "Love Kaushik",
    role: "Co-Founder",
    bio: "A seasoned software engineer with experience in multiple startups, Love is currently working in an MNC handling major projects while managing the tech side of DrinkCart.",
    image: "/uploads/love.jpg"
  }
];

const IndexPage = () => {
  const menuRef = useRef(null);
  const storyRef = useRef(null);
  
  const scrollToMenu = () => {
    menuRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToStory = () => {
    storyRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      <Helmet>
        <title>DrinkCart - Fresh. Healthy. Delicious.</title>
        <meta name="description" content="DrinkCart brings you fresh, nutrient-packed juices to keep you energized and healthy tasty salads, meals and chocolates!" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" type="image/png" href={favicon} />
        <link rel="shortcut icon" type="image/png" href={favicon} />
        <link rel="apple-touch-icon" type="image/png" href={favicon} />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      
      {/* Hero Section - Improved Mobile Responsiveness */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto">
          <img src="/uploads/logo.png" alt="DrinkCart" className="w-24 sm:w-32 mx-auto mb-6" />
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl text-orange-500 font-semibold mb-2">The Wait Is Over!</h2>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-green-600 mb-4">DrinkCart is Here!!</h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-500 mb-2">
              Fresh. Healthy. Delicious.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 px-4">
              DrinkCart brings you fresh, nutrient-packed juices, wholesome salads, nourishing meals, and guilt-free healthy chocolates—fueling your day with taste and wellness!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
  <button
    onClick={scrollToMenu}
    className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
  >
    View Our Menu
  </button>
  <button
    onClick={scrollToStory}
    className="w-full sm:w-auto bg-green-700 hover:bg-green-800 text-white font-semibold px-6 sm:px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
  >
    Our Story
  </button>
</div>
        </div>
        
        <div className="absolute bottom-6 left-0 right-0 flex justify-center animate-bounce">
          <svg className="w-6 h-6 text-green-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Menu Preview - Improved Mobile Layout */}
      <section ref={menuRef} className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-green-800 mb-8 sm:mb-12">
            Our Popular Items
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {menuItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 border border-green-100"
              >
                <div className="h-48 sm:h-64 flex items-center justify-center p-4 bg-green-50">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="max-w-full max-h-full object-scale-down" 
                  />
                </div>
                <div className="p-4 sm:p-6 bg-white">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-lg sm:text-xl text-green-800">{item.name}</h3>
                    <span className="font-semibold text-orange-600 text-base sm:text-base">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-700 text-xs sm:text-sm line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 sm:mt-12 text-center">
            <a 
              href="https://www.drinkcart.in" 
              className="inline-block border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white font-medium px-6 py-2 rounded-full transition-colors duration-300"
            >
              See Full Menu
            </a>
          </div>
        </div>
      </section>

      {/* Our Story / Founders Section - Mobile-Friendly Layout */}
      <section ref={storyRef} className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-green-700 mb-6">
            Our Story
          </h2>
          <p className="text-base sm:text-base text-gray-700 text-center max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
            <span className="text-green-600 font-semibold">DrinkCart</span> started with a simple mission: to provide convenient, nutritious refreshment to busy college students and faculty. Having already been a campus favorite among teachers, we are now expanding to serve even more students with fresh, wholesome choices.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {founders.map((founder, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center md:flex-row items-center md:items-start gap-6"
              >
                <div className="w-36 h-36 sm:w-48 sm:h-48 flex-shrink-0">
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full rounded-full object-cover shadow-md"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-green-600">{founder.name}</h3>
                  <p className="text-orange-500 font-medium mb-2 text-base">{founder.role}</p>
                  <p className="text-gray-600 text-sm sm:text-base">{founder.bio}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 sm:mt-12 bg-green-50 p-4 sm:p-6 rounded-lg shadow-sm">
            <blockquote className="italic text-gray-700 text-center text-sm sm:text-base">
              ~"We believe that healthy living should be accessible to everyone. Our juices, salads, and meals are freshly prepared with care, using natural ingredients and no preservatives—crafted hygienically with guidance from nutritionists and dietitians."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Contact Section - Mobile-Friendly Layout */}
      <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8 bg-green-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-green-700 mb-8">
            Find Us
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-xl p-6 sm:p-8 shadow-md">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start text-gray-700 mb-3">
                <MapPin className="h-5 w-5 text-orange-500 mr-2" />
                <span className="font-medium text-sm sm:text-base">Girls' Hostel Canteen, Manav Rachna</span>
              </div>
              <p className="text-gray-600 mb-2 sm:mb-4 text-sm sm:text-base">
                We're open Monday-Friday, 11:30am-3:00pm
              </p>
              <p className="text-gray-600 text-sm sm:text-base">
                For any queries: Call us at <a href="tel:+919310864432" className="text-black font-medium">(+91)9310864432</a>
              </p>
            </div>
            
            <div className="text-center md:text-right mt-4 md:mt-0">
              <h3 className="font-semibold text-gray-800 mb-3 text-sm sm:text-base">Follow Us</h3>
              <div className="flex space-x-4 justify-center md:justify-end">
                <a 
                  href="https://www.instagram.com/drinkcart.in/" 
                  className="text-green-600 hover:text-orange-500 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a 
                  href="https://in.linkedin.com/company/drink-cart" 
                  className="text-green-600 hover:text-orange-500 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 sm:mt-12 text-center text-gray-500 text-xs sm:text-sm">
            <p>© {new Date().getFullYear()} DrinkCart. All rights reserved.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IndexPage;