import Head from 'next/head'
import { SEOProps } from '@/types'
import { siteConfig } from '@/lib/config'

export default function SEO({ 
  title, 
  description, 
  canonical, 
  noindex = false,
  openGraph,
  twitter 
}: SEOProps) {
  const fullTitle = title === siteConfig.title ? title : `${title} | ${siteConfig.title}`
  const fullDescription = description || siteConfig.description
  const canonicalUrl = canonical || `${siteConfig.url}${typeof window !== 'undefined' ? window.location.pathname : ''}`
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.title,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/images/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": siteConfig.phone,
      "contactType": "customer service"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sweet Town",
      "addressRegion": "NSW",
      "postalCode": "2000",
      "addressCountry": "AU"
    },
    "sameAs": [
      siteConfig.socials.instagram,
      siteConfig.socials.facebook,
      siteConfig.socials.x
    ]
  }

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={openGraph?.title || fullTitle} />
      <meta property="og:description" content={openGraph?.description || fullDescription} />
      <meta property="og:type" content={openGraph?.type || 'website'} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={siteConfig.title} />
      {openGraph?.image && <meta property="og:image" content={openGraph.image} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitter?.card || 'summary_large_image'} />
      <meta name="twitter:title" content={twitter?.title || fullTitle} />
      <meta name="twitter:description" content={twitter?.description || fullDescription} />
      {twitter?.image && <meta name="twitter:image" content={twitter.image} />}
      
      {/* Security Headers */}
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data: https:; font-src 'self'; script-src 'self'; style-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'none';" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
      
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  )
}
