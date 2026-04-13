import { Component } from '@angular/core'
import { TranslateModule } from '@ngx-translate/core'
import { RouterLink } from '@angular/router'
import { Gallery } from '@/interfaces/gallery'

@Component({
  selector: 'app-gallery',
  imports: [TranslateModule, RouterLink],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  standalone: true,
})
export class GalleryComponent {
  photos: Gallery[] = [
    { src: 'assets/images/gallery/photo-1.jpg', alt: 'Student', wide: true },
    { src: 'assets/images/gallery/photo-2.jpg', alt: 'Teacher' },
    { src: 'assets/images/gallery/photo-3.jpg', alt: 'Student' },
    { src: 'assets/images/gallery/photo-4.jpg', alt: 'Student' },
  ]
}
