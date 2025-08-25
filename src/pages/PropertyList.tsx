import { useEffect, useState } from "react";
import { getProperties } from "../services/api";
import Filters from "../components/Filters";
import PropertyCard from "../components/PropertyCard";
import { Typography, Container } from "@mui/material";
import type { Property } from "../types/Property";
import Grid from "@mui/material/Grid";


export default function PropertyList() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    (async () => {
      const data = await getProperties(filters);
      setProperties(data.results || []);
    })();
  }, [filters]);

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Properties
      </Typography>
      <Filters onFilter={setFilters} />
      <Grid container spacing={3}>
        {properties.map((p) => (
          <Grid container spacing={3}>
            <PropertyCard property={p} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}