import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { User } from '../../models/users.models';

@Component({
  standalone: true,
  selector: 'ngrx-demos-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class UserModalComponent {
  /**
   * The form to add a user
   */
  form = this.formBuilder.group({
    name: ['', Validators.required],
    company: ['', Validators.required],
    email: ['', Validators.required, Validators.email],
    title: ['', Validators.required],
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<UserModalComponent>,
    private formBuilder: FormBuilder
  ) {}

  /**
   * Gets the form value and pass it to the caller
   */
  save(): void {
    const user = this.form.value as User;

    this.dialogRef.close(user);
  }
}
