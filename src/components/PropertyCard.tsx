import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import type { Property } from "../types/Property";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={property.image || "/no-image.png"}
        alt={property.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {property.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {property.address}
        </Typography>
        <Typography variant="body1" color="primary" fontWeight="bold">
          ${property.price.toLocaleString()}
        </Typography>
        <Button
          component={Link}
          to={`/property/${property.idOwner}`}
          variant="contained"
          size="small"
          sx={{ mt: 1 }}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}