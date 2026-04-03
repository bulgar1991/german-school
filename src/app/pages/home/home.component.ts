import { Component } from "@angular/core";
import {BannerComponent} from "@components/banner/banner.component";
import { ServicesComponent } from '@components/services/services.component'
import { AnnouncementsComponent } from '@components/announcements/announcements.component'
import { CoursesComponent } from '@components/courses/courses.component'
import { FullBannerComponent } from '@components/full-banner/full-banner.component'
import { ScheduleComponent } from '@components/schedule/schedule.component'

@Component({
  selector: 'app-home',
  imports: [
    BannerComponent,
    ServicesComponent,
    AnnouncementsComponent,
    CoursesComponent,
    FullBannerComponent,
    ScheduleComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent {}
