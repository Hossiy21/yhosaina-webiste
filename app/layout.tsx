import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { BackgroundAnimation } from '@/components/background-animation'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans'
});
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'Hosaina Y - Full Stack Engineer',
  description: 'Full-Stack Developer building fast, scalable, and production-ready web applications. Specialized in Next.js, GoLang, and modern SaaS architecture.',
  generator: 'Hosaina Portfolio v2',
  keywords: ['Full Stack Developer', 'Software Engineer', 'GoLang', 'JavaScript', 'React', 'Next.js', 'SaaS Builder'],
  authors: [{ name: 'Hosaina Y' }],
  openGraph: {
    title: 'Hosaina Y - Full Stack Engineer',
    description: 'Building fast, scalable, and production-ready web applications.',
    url: 'https://yhosaina.com', // Replace with your actual domain
    siteName: 'Hosaina Y Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Hosaina Y - Full Stack Engineer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hosaina Y - Full Stack Engineer',
    description: 'Full-Stack Developer building fast, scalable, and production-ready web applications.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      {
        url: '/programmer.webp',
      },
    ],
    apple: '/programmer.webp',
  },
}

import Script from 'next/script'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased relative`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FWFWY1X359"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FWFWY1X359');
          `}
        </Script>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <BackgroundAnimation />
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
