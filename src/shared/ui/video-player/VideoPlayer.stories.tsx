import type { Meta, StoryObj } from '@storybook/react'
import { VideoPlayer } from '.'

const meta: Meta<typeof VideoPlayer> = {
  title: 'UI/VideoPlayer',
  component: VideoPlayer,
}

export default meta

type Story = StoryObj<typeof VideoPlayer>

export const Player: Story = {
  args: {},
}
