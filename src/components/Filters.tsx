import { useState } from "react";
import { Box, TextField, Button, Stack } from "@mui/material";

interface FiltersProps {
  onFilter: (filters: {
    name?: string;
    address?: string;
    minPrice?: number | string;
    maxPrice?: number | string;
    pageNumber?: number;
    pageSize?: number;
  }) => void;
}

export default function Filters({ onFilter }: FiltersProps) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter({ name, address, minPrice, maxPrice, pageNumber: 1, pageSize: 10 });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <TextField label="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
        <TextField
          label="Min Price"
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <TextField
          label="Max Price"
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <Button type="submit" variant="contained">
          Filter
        </Button>
      </Stack>
    </Box>
  );
}