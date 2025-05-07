/**
 * Utility functions for handling images
 */

/**
 * Returns the image URL, falling back to a placeholder if the image doesn't exist
 * @param {string} path - The path to the image relative to the public folder
 * @param {number} width - The width of the placeholder image
 * @param {number} height - The height of the placeholder image
 * @returns {string} - The URL to use for the image
 */
export const getImageUrl = (path, width, height) => {
  // List of available images
  const availableImages = [
    '/assets/images/hero-bg.jpg',
    '/assets/images/about-hero.jpg',
    '/assets/images/programs-hero.jpg',
    '/assets/images/accommodations-hero.jpg',
    '/assets/images/testimonials-hero.jpg',
    '/assets/images/contact-hero.jpg',
    '/assets/images/booking-hero.jpg',
    '/assets/images/dashboard-hero.jpg',
    '/assets/images/404.png',
    '/assets/images/logo.png',
    '/assets/images/logo-white.png',
    '/assets/images/logo-text.png',
    '/assets/images/programs/teacher-training.jpg',
    '/assets/images/programs/meditation-retreat.jpg',
    '/assets/images/programs/yoga-retreat.jpg',
    '/assets/images/programs/ayurveda-retreat.jpg',
    '/assets/images/accommodations/deluxe-room.jpg',
    '/assets/images/accommodations/standard-room.jpg',
    '/assets/images/accommodations/cottage.jpg',
    '/assets/images/accommodations/dormitory.jpg',
    '/assets/images/team/guru-amrit.jpg',
    '/assets/images/team/dr-priya.jpg',
    '/assets/images/users/default.jpg',
    '/assets/images/dashboard/booking-icon.png',
    '/assets/images/dashboard/profile-icon.png',
    '/assets/images/dashboard/settings-icon.png'
  ];

  // Check if the image is available
  if (availableImages.includes(path)) {
    // In Vite, we don't need process.env.PUBLIC_URL
    return path;
  } else {
    // If not available, use a placeholder
    return `https://picsum.photos/${width}/${height}`;
  }
};

/**
 * Returns a placeholder image URL with specific dimensions
 * @param {number} width - The width of the placeholder image
 * @param {number} height - The height of the placeholder image
 * @returns {string} - The placeholder URL
 */
export const getPlaceholderUrl = (width, height) => {
  return `https://picsum.photos/${width}/${height}`;
};

/**
 * Returns a specific placeholder image URL with an ID
 * @param {number} id - The ID of the specific placeholder image
 * @param {number} width - The width of the placeholder image
 * @param {number} height - The height of the placeholder image
 * @returns {string} - The specific placeholder URL
 */
export const getSpecificPlaceholderUrl = (id, width, height) => {
  return `https://picsum.photos/id/${id}/${width}/${height}`;
};

/**
 * Maps image categories to specific placeholder IDs that match the content
 * This helps ensure we use appropriate placeholder images for each section
 */
export const placeholderIds = {
  // Nature and mountains (for hero images)
  hero: [211, 326, 329, 334, 338, 434],

  // Yoga and wellness
  yoga: [501, 502, 503, 504, 505],

  // People and portraits
  people: [64, 65, 91, 96, 177, 219, 342],

  // Accommodations and interiors
  accommodations: [174, 183, 239, 242, 251, 255],

  // Food and dining
  food: [292, 370, 376, 488, 493],

  // Nature details
  nature: [106, 119, 197, 225, 429],

  // Dashboard and booking
  dashboard: [42, 338, 349, 357, 360],
  booking: [306, 308, 309, 315, 318]
};

/**
 * Gets a random placeholder from a specific category
 * @param {string} category - The category of placeholder (hero, yoga, people, etc.)
 * @param {number} width - The width of the placeholder image
 * @param {number} height - The height of the placeholder image
 * @returns {string} - The placeholder URL
 */
export const getCategoryPlaceholder = (category, width, height) => {
  const ids = placeholderIds[category] || placeholderIds.nature;
  const randomId = ids[Math.floor(Math.random() * ids.length)];
  return getSpecificPlaceholderUrl(randomId, width, height);
};
