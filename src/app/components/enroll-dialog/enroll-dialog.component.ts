import { Component, inject, signal, ViewEncapsulation } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { TranslateModule } from '@ngx-translate/core'
import { environment } from '../../../environments/environment'
import { EnrollDialogData } from '@/interfaces'

type Step = 1 | 2
type Status = 'idle' | 'sending' | 'success' | 'error'

@Component({
  selector: 'app-enroll-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, TranslateModule],
  templateUrl: './enroll-dialog.component.html',
  styleUrl: './enroll-dialog.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class EnrollDialogComponent {
  private fb = inject(FormBuilder)
  private dialogRef = inject(MatDialogRef<EnrollDialogComponent>)
  data = inject<EnrollDialogData>(MAT_DIALOG_DATA)

  step = signal<Step>(1)
  status = signal<Status>('idle')

  form = this.fb.group({
    lastName: ['', Validators.required],
    firstName: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: [''],
    terms: [false, Validators.requiredTrue],
  })

  next(): void {
    const { lastName, firstName, phone, email } = this.form.controls
    if (lastName.invalid || firstName.invalid || phone.invalid || email.invalid) {
      lastName.markAsTouched()
      firstName.markAsTouched()
      phone.markAsTouched()
      email.markAsTouched()
      return
    }
    this.step.set(2)
  }

  back(): void {
    this.step.set(1)
  }

  close(): void {
    this.dialogRef.close()
  }

  async submit(): Promise<void> {
    if (this.form.invalid || this.status() === 'sending') return
    this.status.set('sending')

    const { lastName, firstName, phone, email, message } = this.form.value

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: environment.web3formsKey,
          subject: `Cerere înscriere — ${this.data.level}`,
          name: `${firstName} ${lastName}`,
          email,
          phone,
          message: message || '—',
          course: `${this.data.level}`,
        }),
      })
      const json = await res.json()
      this.status.set(json.success ? 'success' : 'error')
    } catch {
      this.status.set('error')
    }
  }

  isInvalid(field: string): boolean {
    const c = this.form.get(field)
    return !!c && c.invalid && c.touched
  }
}
