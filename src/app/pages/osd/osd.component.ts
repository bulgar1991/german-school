import { Component, signal, inject, OnInit, OnDestroy } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { Subscription } from 'rxjs'

interface Exam {
  level: string
  name: string
  use: string
  price: string
  duration: string
  skills: string[]
}
interface Step {
  num: string
  title: string
  desc: string
}
interface Faq {
  q: string
  a: string
}

@Component({
  selector: 'app-osd',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './osd.component.html',
  styleUrl: './osd.component.scss',
})
export class OsdComponent implements OnInit, OnDestroy {
  private translate = inject(TranslateService)
  private sub!: Subscription

  exams = signal<Exam[]>([])
  steps = signal<Step[]>([])
  faq = signal<Faq[]>([])
  openFaq = signal(-1)

  ngOnInit(): void {
    this.load()
    this.sub = this.translate.onLangChange.subscribe(() => this.load())
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }

  private load(): void {
    this.exams.set(this.translate.instant('osdPage.exams'))
    this.steps.set(this.translate.instant('osdPage.steps'))
    this.faq.set(this.translate.instant('osdPage.faq'))
  }

  toggle(i: number): void {
    this.openFaq.update(cur => (cur === i ? -1 : i))
  }
}
