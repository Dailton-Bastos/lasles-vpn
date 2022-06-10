import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Features } from '.';

export default {
  title: 'Features',
  component: Features,
} as ComponentMeta<typeof Features>;

const Template: ComponentStory<typeof Features> = () => <Features />;

export const Default = Template.bind({});
