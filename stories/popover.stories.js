import React from 'react';

import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Popover } from '@wordpress/components';
import "@wordpress/components/build-style/style.css";

const styles = {
  margin: 'auto',
};

const CenterDecorator = (storyFn) => (
  <div style={styles}>
    { storyFn() }
  </div>
);

addDecorator(CenterDecorator);

storiesOf('PopOver', module)
  .add('Basic', () => (
    <React.Fragment>
        <Button isDefault onClick={ action('clicked') }>
          Toggle Popover!
          { true && (
              <Popover>
                  Popover is toggled!
              </Popover>
          ) }
      </Button>
    </React.Fragment>
  ))
  .add('With Position', () => (
    <React.Fragment>
        <Button isDefault onClick={ action('clicked') }>
          Toggle Popover!
          { true && (
              <Popover position="middle right">
                  middle right
              </Popover>
          ) }
      </Button>

      <br />
      <br />

      <Button isDefault onClick={ action('clicked') }>
          Toggle Popover!
          { true && (
              <Popover position="middle left">
                  middle left
              </Popover>
          ) }
      </Button>

      <br />
      <br />

      <Button isDefault onClick={ action('clicked') }>
          Toggle Popover!
          { true && (
              <Popover position="middle center">
                 middle center ( Overlaps Button/Trigger)
              </Popover>
          ) }
      </Button>

      <br />
      <br />
      <br />
      <br />

      <Button isDefault onClick={ action('clicked') }>
          Toggle Popover!
          { true && (
              <Popover position="top left">
                 top left
              </Popover>
          ) }
      </Button>

      <br />
      <br />
      <br />
      <br />

      <Button isDefault onClick={ action('clicked') }>
          Toggle Popover!
          { true && (
              <Popover position="top right">
                 top right
              </Popover>
          ) }
      </Button>

      <br />
      <br />
      <br />
      <br />

      <Button isDefault onClick={ action('clicked') }>
          Toggle Popover!
          { true && (
              <Popover position="top center">
                 top center
              </Popover>
          ) }
      </Button>

      <br />
      <br />

      <Button isDefault onClick={ action('clicked') }>
          Toggle Popover!
          { true && (
              <Popover position="bottom left">
                 bottom left
              </Popover>
          ) }
      </Button>

      <br />
      <br />
      <br />
      <br />

      <Button isDefault onClick={ action('clicked') }>
          Toggle Popover!
          { true && (
              <Popover position="bottom right">
                 bottom right
              </Popover>
          ) }
      </Button>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Button isDefault onClick={ action('clicked') }>
          Toggle Popover!
          { true && (
              <Popover position="bottom center">
                 bottom center
              </Popover>
          ) }
      </Button>
    </React.Fragment>
  ))
  .add('No Arrow', () => (
    <React.Fragment>
        <Button isDefault onClick={ action('clicked') }>
          Toggle Popover!
          { true && (
              <Popover noArrow>
                  Popover is toggled!
              </Popover>
          ) }
      </Button>
    </React.Fragment>
  ));