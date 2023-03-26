import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { UserModalComponent } from './user-modal.component';

export default {
  title: 'UserModalComponent',
  component: UserModalComponent,
  decorators: [
    moduleMetadata({
      imports: [
        MatDialogModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        BrowserAnimationsModule,
        CommonModule,
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }),
  ],
} as Meta<UserModalComponent>;

const Template: Story<UserModalComponent> = (args: UserModalComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
