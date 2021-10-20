import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Products from './Products';
import Options from './Options';
import ErrorBanner from '../../components/ErrorBanner';
import OrderContext from '../../contexts/OrderContext';

const Type = ({ orderType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  // 실제 코드는 Provider로 감쌌지만, 테스트 환경에서는 감싸져있지 않아서 에러 발생.

  const [orderDatas, updateItemCounts] = useContext(OrderContext);

  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);

  const loadItems = async (orderType) => {
    try {
      const response = await axios.get(`http://localhost:5000/${orderType}`);
      setItems(response.data);
    } catch (error) {
      setError(true);
    }
  };

  if (error) {
    return <ErrorBanner message="에러가 발생했습니다." />;
  }

  const ItemComponents = orderType === 'products' ? Products : Options;

  const OptionItems = items.map((item) => (
    <ItemComponents
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
      updateItemCounts={(itemName, newItemCounts) =>
        updateItemCounts(itemName, newItemCounts, orderType)
      }
    />
  ));

  let orderTypeKorean = orderType === 'products' ? '상품' : '옵션';
  return (
    <>
      <h2>주문 종류</h2>
      <p>하나의 가격</p>
      <p>
        {orderTypeKorean} 총 가격: {orderDatas.totals[orderType]}
      </p>
      <div
        style={{
          display: 'flex',
          flexDirection: orderType === 'options' && 'column',
        }}
      >
        {OptionItems}
      </div>
    </>
  );
};

export default Type;
