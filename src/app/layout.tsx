import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://appsfly.cl";
const SITE_NAME = "AppsFly";
const SITE_TITLE = "AppsFly | Desarrolladores Web y Software";
const SITE_DESCRIPTION =
  "Landing pages, sitios web, tiendas online, automatización de WhatsApp y software a medida";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,

  keywords: [
    "desarrollo web chile",
    "diseño web profesional chile",
    "crear landing page profesional",
    "desarrollo de landing page",
    "crear tienda online chile",
    "desarrollo ecommerce chile",
    "automatización whatsapp negocios",
    "automatizar whatsapp empresa",
    "desarrollo de software a medida",
    "agencia desarrollo web chile",
    "crear sitio web para empresa",
    "desarrollo de páginas web chile",
    "desarrollo de sistemas web",
  ],

  authors: [{ name: "Servicios Tecnológicos AppsFly SpA" }],
  creator: "AppsFly",
  publisher: "Servicios Tecnológicos AppsFly SpA",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
    languages: {
      "es-CL": SITE_URL,
      es: SITE_URL,
    },
  },

  openGraph: {
    type: "website",
    locale: "es_CL",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "https://www.appsfly.cl/images/og-image-v2.jpg",
        width: 1200,
        height: 630,
        alt: "AppsFly — Desarrollo web y software",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["https://www.appsfly.cl/images/og-image-v2.jpg"],
    creator: "@appsfly_cl",
  },

  category: "technology",

  other: {
    "geo.region": "CL",
    "geo.placename": "Chile",
    "content-language": "es",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7Y75DCL1ST"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7Y75DCL1ST');
          `}
        </Script>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
