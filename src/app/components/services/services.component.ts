import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'
import { register } from 'swiper/element/bundle'
import { Service } from '@/interfaces'

register()

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  spaceBetween = 24

  services: Service[] = [
    { icon: 'assets/icons/services/chat.svg', titleKey: 'services.items.0.title', link: '/cursuri' },
    { icon: 'assets/icons/services/osd.svg', titleKey: 'services.items.1.title', link: '/examene-osd' },
    { icon: 'assets/icons/services/clipboard.svg', titleKey: 'services.items.2.title', link: '/pregatire-examene' },
    { icon: 'assets/icons/services/translate.svg', titleKey: 'services.items.3.title', link: '/cursuri-limbi-moderne' },
    { icon: 'assets/icons/services/chat.svg', titleKey: 'services.items.0.title', link: '/cursuri' },
    { icon: 'assets/icons/services/osd.svg', titleKey: 'services.items.1.title', link: '/examene-osd' },
    { icon: 'assets/icons/services/clipboard.svg', titleKey: 'services.items.2.title', link: '/pregatire-examene' },
    { icon: 'assets/icons/services/translate.svg', titleKey: 'services.items.3.title', link: '/cursuri-limbi-moderne' },
  ]
}
