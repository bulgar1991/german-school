import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'
import { Swiper } from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import { Announcement } from '@/interfaces'

@Component({
  selector: 'app-announcements',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './announcements.component.html',
  styleUrl: './announcements.component.scss',
})
export class AnnouncementsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('swiperEl') swiperEl!: ElementRef<HTMLElement>

  private swiper!: InstanceType<typeof Swiper>

  announcements: Announcement[] = [
    {
      level: 'A1.1',
      titleKey: 'announcements.items.0.title',
      descKey: 'announcements.items.0.desc',
      link: '/cursuri/a1-1',
      date: '1 ianuarie',
      time: '18:00',
    },
    {
      level: 'A1.2',
      titleKey: 'announcements.items.1.title',
      descKey: 'announcements.items.1.desc',
      link: '/cursuri/a1-2',
      date: '1 ianuarie',
      time: '18:00',
    },
    {
      level: 'A2.1',
      titleKey: 'announcements.items.2.title',
      descKey: 'announcements.items.2.desc',
      link: '/cursuri/a2-1',
      date: '1 ianuarie',
      time: '18:00',
    },
    {
      level: 'A2.2',
      titleKey: 'announcements.items.3.title',
      descKey: 'announcements.items.3.desc',
      link: '/cursuri/a2-2',
      date: '1 ianuarie',
      time: '18:00',
    },
    {
      level: 'B1.1',
      titleKey: 'announcements.items.4.title',
      descKey: 'announcements.items.4.desc',
      link: '/cursuri/b1-1',
      date: '1 ianuarie',
      time: '18:00',
    },
    {
      level: 'B1.2',
      titleKey: 'announcements.items.5.title',
      descKey: 'announcements.items.5.desc',
      link: '/cursuri/b1-2',
      date: '1 ianuarie',
      time: '18:00',
    },
    {
      level: 'B2.1',
      titleKey: 'announcements.items.6.title',
      descKey: 'announcements.items.6.desc',
      link: '/cursuri/b2-1',
      date: '1 ianuarie',
      time: '18:00',
    },
    {
      level: 'B2.2',
      titleKey: 'announcements.items.7.title',
      descKey: 'announcements.items.7.desc',
      link: '/cursuri/b2-2',
      date: '1 ianuarie',
      time: '18:00',
    },
    {
      level: 'C1',
      titleKey: 'announcements.items.8.title',
      descKey: 'announcements.items.8.desc',
      link: '/cursuri/c1',
      date: '1 ianuarie',
      time: '18:00',
    },
    {
      level: 'C2',
      titleKey: 'announcements.items.9.title',
      descKey: 'announcements.items.9.desc',
      link: '/cursuri/c2',
      date: '1 ianuarie',
      time: '18:00',
    },
  ]

  ngAfterViewInit(): void {
    this.swiper = new Swiper(this.swiperEl.nativeElement, {
      modules: [Navigation, Pagination],
      slidesPerView: 1.2,
      spaceBetween: 24,
      pagination: {
        el: '.announcements__pagination',
        clickable: true,
      },
      navigation: {
        prevEl: '.announcements__arrow--prev',
        nextEl: '.announcements__arrow--next',
      },
      breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 16 },
        1024: { slidesPerView: 3, spaceBetween: 24 },
        1280: { slidesPerView: 4, spaceBetween: 24 },
      },
    })
  }

  ngOnDestroy(): void {
    this.swiper?.destroy()
  }
}
