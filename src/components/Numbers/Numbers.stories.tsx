import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Numbers } from '.';

export default {
  title: 'Numbers',
  component: Numbers,
} as ComponentMeta<typeof Numbers>;

const Template: ComponentStory<typeof Numbers> = () => <Numbers />;

export const Default = Template.bind({});
