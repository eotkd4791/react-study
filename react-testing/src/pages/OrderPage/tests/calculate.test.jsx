import { render, screen } from '../../../utils/test-utils';
import userEvent from '@testing-library/user-event';
import Type from '../Type';
import OrderPage from '../../OrderPage';

test("update product's total when products change", async () => {
  render(<Type orderType="products" />);

  const productsTotal = screen.getByText('상품 총 가격:', { exact: false });
  expect(productsTotal).toHaveTextContent('0');

  const americaInput = await screen.findByRole('spinbutton', {
    name: 'America',
  });

  /**
   * input이나 textarea에 택스트를 선택한 후, 제거해줌.
   * 이 부분은 현재는 없어도 테스트 결과에 영향을 미치지는 않음
   * 만약 현재 소스보드 위에서 같은 엘리먼트를 위한 userEvent를 사용했다면 clear해준 후에
   * userEvent.type()을 사용하는 것이 좋음.
   */
  userEvent.clear(americaInput);
  userEvent.type(americaInput, '1');
  expect(productsTotal).toHaveTextContent('1000');
});

test("update option's total when options change", async () => {
  render(<Type orderType="options" />);

  const optionsTotal = screen.getByText('옵션 총 가격', { exact: false });
  expect(optionsTotal).toHaveTextContent('0');

  const insuranceCheckbox = await screen.findByRole('checkbox', {
    name: 'Insurance',
  });

  userEvent.click(insuranceCheckbox);
  expect(optionsTotal).toHaveTextContent('500');

  const dinnerCheckbox = await screen.findByRole('checkbox', {
    name: 'Dinner',
  });

  userEvent.click(dinnerCheckbox);
  expect(optionsTotal).toHaveTextContent('1000');

  userEvent.click(dinnerCheckbox);
  expect(optionsTotal).toHaveTextContent('500');
});

describe('total price of goods and options', () => {
  test('total price starts with 0 and Updating total price when adding on product', async () => {
    render(<OrderPage />);

    const total = screen.getByText('Total Price:', { exact: false });
    expect(total).toHaveTextContent('0');

    const americaInput = await screen.findByRole('spinbutton', {
      name: 'America',
    });
    userEvent.clear(americaInput);
    userEvent.type(americaInput, '1');

    expect(total).toHaveTextContent('1000');
  });

  test('Updating total price when adding one option', async () => {
    render(<OrderPage />);
    const total = screen.getByText('Total Price:', { exact: false });

    const insuranceCheckbox = await screen.findByRole('checkbox', {
      name: 'Insurance',
    });

    userEvent.click(insuranceCheckbox);
    expect(total).toHaveTextContent('500');
  });

  test('Updating total price when removing option and product', async () => {
    render(<OrderPage />);
    const total = screen.getByText('Total Price:', { exact: false });

    const insuranceCheckbox = await screen.findByRole('checkbox', {
      name: 'Insurance',
    });
    userEvent.click(insuranceCheckbox);

    const americaInput = await screen.findByRole('spinbutton', {
      name: 'America',
    });

    userEvent.clear(americaInput);
    userEvent.type(americaInput, '3');

    userEvent.clear(americaInput);
    userEvent.type(americaInput, '1');

    expect(total).toHaveTextContent('1500');
  });
});
