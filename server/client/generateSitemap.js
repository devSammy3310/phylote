// Import the default export from react-router-sitemap
import pkg from "react-router-sitemap";
const { Sitemap } = pkg; // Destructure to get the Sitemap function

import routes from "./src/routes.js"; // Import your routes configuration

// Generate and save the sitemap
const sitemap = new Sitemap(routes)
  .build("https://www.phylote.com") // Replace with your website's base URL
  .save("./public/sitemap.xml"); // Save the sitemap to the public folder
