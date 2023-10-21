import type { Meta, StoryObj } from '@storybook/react'

import { ImagePreviewCard } from '.'

const meta: Meta<typeof ImagePreviewCard> = {
  title: 'UI/Preview',
  component: ImagePreviewCard,
}

export default meta

type Story = StoryObj<typeof ImagePreviewCard>

export const Image: Story = {
  args: {
    name: 'Основы программирования',
    progress: 40,
    image:
      'https://cdn-edge.kwork.ru/pics/t0/12/20825371-1653038012.jpg',
  },
}

export const Video: Story = {
  args: {
    name: 'Основы программирования',
    progress: 40,
    isVideo: true,
    image:
      'https://cdn-edge.kwork.ru/pics/t0/12/20825371-1653038012.jpg',
  },
}
