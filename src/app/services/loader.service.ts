import { Injectable, signal } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class LoaderService {
  visible = signal(false)
  progress = signal(0)

  private interval: ReturnType<typeof setInterval> | null = null

  show(): void {
    this.progress.set(0)
    this.visible.set(true)
    this.simulateProgress()
  }

  complete(): void {
    this.clearInterval()
    this.progress.set(100)
    // hide after progress bar finishes
    setTimeout(() => this.visible.set(false), 400)
  }

  private simulateProgress(): void {
    this.clearInterval()
    this.interval = setInterval(() => {
      const current = this.progress()
      // slow down as it approaches 90
      if (current < 90) {
        const increment = current < 30 ? 8 : current < 60 ? 4 : 1.5
        this.progress.set(Math.min(current + increment, 90))
      }
    }, 120)
  }

  private clearInterval(): void {
    if (this.interval) {
      clearInterval(this.interval)
      this.interval = null
    }
  }
}
