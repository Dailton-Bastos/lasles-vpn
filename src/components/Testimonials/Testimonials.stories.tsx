import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Testimonials } from '.';

export default {
  title: 'Testimonials',
  component: Testimonials,
} as ComponentMeta<typeof Testimonials>;

const Template: ComponentStory<typeof Testimonials> = () => <Testimonials />;

export const Default = Template.bind({});
