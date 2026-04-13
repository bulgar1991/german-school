import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, AfterViewInit, ElementRef, ViewChild } from '@angular/core'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { MatDialog } from '@angular/material/dialog'
import { register } from 'swiper/element/bundle'
import { Course } from '@/interfaces'
import { EnrollDialogComponent } from '@/components/enroll-dialog/enroll-dialog.component'
import {EnrollDialogData} from '@/interfaces'

register()

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [TranslateModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements AfterViewInit {
  @ViewChild('swiperEl') swiperEl!: ElementRef

  private dialog = inject(MatDialog)
  private translate = inject(TranslateService)

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

  ngAfterViewInit(): void {
    const swiper = this.swiperEl.nativeElement
    Object.assign(swiper, {
      spaceBetween: this.spaceBetween,
      slidesPerView: 1.2,
      pagination: { clickable: true },
      navigation: {
        prevEl: this.swiperEl.nativeElement.previousElementSibling?.querySelector('#courses-prev') ?? '#courses-prev',
        nextEl: this.swiperEl.nativeElement.previousElementSibling?.querySelector('#courses-next') ?? '#courses-next',
      },
      breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 16 },
        1024: { slidesPerView: 3, spaceBetween: 24 },
        1280: { slidesPerView: 4, spaceBetween: 24 },
      },
    })
    swiper.initialize()
  }

  prev(): void {
    this.swiperEl.nativeElement.swiper.slidePrev()
  }
  next(): void {
    this.swiperEl.nativeElement.swiper.slideNext()
  }

  openEnroll(course: Course): void {
    const data: EnrollDialogData = {
      level: course.level,
      titleKey: this.translate.instant(course.titleKey),
    }
    this.dialog.open(EnrollDialogComponent, {
      data,
      panelClass: 'enroll-dialog-panel',
      width: '860px',
      maxWidth: '95vw',
      maxHeight: '90vh',
      autoFocus: false,
    })
  }
}
