import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild, inject } from '@angular/core'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { MatDialog } from '@angular/material/dialog'
import { Swiper } from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import { Course } from '@/interfaces'
import { EnrollDialogComponent } from '@/components/enroll-dialog/enroll-dialog.component'
import { EnrollDialogData } from '@/interfaces'

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements AfterViewInit, OnDestroy {
  @ViewChild('swiperEl') swiperEl!: ElementRef<HTMLElement>

  private swiper!: InstanceType<typeof Swiper>
  private dialog = inject(MatDialog)
  private translate = inject(TranslateService)

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
    this.swiper = new Swiper(this.swiperEl.nativeElement, {
      modules: [Navigation, Pagination],
      slidesPerView: 1.2,
      spaceBetween: 24,
      pagination: {
        el: '.courses__pagination',
        clickable: true,
      },
      navigation: {
        prevEl: '.courses__arrow--prev',
        nextEl: '.courses__arrow--next',
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
