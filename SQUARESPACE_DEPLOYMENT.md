# Tennis 919 Squarespace Deployment Guide

## Overview
This Tennis 919 website is built with React and can be deployed to Squarespace by exporting the built static files. This guide walks you through the process.

## Prerequisites
- Squarespace account with website editor access
- The built files from this project (`dist/public/` folder)

## Deployment Steps

### Option 1: Export Individual Pages (Recommended)

1. **Build the Project**
   ```
   npm run build
   ```
   This creates optimized files in `dist/public/`

2. **Extract Assets**
   - Navigate to `dist/public/assets/`
   - These are your CSS, JavaScript, and image files
   - Keep these organized in Squarespace (recommended in a `/assets` folder)

3. **Squarespace Setup**
   - Log into your Squarespace site editor
   - Create pages matching your site structure:
     - Home (/)
     - Lessons (/lessons)
     - Shop (/shop)
     - About (/about)
     - Playbook (/playbook)

4. **Import Content**
   - Copy the HTML structure from `dist/public/index.html`
   - For each page, extract the relevant section and paste into the corresponding Squarespace page
   - Update all image paths to match where you uploaded assets

### Option 2: Use Custom Code Blocks

1. Go to each Squarespace page
2. Add a **Custom Code** block
3. Copy the content section of each page's HTML
4. Link to external assets (CSS, images) stored in Squarespace File Manager

## Link Structure in Squarespace

### Navigation Links
Instead of internal routing, use Squarespace's native navigation:
- Home → /
- Lessons → /lessons
- Shop → /shop
- About → /about
- Playbook → /playbook

These paths work automatically in Squarespace.

### External Links (No Changes Needed)
The following external links work as-is:
- **Book Lessons**: https://calendly.com/tennis919
- **Manufacturing Partners**:
  - Amazon Merch: https://merch.amazon.com
  - Printful: https://www.printful.com
  - Bonfire: https://www.bonfire.com
  - CustomInk: https://www.customink.com
  - Teespring/Spring: https://www.spring.com

### Contact Links
- **Phone**: 919-667-6994
- **Email**: coach.tennis919@gmail.com

## Asset Management

### Images
All images are in `dist/public/assets/`:
- `logo-*.jpg` - Tennis 919 logo
- Product images (beanie, windbreaker, polo, sweatpants)
- Community photos

Upload these to Squarespace's File Manager and reference them in your pages.

### CSS & Styling
The entire CSS is bundled in:
- `dist/public/assets/index-*.css`

Include this in your Squarespace page header or use Squarespace's CSS Editor.

### JavaScript
All interactive functionality is in:
- `dist/public/assets/index-*.js`

Include this in your page footer or use Squarespace's custom code blocks.

## Squarespace-Specific Considerations

### Navigation Menu
1. In Squarespace, set up your main navigation with these pages:
   - Home
   - Lessons
   - Shop
   - About
   - Playbook
   - Book Now (links to calendly.com/tennis919)

2. Style the navigation to match the design:
   - Teal accent color for active states
   - Navy/slate blue background
   - Include logo in top-left

### Mobile Optimization
The site is fully responsive. Squarespace handles mobile viewing automatically, but ensure:
- Navigation menu collapses on mobile (Squarespace does this by default)
- Images scale properly (Squarespace handles this)
- Touch interactions work on buttons

### SEO
Each page includes:
- Unique title tags
- Meta descriptions
- Open Graph tags for social sharing

Squarespace will use these automatically when you set page titles and descriptions.

## Alternative: Keep on Replit

If you prefer to keep the site on Replit instead of Squarespace:

1. The site is already optimized and running
2. You can use Replit's publishing feature (if available)
3. All links are fully functional
4. No additional deployment needed

## Troubleshooting

### Links Not Working
- Ensure internal page links use Squarespace's native navigation
- External links (Calendly, manufacturer sites) should use full URLs (https://...)

### Styles Not Applying
- Verify the CSS file is properly linked
- Check file paths in the CSS
- Use Squarespace's CSS Editor if needed

### Images Not Loading
- Confirm image files are uploaded to File Manager
- Update image paths to match File Manager location
- Use Squarespace's image blocks for best results

### Form Functionality
Currently the site doesn't have backend forms. For Squarespace forms:
- Use Squarespace's built-in form blocks
- Newsletter signup can use Squarespace's email list feature
- Book Now buttons link directly to Calendly

## Support

For Squarespace-specific questions:
- Visit Squarespace's help center: https://support.squarespace.com
- For technical issues with the site, contact: coach.tennis919@gmail.com

## Next Steps

1. **Immediate**: Export the built files and test on Squarespace
2. **Short-term**: Set up all pages with navigation
3. **Medium-term**: Integrate Calendly booking fully into Squarespace
4. **Long-term**: Consider a custom domain and email integration
