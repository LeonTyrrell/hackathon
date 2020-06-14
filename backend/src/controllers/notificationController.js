import Notification from '../services/Notification';

const App = () => {
    Notification.configure().localNotification({
        message: 'Cadastro realizado com sucesso!',
        actions: ''
    });
}
