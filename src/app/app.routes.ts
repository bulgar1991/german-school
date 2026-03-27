import { Routes } from '@angular/router'
import { seoResolver } from './resolver/seo.resolver'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
        import('./components/layouts/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
            import('./pages/home/home.component').then(m => m.HomeComponent),
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
            ],
          },
        },
      },
      // {
      //   path: 'cursuri',
      //   loadComponent: () =>
      //     import('./pages/courses/courses.component').then(m => m.CoursesComponent),
      //   resolve: { seo: seoResolver },
      //   data: {
      //     name: 'courses',
      //     comingSoon: true,
      //     seo: {
      //       title: 'seo.courses.title',
      //       description: 'seo.courses.description',
      //       metaTags: [
      //         { name: 'description', content: 'seo.courses.description' },
      //         { property: 'og:title', content: 'seo.courses.title' },
      //         { property: 'og:description', content: 'seo.courses.description' },
      //       ],
      //     },
      //   },
      // },
    ],
  },
  { path: '**', redirectTo: '' },
]