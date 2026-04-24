import { Routes } from '@angular/router'
import { seoResolver } from './resolver/seo.resolver'
import { comingSoonGuard } from './guards/coming-soon.guard'

const ogImage = 'https://german.clg.md/assets/images/og-image.jpg'

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
              { property: 'og:image', content: ogImage },
            ],
          },
        },
      },

      // ── Coming soon ────────────────────────────────────────────────────────
      {
        path: 'coming-soon',
        loadComponent: () => import('./pages/coming-soon/coming-soon.component').then(m => m.ComingSoonComponent),
        data: { name: 'coming-soon' },
      },

      // ── Cursuri ────────────────────────────────────────────────────────────
      {
        path: 'cursuri',
        loadComponent: () => import('./pages/courses/courses.component').then(m => m.CoursesComponent),
        canActivate: [comingSoonGuard],
        resolve: { seo: seoResolver },
        data: {
          name: 'courses',
          comingSoon: false,
          seo: {
            title: 'seo.courses.title',
            description: 'seo.courses.description',
            metaTags: [
              { name: 'description', content: 'seo.courses.description' },
              { property: 'og:title', content: 'seo.courses.title' },
              { property: 'og:description', content: 'seo.courses.description' },
              { property: 'og:image', content: ogImage },
            ],
          },
        },
      },

      // ── Examene ÖSD ────────────────────────────────────────────────────────
      {
        path: 'examene-osd',
        loadComponent: () => import('./pages/osd/osd.component').then(m => m.OsdComponent),
        canActivate: [comingSoonGuard],
        resolve: { seo: seoResolver },
        data: {
          name: 'osd',
          comingSoon: false,
          seo: {
            title: 'seo.osd.title',
            description: 'seo.osd.description',
            metaTags: [
              { name: 'description', content: 'seo.osd.description' },
              { property: 'og:title', content: 'seo.osd.title' },
              { property: 'og:description', content: 'seo.osd.description' },
              { property: 'og:image', content: ogImage },
            ],
          },
        },
      },

      // ── Cursuri pentru medici ──────────────────────────────────────────────
      {
        path: 'cursuri-medici',
        loadComponent: () => import('./pages/medical/medical.component').then(m => m.MedicalComponent),
        canActivate: [comingSoonGuard],
        resolve: { seo: seoResolver },
        data: {
          name: 'medical',
          comingSoon: false,
          seo: {
            title: 'seo.medical.title',
            description: 'seo.medical.description',
            metaTags: [
              { name: 'description', content: 'seo.medical.description' },
              { property: 'og:title', content: 'seo.medical.title' },
              { property: 'og:description', content: 'seo.medical.description' },
              { property: 'og:image', content: ogImage },
            ],
          },
        },
      },
      {
        path: 'cursuri-medici/oferta-generala',
        loadComponent: () => import('./pages/medical/general/general.component').then(m => m.MedicalGeneralComponent),
        canActivate: [comingSoonGuard],
        data: { name: 'medical-general', comingSoon: false },
      },
      {
        path: 'cursuri-medici/mod-desfasurare',
        loadComponent: () => import('./pages/medical/format/format.component').then(m => m.MedicalFormatComponent),
        canActivate: [comingSoonGuard],
        data: { name: 'medical-format', comingSoon: false },
      },
      {
        path: 'cursuri-medici/suport-curs',
        loadComponent: () => import('./pages/medical/support/support.component').then(m => m.MedicalSupportComponent),
        canActivate: [comingSoonGuard],
        data: { name: 'medical-support', comingSoon: false },
      },
      {
        path: 'cursuri-medici/mod-predare',
        loadComponent: () =>
          import('./pages/medical/teaching/teaching.component').then(m => m.MedicalTeachingComponent),
        canActivate: [comingSoonGuard],
        data: { name: 'medical-teaching', comingSoon: false },
      },
      {
        path: 'cursuri-medici/pregatire-examene',
        loadComponent: () => import('./pages/medical/exam/exam.component').then(m => m.MedicalExamComponent),
        canActivate: [comingSoonGuard],
        data: { name: 'medical-exam', comingSoon: false },
      },

      // ── Studii în Străinătate ──────────────────────────────────────────────
      {
        path: 'studii-strainatate',
        loadComponent: () => import('./pages/abroad/abroad.component').then(m => m.AbroadComponent),
        canActivate: [comingSoonGuard],
        resolve: { seo: seoResolver },
        data: {
          name: 'abroad',
          comingSoon: false,
          seo: {
            title: 'seo.abroad.title',
            description: 'seo.abroad.description',
            metaTags: [
              { name: 'description', content: 'seo.abroad.description' },
              { property: 'og:title', content: 'seo.abroad.title' },
              { property: 'og:description', content: 'seo.abroad.description' },
              { property: 'og:image', content: ogImage },
            ],
          },
        },
      },

      // ── Despre noi ────────────────────────────────────────────────────────
      {
        path: 'despre-noi',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
        canActivate: [comingSoonGuard],
        resolve: { seo: seoResolver },
        data: {
          name: 'about',
          comingSoon: false,
          seo: {
            title: 'seo.about.title',
            description: 'seo.about.description',
            metaTags: [
              { name: 'description', content: 'seo.about.description' },
              { property: 'og:title', content: 'seo.about.title' },
              { property: 'og:description', content: 'seo.about.description' },
              { property: 'og:image', content: ogImage },
            ],
          },
        },
      },
    ],
  },
  { path: '**', redirectTo: '' },
]
