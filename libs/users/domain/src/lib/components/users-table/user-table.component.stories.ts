import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { UserTableComponent } from './user-table.component';

export default {
  title: 'UserTableComponent',
  component: UserTableComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        MatDialogModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatSelectModule,
        ReactiveFormsModule,
        CommonModule,
      ],
    }),
  ],
} as Meta<UserTableComponent>;

const Template: Story<UserTableComponent> = (args: UserTableComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
