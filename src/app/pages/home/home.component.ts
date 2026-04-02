import { Component } from "@angular/core";
import {BannerComponent} from "@components/banner/banner.component";
import { ServicesComponent } from '@components/services/services.component'

@Component({
  selector: 'app-home',
  imports: [BannerComponent, ServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
