import { expect, afterEach, test } from "vitest"
import { render, screen, within, cleanup } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import Home from "../app/page"

afterEach(() => {
  cleanup()
})

test("Should render home", () => {
  render(<Home />)
  const main = within(screen.getByRole("main"))
  expect(
    main.getByRole("heading", { level: 5, name: /Examinations/i })
  ).toBeDefined()
})

test("Should render all six images", async () => {
  render(<Home />)
  const main = within(screen.getByRole("main"))
  const octImages = await main.findAllByAltText(
    "Eye exam image from OCT camera"
  )
  expect(octImages.length).toBe(4)
  const opImages = await main.findAllByAltText("Eye exam image from OP camera")
  expect(opImages.length).toBe(2)
})

test("Should group by date by default", async () => {
  render(<Home />)
  const main = within(screen.getByRole("main"))
  const firstDateHeading = await main.getByRole("heading", {
    level: 6,
    name: "01/04/2019",
  })
  const gridOne = firstDateHeading.nextSibling
  expect(gridOne?.childNodes.length).toBe(4)

  const secondDateHeading = await main.getByRole("heading", {
    level: 6,
    name: "13/04/2019",
  })
  const gridTwo = secondDateHeading.nextSibling
  expect(gridTwo?.childNodes.length).toBe(2)
})

test("Should group by modality on toggle", async () => {
  render(<Home />)
  const main = within(screen.getByRole("main"))
  const toggle = await main.findByRole("switch")
  await userEvent.click(toggle)

  expect(() =>
    main.getByRole("heading", { level: 6, name: "01/04/2019" })
  ).toThrowError()

  const octHeading = await main.getByRole("heading", {
    level: 6,
    name: "OCT",
  })
  const gridOne = octHeading.nextSibling
  expect(gridOne?.childNodes.length).toBe(4)

  const opHeading = await main.getByRole("heading", {
    level: 6,
    name: "OP",
  })
  const gridTwo = opHeading.nextSibling
  expect(gridTwo?.childNodes.length).toBe(2)
})

test("Should open and close modal", async () => {
  render(<Home />)
  const [image] = await screen.findAllByAltText(
    "Eye exam image from OCT camera"
  )
  await userEvent.click(image)
  const getNotes = () =>
    screen.getByText("Left eye thickness is 2um which is normal")
  expect(getNotes()).toBeDefined()
  const closeButton = screen.getByTestId("close")
  await userEvent.click(closeButton)
  expect(() => getNotes()).toThrowError()
})
