import { Component, signal, inject, OnInit, OnDestroy } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements OnInit, OnDestroy {
  private translate = inject(TranslateService)
  private sub!: Subscription

  stats = signal<{ val: string; label: string }[]>([])
  team = signal<{ name: string; role: string; exp: string; cert: string; emoji: string }[]>([])
  values = signal<{ icon: string; title: string; desc: string }[]>([])
  milestones = signal<{ year: string; text: string }[]>([])

  ngOnInit(): void {
    this.load()
    this.sub = this.translate.onLangChange.subscribe(() => this.load())
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }

  private load(): void {
    this.stats.set(this.translate.instant('aboutPage.stats'))
    this.team.set(this.translate.instant('aboutPage.team'))
    this.values.set(this.translate.instant('aboutPage.values'))
    this.milestones.set(this.translate.instant('aboutPage.milestones'))
  }
}
