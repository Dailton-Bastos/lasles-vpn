import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Companies } from '.';

export default {
  title: 'Companies',
  component: Companies,
} as ComponentMeta<typeof Companies>;

const Template: ComponentStory<typeof Companies> = () => <Companies />;

export const Default = Template.bind({});
