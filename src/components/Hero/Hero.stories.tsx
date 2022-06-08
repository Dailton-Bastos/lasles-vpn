import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Hero } from '.';

export default {
  title: 'Hero',
  component: Hero,
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = () => <Hero />;

export const Default = Template.bind({});
