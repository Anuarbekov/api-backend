import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
export default function CardPosts({ id, title, body }) {
  return (
    <Card sx={{ mt:2, width: 600 }}>
      <CardContent>
        <Typography sx={{ fontSize: 12 }}>{id}</Typography>
        <Typography sx={{ mt: 2, fontSize: 18 }}>{title}</Typography>
        <Typography sx={{ mt: 1, fontSize: 20, fontWeight: "bold" }}>
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
}
