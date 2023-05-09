import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { faker } from '@faker-js/faker';
import {
  UserSignalsStateService,
  UserState,
} from '../../services/user-signals-state.service';

@Component({
  selector: 'demos-change-name',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './change-name.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeNameComponent {
  name = this.userState.select('name');
  constructor(private userState: UserSignalsStateService) {}
  changeName() {
    const newName = faker.name.fullName();
    this.userState.setState({ name: newName } as UserState);
  }
}
