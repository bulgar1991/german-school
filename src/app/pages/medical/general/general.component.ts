import { Component, signal, inject, OnInit, OnDestroy } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { Subscription } from 'rxjs'

interface Section {
  title: string
  type: 'text' | 'list'
  body?: string
  items?: string[]
}

@Component({
  selector: 'app-medical-general',
  standalone: true,
  imports: [TranslateModule, RouterLink, RouterLinkActive],
  templateUrl: './general.component.html',
  styleUrl: './general.component.scss',
})
export class MedicalGeneralComponent implements OnInit, OnDestroy {
  private translate = inject(TranslateService)
  private sub!: Subscription

  sections = signal<Section[]>([])

  ngOnInit(): void {
    this.load()
    this.sub = this.translate.onLangChange.subscribe(() => this.load())
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }

  private load(): void {
    this.sections.set(this.translate.instant('medicalGeneral.sections'))
  }
}
