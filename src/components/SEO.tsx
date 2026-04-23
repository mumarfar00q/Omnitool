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
  const baseTitle = "Omnitools | Professional Loan & Financial Tools";
  const fullTitle = title ? `${title} | Omnitools` : baseTitle;
  const finalDescription = description || "High-performance suite of financial tools including loan and EMI calculators. Engineering precision for debt analysis.";
  const siteUrl = "https://omnitools.app"; // Replace with your actual domain
  const finalCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={finalDescription} />
      <link rel="canonical" href={finalCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={finalCanonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={finalDescription} />
    </Helmet>
  );
}
