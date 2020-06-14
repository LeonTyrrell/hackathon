import Notifications from '../services/Notification';
import Notification from '../services/Notification';

const App = () => {
    Notification.configure().localNotification({
        message: 'Obrigado pelo cadastro!',
        actions: ''
    });
}
