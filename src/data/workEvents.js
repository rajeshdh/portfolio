import React from 'react'
import { Avatar, Icon } from '@material-ui/core'

const workEvents = [
  {
    title: 'Event 1',
    subheader: new Date().toDateString(),
    description: ['Some description for event 1'],
    icon: (
      <Avatar>
        <Icon>work</Icon>
      </Avatar>
    ),
  },
  {
    title: 'Event 2',
    subheader: new Date().toDateString(),
    description: ['Some description for event 2'],
    icon: (
      <Avatar>
        <Icon>home</Icon>
      </Avatar>
    ),
  },
]

export default workEvents
