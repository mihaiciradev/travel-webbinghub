# Dynamic OG Image Generation Guide

## Overview

Your website now includes a dynamic Open Graph (OG) image generation API that automatically creates beautiful social media preview images for sharing.

## API Endpoint

```
https://travel.webbinghub.io/api/og
```

## Usage Examples

### Default Image (No Parameters)
```
https://travel.webbinghub.io/api/og
```
Returns the default OG image with:
- Title: "TRAVEL by WebbingHUB"
- Description: "Websites & Digital Tools for Travel Agencies and Hotels"

### Custom Title
```
https://travel.webbinghub.io/api/og?title=Custom%20Title
```

### Custom Description
```
https://travel.webbinghub.io/api/og?description=Your%20custom%20description
```

### Both Custom
```
https://travel.webbinghub.io/api/og?title=Our%20Services&description=Booking%20Engines%20%26%20More
```

## Image Specifications

- **Format**: PNG
- **Dimensions**: 1200x630px (optimal for all platforms)
- **File Size**: ~50-80KB (optimized)
- **Supported Platforms**:
  - Facebook
  - LinkedIn
  - Twitter
  - WhatsApp
  - Telegram
  - Slack
  - Discord

## Design Features

The generated images include:
- Professional dark green background (matching brand)
- Gold accent color (#d4af37)
- WebbingHUB branding
- Elegant typography (Cormorant Display style)
- Responsive text sizing
- Brand URL watermark (bottom right)
- Subtle radial gradient background pattern

## Implementation in HTML

### Basic Meta Tag (Already Implemented)
```html
<meta property="og:image" content="https://travel.webbinghub.io/api/og" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

### Dynamic Implementation (For Blog Posts)
```html
<!-- For a blog post about booking engines -->
<meta property="og:image" 
      content="https://travel.webbinghub.io/api/og?title=Booking%20Engines&description=Direct%20Reservation%20Systems" />
```

## URL Encoding Tips

When creating URLs with special characters, use URL encoding:

| Character | Encoded |
|-----------|---------|
| Space | %20 |
| & | %26 |
| = | %3D |
| # | %23 |
| / | %2F |
| : | %3A |
| + | %2B |

### Example with Special Characters:
```
https://travel.webbinghub.io/api/og?title=Hotels%20%26%20Travel%20Agencies&description=Direct%20Booking%20Engines
```

## Use Cases

### 1. **Homepage Sharing**
```
https://travel.webbinghub.io/api/og
```
Displays default branding image

### 2. **Service Pages**
```
https://travel.webbinghub.io/api/og?title=Booking%20Websites&description=High-Converting%20Direct%20Reservation%20Systems
```

### 3. **Blog Posts** (If you add a blog)
```
https://travel.webbinghub.io/api/og?title=How%20to%20Reduce%20OTA%20Commissions&description=Strategies%20for%20Travel%20Businesses
```

### 4. **Service Pages - Hotels**
```
https://travel.webbinghub.io/api/og?title=Hotel%20Solutions&description=Custom%20Websites%20%26%20Booking%20Engines%20for%20Hotels
```

### 5. **Service Pages - Travel Agencies**
```
https://travel.webbinghub.io/api/og?title=Agency%20Solutions&description=Tools%20to%20Grow%20Direct%20Bookings
```

## Social Media Testing

Test how your OG images appear on different platforms:

### Facebook Share Debugger
https://developers.facebook.com/tools/debug/

### LinkedIn Post Inspector
https://www.linkedin.com/post-inspector/

### Twitter Card Validator
https://cards-dev.twitter.com/validator

### Slack Preview
Simply paste the URL in Slack and see the preview

### WhatsApp Preview
Send the link in WhatsApp and view the preview

## Best Practices

### ✅ DO:
- Keep titles concise (under 100 characters for best display)
- Use descriptive, benefit-focused text
- Avoid special characters when possible (use URL encoding)
- Test on each platform before major announcements
- Update OG images when rebranding

### ❌ DON'T:
- Use very long titles (will be truncated)
- Rely on generated images alone (ensure quality)
- Change OG implementation frequently
- Forget to URL-encode special characters
- Use emojis (may not render consistently)

## Performance Notes

- First request: ~500ms (Edge function cold start)
- Subsequent requests: <100ms (cached)
- Images are NOT permanently cached on CDN
- Each unique URL generates a fresh image
- No database queries required

## Customization (Advanced)

To customize the OG image design further:

1. Edit `/src/app/api/og/route.tsx`
2. Modify colors, fonts, or layout
3. Add new parameters as needed
4. Test with `https://travel.webbinghub.io/api/og?param=value`

### Common Customizations:
```typescript
// Change brand color
color: "#d4af37" → change to desired hex code

// Change background
background: "linear-gradient(...)" → new gradient

// Add custom fields
searchParams.get("customField") → add new parameter
```

## Analytics & Tracking

OG images don't directly track clicks, but you can:

1. Use UTM parameters in the link:
```
https://travel.webbinghub.io/api/og?title=Services
?utm_source=linkedin&utm_medium=social&utm_campaign=services
```

2. Track shares in Google Analytics:
- Monitor referral traffic from social platforms
- Create goals for social conversions
- Use UTM parameters to distinguish sources

## Troubleshooting

### Issue: Image shows blank
**Solution**: Ensure query parameters are properly URL-encoded

### Issue: Text is cut off
**Solution**: Reduce title/description length (max 100 chars for optimal display)

### Issue: Image not updating after change
**Solution**: Clear browser cache or wait for CDN invalidation (5-10 min)

### Issue: Special characters showing as ?
**Solution**: Use proper URL encoding for special characters

## Examples for Different Sections

### Section: "Why It Matters"
```
https://travel.webbinghub.io/api/og?title=Why%20Custom%20Websites%20Matter&description=Reduce%20OTA%20Commission%20Costs%20%26%20Grow%20Direct%20Bookings
```

### Section: "What We Build"
```
https://travel.webbinghub.io/api/og?title=What%20We%20Build&description=Booking%20Engines%2C%20Dashboards%2C%20Integrations%20%26%20More
```

### Section: "Who We Serve"
```
https://travel.webbinghub.io/api/og?title=Built%20for%20Hotels%20%26%20Agencies&description=Tailored%20Solutions%20for%20Travel%20Businesses%20Worldwide
```

### Section: "Process"
```
https://travel.webbinghub.io/api/og?title=Our%20Process&description=From%20Discovery%20to%20Launch%20to%20Growth
```

### Section: "Beyond Launch"
```
https://travel.webbinghub.io/api/og?title=Beyond%20Launch&description=Ongoing%20Support%2C%20Growth%2C%20%26%20Optimization
```

## Integration Checklist

- [x] OG image API deployed
- [ ] Test all social platforms
- [ ] Update metadata if needed
- [ ] Add to blog/content pages
- [ ] Monitor social sharing metrics
- [ ] A/B test different titles/descriptions

---

**API Location**: `/src/app/api/og/route.tsx`  
**Live Since**: 2026-05-23  
**Last Updated**: 2026-05-23  
**Support**: Check implementation in `src/app/api/og/route.tsx`
