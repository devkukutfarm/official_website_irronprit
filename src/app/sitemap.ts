import type { MetadataRoute } from 'next'
import { classesList } from '@/lib/data/classes'
import { trainersList } from '@/lib/data/trainers'

const BASE = 'https://www.ironprit.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/classes`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/packages`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/trainers`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]

  const classRoutes: MetadataRoute.Sitemap = classesList.map((cls) => ({
    url: `${BASE}/classes/${cls.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const trainerRoutes: MetadataRoute.Sitemap = trainersList.map((t) => ({
    url: `${BASE}/trainers/${t.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...classRoutes, ...trainerRoutes]
}
