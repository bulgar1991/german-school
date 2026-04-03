import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'
import { register } from 'swiper/element/bundle'
import { Announcement } from '@/interfaces'

register()

@Component({
  selector: 'app-announcements',
  imports: [TranslateModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './announcements.component.html',
  styleUrl: './announcements.component.scss',
  standalone: true,
})
export class AnnouncementsComponent {
  spaceBetween = 24

  announcements: Announcement[] = [
    {
      level: 'A1.2',
      titleKey: 'announcements.items.0.title',
      descKey: 'announcements.items.0.desc',
      link: '/cursuri/a1-2',
      date: '31 ianuarie',
      time: '16:30',
    },
    {
      level: 'B1.2',
      titleKey: 'announcements.items.1.title',
      descKey: 'announcements.items.1.desc',
      link: '/cursuri/b1-2',
      date: '14 ianuarie',
      time: '16:45',
    },
    {
      level: 'A1.2',
      titleKey: 'announcements.items.2.title',
      descKey: 'announcements.items.2.desc',
      link: '/cursuri/a1-2-2',
      date: '10 ianuarie',
      time: '18:30',
    },
    {
      level: 'A2.1',
      titleKey: 'announcements.items.3.title',
      descKey: 'announcements.items.3.desc',
      link: '/cursuri/a2-1',
      date: '11 ianuarie',
      time: '',
    },
    {
      level: 'A1.2',
      titleKey: 'announcements.items.0.title',
      descKey: 'announcements.items.0.desc',
      link: '/cursuri/a1-2',
      date: '31 ianuarie',
      time: '16:30',
    },
    {
      level: 'B1.2',
      titleKey: 'announcements.items.1.title',
      descKey: 'announcements.items.1.desc',
      link: '/cursuri/b1-2',
      date: '14 ianuarie',
      time: '16:45',
    },
    {
      level: 'A1.2',
      titleKey: 'announcements.items.2.title',
      descKey: 'announcements.items.2.desc',
      link: '/cursuri/a1-2-2',
      date: '10 ianuarie',
      time: '18:30',
    },
    {
      level: 'A2.1',
      titleKey: 'announcements.items.3.title',
      descKey: 'announcements.items.3.desc',
      link: '/cursuri/a2-1',
      date: '11 ianuarie',
      time: '',
    },
  ]
}
