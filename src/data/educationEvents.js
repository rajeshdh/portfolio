import React from 'react'
import { Avatar } from '@material-ui/core'
import { SchoolRounded } from '@material-ui/icons'

const educationEvents = [
  {
    title: 'Event 1',
    subheader: new Date().toDateString(),
    description: ['Some description for event 1'],
    icon: (
      <Avatar>
        <SchoolRounded>School</SchoolRounded>
      </Avatar>
    ),
  },
  {
    title: 'Event 2',
    subheader: new Date().toDateString(),
    description: ['Some description for event 2'],
    icon: (
      <Avatar>
        <SchoolRounded>School</SchoolRounded>
      </Avatar>
    ),
  },
]

export default educationEvents
