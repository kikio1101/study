import React from 'react'
import { text, boolean, number, select } from '@storybook/addon-knobs'

import Button from '.'

export default {
  title: 'Button',
  components: Button,
}

export const BasicButton = () => {
  return (
    <Button
      margin={text('margin')}
      fontSize={number('fontSize', 16)}
      full={boolean('full', false)}
      color={select('color', ['blue', 'mint', 'red', 'black', 'gray'], 'blue')}
    >
      버튼
    </Button>
  )
}

export const BasicButton2 = () => {
  return (
    <Button
      margin={text('margin')}
      fontSize={number('fontSize', 16)}
      full={boolean('full', false)}
      color={select('color', ['blue', 'mint', 'red', 'black', 'gray'], 'blue')}
    >
      버튼
    </Button>
  )
}

BasicButton.story = {
  name: '기본 버튼',
}

BasicButton2.story = {
  name: '기본 버튼2',
}
