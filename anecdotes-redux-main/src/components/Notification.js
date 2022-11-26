import { connect } from 'react-redux'

const Notification = (props) => {

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return props.notification ? (
    <div style={style}>
      {props.notification}
    </div>
  ) : null
}

const mapSateToProps = (state) => {
  return {
    notification: state.notification.message
  }
}

const ConnectedNotification = connect(mapSateToProps)(Notification)

export default ConnectedNotification