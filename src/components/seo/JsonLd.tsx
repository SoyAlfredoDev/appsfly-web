export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AppsFly",
    legalName: "Servicios Tecnológicos AppsFly SpA",
    url: "https://appsfly.cl",
    logo: "https://appsfly.cl/images/logo-appsfly.png",
    description:
      "Agencia de desarrollo web profesional en Chile. Creamos landing pages, sitios web, tiendas online y automatización de WhatsApp para pymes y emprendedores.",
    email: "comercial@appsfly.cl",
    telephone: "+56921629730",
    foundingDate: "2024",
    sameAs: [
      "https://www.instagram.com/appsfly.cl/",
      "https://www.facebook.com/profile.php?id=61585307100875",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+56921629730",
      contactType: "sales",
      availableLanguage: ["Spanish"],
      areaServed: ["CL", "MX", "CO", "AR", "PE", "VE"],
    },
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://appsfly.cl/#localbusiness",
    name: "AppsFly",
    legalName: "Servicios Tecnológicos AppsFly SpA",
    url: "https://appsfly.cl",
    logo: "https://appsfly.cl/images/logo-appsfly.png",
    image: "https://appsfly.cl/images/og-image.png",
    description:
      "Desarrollo web profesional, tiendas online y automatización de WhatsApp para empresas en Chile y Latinoamérica.",
    email: "comercial@appsfly.cl",
    telephone: "+56921629730",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.45,
      longitude: -70.67,
    },
    areaServed: [
      {
        "@type": "Country",
        name: "Chile",
      },
      {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: -33.45,
          longitude: -70.67,
        },
        geoRadius: "5000",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "23",
      bestRating: "5",
    },
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://appsfly.cl/#website",
    name: "AppsFly",
    url: "https://appsfly.cl",
    inLanguage: "es",
    publisher: {
      "@id": "https://appsfly.cl/#localbusiness",
    },
  };

  const services = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Desarrollo de Landing Pages",
      description:
        "Creamos landing pages profesionales y optimizadas para convertir visitantes en clientes. Diseño moderno, responsive y orientado a resultados.",
      provider: { "@id": "https://appsfly.cl/#localbusiness" },
      areaServed: { "@type": "Country", name: "Chile" },
      serviceType: "Desarrollo web",
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "299",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          price: "299",
          unitText: "desde",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Desarrollo de Sitios Web Profesionales",
      description:
        "Diseñamos y desarrollamos sitios web corporativos modernos, rápidos y bien estructurados para empresas y emprendedores en Chile.",
      provider: { "@id": "https://appsfly.cl/#localbusiness" },
      areaServed: { "@type": "Country", name: "Chile" },
      serviceType: "Diseño web profesional",
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "599",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          price: "599",
          unitText: "desde",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Desarrollo de Tiendas Online (E-commerce)",
      description:
        "Desarrollamos tiendas online profesionales con catálogo, carrito de compra e integración de pagos. Soluciones e-commerce completas para vender por internet.",
      provider: { "@id": "https://appsfly.cl/#localbusiness" },
      areaServed: { "@type": "Country", name: "Chile" },
      serviceType: "Desarrollo ecommerce",
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: "899",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          price: "899",
          unitText: "desde",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Automatización de WhatsApp para Negocios",
      description:
        "Implementamos automatización de WhatsApp Business para responder más rápido, organizar consultas y mejorar la atención digital de tu negocio.",
      provider: { "@id": "https://appsfly.cl/#localbusiness" },
      areaServed: { "@type": "Country", name: "Chile" },
      serviceType: "Automatización digital",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Desarrollo de Software a Medida",
      description:
        "Desarrollamos software personalizado y sistemas web para gestión empresarial, integración de procesos y automatización de tareas.",
      provider: { "@id": "https://appsfly.cl/#localbusiness" },
      areaServed: { "@type": "Country", name: "Chile" },
      serviceType: "Desarrollo de software",
    },
  ];

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://appsfly.cl",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Servicios",
        item: "https://appsfly.cl/#services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Planes",
        item: "https://appsfly.cl/#pricing",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contacto",
        item: "https://appsfly.cl/#contact",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
      {services.map((service, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
