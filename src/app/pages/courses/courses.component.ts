import { Component, signal, inject, OnInit, OnDestroy } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TranslateModule, TranslateService } from '@ngx-translate/core'
import { MatDialog } from '@angular/material/dialog'
import { Subscription } from 'rxjs'
import { EnrollDialogComponent } from '@/components/enroll-dialog/enroll-dialog.component'
import { EnrollDialogData, Level } from '@/interfaces'

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit, OnDestroy {
  private dialog = inject(MatDialog)
  private translate = inject(TranslateService)
  private sub!: Subscription

  activeCategory = signal('german')

  categories = [
    { id: 'german', labelKey: 'coursesPage.tabs.german', icon: 'icon-language-solid-full' },
    { id: 'medical', labelKey: 'coursesPage.tabs.medical', icon: 'icon-stethoscope-solid-full' },
    { id: 'kids', labelKey: 'coursesPage.tabs.kids', icon: 'icon-child-solid-full' },
    { id: 'business', labelKey: 'coursesPage.tabs.business', icon: 'icon-briefcase-solid-full' },
    { id: 'intensive', labelKey: 'coursesPage.tabs.intensive', icon: 'icon-bolt-solid-full' },
  ]

  levels: Record<string, Level[]> = { german: [], medical: [], kids: [], business: [], intensive: [] }

  ngOnInit(): void {
    this.load()
    this.sub = this.translate.onLangChange.subscribe(() => this.load())
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }

  private load(): void {
    for (const cat of Object.keys(this.levels)) {
      this.levels[cat] = this.translate.instant(`coursesPage.levels.${cat}`)
    }
  }

  get activeLevels(): Level[] {
    return this.levels[this.activeCategory()] ?? []
  }

  openEnroll(level: Level): void {
    const data: EnrollDialogData = { level: level.code, titleKey: level.label }
    this.dialog.open(EnrollDialogComponent, {
      data,
      panelClass: 'enroll-dialog-panel',
      width: '860px',
      maxWidth: '95vw',
      maxHeight: '90vh',
      autoFocus: false,
    })
  }
}
