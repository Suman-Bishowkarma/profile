# Social Media Footer Setup Guide

Your portfolio now has a beautiful footer with social media links! Here's how to customize it with your actual profiles.

## 🔧 How to Update Your Social Media Links

### 1. Edit the Social Links Configuration

Open the file: `src/constants/socialLinks.js`

Replace the placeholder URLs with your actual social media profiles:

```javascript
export const socialLinks = [
  {
    name: "Facebook",
    url: "https://facebook.com/your-actual-profile", // ← Update this
    icon: "facebook"
  },
  {
    name: "Instagram", 
    url: "https://instagram.com/your-actual-username", // ← Update this
    icon: "instagram"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/your-actual-profile", // ← Update this
    icon: "linkedin"
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@your-actual-channel", // ← Update this
    icon: "youtube"
  },
  {
    name: "GitHub",
    url: "https://github.com/your-actual-username", // ← Update this
    icon: "github"
  }
];
```

### 2. Update Personal Information

In the same file, you can also update your personal details:

```javascript
export const personalInfo = {
  name: "Your Name", // ← Update this
  title: "Your Title", // ← Update this (e.g., "Full Stack Developer")
  description: "Your description here", // ← Update this
  email: "your-email@gmail.com" // ← Update this
};
```

## 🎨 Footer Features

✅ **Responsive Design** - Looks great on all devices
✅ **Smooth Animations** - Framer Motion powered animations
✅ **Hover Effects** - Interactive social media icons
✅ **Logo Integration** - Uses your existing logo
✅ **Quick Navigation** - Links to main sections
✅ **Professional Layout** - Clean and modern design

## 🔗 Social Media Icons Included

- **Facebook** - Blue Facebook icon
- **Instagram** - Gradient Instagram icon
- **LinkedIn** - Professional LinkedIn icon
- **YouTube** - Red YouTube play button
- **GitHub** - Developer-friendly GitHub icon

## 📱 How It Looks

The footer includes:
- **Left Section**: Your logo, name, title, and description
- **Center Section**: Social media icons with hover animations
- **Right Section**: Quick navigation links
- **Bottom**: Copyright and tech stack info

## 🚀 Example URLs

Here are some example formats for your social media URLs:

```
Facebook: https://facebook.com/john.doe.developer
Instagram: https://instagram.com/johndoe_dev
LinkedIn: https://linkedin.com/in/john-doe-developer
YouTube: https://youtube.com/@JohnDoeCode
GitHub: https://github.com/johndoe
```

## 🎯 Tips

1. **Test Your Links** - Make sure all URLs work and open in new tabs
2. **Keep It Professional** - Use your professional/developer profiles
3. **Update Regularly** - Keep your social media active and professional
4. **Consistent Branding** - Use similar usernames across platforms when possible

## 🔄 Adding/Removing Social Media

To add or remove social media platforms:

1. Edit the `socialLinks` array in `src/constants/socialLinks.js`
2. Add/remove objects with `name`, `url`, and `icon` properties
3. If adding new platforms, you may need to add the corresponding icon in the `getSocialIcon` function in `Footer.jsx`

Your footer is now ready to showcase your professional social media presence! 🎉