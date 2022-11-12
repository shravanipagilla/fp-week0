# Exercise - Storybook

## Getting started

Open terminal and navigate to `packages/client`. Inside, run `yarn` to install
dependencies. Once they are installed, run `yarn storybook` and wait for browser
to open.

If it didn't open, navigate to `http://localhost:6006/` in your browser.

Explore the `src/components/Button` folder.

## Adding a new component - `RoundedImage`

Our goal is to create a simple component for rounded images. Having this as a
component will simplify styles and usage across the app.

### A simple component

Create a new folder under `packages/client/src/components/` and name it
`RoundedImage`. Create a new file inside and name it `RoundedImage.components.js`.

Start by adding import `import React from 'react';` at the beginning.

The component is very simple:

```js
export const RoundedImage = ({ src, alt, ...props }) => {
  return <img src={src} alt={alt} width={80} height={80} title={alt} />;
};
```

### Storybook

Now that we have our component, we want to _see_ how it looks like. For that, we
will use Storybook. Create a new file in the same folder and name it
`RoundedImage.stories.js` and add the following code:

```
import React from 'react';

import { RoundedImage } from './RoundedImage.component';

export default {
  title: 'Example/RoundedImage',
  component: RoundedImage.component,
};

// 👇 We create a “template” of how args map to rendering
const Template = (args) => <RoundedImage {...args} />;

// 👇 Each story then reuses that template
export const Basic = Template.bind({});
Basic.args = {
  src: 'https://images.pexels.com/photos/255469/pexels-photo-255469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  alt: 'Peas',
};
```

Open Storybook in your browser and notice that there is a new entry under
`Example` called `RoundedImage`. Open it and check out the component.

Congratulations, you can now explore how the component looks like without using
it inside the application 🎉.

### CSS

We want to use CSS to style our component and we want that CSS to be applied
_only_ for our component. Add a new file in the same folder and name it
`RoundedImage.styles.css`. Add the following CSS:

```css
.rounded-image {
  border-radius: 50%;
}
```

In the `RoundedImage.components.js`, add the following import:

```
import './RoundedImage.styles.css';
```

Add `className="rounded-image"` to the `<img` part of our component.

### Prop types

To help others consume the component you've made, we need to explain which props
are there and how to use them.

Add the following import to the `RoundedImage.components.js` file:

```
import PropTypes from 'prop-types';
```

Add the following code _after_ the component in that file:

```js
RoundedImage.propTypes = {
  /**
   * The URL for the image - this is required for component to work.
   */
  src: PropTypes.string.isRequired,

  /**
   * Text to show as alt and title.
   * Optional.
   */
  alt: PropTypes.string,
};
```

### Bonus

Spread the rest of the props by adding `{...props}` as the first line to our
`img` part.

Try adding `text: PropTypes.string.isRequired,` to the `RoundedImage.propTypes`
and check the console in the browser. Notice the error! That is prop types
helping narrow down issues.

## Exercise (and homework) - Creating a Nav component

Create a Nav component. Take a look at Figma.

Follow the steps above and good luck coding!
