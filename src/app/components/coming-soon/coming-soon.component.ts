import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.scss',
})
export class ComingSoonComponent {}
