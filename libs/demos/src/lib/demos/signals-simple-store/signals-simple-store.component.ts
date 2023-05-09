import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PageContentComponent } from '@ng-demos/shared/ui/general';
import { ChangeAddressComponent } from './components/change-address/change-address.component';
import { ChangeCompanyComponent } from './components/change-company/change-company.component';
import { ChangeNameComponent } from './components/change-name/change-name.component';
import { UserSignalsStateService } from './services/user-signals-state.service';

@Component({
  selector: 'demos-signals-simple-store',
  standalone: true,
  imports: [
    CommonModule,
    PageContentComponent,
    ChangeNameComponent,
    ChangeCompanyComponent,
    ChangeAddressComponent,
  ],
  templateUrl: './signals-simple-store.component.html',
  styleUrls: ['./signals-simple-store.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UserSignalsStateService],
})
export class SignalsSimpleStoreComponent implements OnInit {
  readonly user = this.userSignal.state.asReadonly();

  constructor(private userSignal: UserSignalsStateService) {}

  ngOnInit() {
    this.userSignal.setState({
      address: 'Hollywood',
      name: 'John Doe',
      company: 'Ink Co',
    });
  }
}
