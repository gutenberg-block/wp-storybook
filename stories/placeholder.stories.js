import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Placeholder } from '@wordpress/components';
import "@wordpress/components/build-style/style.css";

const styles = {
  margin: 'auto',
};

const CenterDecorator = (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
);

//addDecorator(CenterDecorator);

storiesOf('PlaceHolder', module)
  .add('Basic', () => (
    <React.Fragment>
       <Placeholder
        icon="wordpress-alt"
        label="Placeholder"
    />
    </React.Fragment>
  ));