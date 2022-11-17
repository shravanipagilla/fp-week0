import React from 'react';

import { RoundedImage } from './RoundedImage.components';

export default {
  title: 'Example/RoundedImage',
  component: RoundedImage,
};

// 👇 We create a “template” of how args map to rendering
const Template = (args) => <RoundedImage {...args} />;

// 👇 Each story then reuses that template
export const Basic = Template.bind({});
Basic.args = {
  src: 'https://images.pexels.com/photos/255469/pexels-photo-255469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  alt: 'Peas',
};
