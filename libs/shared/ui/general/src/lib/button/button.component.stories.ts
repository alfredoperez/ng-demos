import { Meta, Story } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Button',
  component: ButtonComponent,
} as Meta<ButtonComponent>;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => {
  const { type } = args;
  return {
    props: args,
    template: `<ui-button [type]="type"> Save </ui-button>`,
  };
};

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
};
