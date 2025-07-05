import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  canonicalUrl?: string
  structuredData?: object
}

export default function SEOHead({
  title = "Pixel Pioneers - Full-Stack Web Development Company in India",
  description = "Pixel Pioneers crafts bespoke, scalable digital solutions. Expert full-stack developers creating custom websites, e-commerce platforms, and web applications for India's growing businesses.",
  keywords = "web development, full-stack development, custom websites, e-commerce solutions, web applications, UI/UX design, India, Ahmedabad, React, Node.js, Python, Django",
  ogImage = "/og-image.jpg",
  canonicalUrl,
  structuredData,
}: SEOHeadProps) {
  const fullTitle = title.includes("Pixel Pioneers") ? title : `${title} | Pixel Pioneers`

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Pixel Pioneers" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Pixel Pioneers" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      )}

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      {/* Performance and Analytics */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Performance monitoring
            window.addEventListener('load', function() {
              if ('performance' in window) {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
              }
            });
            
            // Google Analytics (replace with your GA4 ID)
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
            
            ga('create', 'GA_MEASUREMENT_ID', 'auto');
            ga('send', 'pageview');
          `,
        }}
      />
    </Head>
  )
}
