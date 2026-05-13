import type { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  path?: string
}

export function generateSEO({
  title,
  description,
  path = '',
}: SEOProps): Metadata {
  const baseUrl = 'https://kuntadevihealthcare.com'
  return {
    title,
    description,
    openGraph: {
      title: `${title} | Kunta Devi Health Care`,
      description,
      url: `${baseUrl}${path}`,
      siteName: 'Kunta Devi Health Care',
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Kunta Devi Health Care`,
      description,
    },
  }
}
