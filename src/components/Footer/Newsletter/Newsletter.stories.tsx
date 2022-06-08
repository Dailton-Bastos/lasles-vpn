import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Newsletter } from '.';

export default {
  title: 'Newsletter',
  component: Newsletter,
} as ComponentMeta<typeof Newsletter>;

const Template: ComponentStory<typeof Newsletter> = () => <Newsletter />;

export const Default = Template.bind({});
