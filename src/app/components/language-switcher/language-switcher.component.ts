import { Component, inject } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { LanguageService } from '@/services/language.service'
import { LanguageDialogComponent } from './language-dialog/language-dialog.component'

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss',
})
export class LanguageSwitcherComponent {
  private dialog = inject(MatDialog)
  ls = inject(LanguageService)

  open(): void {
    this.dialog.open(LanguageDialogComponent, {
      panelClass: 'lang-dialog-panel',
      backdropClass: 'lang-dialog-backdrop',
      width: '280px',
    })
  }
}