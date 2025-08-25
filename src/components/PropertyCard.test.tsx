import { render, screen } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";
import { BrowserRouter } from "react-router-dom";
import type { Property } from "../types/Property";

const mockProperty: Property = {
  idOwner: "1",
  name: "Luxury Apartment",
  address: "500 Fifth Ave, New York",
  price: 750000,
  image: "test.jpg"
};

test("renders property card with name, address, and price", () => {
  render(
    <BrowserRouter>
      <PropertyCard property={mockProperty} />
    </BrowserRouter>
  );

  expect(screen.getByText("Luxury Apartment")).toBeInTheDocument();
  expect(screen.getByText("500 Fifth Ave, New York")).toBeInTheDocument();
  expect(screen.getByText("$750,000")).toBeInTheDocument();
});