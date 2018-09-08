import { Timeline } from 'react-material-timeline'
import { Avatar, Icon } from '@material-ui/core'

const events = [
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

class AwesomeTimeline extends Component {
  render() {
    return <Timeline events={events} />
  }
}
export default AwesomeTimeline
