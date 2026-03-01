# Contact Form Setup Guide

Your portfolio now has a direct email contact form that sends messages straight to `rabikc139@gmail.com`.

## 🚀 Quick Setup

### 1. Install Backend Dependencies
```bash
npm run server:install
```

### 2. Configure Gmail App Password

**Important**: You need a Gmail App Password to send emails programmatically.

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** if not already enabled
3. Go to **App passwords** section
4. Generate a new app password for "Mail"
5. Copy the 16-character password (format: xxxx-xxxx-xxxx-xxxx)

### 3. Update Server Environment Variables

Edit `server/.env` file:
```env
GMAIL_USER=rabikc139@gmail.com
GMAIL_APP_PASSWORD=your_16_character_app_password_here
PORT=3001
```

Replace `your_16_character_app_password_here` with your actual app password.

### 4. Start Both Frontend and Backend

Option 1 - Run both together:
```bash
npm run full-dev
```

Option 2 - Run separately:
```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
npm run server
```

## ✅ How It Works

1. User fills out contact form on your website
2. Form data is sent to your backend server (localhost:3001)
3. Backend uses Gmail SMTP to send email directly to `rabikc139@gmail.com`
4. You receive the message in your Gmail inbox
5. User sees success confirmation

## 📧 Email Format

You'll receive emails with:
- **Subject**: "Portfolio Contact: Message from [Name]"
- **From**: rabikc139@gmail.com (your own email)
- **Reply-To**: visitor's email (so you can reply directly)
- **Content**: Formatted HTML with name, email, and message

## 🔧 Testing

1. Start both servers: `npm run full-dev`
2. Open your portfolio: `http://localhost:5173`
3. Fill out the contact form
4. Check your Gmail inbox for the message

## 🚨 Troubleshooting

**"Invalid login" error**:
- Make sure you're using App Password, not regular Gmail password
- Verify 2-Step Verification is enabled

**CORS errors**:
- Make sure backend is running on port 3001
- Check that frontend is making requests to correct URL

**Email not received**:
- Check spam folder
- Verify Gmail App Password is correct
- Check server console for error messages

## 🌐 Production Deployment

For production, you'll need to:
1. Deploy the backend to a hosting service (Heroku, Railway, etc.)
2. Update the API URL in Contact.jsx from `localhost:3001` to your production URL
3. Set environment variables on your hosting platform

## 🔒 Security Notes

- Never commit `.env` files with real credentials
- App Password is different from your Gmail password
- Keep your app password secure
- Consider rate limiting for production use