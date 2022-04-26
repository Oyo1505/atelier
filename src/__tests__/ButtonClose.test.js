import ButtonClose from "../components/ButtonClose";
import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";

describe("ButtonClose", () => {
  test("Render Button Close", () => {
    render(
      <ButtonClose closeModal={() => null} modalIsOpen={false}></ButtonClose>
    );
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

  test("test on modalIsOpen is false", () => {
    render(
      <ButtonClose closeModal={() => null} modalIsOpen={false}>
        <div></div>
      </ButtonClose>
    );
  });
});
