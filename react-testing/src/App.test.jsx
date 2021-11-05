import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('render element with correct textContent', () => {
  test.skip('the counter starts at 0', () => {
    render(<App />);
    const counterElement = screen.getByTestId('counter');
    expect(counterElement).toHaveTextContent(0);
  });

  test.skip('minus button has correct text', () => {
    render(<App />);
    const minusButtonElement = screen.getByTestId('minus-button');
    expect(minusButtonElement).toHaveTextContent('-');
  });

  test.skip('plus button has correct text', () => {
    render(<App />);
    const plusButtonElement = screen.getByTestId('plus-button');
    expect(plusButtonElement).toHaveTextContent('+');
  });
});

describe('check if feature works right', () => {
  test.skip('When the + button is pressed, the counter chagnes to 1', () => {
    render(<App />);
    const buttonElement = screen.getByTestId('plus-button');
    fireEvent.click(buttonElement);
    const counterElement = screen.getByTestId('counter');
    expect(counterElement).toHaveTextContent(1);
  });

  test.skip('When the - button is pressed, the counter chagnes to 1', () => {
    render(<App />);
    const buttonElement = screen.getByTestId('minus-button');
    fireEvent.click(buttonElement);
    const counterElement = screen.getByTestId('counter');
    expect(counterElement).toHaveTextContent(-1);
  });
});

describe('testings for layout', () => {
  test.skip('on/off button has blue color', () => {
    render(<App />);
    const buttonElement = screen.getByTestId('on/off-button');
    expect(buttonElement).toHaveStyle({ backgroundColor: 'blue' });
  });
});

describe('testings for button features', () => {
  test.skip('Prevent the -,+ button from being pressed when the on/off button is clicked', () => {
    render(<App />);
    const onOffButtonElement = screen.getByTestId('on/off-button');
    const plusButtonElement = screen.getByTestId('plus-button');
    const minusButtonElement = screen.getByTestId('minus-button');

    fireEvent.click(onOffButtonElement);

    expect(plusButtonElement).toBeDisabled();
    expect(minusButtonElement).toBeDisabled();
  });
});

// 튜토리얼 시작

test('from order to order completion', async () => {
  render(<App />);

  const americaInput = await screen.findByRole('spinbutton', {
    name: 'America',
  });
  userEvent.clear(americaInput);
  userEvent.type(americaInput, '2');

  const englandInput = await screen.findByRole('spinbutton', {
    name: 'England',
  });
  userEvent.clear(englandInput);
  userEvent.type(englandInput, '3');

  const insuranceCheckbox = await screen.findByRole('checkbox', {
    name: 'Insurance',
  });
  userEvent.click(insuranceCheckbox);

  const orderButton = screen.getByRole('button', {
    name: '주문하기',
  });
  userEvent.click(orderButton);

  const summaryHeading = screen.getByRole('heading', {
    name: '주문 확인',
  });
  expect(summaryHeading).toBeInTheDocument();

  const productsHeading = screen.getByRole('heading', {
    name: '여행 상품: 5000',
  });
  expect(productsHeading).toBeInTheDocument();

  const optionsHeading = screen.getByRole('heading', {
    name: '옵션: 500',
  });
  expect(optionsHeading).toBeInTheDocument();
  expect(screen.getByText('2 America')).toBeInTheDocument();
  expect(screen.getByText('3 England')).toBeInTheDocument();
  expect(screen.getByText('Insurance')).toBeInTheDocument();

  const confirmCheckbox = screen.getByRole('checkbox', {
    name: '주문하려는 것을 확인하셨나요?',
  });
  userEvent.click(confirmCheckbox);

  const confirmOrderButton = screen.getByRole('button', {
    name: '주문 확인',
  });
  userEvent.click(confirmOrderButton);

  // 주문 완료
  const loading = screen.getByText(/loading/i);
  expect(loading).toBeInTheDocument();

  const completeHeader = await screen.findByRole('heading', {
    name: '주문을 성공했습니다.',
  });
  expect(completeHeader).toBeInTheDocument();

  const loadingDisappeared = screen.queryByText('loading');
  expect(loadingDisappeared).not.toBeInTheDocument();

  const firstPageButton = screen.getByRole('button', {
    name: '첫페이지로',
  });
  userEvent.click(firstPageButton);
});
