import { Component, inject, OnInit } from '@angular/core'
import {
  Router,
  RouterOutlet,
  NavigationStart,
  NavigationEnd,
  NavigationError,
  NavigationCancel,
} from '@angular/router'
import { HeaderComponent } from '@components/header/header.component'
import { FooterComponent } from '@components/footer/footer.component'
import { LoaderComponent } from '../../loader/loader.component'
import { LoaderService } from '@/services/loader.service'

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent, LoaderComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent implements OnInit {
  private router = inject(Router)
  private loader = inject(LoaderService)

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loader.show()
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationError ||
        event instanceof NavigationCancel
      ) {
        this.loader.complete()
      }
    })
  }
}
