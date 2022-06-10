import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Map } from '.';

export default {
  title: 'Global Network',
  component: Map,
} as ComponentMeta<typeof Map>;

const Template: ComponentStory<typeof Map> = () => <Map />;

export const Default = Template.bind({});
