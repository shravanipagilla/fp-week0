import React from 'react';
import { Navigation } from './Navigation';

export default {
  title: 'Example/Navigation',
  component: Navigation,
};

// 👇 We create a “template” of how args map to rendering
const Template = (args) => <Navigation {...args} />;

// 👇 Each story then reuses that template
export const Basic = Template.bind({});
Basic.args = {
  SignIn: '',
  Favourites: '',
  Cart: '',
};
