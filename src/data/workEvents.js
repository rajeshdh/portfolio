import React from 'react'
import { Avatar } from '@material-ui/core'
import { WorkRounded, HomeRounded } from '@material-ui/icons'

const workEvents = [
  {
    title: 'Event 1',
    subheader: new Date().toDateString(),
    description: ['Some description for event 1'],
    icon: (
      <Avatar>
        <WorkRounded>work</WorkRounded>
      </Avatar>
    ),
  },
  {
    title: 'Event 2',
    subheader: new Date().toDateString(),
    description: ['Some description for event 2'],
    icon: (
      <Avatar>
        <HomeRounded>home</HomeRounded>
      </Avatar>
    ),
  },
]

export default workEvents
