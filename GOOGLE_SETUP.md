# Google Maps Geocoding API Setup Guide

This app now supports Google Maps Geocoding API for faster and more accurate search results! Here's how to set it up:

## Why Use Google Geocoding API?

- ⚡ **10x Faster** than free alternatives
- 🎯 **More Accurate** Swiss address recognition  
- 📍 **Better POI Coverage** (landmarks, businesses)
- 🔄 **Automatic Fallback** to Nominatim if needed

## Setup Steps

### 1. Get Google Cloud Account
- Go to [Google Cloud Console](https://console.cloud.google.com/)
- Create new project or select existing one
- Set up billing (required even for free tier)

### 2. Enable Geocoding API
```bash
# In Google Cloud Console:
# 1. Navigate to "APIs & Services" → "Library"
# 2. Search for "Geocoding API"
# 3. Click "Enable"
```

### 3. Create API Key
```bash
# In Google Cloud Console:
# 1. Go to "APIs & Services" → "Credentials"  
# 2. Click "+ CREATE CREDENTIALS" → "API Key"
# 3. Copy the generated API key
```

### 4. Secure Your API Key
```bash
# Restrict the API key (IMPORTANT for security):
# 1. Click on your API key in credentials list
# 2. Under "Application restrictions":
#    - Select "HTTP referrers (web sites)"
#    - Add your domain: "yourdomain.com/*"
# 3. Under "API restrictions":
#    - Select "Restrict key"  
#    - Choose "Geocoding API"
# 4. Save changes
```

### 5. Add to Your Project
```bash
# 1. Copy .env.example to .env.local
cp .env.example .env.local

# 2. Edit .env.local and add your API key:
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here

# 3. Restart your development server
npm run dev
```

## Pricing Information (2024)

| Usage Tier | Requests/Month | Cost |
|------------|----------------|------|
| **Free Tier** | 0 - 10,000 | $0.00 |
| **Paid Tier** | 10,001+ | $5.00 per 1,000 requests |

### Cost Examples:
- **Small app** (100 searches/day): ~3,000/month = **FREE** 
- **Medium app** (500 searches/day): ~15,000/month = **$25/month**
- **Large app** (2,000 searches/day): ~60,000/month = **$250/month**

## Monitoring Usage

The app includes automatic usage tracking:
- Counts requests in browser localStorage
- Warns at 80% of free tier (8,000 requests)
- View usage in browser console

```javascript
// Check current usage in browser console:
console.log('Google API usage:', localStorage.getItem('google_geocoding_usage'))
```

## Fallback Behavior

**Without API Key:**
- App automatically uses free Nominatim API
- Slightly slower but still functional
- No degradation of core features

**With API Key:**
- Uses Google API for all searches
- Falls back to Nominatim if:
  - Google API is down
  - Quota exceeded  
  - Network error occurs

## Testing the Setup

1. Start your app with `npm run dev`
2. Open browser dev tools (F12)
3. Search for a Swiss address
4. Check console logs:
   - ✅ Should see "Using Google Geocoding API"
   - ❌ If you see "Falling back to Nominatim", check your API key

## Security Best Practices

- ✅ **DO**: Restrict API key to your domain
- ✅ **DO**: Use HTTPS only in production
- ✅ **DO**: Monitor usage regularly
- ❌ **DON'T**: Commit API keys to git
- ❌ **DON'T**: Use unrestricted API keys
- ❌ **DON'T**: Share API keys publicly

## Troubleshooting

### Common Issues:

**"API key not valid"**
- Check API key is correctly set in `.env.local`
- Ensure Geocoding API is enabled
- Verify billing is set up

**"This API project is not authorized"**
- Add your domain to API key restrictions
- Wait 5-10 minutes for changes to take effect

**"OVER_QUERY_LIMIT"**  
- You've exceeded free tier (10,000 requests/month)
- App will automatically fallback to Nominatim
- Consider upgrading to paid tier

**Still using Nominatim?**
- Check `.env.local` file exists with correct API key
- Restart development server after adding API key
- Check browser console for error messages

Need help? Check the [official documentation](https://developers.google.com/maps/documentation/geocoding/start) or create an issue in this repository.