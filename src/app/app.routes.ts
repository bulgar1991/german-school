import { Routes } from '@angular/router'
import { seoResolver } from './resolver/seo.resolver'
import { comingSoonGuard } from './guards/coming-soon.guard'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/layouts/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
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
            ],
          },
        },
      },

      {
        path: 'coming-soon',
        loadComponent: () => import('./components/coming-soon/coming-soon.component').then(m => m.ComingSoonComponent),
        data: { name: 'coming-soon' },
      },

      {
        path: 'cursuri',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
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
              { property: 'og:image', content: 'https://german.clg.md/assets/images/og-image.jpg' },
            ],
          },
        },
      },

      {
        path: 'examene-osd',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
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
              { property: 'og:image', content: 'https://german.clg.md/assets/images/og-image.jpg' },
            ],
          },
        },
      },

      // ── Cursuri pentru medici + sub-pages (all comingSoon: true for now) ──
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
              { property: 'og:image', content: 'https://german.clg.md/assets/images/og-image.jpg' },
            ],
          },
        },
      },
      {
        path: 'cursuri-medici/oferta-generala',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        canActivate: [comingSoonGuard],
        data: { name: 'medical-general', comingSoon: true },
      },
      {
        path: 'cursuri-medici/mod-desfasurare',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        canActivate: [comingSoonGuard],
        data: { name: 'medical-format', comingSoon: true },
      },
      {
        path: 'cursuri-medici/suport-curs',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        canActivate: [comingSoonGuard],
        data: { name: 'medical-support', comingSoon: true },
      },
      {
        path: 'cursuri-medici/mod-predare',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        canActivate: [comingSoonGuard],
        data: { name: 'medical-teaching', comingSoon: true },
      },
      {
        path: 'cursuri-medici/pregatire-examene',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        canActivate: [comingSoonGuard],
        data: { name: 'medical-exam', comingSoon: true },
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
              { property: 'og:image', content: 'https://german.clg.md/assets/images/og-image.jpg' },
            ],
          },
        },
      },
    ],
  },
  { path: '**', redirectTo: '' },
]
