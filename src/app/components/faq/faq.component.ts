import { Component, signal } from '@angular/core'
import { TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'app-faq',
  imports: [TranslateModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  standalone: true,
})
export class FaqComponent {
  openIndex = signal<number | null>(null)

  items = [0, 1, 2, 3, 4, 5]

  toggle(i: number): void {
    this.openIndex.update(item => (item === i ? null : i))
  }
}
