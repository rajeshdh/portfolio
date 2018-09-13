import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import Typography from '@material-ui/core/Typography'

class TimelineElement extends React.Component {
  render() {
    const {
      elementClass,
      date,
      iconStyle,
      icon,
      title,
      location,
      description,
    } = this.props
    return (
      <VerticalTimelineElement
        className={elementClass}
        date={date}
        iconStyle={iconStyle}
        icon={icon}
      >
        <Typography variant="title">{title}</Typography>
        <Typography variant="subheading">{location}</Typography>
        <Typography variant="body1">{description}</Typography>
      </VerticalTimelineElement>
    )
  }
}

export default TimelineElement
