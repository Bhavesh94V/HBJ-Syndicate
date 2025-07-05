# HBJ Syndicate Backend API

This is the backend API for the HBJ Syndicate contact form, built with Node.js, Express, and Nodemailer.

## Features

- ✅ Secure contact form submission
- ✅ Email validation and sanitization
- ✅ Rate limiting to prevent spam
- ✅ Professional email templates
- ✅ Automatic confirmation emails
- ✅ Error handling and logging
- ✅ CORS protection
- ✅ Security headers with Helmet

## Setup Instructions

### 1. Install Dependencies

\`\`\`bash
cd backend
npm install
\`\`\`

### 2. Environment Variables

Create a `.env` file in the backend directory with the following variables:

\`\`\`env
PORT=5000
NODE_ENV=production
FRONTEND_URL=http://localhost:3000
EMAIL_HOST=smtp.gmail.com
EMAIL_USER=hbjsyndicate21@gmail.com
EMAIL_PORT=587
EMAIL_PASS=vjhtlhjsmmradnou
BUSINESS_NAME=HBJ Syndicate
BUSINESS_EMAIL=hbjsyndicate21@gmail.com
BUSINESS_PHONE=+91 9173922112
\`\`\`

### 3. Gmail Setup

The email configuration is already set up for Gmail. Make sure:
- The Gmail account has 2-factor authentication enabled
- Use the provided app password: `vjhtlhjsmmradnou`

### 4. Run the Server

Development mode:
\`\`\`bash
npm run dev
\`\`\`

Production mode:
\`\`\`bash
npm start
\`\`\`

The server will run on `http://localhost:5000`

## API Endpoints

### POST /api/contact
Submit a contact form

**Request Body:**
\`\`\`json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "company": "Example Corp",
  "service": "web-development",
  "budget": "1l-3l",
  "timeline": "2-3-months",
  "message": "I need a website for my business",
  "newsletter": true
}
\`\`\`

**Response:**
\`\`\`json
{
  "success": true,
  "message": "Your message has been sent successfully! We'll get back to you within 24 hours."
}
\`\`\`

### GET /api/health
Health check endpoint

**Response:**
\`\`\`json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
\`\`\`

## Security Features

- **Rate Limiting**: 5 requests per 15 minutes per IP
- **Input Validation**: Server-side validation for all fields
- **CORS Protection**: Only allows requests from specified frontend URL
- **Helmet**: Security headers for protection
- **Email Sanitization**: Prevents email injection attacks

## Email Templates

The API sends two emails:
1. **Business Notification**: Detailed form submission to business email
2. **Client Confirmation**: Professional thank you email to the client

Both emails are responsive and professionally designed with your brand colors.

## Error Handling

The API includes comprehensive error handling:
- Validation errors return specific field messages
- Network errors are caught and logged
- Rate limiting returns appropriate error messages
- Server errors return generic messages to prevent information leakage

## Deployment

For production deployment:
1. Set `NODE_ENV=production` in your environment
2. Update `FRONTEND_URL` to your production domain
3. Ensure all environment variables are set
4. Use a process manager like PM2 for production

\`\`\`bash
npm install -g pm2
pm2 start server.js --name "hbj-api"
