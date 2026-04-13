import { Routes } from '@angular/router'
import { seoResolver } from './resolver/seo.resolver'
import { comingSoonGuard } from './guards/coming-soon.guard'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/layouts/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      // ── Home ───────────────────────────────────────────────────────────────
      {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        canActivate: [comingSoonGuard],
        resolve: { seo: seoResolver },
        data: {
          name: 'home',
          comingSoon: false,
          seo: {
            title: 'seo.home.title',
            description: 'seo.home.description',
            metaTags: [
              { name: 'description', content: 'seo.home.description' },
              { property: 'og:title', content: 'seo.home.title' },
              { property: 'og:description', content: 'seo.home.description' },
              { property: 'og:image', content: 'https://german.clg.md/assets/images/og-image.jpg' },
              { name: 'twitter:image', content: 'https://german.clg.md/assets/images/og-image.jpg' },
            ],
          },
        },
      },

      // ── Coming soon page ───────────────────────────────────────────────────
      {
        path: 'coming-soon',
        loadComponent: () => import('./components/coming-soon/coming-soon.component').then(m => m.ComingSoonComponent),
        data: { name: 'coming-soon' },
      },

      // ── Future pages — flip comingSoon: false when page is ready ───────────
      {
        path: 'cursuri',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent), // replace with CoursesComponent
        canActivate: [comingSoonGuard],
        resolve: { seo: seoResolver },
        data: {
          name: 'courses',
          comingSoon: true,
          seo: {
            title: 'seo.courses.title',
            description: 'seo.courses.description',
            metaTags: [
              { name: 'description', content: 'seo.courses.description' },
              { property: 'og:title', content: 'seo.courses.title' },
              { property: 'og:description', content: 'seo.courses.description' },
              { property: 'og:image', content: 'https://german.clg.md/assets/images/og-image.jpg' },
            ],
          },
        },
      },
      {
        path: 'examene-osd',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent), // replace with OsdComponent
        canActivate: [comingSoonGuard],
        resolve: { seo: seoResolver },
        data: {
          name: 'osd',
          comingSoon: true,
          seo: {
            title: 'seo.osd.title',
            description: 'seo.osd.description',
            metaTags: [
              { name: 'description', content: 'seo.osd.description' },
              { property: 'og:title', content: 'seo.osd.title' },
              { property: 'og:description', content: 'seo.osd.description' },
              { property: 'og:image', content: 'https://german.clg.md/assets/images/og-image.jpg' },
            ],
          },
        },
      },
      {
        path: 'cursuri-medici',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        canActivate: [comingSoonGuard],
        resolve: { seo: seoResolver },
        data: {
          name: 'medical',
          comingSoon: true,
          seo: {
            title: 'seo.medical.title',
            description: 'seo.medical.description',
            metaTags: [
              { name: 'description', content: 'seo.medical.description' },
              { property: 'og:title', content: 'seo.medical.title' },
              { property: 'og:description', content: 'seo.medical.description' },
              { property: 'og:image', content: 'https://german.clg.md/assets/images/og-image.jpg' },
            ],
          },
        },
      },
      {
        path: 'studii-strainatate',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        canActivate: [comingSoonGuard],
        resolve: { seo: seoResolver },
        data: {
          name: 'abroad',
          comingSoon: true,
          seo: {
            title: 'seo.abroad.title',
            description: 'seo.abroad.description',
            metaTags: [
              { name: 'description', content: 'seo.abroad.description' },
              { property: 'og:title', content: 'seo.abroad.title' },
              { property: 'og:description', content: 'seo.abroad.description' },
              { property: 'og:image', content: 'https://german.clg.md/assets/images/og-image.jpg' },
            ],
          },
        },
      },
      {
        path: 'despre-noi',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        canActivate: [comingSoonGuard],
        resolve: { seo: seoResolver },
        data: {
          name: 'about',
          comingSoon: true,
          seo: {
            title: 'seo.about.title',
            description: 'seo.about.description',
            metaTags: [
              { name: 'description', content: 'seo.about.description' },
              { property: 'og:title', content: 'seo.about.title' },
              { property: 'og:description', content: 'seo.about.description' },
              { property: 'og:image', content: 'https://german.clg.md/assets/images/og-image.jpg' },
            ],
          },
        },
      },
    ],
  },
  { path: '**', redirectTo: '' },
]
