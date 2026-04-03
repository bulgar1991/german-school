import { Component } from '@angular/core'
import { TranslateModule } from '@ngx-translate/core'

@Component({
  selector: 'app-certificate-banner',
  imports: [TranslateModule],
  templateUrl: './certificate-banner.component.html',
  styleUrl: './certificate-banner.component.scss',
  standalone: true,
})
export class CertificateBannerComponent {}
