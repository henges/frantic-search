import React from "react"
import { screen, render } from "@testing-library/react"
import { App } from "./App"

test("renders learn react link", () => {
  render(<App />)
  const linkElement = screen.getByText(/learn chakra/i)
  expect(linkElement).toBeInTheDocument()
})
