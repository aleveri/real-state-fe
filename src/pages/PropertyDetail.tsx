import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPropertyById } from "../services/api";
import { Container, Typography, Card, CardMedia, CardContent } from "@mui/material";
import type { Property } from "../types/Property";

export default function PropertyDetail() {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);

  useEffect(() => {
    (async () => {
      if (id) {
        const data = await getPropertyById(id);
        setProperty(data);
      }
    })();
  }, [id]);

  if (!property) return <p>Loading...</p>;

  return (
    <Container sx={{ py: 4 }}>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={property.image || "/no-image.png"}
          alt={property.name}
        />
        <CardContent>
          <Typography variant="h4">{property.name}</Typography>
          <Typography variant="body1" color="text.secondary">
            {property.address}
          </Typography>
          <Typography variant="h5" color="primary" fontWeight="bold">
            ${property.price.toLocaleString()}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}