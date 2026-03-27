import { Component, OnInit, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private translate = inject(TranslateService)

  ngOnInit(): void {
    const saved = (localStorage.getItem('lang') || 'ro') as string
    this.translate.addLangs(['ro', 'de', 'en', 'ru'])
    this.translate.setDefaultLang('ro')
    this.translate.use(saved)
  }
}