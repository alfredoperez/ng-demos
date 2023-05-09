import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { faker } from '@faker-js/faker';
import {
  UserSignalsStateService,
  UserState,
} from '../../services/user-signals-state.service';

@Component({
  selector: 'demos-change-company',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './change-company.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeCompanyComponent {
  company = this.userState.select('company');
  constructor(private userState: UserSignalsStateService) {}
  changeCompany() {
    const newCompany = faker.company.name();
    this.userState.setState({ company: newCompany } as UserState);
  }
}
