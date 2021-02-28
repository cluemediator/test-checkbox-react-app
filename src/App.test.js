import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';

describe("<App />", () => {

  test('render component', () => {
    render(<App />);

    const cbEl = screen.getByTestId("cbShowHide");
    expect(cbEl).toBeInTheDocument();
    expect(cbEl).not.toBeChecked();
    
    expect(screen.queryByTestId("box")).not.toBeInTheDocument();
  });

  test('toggle element by selecting checkbox', () => {
    render(<App />);

    const cbEl = screen.getByTestId("cbShowHide");

    // Execute the click event of the checkbox
    userEvent.click(cbEl);
    expect(cbEl).toBeChecked();
    expect(screen.queryByTestId("box")).toBeInTheDocument();

    // Execute the click event again
    userEvent.click(cbEl);
    expect(cbEl).not.toBeChecked();
    expect(screen.queryByTestId("box")).not.toBeInTheDocument();
  });

});