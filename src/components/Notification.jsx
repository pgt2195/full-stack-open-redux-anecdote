import { useSelector, useDispatch } from 'react-redux'
import { clearNotification } from '../reducers/notificationReducer'
import { useEffect } from 'react'

const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

const Notification = () => {
  const dispatch = useDispatch()

  const notification = useSelector(state =>state.notification.content)

  useEffect(() => {
    if (!notification) return
    const timeout = setTimeout(() => {
      dispatch(clearNotification())
    }, 5000)
    return () => clearTimeout(timeout)}, [notification]) // clearTimeout permet d'éviter des conflit de timeout entre les notification qui se chevauchent
  
  return (
    <>
      {notification !== ''
      ? <div style={style}>
          {notification}
        </div>
      : <></>}
    </>
  )
}

export default Notification