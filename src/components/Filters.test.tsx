import { render, screen, fireEvent } from "@testing-library/react";
import Filters from "../components/Filters";

test("calls onFilter with user input", () => {
  const onFilterMock = jest.fn();
  render(<Filters onFilter={onFilterMock} />);

  fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: "House" } });
  fireEvent.change(screen.getByLabelText(/Address/i), { target: { value: "Miami" } });
  fireEvent.change(screen.getByLabelText(/Min Price/i), { target: { value: "100000" } });
  fireEvent.change(screen.getByLabelText(/Max Price/i), { target: { value: "500000" } });

  fireEvent.click(screen.getByRole("button", { name: /Filter/i }));

  expect(onFilterMock).toHaveBeenCalledWith({
    name: "House",
    address: "Miami",
    minPrice: "100000",
    maxPrice: "500000",
    pageNumber: 1,
    pageSize: 10
  });
});