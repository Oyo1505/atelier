import ButtonClose from "../components/ButtonClose";
import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";

describe("ButtonClose", () => {
  test("it render correctly", async () => {
    render(
      <ButtonClose closeModal={() => null} modalIsOpen={false}></ButtonClose>
    );
    const close = document.body.querySelector("[aria-label='close']");
    expect(close).toBeTruthy();
  });
  test("test on CloseModal click", () => {
    const mockClose = jest.fn();
    render(
      <ButtonClose closeModal={mockClose} modalIsOpen={false}>
        <div></div>
      </ButtonClose>
    );
    const close = document.body.querySelector("[aria-label='close']");
    fireEvent.click(close);
    expect(mockClose.mock.calls.length).toBe(1);
  });
  test("test on CloseModal className", () => {
    const mockClose = jest.fn();
    render(
      <ButtonClose closeModal={mockClose} modalIsOpen={false}>
        <div></div>
      </ButtonClose>
    );
    const close = screen.getByTestId("close");

    expect(close).toHaveClass("btn-close");
  });
  test("should open the modal", () => {
    const mockClose = jest.fn();
    render(
      <ButtonClose closeModal={mockClose} modalIsOpen={false}>
        <div></div>
      </ButtonClose>
    );
    const close = document.body.querySelector("[aria-label='close']");
    expect(close).toBeDefined();
  });
});
