import axios from "axios";
import type { Property } from "../types/Property";

const API_URL = "https://localhost:7139/api/property";

export interface PropertyResponse {
  pageNumber: number;
  pageSize: number;
  results: Property[];
}

export const getProperties = async (filters: {
  name?: string;
  address?: string;
  minPrice?: number;
  maxPrice?: number;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  sortDirection?: "asc" | "desc";
}): Promise<PropertyResponse> => {
  const {
    name = "null",
    address = "null",
    minPrice = 0,
    maxPrice = 999999999,
    pageNumber = 1,
    pageSize = 10,
    sortBy = "Price",
    sortDirection = "asc",
  } = filters;

  const url = `${API_URL}/filter/${name}/${address}/${minPrice}/${maxPrice}/${pageNumber}/${pageSize}`;
  const res = await axios.get<PropertyResponse>(url);
  return res.data;
};

export const getPropertyById = async (id: string): Promise<Property> => {
  const res = await axios.get<Property>(`${API_URL}/${id}`);
  return res.data;
};