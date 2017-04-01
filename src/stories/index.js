import React from 'react'
import { storiesOf } from '@kadira/storybook'
import App from '../App'

storiesOf('App', module)
  .add('default', () => (
    <App />
  ))
