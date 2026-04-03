import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'
import { register } from 'swiper/element/bundle'
import { Course } from '@/interfaces'

register()

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  spaceBetween = 24

  courses: Course[] = [
    {
      level: 'A1.1',
      titleKey: 'courses.subtitle',
      features: ['courses.items.a11.level', 'courses.items.a11.duration', 'courses.items.a11.format'],
      link: '/cursuri/a1-1',
    },
    {
      level: 'A1.2',
      titleKey: 'courses.subtitle',
      features: ['courses.items.a12.level', 'courses.items.a12.duration', 'courses.items.a12.format'],
      link: '/cursuri/a1-2',
    },
    {
      level: 'A2.1',
      titleKey: 'courses.subtitle',
      features: ['courses.items.a21.level', 'courses.items.a21.duration', 'courses.items.a21.format'],
      link: '/cursuri/a2-1',
    },
    {
      level: 'A2.2',
      titleKey: 'courses.subtitle',
      features: ['courses.items.a22.level', 'courses.items.a22.duration', 'courses.items.a22.format'],
      link: '/cursuri/a2-2',
    },
    {
      level: 'B1.1',
      titleKey: 'courses.subtitle',
      features: ['courses.items.b11.level', 'courses.items.b11.duration', 'courses.items.b11.format'],
      link: '/cursuri/b1-1',
    },
    {
      level: 'B1.2',
      titleKey: 'courses.subtitle',
      features: ['courses.items.b12.level', 'courses.items.b12.duration', 'courses.items.b12.format'],
      link: '/cursuri/b1-2',
    },
    {
      level: 'B2.1',
      titleKey: 'courses.subtitle',
      features: ['courses.items.b21.level', 'courses.items.b21.duration', 'courses.items.b21.format'],
      link: '/cursuri/b2-1',
    },
    {
      level: 'B2.2',
      titleKey: 'courses.subtitle',
      features: ['courses.items.b22.level', 'courses.items.b22.duration', 'courses.items.b22.format'],
      link: '/cursuri/b2-2',
    },
  ]
}
