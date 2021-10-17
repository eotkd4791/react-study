import { render, screen } from '@testing-library/react';
import SummaryPage from '..';

test('checkbox and button', () => {
  render(<SummaryPage />);

  // 접근할 수 없다고 나타나는 에러 -> label에 id 연결해서 해결
  const checkbox = screen.getByRole('checkbox', {
    name: '주문하려는 것을 확인하셨나요?',
  });
  expect(checkbox.checked).toEqual(false);

  const confirmButton = screen.getByRole('button', { name: '주문 확인' });
  expect(confirmButton.disabled).toBeTruthy();
});
