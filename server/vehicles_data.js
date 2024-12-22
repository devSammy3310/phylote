import express from "express";

const all_armored_vehicles = [
  {
    ID: "Cadillac-Escalade",
    image: [
      { src: "/img/escalade/escalade1.jpg", alt: "armored vehicle" },
      { src: "/img/escalade/escalade2.jpg", alt: "armored vehicle" },
      { src: "/img/escalade/escalade3.jpg", alt: "armored vehicle" },
      { src: "/img/escalade/escalade4.jpg", alt: "armored vehicle" },
      { src: "/img/escalade/escalade5.jpg", alt: "armored vehicle" },
      { src: "/img/escalade/escalade6.jpg", alt: "armored vehicle" },
      { src: "/img/escalade/escalade7.jpg", alt: "armored vehicle" },
      { src: "/img/escalade/escalade8.jpg", alt: "armored vehicle" },
    ],
    name: "Cadillac Escalade",
    details:
      "Cadillac Escalade is quite popular among SUV lovers. Its design, safety features, protection level, driving assistant features, and everything else are just superb. The vehicle comes with a 6.2 L V8 engine that is enough to get you anywhere both on-road and off-road. The vehicle is also highly protected and can withstand several rounds of high-powered guns, explosive threats like DM51 grenades and IEDs. You can travel in this vehicle anytime, anywhere, alone, or with your family without any fear. Many safety and driving assistant systems have made it one of the most common armored vehicles in the world.",
    features: [
      "6.2 L V8 engine",
      "High protection against high-powered guns",
      "Explosive resistance (DM51 grenades, IEDs)",
      "Advanced safety and driving assistant systems",
      "Off-road and on-road capability",
    ],
    specifications: [
      { spec: "Engine", value: "6.2 L V8" },
      { spec: "Horsepower", value: "420 hp" },
      { spec: "Torque", value: "460 lb-ft" },
      { spec: "Transmission", value: "10-speed automatic" },
      { spec: "Top Speed", value: "210 km/h" },
    ],
  },

  {
    ID: "Armored-Toyota-Land-Cruiser-TLC-200-Series",
    image: [
      { src: "/img/camry/TLC-200-G-Oct2.jpg", alt: "armored vehicle" },
      { src: "/img/camry/TLC-200-G-Oct.jpg", alt: "armored vehicle" },
    ],
    name: "Armored Toyota Land Cruiser (TLC) 200 Series",
    details:
      "The Armored Toyota Land Cruiser (TLC) 200 Series is a heavy-duty armored vehicle designed for extreme conditions. With enhanced protection against high-powered firearms, explosive devices, and other threats, this vehicle ensures safety in hostile environments. Its robust build and powerful engine make it a popular choice for military and VIP transportation, especially in regions with high-security risks. The vehicle is equipped with advanced security systems, making it one of the most reliable armored vehicles on the market.",
    features: [
      "Heavy-duty armored body",
      "Protection against high-powered firearms",
      "Explosive resistance (mines, IEDs)",
      "Powerful off-road capability",
      "Advanced security systems for VIP transportation",
    ],
    specifications: [
      { spec: "Engine", value: "5.7 L V8" },
      { spec: "Horsepower", value: "400 hp" },
      { spec: "Torque", value: "500 lb-ft" },
      { spec: "Transmission", value: "6-speed automatic" },
      { spec: "Top Speed", value: "180 km/h" },
    ],
  },

  {
    ID: "Armored-Toyota-Land-Cruiser-TLC-300",
    image: [
      { src: "/img/camry/TLC-300-Jan3.jpg", alt: "armored vehicle" },
      { src: "/img/camry/TLC-300-Jan4.jpg", alt: "armored vehicle" },
    ],
    name: "Armored Toyota Land Cruiser (TLC) 300 Series",
    details:
      "The Armored Toyota Land Cruiser (TLC) 300 Series is a more advanced version of the TLC series, designed for enhanced durability and protection. This vehicle offers superior performance in harsh environments, providing safety against high-powered firearms, explosives, and other threats. With its powerful engine and top-notch off-road capability, the TLC-300 is ideal for military, government, and VIP transportation in risky regions. It comes equipped with advanced security systems and reinforced armor, making it one of the most reliable and robust armored vehicles available.",
    features: [
      "Advanced armored body for superior protection",
      "Resistance to high-powered firearms and explosives",
      "Improved off-road capability and durability",
      "Top-tier security systems for VIP transportation",
      "Ideal for military and high-risk civilian use",
    ],
    specifications: [
      { spec: "Engine", value: "4.5 L V6" },
      { spec: "Horsepower", value: "350 hp" },
      { spec: "Torque", value: "600 lb-ft" },
      { spec: "Transmission", value: "8-speed automatic" },
      { spec: "Top Speed", value: "200 km/h" },
    ],
  },
  {
    ID: "Armored-Sprinter-Van",
    image: [
      { src: "/img/coaster/sprinter1.jpg", alt: "armored vehicle" },
      { src: "/img/coaster/sprinter2.jpg", alt: "armored vehicle" },
      { src: "/img/coaster/sprinter4.jpg", alt: "armored vehicle" },
      { src: "/img/coaster/sprinter5.jpg", alt: "armored vehicle" },
    ],
    name: "Armored Sprinter Van",
    details:
      "The Armored Sprinter Van is designed to provide a safe and secure mode of transport, especially for VIPs, high-profile individuals, or secure cargo. Built with a robust, reinforced body and equipped with advanced security systems, it can withstand ballistic threats, explosives, and other hostile forces. The van's interior is customizable for both comfort and security, making it ideal for people needing protection during travel. With its spacious design and armored features, it combines practicality with security, making it a popular choice for secure transport.",
    features: [
      "Heavy-duty armored body for maximum protection",
      "Ballistic-resistant windows and doors",
      "Explosive resistance (IEDs, mines)",
      "Customizable interior for both luxury and security",
      "Advanced security systems for high-risk transportation",
    ],
    specifications: [
      { spec: "Engine", value: "3.0 L V6" },
      { spec: "Horsepower", value: "188 hp" },
      { spec: "Torque", value: "325 lb-ft" },
      { spec: "Transmission", value: "7-speed automatic" },
      { spec: "Top Speed", value: "160 km/h" },
    ],
  },
  {
    ID: "Armored-Maybach",
    image: [
      { src: "/img/maybach/maybach1.jpg", alt: "armored vehicle" },
      { src: "/img/maybach/maybach2.jpg", alt: "armored vehicle" },
      { src: "/img/maybach/maybach3.jpg", alt: "armored vehicle" },
      { src: "/img/maybach/maybach4.jpg", alt: "armored vehicle" },
      { src: "/img/maybach/maybach5.jpg", alt: "armored vehicle" },
    ],
    name: "Armored Maybach",
    details:
      "The Armored Maybach is the epitome of luxury and security combined. Designed for high-profile individuals who require the best protection without compromising on comfort, the Maybach offers state-of-the-art armored features to guard against high-powered firearms, explosives, and other threats. With its refined interior, advanced technology, and bulletproof exteriors, this vehicle is the perfect choice for those who demand both luxury and peace of mind. The vehicle’s unparalleled comfort and security systems make it one of the most prestigious armored cars in the world.",
    features: [
      "Bulletproof glass and reinforced body",
      "Advanced defensive systems for high-risk environments",
      "Luxury interior with customizable options",
      "Protection against high-powered firearms and explosives",
      "State-of-the-art air filtration and emergency communication systems",
    ],
    specifications: [
      { spec: "Engine", value: "6.0 L V12 twin-turbo" },
      { spec: "Horsepower", value: "630 hp" },
      { spec: "Torque", value: "1000 Nm" },
      { spec: "Transmission", value: "7-speed automatic" },
      { spec: "Top Speed", value: "250 km/h" },
    ],
  },

  {
    ID: "Armored-Mercedes-G-Wagon",
    image: [
      {
        src: "/img/Mercedes_G_Wagon/Mercedes_G_Wagon1.jpg",
        alt: "armored vehicle",
      },
      {
        src: "/img/Mercedes_G_Wagon/Mercedes_G_Wagon2.jpg",
        alt: "armored vehicle",
      },
    ],
    name: "Armored Mercedes G-Wagon",
    details:
      "The Armored Mercedes G-Wagon is a symbol of strength, luxury, and performance. Designed for both off-road capability and high-level protection, the G-Wagon is a popular choice for VIPs, dignitaries, and celebrities. With its reinforced body and bulletproof glass, it offers protection against a wide range of threats, including firearms and explosives. The rugged exterior, combined with a luxurious interior, makes the G-Wagon an ideal vehicle for those who require both security and comfort. It’s built to perform under the most extreme conditions, ensuring the safety of its occupants at all times.",
    features: [
      "Bulletproof glass and armored body",
      "Off-road capability with military-grade suspension",
      "Protection against high-powered firearms and explosives",
      "Spacious, luxurious interior with advanced comfort features",
      "State-of-the-art security and defensive systems",
    ],
    specifications: [
      { spec: "Engine", value: "4.0 L V8 biturbo" },
      { spec: "Horsepower", value: "577 hp" },
      { spec: "Torque", value: "850 Nm" },
      { spec: "Transmission", value: "9-speed automatic" },
      { spec: "Top Speed", value: "210 km/h" },
    ],
  },

  {
    ID: "Armored-Dodge-Charger-SRT-Hellcat",
    image: [
      {
        src: "/img/Dodge/Dodge_Charger_SRT_Hellcat1.jpg",
        alt: "armored vehicle",
      },
      {
        src: "/img/Dodge/Dodge_Charger_SRT_Hellcat2.jpg",
        alt: "armored vehicle",
      },
    ],
    name: "Armored Dodge Charger SRT Hellcat",
    details:
      "The Armored Dodge Charger SRT Hellcat is a high-performance muscle car that combines speed, power, and unmatched security. Designed for individuals who seek both adrenaline and protection, the Hellcat features a reinforced body, bulletproof glass, and advanced safety systems. Its robust engine ensures superior performance, while its armored enhancements provide protection against ballistic and explosive threats. The interior is luxurious and fully customizable, making it a versatile choice for those who need a blend of performance, style, and safety.",
    features: [
      "Reinforced body with ballistic protection",
      "Bulletproof glass for high-security environments",
      "High-performance engine for rapid escape scenarios",
      "Luxurious and customizable interior",
      "Protection against firearms and explosive threats",
    ],
    specifications: [
      { spec: "Engine", value: "6.2 L Supercharged HEMI V8" },
      { spec: "Horsepower", value: "707 hp" },
      { spec: "Torque", value: "650 lb-ft" },
      { spec: "Transmission", value: "8-speed automatic" },
      { spec: "Top Speed", value: "315 km/h" },
    ],
  },

  {
    ID: "BMW-X5M",
    image: [
      {
        src: "/img/BMW/BMW-X5M1.jpg",
        alt: "BMW X5M front view",
      },
      {
        src: "/img/BMW/BMW-X5M2.jpg",
        alt: "BMW-X5M",
      },

      {
        src: "/img/BMW/BMW-X5M3.jpg",
        alt: "BMW-X5M",
      },

      {
        src: "/img/BMW/BMW-X5M4.jpg",
        alt: "BMW-X5M",
      },

      {
        src: "/img/BMW/BMW-X5M5.jpg",
        alt: "BMW-X5M",
      },

      {
        src: "/img/BMW/BMW-X5M6.jpg",
        alt: "BMW-X5M",
      },

      {
        src: "/img/BMW/BMW-X5M7.jpg",
        alt: "BMW-X5M",
      },
    ],
    name: "Armored BMW X5M",
    details:
      "The BMW X5M is a luxury performance SUV that combines extraordinary power, cutting-edge technology, and refined craftsmanship. With its advanced drivetrain, adaptive suspension, and luxurious interior, it is designed for drivers who demand versatility and uncompromising performance. Whether conquering winding roads or cruising through urban landscapes, the X5M delivers unparalleled driving dynamics and style.",
    features: [
      "4.4L TwinPower Turbo V8 engine delivering 617 horsepower",
      "Adaptive M suspension with dynamic damper control",
      "Luxurious Merino leather interior with sport seats",
      "14.9-inch curved infotainment display with iDrive 8.0",
      "Bowers & Wilkins Diamond Surround Sound system",
      "Advanced driver assistance systems for enhanced safety",
      "Panoramic Sky Lounge with illuminated glass roof",
    ],
    specifications: [
      { spec: "Engine", value: "4.4L TwinPower Turbo V8" },
      { spec: "Horsepower", value: "617 HP" },
      { spec: "Torque", value: "750 Nm" },
      { spec: "Transmission", value: "8-speed automatic" },
      { spec: "Top Speed", value: "290 km/h" },
      { spec: "Acceleration (0-100 km/h)", value: "3.7 seconds" },
      { spec: "Drivetrain", value: "All-Wheel Drive (xDrive)" },
      { spec: "Fuel Economy", value: "12.3 L/100 km (combined)" },
    ],
  },

  {
    ID: "GMC-Denali",
    image: [
      {
        src: "/img/GMC/GMC_Denali4.jpg",
        alt: "GMC Denali front view",
      },
      {
        src: "/img/GMC/GMC_Denali2.jpg",
        alt: "GMC Denali side view",
      },

      {
        src: "/img/GMC/GMC_Denali3.jpg",
        alt: "GMC Denali side view",
      },

      {
        src: "/img/GMC/GMC_Denali1.jpg",
        alt: "GMC Denali side view",
      },

      {
        src: "/img/GMC/GMC_Denali5.jpg",
        alt: "GMC Denali side view",
      },
    ],
    name: "Armored GMC Denali",
    details:
      "The GMC Denali is a premium full-size SUV renowned for its bold design, luxurious interior, and robust performance capabilities. Perfect for both urban commutes and adventurous terrains, the Denali offers an unmatched blend of comfort, technology, and power. With advanced safety features, high-end materials, and innovative technology, it redefines luxury in the SUV market.",
    features: [
      "6.2L V8 engine with exceptional towing capacity",
      "Advanced Adaptive Ride Control for superior comfort",
      "Premium leather-appointed seats and real wood accents",
      "13.4-inch infotainment system with wireless Apple CarPlay and Android Auto",
      "Bose 14-speaker audio system for immersive sound",
      "Hands-free power liftgate with programmable height adjustment",
      "Comprehensive suite of advanced driver assistance systems",
    ],
    specifications: [
      { spec: "Engine", value: "6.2L V8" },
      { spec: "Horsepower", value: "420 HP" },
      { spec: "Torque", value: "624 Nm" },
      { spec: "Transmission", value: "10-speed automatic" },
      { spec: "Towing Capacity", value: "8,000 lbs (3,628 kg)" },
      { spec: "Fuel Economy", value: "15 L/100 km (combined)" },
      { spec: "Drivetrain", value: "All-Wheel Drive" },
      {
        spec: "Cargo Space",
        value: "722 L (expandable to 3,480 L with rear seats folded)",
      },
    ],
  },

  {
    ID: "Range-Rover",
    image: [
      {
        src: "/img/range_rover/range_rover1.jpg",
        alt: "Range Rover front view",
      },
      {
        src: "/img/range_rover/range_rover2.jpg",
        alt: "Range Rover side profile",
      },
      {
        src: "/img/range_rover/range_rover3.jpg",
        alt: "Range Rover rear view",
      },
      {
        src: "/img/range_rover/range_rover4.jpg",
        alt: "Range Rover interior dashboard",
      },
      {
        src: "/img/range_rover/range_rover5.jpg",
        alt: "Range Rover interior seats",
      },
      {
        src: "/img/range_rover/range_rover6.jpg",
        alt: "Range Rover panoramic roof",
      },
      {
        src: "/img/range_rover/range_rover7.jpg",
        alt: "Range Rover on rugged terrain",
      },
      {
        src: "/img/range_rover/range_rover8.jpg",
        alt: "Range Rover LED headlights",
      },
      {
        src: "/img/range_rover/range_rover9.jpg",
        alt: "Range Rover luxury interior",
      },
      {
        src: "/img/range_rover/range_rover10.jpg",
        alt: "Range Rover on city streets",
      },
    ],
    name: "Armored Range Rover",
    details:
      "The Range Rover is the ultimate luxury SUV, offering unparalleled refinement, advanced technology, and extraordinary off-road capabilities. With its distinctive design and premium materials, the Range Rover provides an exceptional driving experience for those who seek elegance, power, and versatility.",
    features: [
      "5.0L Supercharged V8 engine for superior performance",
      "Electronic Air Suspension for unmatched ride comfort",
      "Luxurious Windsor leather interior with customizable options",
      "13.1-inch touchscreen infotainment with Pivi Pro system",
      "Meridian Signature Sound System with 35 speakers",
      "Advanced Terrain Response system for all driving conditions",
      "Panoramic sunroof with adjustable tint levels",
      "Comprehensive driver assistance technologies",
      "Configurable ambient lighting with 30 color options",
      "Seating for up to seven passengers with ample legroom",
    ],
    specifications: [
      { spec: "Engine", value: "5.0L Supercharged V8" },
      { spec: "Horsepower", value: "518 HP" },
      { spec: "Torque", value: "625 Nm" },
      { spec: "Transmission", value: "8-speed automatic" },
      { spec: "Top Speed", value: "240 km/h" },
      { spec: "Acceleration (0-100 km/h)", value: "5.4 seconds" },
      { spec: "Drivetrain", value: "All-Wheel Drive" },
      { spec: "Fuel Economy", value: "13.5 L/100 km (combined)" },
      {
        spec: "Cargo Space",
        value: "900 L (expandable to 1,946 L with rear seats folded)",
      },
      { spec: "Towing Capacity", value: "7,716 lbs (3,500 kg)" },
    ],
  },

  {
    ID: "Ford-Expedition",
    image: [
      {
        src: "/img/ford_expedition/ford_expedition1.jpg",
        alt: "Ford Expedition",
      },
      {
        src: "/img/ford_expedition/ford_expedition2.jpg",
        alt: "Ford Expedition",
      },
      {
        src: "/img/ford_expedition/ford_expedition3.jpg",
        alt: "Ford Expedition",
      },
      {
        src: "/img/ford_expedition/ford_expedition4.jpg",
        alt: "Ford Expedition",
      },
      {
        src: "/img/ford_expedition/ford_expedition5.jpg",
        alt: "Ford Expedition",
      },
      {
        src: "/img/ford_expedition/ford_expedition6.jpg",
        alt: "Ford Expedition",
      },
      {
        src: "/img/ford_expedition/ford_expedition7.jpg",
        alt: "Ford Expedition",
      },
      {
        src: "/img/ford_expedition/ford_expedition8.jpg",
        alt: "Ford Expedition",
      },
      {
        src: "/img/ford_expedition/ford_expedition9.jpg",
        alt: "Ford Expedition",
      },
    ],
    name: "Armored Ford Expedition",
    details:
      "The Ford Expedition is a full-size SUV designed to handle family adventures and daily commutes with ease. Combining robust power, advanced technology, and a spacious interior, the Expedition offers a perfect balance of comfort and capability. With its commanding presence and off-road prowess, it’s ready for any journey.",
    features: [
      "3.5L EcoBoost V6 engine with impressive towing capacity",
      "Available 4x4 system with Terrain Management",
      "Spacious interior with seating for up to eight passengers",
      "12-inch SYNC 4 touchscreen with wireless Apple CarPlay and Android Auto",
      "Premium Bang & Olufsen sound system with 12 speakers",
      "Panoramic Vista Roof for an open-air feel",
      "Hands-free power liftgate for convenient loading",
      "Ford Co-Pilot360 suite of driver assistance technologies",
      "Customizable ambient lighting for enhanced ambiance",
    ],
    specifications: [
      { spec: "Engine", value: "3.5L EcoBoost V6" },
      { spec: "Horsepower", value: "400 HP" },
      { spec: "Torque", value: "650 Nm" },
      { spec: "Transmission", value: "10-speed automatic" },
      { spec: "Towing Capacity", value: "9,300 lbs (4,218 kg)" },
      { spec: "Fuel Economy", value: "12.4 L/100 km (combined)" },
      { spec: "Drivetrain", value: "Rear-Wheel Drive (4x4 available)" },
      {
        spec: "Cargo Space",
        value: "593 L (expandable to 2,961 L with rear seats folded)",
      },
      { spec: "Seating Capacity", value: "Up to 8 passengers" },
    ],
  },

  {
    ID: "Armored-Lexus-LX600",
    image: [
      { src: "/img/lexus_lx600/lexus_lx6001.jpg", alt: "Armored Lexus LX600" },
      { src: "/img/lexus_lx600/lexus_lx6002.jpg", alt: "Armored Lexus LX600" },
      { src: "/img/lexus_lx600/lexus_lx6003.jpg", alt: "Armored Lexus LX600" },
      { src: "/img/lexus_lx600/lexus_lx6004.jpg", alt: "Armored Lexus LX600" },
      { src: "/img/lexus_lx600/lexus_lx6005.jpg", alt: "Armored Lexus LX600" },
      { src: "/img/lexus_lx600/lexus_lx6006.jpg", alt: "Armored Lexus LX600" },
      { src: "/img/lexus_lx600/lexus_lx6007.jpg", alt: "Armored Lexus LX600" },
      { src: "/img/lexus_lx600/lexus_lx6008.jpg", alt: "Armored Lexus LX600" },
      { src: "/img/lexus_lx600/lexus_lx6009.jpg", alt: "Armored Lexus LX600" },
    ],
    name: "Armored Lexus LX600",
    details:
      "The Armored Lexus LX600 combines luxury and advanced security, offering a premium driving experience with uncompromised protection. Designed to withstand ballistic threats and ensure passenger safety, this vehicle features reinforced armor, bulletproof glass, and high-tech defensive systems. Its luxurious interior and powerful performance make it the perfect choice for those requiring elegance and security.",
    features: [
      "Reinforced body with advanced ballistic protection",
      "Bulletproof glass for enhanced security",
      "5.7L V8 engine with exceptional performance",
      "Spacious and luxurious leather-appointed interior",
      "12.3-inch infotainment system with navigation",
      "Panoramic moonroof for added luxury",
      "Advanced climate control system",
      "High-performance brakes and suspension for extra weight",
      "Comprehensive safety and defensive systems",
    ],
    specifications: [
      { spec: "Engine", value: "3.5L Twin-Turbo V6" },
      { spec: "Horsepower", value: "409 HP" },
      { spec: "Torque", value: "650 Nm" },
      { spec: "Transmission", value: "10-speed automatic" },
      { spec: "Drivetrain", value: "All-Wheel Drive" },
      { spec: "Fuel Economy", value: "12.1 L/100 km (combined)" },
      { spec: "Ballistic Protection Level", value: "CEN B6/B7" },
      { spec: "Seating Capacity", value: "7 passengers" },
      {
        spec: "Cargo Space",
        value: "647 L (expandable to 1,480 L with rear seats folded)",
      },
    ],
  },

  {
    ID: "Lincoln-Navigator",
    image: [
      {
        src: "/img/lincoln_navigator/lincoln_navigator1.jpg",
        alt: "Lincoln Navigator",
      },
      {
        src: "/img/lincoln_navigator/lincoln_navigator2.jpg",
        alt: "Lincoln Navigator",
      },
      {
        src: "/img/lincoln_navigator/lincoln_navigator3.jpg",
        alt: "Lincoln Navigator",
      },
      {
        src: "/img/lincoln_navigator/lincoln_navigator4.jpg",
        alt: "Lincoln Navigator",
      },
      {
        src: "/img/lincoln_navigator/lincoln_navigator5.jpg",
        alt: "Lincoln Navigator",
      },
    ],
    name: "Armored Lincoln Navigator",
    details:
      "The Lincoln Navigator is a full-size luxury SUV that delivers a perfect blend of opulence, performance, and advanced technology. With its commanding presence and meticulously crafted interior, the Navigator offers a premium driving experience. Designed for those who seek luxury and capability, it is equally suited for urban commutes and long road trips.",
    features: [
      "3.5L Twin-Turbo V6 engine with impressive towing capacity",
      "Adaptive suspension for a smooth and refined ride",
      "Lavish interior with leather seating and wood accents",
      "13.2-inch infotainment system with SYNC 4 technology",
      "Revel Ultima 20-speaker audio system for immersive sound",
      "Panoramic Vista Roof for a brighter and more open cabin",
      "Heated, ventilated, and massaging front seats",
      "Lincoln Co-Pilot360 suite of advanced driver assistance features",
    ],
    specifications: [
      { spec: "Engine", value: "3.5L Twin-Turbo V6" },
      { spec: "Horsepower", value: "440 HP" },
      { spec: "Torque", value: "691 Nm" },
      { spec: "Transmission", value: "10-speed automatic" },
      { spec: "Towing Capacity", value: "8,700 lbs (3,946 kg)" },
      { spec: "Drivetrain", value: "Rear-Wheel Drive (AWD available)" },
      { spec: "Fuel Economy", value: "11.8 L/100 km (combined)" },
      {
        spec: "Cargo Space",
        value: "538 L (expandable to 2,946 L with rear seats folded)",
      },
      { spec: "Seating Capacity", value: "Up to 7 passengers" },
    ],
  },

  {
    ID: "2024_Volvo_XC_90",
    image: [
      { src: "/img/2024_Volvo_XC_90/2024_Volvo_XC_901.jpg", alt: "Volvo XC90" },
      { src: "/img/2024_Volvo_XC_90/2024_Volvo_XC_902.jpg", alt: "Volvo XC90" },
      { src: "/img/2024_Volvo_XC_90/2024_Volvo_XC_903.jpg", alt: "Volvo XC90" },
      { src: "/img/2024_Volvo_XC_90/2024_Volvo_XC_904.jpg", alt: "Volvo XC90" },
      { src: "/img/2024_Volvo_XC_90/2024_Volvo_XC_905.jpg", alt: "Volvo XC90" },
      { src: "/img/2024_Volvo_XC_90/2024_Volvo_XC_906.jpg", alt: "Volvo XC90" },
    ],
    name: "armored Volvo XC90",
    details:
      "The Volvo XC90 is a luxury SUV that seamlessly combines Scandinavian elegance with cutting-edge technology and eco-friendly performance. Offering spacious seating, advanced safety features, and a commitment to sustainability, the XC90 is perfect for families and individuals seeking premium comfort and efficiency in their travels.",
    features: [
      "2.0L Turbocharged and Supercharged 4-cylinder engine with hybrid options",
      "Elegant Scandinavian design with premium materials",
      "Advanced Pilot Assist for semi-autonomous driving",
      "12.3-inch digital driver display and 9-inch infotainment system",
      "Bowers & Wilkins sound system for immersive audio",
      "Panoramic sunroof for an open and airy cabin",
      "Advanced safety suite including City Safety Collision Avoidance",
      "Customizable ambient lighting",
    ],
    specifications: [
      {
        spec: "Engine",
        value: "2.0L Turbocharged/Supercharged I4 (Hybrid Option Available)",
      },
      { spec: "Horsepower", value: "316 HP (400 HP with Hybrid)" },
      { spec: "Torque", value: "400 Nm" },
      { spec: "Transmission", value: "8-speed automatic" },
      { spec: "Drivetrain", value: "All-Wheel Drive" },
      { spec: "Fuel Economy", value: "9.4 L/100 km (combined)" },
      { spec: "Seating Capacity", value: "Up to 7 passengers" },
      {
        spec: "Cargo Space",
        value: "447 L (expandable to 2,426 L with rear seats folded)",
      },
    ],
  },

  {
    ID: "Hummer_B7",
    image: [
      { src: "/img/Hummer_B7/Hummer_B701.jpg", alt: "Hummer B7" },
      { src: "/img/Hummer_B7/Hummer_B702.jpg", alt: "Hummer B7" },
      { src: "/img/Hummer_B7/Hummer_B703.jpg", alt: "Hummer B7" },
      { src: "/img/Hummer_B7/Hummer_B704.jpg", alt: "Hummer B7" },
    ],
    name: "armored Hummer B7",
    details:
      "The Hummer B7 is a rugged, military-inspired vehicle known for its powerful performance and ability to tackle the most demanding terrains. Combining iconic Hummer styling with modern technology and robust capabilities, it’s designed for extreme off-roading, with enhanced durability, high performance, and a commanding presence on any landscape.",
    features: [
      "4.0L V8 engine for unmatched power",
      "Advanced off-road suspension system",
      "Bulletproof reinforced body and armor",
      "Heavy-duty tires and rugged wheels",
      "State-of-the-art navigation and infotainment system",
      "Multi-terrain driving modes for maximum flexibility",
      "Heated and ventilated leather seats",
      "Customizable interior with military-grade materials",
    ],
    specifications: [
      { spec: "Engine", value: "4.0L V8" },
      { spec: "Horsepower", value: "500 HP" },
      { spec: "Torque", value: "650 lb-ft" },
      { spec: "Transmission", value: "8-speed automatic" },
      { spec: "Top Speed", value: "190 km/h" },
      { spec: "Fuel Economy", value: "15 L/100 km (combined)" },
      { spec: "Seating Capacity", value: "Up to 4 passengers" },
      { spec: "Towing Capacity", value: "10,000 lbs (4,536 kg)" },
    ],
  },

  {
    ID: "Armored_Porsche_Cayenne",
    image: [
      {
        src: "/img/Porsche_Cayenne/Porsche_Cayenne1.jpg",
        alt: "Armored Porsche Cayenne",
      },
      {
        src: "/img/Porsche_Cayenne/Porsche_Cayenne2.jpg",
        alt: "Armored Porsche Cayenne",
      },
      {
        src: "/img/Porsche_Cayenne/Porsche_Cayenne3.jpg",
        alt: "Armored Porsche Cayenne",
      },
      {
        src: "/img/Porsche_Cayenne/Porsche_Cayenne4.jpg",
        alt: "Armored Porsche Cayenne",
      },
    ],
    name: "Armored Porsche Cayenne",
    details:
      "The Armored Porsche Cayenne combines the luxury, performance, and agility of the iconic Porsche brand with top-tier security features. With an armored body, reinforced windows, and advanced safety systems, this vehicle ensures maximum protection while delivering high-performance driving experiences on any terrain. Whether on city streets or rugged landscapes, the Cayenne excels in both security and style.",
    features: [
      "4.0L Twin-Turbocharged V8 engine",
      "Bulletproof glass and reinforced body",
      "Sporty yet luxurious interior with premium materials",
      "Advanced navigation and infotainment system",
      "Adaptive air suspension for a smooth ride",
      "Advanced driver assistance systems",
      "Customizable security options for enhanced protection",
      "Heated and ventilated leather seats",
    ],
    specifications: [
      { spec: "Engine", value: "4.0L Twin-Turbocharged V8" },
      { spec: "Horsepower", value: "541 hp" },
      { spec: "Torque", value: "770 Nm" },
      { spec: "Transmission", value: "8-speed automatic" },
      { spec: "Top Speed", value: "280 km/h" },
      { spec: "0-100 km/h", value: "4.1 seconds" },
      { spec: "Fuel Economy", value: "11.5 L/100 km (combined)" },
      { spec: "Seating Capacity", value: "Up to 5 passengers" },
    ],
  },

  {
    ID: "Armored_CIT_Hilux",
    image: [
      { src: "/img/CIT_Hilux/C.I1.jpg", alt: "Armored C.I.T Hilux" },
      { src: "/img/CIT_Hilux/C.I2.jpg", alt: "Armored C.I.T Hilux" },
      { src: "/img/CIT_Hilux/C.I3.jpg", alt: "Armored C.I.T Hilux" },
      { src: "/img/CIT_Hilux/C.I4.jpg", alt: "Armored C.I.T Hilux" },
      { src: "/img/CIT_Hilux/C.I5.jpg", alt: "Armored C.I.T Hilux" },
    ],
    name: "Armored C.I.T Hilux",
    details:
      "The Armored C.I.T Hilux is a fortified pickup truck designed for secure transport in high-risk environments. Equipped with ballistic protection, reinforced tires, and armored body panels, it ensures safe passage even in the most dangerous situations. Built to withstand both physical threats and extreme terrains, this vehicle is perfect for cash-in-transit operations and other security-sensitive applications.",
    features: [
      "Bulletproof glass and reinforced body armor",
      "Heavy-duty suspension for challenging terrains",
      "Upgraded drivetrain for off-road capabilities",
      "Customizable interior with secure compartments",
      "Advanced GPS and communication systems",
      "Run-flat tires for maximum mobility in emergencies",
      "High-performance off-road tires and rugged wheels",
      "Enhanced safety and surveillance features",
    ],
    specifications: [
      { spec: "Engine", value: "2.8L Turbocharged 4-cylinder" },
      { spec: "Horsepower", value: "201 hp" },
      { spec: "Torque", value: "500 Nm" },
      { spec: "Transmission", value: "6-speed manual" },
      { spec: "Top Speed", value: "180 km/h" },
      { spec: "Fuel Economy", value: "8.0 L/100 km (combined)" },
      { spec: "Seating Capacity", value: "Up to 5 passengers" },
      { spec: "Towing Capacity", value: "3,500 kg" },
    ],
  },

  {
    ID: "TLC-79-LRTV",
    category: "Military Armored",
    image: [
      { src: "/img/tlc-79/lrtv1.jpg", alt: "armored vehicle" },
      { src: "/img/tlc-79/lrtv2.jpg", alt: "armored vehicle" },
      { src: "/img/tlc-79/lrtv3.jpg", alt: "armored vehicle" },
      { src: "/img/tlc-79/lrtv4.jpg", alt: "armored vehicle" },
      { src: "/img/tlc-79/lrtv23.jpg", alt: "armored vehicle" },
    ],
    name: "TLC 79 LRTV",
    details:
      "The TLC 79 LRTV (Light Reconnaissance Tactical Vehicle) is a rugged and reliable military-grade vehicle designed for reconnaissance and tactical missions. Equipped with advanced armor and state-of-the-art safety features, it offers superior protection against ballistic threats and IEDs. Powered by a durable engine, the TLC 79 LRTV can navigate the toughest terrains while maintaining excellent performance and reliability. Its modular design allows for customization, making it an ideal choice for military operations in any environment.",
    features: [
      "Light Reconnaissance Tactical Vehicle",
      "Ballistic and IED protection",
      "Customizable modular design",
      "Superior off-road performance",
      "Advanced safety and tactical systems",
    ],
    specifications: [
      { spec: "Engine", value: "4.5 L V8 Turbo Diesel" },
      { spec: "Horsepower", value: "202 hp" },
      { spec: "Torque", value: "430 lb-ft" },
      { spec: "Transmission", value: "5-speed manual" },
      { spec: "Top Speed", value: "170 km/h" },
    ],
  },

  {
    ID: "TLC79-RC",
    category: "Military Armored",
    image: [
      { src: "/img/tlc-79/TLC79-RC1.jpg", alt: "armored vehicle" },
      { src: "/img/tlc-79/TLC79-RC2.jpg", alt: "armored vehicle" },
      { src: "/img/tlc-79/TLC79-RC3.jpg", alt: "armored vehicle" },
      { src: "/img/tlc-79/TLC79-RC4.jpg", alt: "armored vehicle" },
      { src: "/img/tlc-79/TLC79-RC5.jpg", alt: "armored vehicle" },
    ],
    name: "TLC79-RC",
    details:
      "The TLC79-RC is a robust and versatile military armored vehicle built for reconnaissance and combat operations. Featuring exceptional ballistic protection and advanced systems, it ensures maximum safety for personnel in hostile environments. Its high-performance engine, paired with rugged off-road capabilities, allows it to excel in diverse terrains. Designed with adaptability in mind, the TLC79-RC1 meets the rigorous demands of modern military missions.",
    features: [
      "Military-grade reconnaissance vehicle",
      "Ballistic and explosive protection",
      "Advanced tactical and safety systems",
      "High off-road capability",
      "Adaptable for various mission needs",
    ],
    specifications: [
      { spec: "Engine", value: "4.5 L V8 Turbo Diesel" },
      { spec: "Horsepower", value: "202 hp" },
      { spec: "Torque", value: "430 lb-ft" },
      { spec: "Transmission", value: "5-speed manual" },
      { spec: "Top Speed", value: "170 km/h" },
    ],
  },
];

export { all_armored_vehicles };
