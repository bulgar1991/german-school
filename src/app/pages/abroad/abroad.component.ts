import { Component, signal, inject, OnInit, OnDestroy } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { Subscription } from 'rxjs'

interface Dest {
  flag: string
  country: string
  cities: string
  desc: string
  req: string
  links: string[]
}
interface Step {
  step: string
  title: string
  desc: string
}

@Component({
  selector: 'app-abroad',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './abroad.component.html',
  styleUrl: './abroad.component.scss',
})
export class AbroadComponent implements OnInit, OnDestroy {
  private translate = inject(TranslateService)
  private sub!: Subscription

  destinations = signal<Dest[]>([])
  timeline = signal<Step[]>([])
  stats = signal<{ val: string; label: string }[]>([])

  ngOnInit(): void {
    this.load()
    this.sub = this.translate.onLangChange.subscribe(() => this.load())
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }

  private load(): void {
    this.destinations.set(this.translate.instant('abroadPage.destinations'))
    this.timeline.set(this.translate.instant('abroadPage.timeline'))
    this.stats.set(this.translate.instant('abroadPage.stats'))
  }
}
