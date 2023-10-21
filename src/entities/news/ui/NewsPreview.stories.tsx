import type { Meta, StoryObj } from '@storybook/react'

import { NewsPreview } from '.'

const meta: Meta<typeof NewsPreview> = {
  title: 'UI/NewsPreview',
  component: NewsPreview,
}

export default meta

type Story = StoryObj<typeof NewsPreview>

export const News: Story = {
  args: {
    title: 'Новая новость',
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit.\
      Praesentium eligendi dolor a atque. Pariatur nobis, aperiam\
      commodi provident deserunt a modi dolorum eos dicta, aliquid,\
      facere sint aliquam! Veniam, eligendi.',
  },
}
