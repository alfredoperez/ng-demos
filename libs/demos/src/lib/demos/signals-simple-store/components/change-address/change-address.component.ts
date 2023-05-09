import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { faker } from '@faker-js/faker';
import { UserSignalsStateService } from '../../services/user-signals-state.service';

@Component({
  selector: 'demos-change-address',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './change-address.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeAddressComponent {
  readonly address = this.userState.select('address');
  constructor(private userState: UserSignalsStateService) {}

  changeAddress() {
    const newAddress = faker.address.streetAddress(true);

    this.userState.set('address', newAddress);
  }
}
