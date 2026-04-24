import { Component, signal, inject, OnInit, OnDestroy } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { Subscription } from 'rxjs'

interface SubPage {
  title: string
  desc: string
  iconClass: string
  link: string
  tag: string
}

@Component({
  selector: 'app-medical',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './medical.component.html',
  styleUrl: './medical.component.scss',
})
export class MedicalComponent implements OnInit, OnDestroy {
  private translate = inject(TranslateService)
  private sub!: Subscription

  subPages = signal<SubPage[]>([])
  stats = signal<{ val: string; label: string }[]>([])
  professions = signal<{ iconClass: string; name: string }[]>([])

  ngOnInit(): void {
    this.load()
    this.sub = this.translate.onLangChange.subscribe(() => this.load())
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }

  private load(): void {
    this.subPages.set(this.translate.instant('medicalPage.subPages'))
    this.stats.set(this.translate.instant('medicalPage.stats'))
    this.professions.set(this.translate.instant('medicalPage.professions'))
  }
}
