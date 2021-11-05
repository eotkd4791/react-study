import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import OrderContext from '../../contexts/OrderContext';
import ErrorBanner from '../../components/ErrorBanner';

const CompletePage = ({ setStep }) => {
  const [orderDatas] = useContext(OrderContext);
  const [orderHistories, setOrderHistories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    orderCompleted(orderDatas);
  }, [orderDatas]);

  const orderCompleted = async (order) => {
    try {
      const response = await axios.post('http://localhost:5000/order', order);
      setLoading(false);
      setOrderHistories(response.data);
    } catch (err) {
      setError(true);
    }
  };

  if (error) {
    return <ErrorBanner message="에러가 발생했습니다." />;
  }

  if (loading) {
    return <div>loading</div>;
  }

  const orderTable = orderHistories.map(({ orderNumber, price }) => (
    <tr key={orderNumber}>
      <td>{orderNumber}</td>
      <td>{price}</td>
    </tr>
  ));

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>주문을 성공했습니다.</h2>
      <h3>지금까지의 모든 주문</h3>
      <br />
      <table style={{ margin: 'auto' }}>
        <tbody>
          <tr>
            <th>주문 번호</th>
            <th>주문 가격</th>
          </tr>
          {orderTable}
        </tbody>
      </table>
      <button onClick={() => setStep(0)}>첫페이지로</button>
    </div>
  );
};

export default CompletePage;
