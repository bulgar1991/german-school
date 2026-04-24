import { Component, signal, HostListener } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'
import { NavLink } from '@/interfaces'
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, RouterLink, RouterLinkActive, LanguageSwitcherComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  sidebarOpen = signal(false)
  scrolled = signal(false)

  navLinks: NavLink[] = [
    { key: 'nav.home', anchor: '/' },
    { key: 'nav.courses', anchor: '/cursuri' },
    { key: 'nav.osd', anchor: '/examene-osd' },
    { key: 'nav.abroad', anchor: '/studii-strainatate' },
    { key: 'nav.about', anchor: '/despre-noi' },
  ]

  openSidebar(): void {
    this.sidebarOpen.set(true)
    document.body.style.overflow = 'hidden'
  }
  closeSidebar(): void {
    this.sidebarOpen.set(false)
    document.body.style.overflow = ''
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20)
  }

  @HostListener('document:keydown.escape')
  onEsc(): void {
    this.closeSidebar()
  }
}
