# Public Directory Setup for Vaikunth Yoga Retreat Website

## Directory Structure

Create the following directory structure in the `frontend/public` folder:

```
public/
├── assets/
│   ├── images/
│   │   ├── accommodations/
│   │   ├── backgrounds/
│   │   ├── blog/
│   │   ├── gallery/
│   │   ├── programs/
│   │   ├── team/
│   │   ├── testimonials/
│   │   ├── hero-bg.jpg
│   │   ├── about-hero.jpg
│   │   ├── programs-hero.jpg
│   │   ├── accommodations-hero.jpg
│   │   ├── testimonials-hero.jpg
│   │   ├── blog-hero.jpg
│   │   ├── contact-hero.jpg
│   │   ├── founder.jpg
│   │   ├── logo.png
│   │   └── logo-white.png
│   ├── fonts/
│   └── videos/
├── favicon.ico
├── index.html
├── logo192.png
├── logo512.png
├── manifest.json
├── robots.txt
└── cursor.svg
```

## Image Placement

Place all the images according to the structure defined in `image-sizes.md`. Here's a summary of where each type of image should go:

1. **Root Level**:
   - favicon.ico
   - logo192.png
   - logo512.png
   - cursor.svg

2. **assets/images/** (Root level images):
   - logo.png
   - logo-white.png
   - hero-bg.jpg
   - about-hero.jpg
   - programs-hero.jpg
   - accommodations-hero.jpg
   - testimonials-hero.jpg
   - blog-hero.jpg
   - contact-hero.jpg
   - founder.jpg

3. **assets/images/team/**:
   - guru-amrit.jpg
   - dr-priya.jpg
   - mohan.jpg
   - neerja.jpg

4. **assets/images/programs/**:
   - teacher-training.jpg
   - meditation-retreat.jpg
   - ayurveda-retreat.jpg
   - trek-yoga.jpg

5. **assets/images/gallery/**:
   - gallery-1.jpg
   - gallery-2.jpg
   - gallery-3.jpg
   - gallery-4.jpg
   - gallery-5.jpg
   - gallery-6.jpg

6. **assets/images/accommodations/**:
   - deluxe-room.jpg
   - standard-room.jpg
   - dormitory.jpg
   - cottage-exterior.jpg
   - cottage-interior.jpg
   - dining-hall.jpg
   - yoga-shala.jpg
   - meditation-hall.jpg
   - ayurvedic-center.jpg

7. **assets/images/blog/**:
   - blog-1.jpg
   - blog-2.jpg
   - blog-3.jpg
   - blog-4.jpg

8. **assets/images/testimonials/**:
   - testimonial-1.jpg
   - testimonial-2.jpg
   - testimonial-3.jpg
   - group-photo.jpg

9. **assets/images/backgrounds/**:
   - mountain-silhouette.png
   - paper-texture.jpg
   - stone-texture.jpg
   - mandala-pattern.png

## Image Specifications

For detailed specifications of each image (dimensions, format, etc.), refer to the `image-sizes.md` file.

## Placeholder Images

Until you have the actual images, you can use placeholder services like:

- https://placehold.co/ (e.g., https://placehold.co/800x600)
- https://picsum.photos/ (for more realistic photos)

Example usage:
```html
<img src="https://picsum.photos/800/600" alt="Placeholder" />
```

## Image Optimization

Before adding images to the project:

1. **Compress all images** using tools like:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
   - [ImageOptim](https://imageoptim.com/)

2. **Use appropriate formats**:
   - JPG for photographs
   - PNG for images with transparency
   - SVG for icons and simple graphics
   - WebP where supported (with fallbacks)

3. **Consider responsive images**:
   - Create multiple sizes of key images for different devices
   - Use the `srcset` attribute for responsive images

## Video Content

If you plan to include videos:

1. Place them in the `assets/videos/` directory
2. Keep video files small and optimized for web
3. Consider using external services like YouTube or Vimeo for larger videos
4. Implement lazy loading for videos
