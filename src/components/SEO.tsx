import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
}

export default function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    const baseTitle = "Omnitools | Professional Loan & Financial Tools";
    const fullTitle = title ? `${title} | Omnitools` : baseTitle;
    document.title = fullTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');

    const finalDescription = description || "High-performance suite of financial tools including loan and EMI calculators. Engineering precision for debt analysis.";

    if (metaDescription) metaDescription.setAttribute('content', finalDescription);
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);
    if (ogDescription) ogDescription.setAttribute('content', finalDescription);
    if (twitterTitle) twitterTitle.setAttribute('content', fullTitle);
    if (twitterDescription) twitterDescription.setAttribute('content', finalDescription);
  }, [title, description]);

  return null;
}
