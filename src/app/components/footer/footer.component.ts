import { Component } from '@angular/core'
import { TranslateModule } from '@ngx-translate/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-footer',
  imports: [TranslateModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  year = new Date().getFullYear()

  navLinks = [
    { key: 'footer.nav.announcements', link: '/anunturi' },
    { key: 'footer.nav.partner', link: '/partener' },
    { key: 'footer.nav.gallery', link: '/galerie' },
    { key: 'footer.nav.contact', link: '/contact' },
  ]
}
