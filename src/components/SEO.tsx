import React from 'react';
import * as HelmetPkg from 'react-helmet-async';

const Helmet = (HelmetPkg as any).Helmet || (HelmetPkg as any).default?.Helmet;

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
}

export default function SEO({ 
  title, 
  description, 
  canonical, 
  type = 'website' 
}: SEOProps) {
  const baseTitle = "OmniTools | Precision Calculation Engine";
  const fullTitle = title ? `${title} | OmniTools` : baseTitle;
  const finalDescription = description || "High-performance financial calculators and unit converters for modern decision makers.";
  const siteUrl = "https://omnitool-pk.vercel.app";
  const finalCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="google-site-verification" content="bD-IOk_dlVDCLZuewVXg3Fr9LyRoOf85SnV8fHdVKUA" />
      <link rel="canonical" href={finalCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:image" content={`${siteUrl}/banner.png`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={`${siteUrl}/banner.png`} />
    </Helmet>
  );
}
