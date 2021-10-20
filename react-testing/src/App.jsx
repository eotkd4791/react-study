import OrderPage from './pages/OrderPage';
import { OrderContextProvider } from './contexts/OrderContext';

function App() {
  return (
    <OrderContextProvider>
      <OrderPage />
    </OrderContextProvider>
  );
}
export default App;
