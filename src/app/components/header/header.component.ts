import {Component, signal} from "@angular/core";
import {NavLink} from "@/interfaces";

@Component({
  selector: "app-header",
  imports: [],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  sidebarOpen = signal(false)
  scrolled = signal(false)

  navLinks: NavLink[] = [
    {
      key: 'nav.home',
      anchor: '/'
    }
  ]
}
