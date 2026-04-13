export interface MetaTag {
  name?: string
  property?: string
  content: string
}

export interface SeoData {
  title: string
  description: string
  metaTags: MetaTag[]
}
