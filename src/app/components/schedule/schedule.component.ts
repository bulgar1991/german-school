import { Component } from '@angular/core'
import { TranslateModule } from '@ngx-translate/core'
import { Schedule } from '@/interfaces'

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss',
})
export class ScheduleComponent {
  rows: Schedule[] = [
    { course: 'schedule.course', level: 'A1.1', days: 'schedule.rows.a11.days', hours: 'schedule.rows.a11.hours' },
    { course: 'schedule.course', level: 'A1.2', days: 'schedule.rows.a12.days', hours: 'schedule.rows.a12.hours' },
    { course: 'schedule.course', level: 'A2.1', days: 'schedule.rows.a21.days', hours: 'schedule.rows.a21.hours' },
    { course: 'schedule.course', level: 'A2.2', days: 'schedule.rows.a22.days', hours: 'schedule.rows.a22.hours' },
    { course: 'schedule.course', level: 'B1.1', days: 'schedule.rows.b11.days', hours: 'schedule.rows.b11.hours' },
    { course: 'schedule.course', level: 'B1.2', days: 'schedule.rows.b12.days', hours: 'schedule.rows.b12.hours' },
    { course: 'schedule.course', level: 'B2.1', days: 'schedule.rows.b21.days', hours: 'schedule.rows.b21.hours' },
    { course: 'schedule.course', level: 'B2.2', days: 'schedule.rows.b22.days', hours: 'schedule.rows.b22.hours' },
    { course: 'schedule.course', level: 'C1.1', days: 'schedule.rows.c11.days', hours: 'schedule.rows.c11.hours' },
  ]
}
