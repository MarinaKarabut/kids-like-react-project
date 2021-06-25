
import { Notification } from 'react-pnotify';
 
const NotificationMessage =({type, text})=>  {
    return (
  <Notification
        type={type}
        title={type}
        text={text}
        delay={2000}
        shadow={false}
        hide={true}
        nonblock={true}
        desktop={true}
      /> 
    )
}

export default NotificationMessage