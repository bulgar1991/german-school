import { Component, AfterViewInit, OnDestroy, ElementRef, ViewChild } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'
import { Swiper } from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import { Service } from '@/interfaces'

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent implements AfterViewInit, OnDestroy {
  @ViewChild('swiperEl') swiperEl!: ElementRef<HTMLElement>

  private swiper!: InstanceType<typeof Swiper>

  services: Service[] = [
    { icon: 'assets/images/services/chat.svg', titleKey: 'services.items.0.title', link: '/cursuri' },
    { icon: 'assets/images/services/osd.svg', titleKey: 'services.items.1.title', link: '/examene-osd' },
    { icon: 'assets/images/services/writing-pad.svg', titleKey: 'services.items.2.title', link: '/pregatire-examene' },
    { icon: 'assets/images/services/language.svg', titleKey: 'services.items.3.title', link: '/cursuri-limbi-moderne' },
    { icon: 'assets/images/services/chat.svg', titleKey: 'services.items.0.title', link: '/cursuri' },
    { icon: 'assets/images/services/osd.svg', titleKey: 'services.items.1.title', link: '/examene-osd' },
    { icon: 'assets/images/services/writing-pad.svg', titleKey: 'services.items.2.title', link: '/pregatire-examene' },
    { icon: 'assets/images/services/language.svg', titleKey: 'services.items.3.title', link: '/cursuri-limbi-moderne' },
  ]

  ngAfterViewInit(): void {
    this.swiper = new Swiper(this.swiperEl.nativeElement, {
      modules: [Navigation, Pagination],
      slidesPerView: 1.2,
      spaceBetween: 24,
      pagination: {
        el: '.services__pagination',
        clickable: true,
      },
      navigation: {
        prevEl: '.services__arrow--prev',
        nextEl: '.services__arrow--next',
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
