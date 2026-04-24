export interface Course {
  level: string
  titleKey: string
  features: string[]
  link: string
}

export interface Level {
  code: string
  label: string
  duration: string
  hours: string
  format: string
  desc: string
  topics: string[]
}
