import { render, screen, waitFor } from "@testing-library/react";
import PropertyList from "../pages/PropertyList";
import * as api from "../services/api";
import { BrowserRouter } from "react-router-dom";

jest.mock("../services/api");

test("renders property list with API results", async () => {
  (api.getProperties as jest.Mock).mockResolvedValue({
    results: [
      { idOwner: "1", name: "Beach House", address: "Miami", price: 1250000, image: "house.jpg" }
    ]
  });

  render(
    <BrowserRouter>
      <PropertyList />
    </BrowserRouter>
  );

  await waitFor(() => {
    expect(screen.getByText("Beach House")).toBeInTheDocument();
    expect(screen.getByText("Miami")).toBeInTheDocument();
    expect(screen.getByText("$1,250,000")).toBeInTheDocument();
  });
});