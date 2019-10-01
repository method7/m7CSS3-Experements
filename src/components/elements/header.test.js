import React, { Component } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Header from "./header";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
  act(() => {
    render(<Header />, container);
  });
  expect(container.textContent).toBe("Method7M7 React Header");
});

it("renders <header/>", () => {
  act(() => {
    render(<Header />, container);
  });
  expect(container.firstChild.nodeName).toBe("HEADER");
});

it("renders stuff", () => {
  act(() => {
    render(<Header />, container);
  });
  expect(container.firstChild.nodeName).toBe("HEADER");
});
