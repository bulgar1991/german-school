import { Component, inject, ViewEncapsulation } from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog'
import { LanguageService, LANGUAGES, Lang } from '@/services/language.service'

@Component({
  selector: 'app-language-dialog',
  standalone: true,
  imports: [],
  templateUrl: './language-dialog.component.html',
  styleUrl: './language-dialog.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LanguageDialogComponent {
  private dialogRef = inject(MatDialogRef<LanguageDialogComponent>)
  ls = inject(LanguageService)
  langs = LANGUAGES

  pick(code: Lang): void {
    this.ls.setLang(code)
    this.dialogRef.close(code)
  }
}