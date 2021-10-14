import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '.';

describe('render element with correct textContent', () => {
  test('the counter starts at 0', () => {
    render(<Counter />);
    const counterElement = screen.getByTestId('counter');
    expect(counterElement).toHaveTextContent(0);
  });

  test('minus button has correct text', () => {
    render(<Counter />);
    const minusButtonElement = screen.getByTestId('minus-button');
    expect(minusButtonElement).toHaveTextContent('-');
  });

  test('plus button has correct text', () => {
    render(<Counter />);
    const plusButtonElement = screen.getByTestId('plus-button');
    expect(plusButtonElement).toHaveTextContent('+');
  });
});

describe('check if feature works right', () => {
  test('When the + button is pressed, the counter chagnes to 1', () => {
    render(<Counter />);
    const buttonElement = screen.getByTestId('plus-button');
    fireEvent.click(buttonElement);
    const counterElement = screen.getByTestId('counter');
    expect(counterElement).toHaveTextContent(1);
  });

  test('When the - button is pressed, the counter chagnes to 1', () => {
    render(<Counter />);
    const buttonElement = screen.getByTestId('minus-button');
    fireEvent.click(buttonElement);
    const counterElement = screen.getByTestId('counter');
    expect(counterElement).toHaveTextContent(-1);
  });
});

describe('testings for layout', () => {
  test('on/off button has blue color', () => {
    render(<Counter />);
    const buttonElement = screen.getByTestId('on/off-button');
    expect(buttonElement).toHaveStyle({ backgroundColor: 'blue' });
  });
});

describe('testings for button features', () => {
  test('Prevent the -,+ button from being pressed when the on/off button is clicked', () => {
    render(<Counter />);
    const onOffButtonElement = screen.getByTestId('on/off-button');
    const plusButtonElement = screen.getByTestId('plus-button');
    const minusButtonElement = screen.getByTestId('minus-button');

    fireEvent.click(onOffButtonElement);

    expect(plusButtonElement).toBeDisabled();
    expect(minusButtonElement).toBeDisabled();
  });
});
