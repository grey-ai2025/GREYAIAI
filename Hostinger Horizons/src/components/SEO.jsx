import { Helmet } from 'react-helmet';

const defaultMeta = {
  title: 'Grey AI | AI Literacy, Custom AI Solutions & Intelligent Agents',
  description: 'Build AI fluency with SPARK Suite assessments and training. Get custom AI assistants and intelligent agents for your business. Free AI readiness assessment available.',
  image: 'https://res.cloudinary.com/dnv13bm7j/image/upload/v1769191156/og-image_greyai.png',
  url: 'https://grey-ai2025.github.io/GREYAIAI/',
  type: 'website',
  siteName: 'Grey AI',
};

export default function SEO({
  title,
  description,
  image,
  url,
  type = 'website',
  noindex = false,
  structuredData,
}) {
  const meta = {
    title: title || defaultMeta.title,
    description: description || defaultMeta.description,
    image: image || defaultMeta.image,
    url: url || defaultMeta.url,
    type: type || defaultMeta.type,
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{meta.title}</title>
      <meta name="title" content={meta.title} />
      <meta name="description" content={meta.description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:site_name" content={defaultMeta.siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={meta.url} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />

      {/* Canonical URL */}
      <link rel="canonical" href={meta.url} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

// Pre-configured SEO for common pages
export const HomePageSEO = () => (
  <SEO
    title="Grey AI | AI Literacy, Custom AI Solutions & Intelligent Agents"
    description="Discover your AI readiness with the free SPARK Score assessment. Build AI fluency with personalized training, custom AI assistants, and intelligent agents for your business."
    url="https://grey-ai2025.github.io/GREYAIAI/"
    structuredData={{
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Grey AI",
      "url": "https://grey-ai2025.github.io/GREYAIAI/",
      "logo": "https://res.cloudinary.com/dnv13bm7j/image/upload/v1769191156/favicon_ugkasz.ico",
      "description": "AI Literacy, Custom AI Solutions & Intelligent Agents",
      "sameAs": [],
      "offers": {
        "@type": "AggregateOffer",
        "offers": [
          {
            "@type": "Offer",
            "name": "SPARK Score Assessment",
            "description": "Free AI readiness assessment to discover your AI capabilities across 8 competency areas",
            "price": "0",
            "priceCurrency": "USD"
          },
          {
            "@type": "Offer",
            "name": "SPARK Path Training",
            "description": "24 precision micro-trainings across eight AI competency areas"
          },
          {
            "@type": "Offer",
            "name": "SPARK X Analytics",
            "description": "Enterprise AI capability analytics and team assessments"
          }
        ]
      }
    }}
  />
);

export const AboutPageSEO = () => (
  <SEO
    title="About Us - Grey AI | Empowering Businesses with AI Solutions"
    description="Learn about Grey AI's mission to democratize AI adoption for businesses. Discover our values, team, and commitment to making AI accessible and practical."
    url="https://grey-ai2025.github.io/GREYAIAI/#/about"
    structuredData={{
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Grey AI",
      "description": "Learn about Grey AI's mission to democratize AI adoption for businesses.",
      "mainEntity": {
        "@type": "Organization",
        "name": "Grey AI",
        "description": "AI Literacy, Custom AI Solutions & Intelligent Agents"
      }
    }}
  />
);

export const SolutionsPageSEO = () => (
  <SEO
    title="AI Solutions - Grey AI | Find the Right AI Tools for Your Role"
    description="Explore AI solutions tailored for executives, HR leaders, and operations teams. From AI literacy assessments to custom AI assistants and workflow automation."
    url="https://grey-ai2025.github.io/GREYAIAI/#/solutions"
    structuredData={{
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Grey AI Solutions",
      "description": "AI solutions for executives, HR leaders, and operations teams"
    }}
  />
);
