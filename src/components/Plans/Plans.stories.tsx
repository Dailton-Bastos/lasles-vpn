import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Plans } from '.';

export default {
  title: 'Plans',
  component: Plans,
} as ComponentMeta<typeof Plans>;

const Template: ComponentStory<typeof Plans> = () => <Plans />;

export const Default = Template.bind({});
