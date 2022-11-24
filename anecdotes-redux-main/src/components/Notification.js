import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => {
    // console.log('state', state)
    return state.notification
  })
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return notification.message ? (
    <div style={style}>
      {notification.message}
    </div>
  ) : null
}

export default Notification