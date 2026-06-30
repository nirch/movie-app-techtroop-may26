import { Card, Image, Text } from "@mantine/core";
import "./ActorCard.css";

export default function ActorCard({ actor }) {
  const actorImg = "https://image.tmdb.org/t/p/w500" + actor.profile_path;

  return (
    <Card withBorder shadow="sm" radius="md">
      <Card.Section>
        <Image src={actorImg} alt={actor.name} />
      </Card.Section>
      <Text fw={800}>{actor.name}</Text>
    </Card>
  );
}
