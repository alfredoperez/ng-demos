import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { NgrxDemoPageComponent } from './ngrx-demo-page.component';

export default {
  title: 'NgrxDemoPageComponent',
  component: NgrxDemoPageComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<NgrxDemoPageComponent>;

const Template: Story<NgrxDemoPageComponent> = (args: NgrxDemoPageComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}