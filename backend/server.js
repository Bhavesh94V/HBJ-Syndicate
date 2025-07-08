const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const rateLimit = require("express-rate-limit")
const nodemailer = require("nodemailer")
const validator = require("validator")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 5000

app.set("trust proxy", 1)

// Security middleware
app.use(helmet())
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  }),
)

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    error: "Too many requests from this IP, please try again later.",
  },
})

app.use("/api/contact", limiter)
app.use(express.json({ limit: "10mb" }))
app.use(express.urlencoded({ extended: true }))

// Nodemailer configuration
// const transporter = nodemailer.createTransporter({
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error("Email transporter error:", error)
  } else {
    console.log("Email transporter is ready")
  }
})

// Input validation middleware
const validateContactForm = (req, res, next) => {
  const { firstName, lastName, email, message, service } = req.body

  const errors = []

  if (!firstName || firstName.trim().length < 2) {
    errors.push("First name must be at least 2 characters long")
  }

  if (!lastName || lastName.trim().length < 2) {
    errors.push("Last name must be at least 2 characters long")
  }

  if (!email || !validator.isEmail(email)) {
    errors.push("Please provide a valid email address")
  }

  if (!message || message.trim().length < 10) {
    errors.push("Message must be at least 10 characters long")
  }

  if (!service) {
    errors.push("Please select a service")
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      errors,
    })
  }

  next()
}

// Contact form endpoint
app.post("/api/contact", validateContactForm, async (req, res) => {
  try {
    const { firstName, lastName, email, phone, company, service, budget, timeline, message, newsletter } = req.body

    // Email to business
    const businessEmailOptions = {
      from: `"${process.env.BUSINESS_NAME}" <${process.env.EMAIL_USER}>`,
      to: process.env.BUSINESS_EMAIL,
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #f59e0b; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
              <div style="width: 50px; height: 3px; background: linear-gradient(to right, #f59e0b, #ea580c); margin: 10px auto;"></div>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #1e293b; margin-top: 0; font-size: 20px;">Contact Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 120px;">Name:</td>
                  <td style="padding: 8px 0; color: #1e293b;">${firstName} ${lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td>
                  <td style="padding: 8px 0; color: #1e293b;"><a href="mailto:${email}" style="color: #f59e0b; text-decoration: none;">${email}</a></td>
                </tr>
                ${phone
          ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone:</td>
                  <td style="padding: 8px 0; color: #1e293b;"><a href="tel:${phone}" style="color: #f59e0b; text-decoration: none;">${phone}</a></td>
                </tr>
                `
          : ""
        }
                ${company
          ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #475569;">Company:</td>
                  <td style="padding: 8px 0; color: #1e293b;">${company}</td>
                </tr>
                `
          : ""
        }
              </table>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #1e293b; margin-top: 0; font-size: 20px;">Project Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 120px;">Service:</td>
                  <td style="padding: 8px 0; color: #1e293b;">${service}</td>
                </tr>
                ${budget
          ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #475569;">Budget:</td>
                  <td style="padding: 8px 0; color: #1e293b;">${budget}</td>
                </tr>
                `
          : ""
        }
                ${timeline
          ? `
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #475569;">Timeline:</td>
                  <td style="padding: 8px 0; color: #1e293b;">${timeline}</td>
                </tr>
                `
          : ""
        }
              </table>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #1e293b; margin-top: 0; font-size: 20px;">Message</h2>
              <p style="color: #475569; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            
            ${newsletter
          ? `
            <div style="background-color: #ecfdf5; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981;">
              <p style="margin: 0; color: #065f46; font-weight: 500;">📧 Client subscribed to newsletter</p>
            </div>
            `
          : ""
        }
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; margin: 0; font-size: 14px;">
                Submitted on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
              </p>
            </div>
          </div>
        </div>
      `,
    }

    // Confirmation email to client
    const clientEmailOptions = {
      from: `"${process.env.BUSINESS_NAME}" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting HBJ Syndicate - We'll be in touch soon!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #f59e0b; margin: 0; font-size: 28px;">Thank You, ${firstName}!</h1>
              <div style="width: 50px; height: 3px; background: linear-gradient(to right, #f59e0b, #ea580c); margin: 10px auto;"></div>
            </div>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="color: #1e293b; line-height: 1.6; margin: 0; font-size: 16px;">
                We've received your inquiry about <strong>${service}</strong> and we're excited to help bring your digital vision to life!
              </p>
            </div>
            
            <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #10b981;">
              <h2 style="color: #065f46; margin-top: 0; font-size: 18px;">What happens next?</h2>
              <ul style="color: #065f46; line-height: 1.6; margin: 10px 0; padding-left: 20px;">
                <li>Our team will review your requirements within 24 hours</li>
                <li>We'll prepare a customized proposal for your project</li>
                <li>Schedule a consultation call to discuss your vision</li>
                <li>Provide you with a detailed timeline and quote</li>
              </ul>
            </div>
            
            <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #f59e0b;">
              <h2 style="color: #92400e; margin-top: 0; font-size: 18px;">Need immediate assistance?</h2>
              <p style="color: #92400e; line-height: 1.6; margin: 10px 0;">
                📞 Call us: <a href="tel:+919173922112" style="color: #f59e0b; text-decoration: none; font-weight: bold;">+91 9173922112</a><br>
                💬 WhatsApp: <a href="https://wa.me/919173922112" style="color: #f59e0b; text-decoration: none; font-weight: bold;">Chat with us</a><br>
                📧 Email: <a href="mailto:info@hbjsyndicate.com" style="color: #f59e0b; text-decoration: none; font-weight: bold;">info@hbjsyndicate.com</a>
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; margin: 0; font-size: 14px;">
                Best regards,<br>
                <strong style="color: #1e293b;">The HBJ Syndicate Team</strong><br>
                <em>Transforming Ideas into Digital Excellence</em>
              </p>
            </div>
          </div>
        </div>
      `,
    }

    // Send emails
    await Promise.all([transporter.sendMail(businessEmailOptions), transporter.sendMail(clientEmailOptions)])

    res.status(200).json({
      success: true,
      message: "Your message has been sent successfully! We'll get back to you within 24 hours.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    res.status(500).json({
      success: false,
      message: "Sorry, there was an error sending your message. Please try again or contact us directly.",
    })
  }
})

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
  })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
  })
})

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
