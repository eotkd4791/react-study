import { render, screen, fireEvent } from '@testing-library/react';
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
