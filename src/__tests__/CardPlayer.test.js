import React, { useContext } from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import CardPlayer from "../components/CardPlayer";
import { StoreContext, StoreProviderWrapper } from "../utils/StroreContext";
import { mount } from "enzyme";

afterEach(cleanup);
const renderCardPlayer = ({ player }) => {};
describe("CardPlayer", () => {
  test("test on CardPlayer click", () => {});
});
