import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ModalComponent } from '@ng-demos/ui';

@Component({
  selector: 'ngrx-demos-user-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ModalComponent],
  templateUrl: './user-modal.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserModalComponent {
  @ViewChild('modalComponent') modal:
    | ModalComponent<UserModalComponent>
    | undefined;

  newsletterForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.newsletterForm = this.fb.group({
      username: ['', [Validators.required]],
    });
  }

  async createRecord(): Promise<void> {
    console.log(this.newsletterForm.value);

    await this.close();
  }

  async close(): Promise<void> {
    await this.modal?.close();
  }
}
