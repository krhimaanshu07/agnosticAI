import { siteConfig } from "@/site.config";

export interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterSite?: string;
  twitterCreator?: string;
  jsonLd?: Record<string, any>;
}

export function generateSEOTags(config: SEOConfig = {}) {
  const {
    title = siteConfig.name,
    description = siteConfig.description,
    keywords = [
      "medical imaging",
      "AI enhancement",
      "super-resolution",
      "X-ray",
      "CT",
      "MRI",
      "GenAI",
      "OEM-agnostic",
      "healthcare technology",
      "radiology",
    ],
    canonicalUrl,
    ogTitle = title,
    ogDescription = description,
    ogImage = "/social-preview.jpg",
    ogType = "website",
    twitterCard = "summary_large_image",
    twitterSite = "@agnosticimagingai",
    twitterCreator = "@agnosticimagingai",
    jsonLd,
  } = config;

  return {
    title,
    description,
    keywords: keywords.join(", "),
    canonicalUrl,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      image: ogImage,
      type: ogType,
      siteName: siteConfig.name,
    },
    twitter: {
      card: twitterCard,
      site: twitterSite,
      creator: twitterCreator,
      title: ogTitle,
      description: ogDescription,
      image: ogImage,
    },
    jsonLd,
  };
}

export function generateOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: typeof window !== "undefined" ? window.location.origin : "",
    logo: typeof window !== "undefined" ? `${window.location.origin}/logo.png` : "",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      contactType: "customer service",
      email: siteConfig.contact.email,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.zip,
      addressCountry: "US",
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
    ],
    foundingDate: siteConfig.company.foundedYear.toString(),
  };
}

export function generateProductJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    description: siteConfig.description,
    applicationCategory: "HealthApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "12.00",
      priceValidUntil: "2025-12-31",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    },
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    featureList: [
      "X-Ray Super-Resolution",
      "CT Enhancement",
      "MRI Super-Resolution",
      "Digital Pathology",
      "OEM-Agnostic Processing",
      "HIPAA Compliance",
    ],
  };
}

export function generateBreadcrumbJsonLd(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

export function generateFAQJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
