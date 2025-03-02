import { Container } from "@/components/blocks/container";
import { StackList } from "@/components/blocks/stack-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stack",
};

export default function Notes() {
  const desk = [
    {
      name: "27” 27QN880-B 2K",
      brand: "LG",
      category: "Monitor",
      imageSrc: "/stack/monitor.png",
    },
    {
      name: "Seduna Thunder Pro",
      brand: "Seduna",
      category: "Chair",
      imageSrc: "/stack/chair.png",
    },
    {
      name: "Magic Keyboard",
      brand: "Apple",
      category: "Keyboard",
      imageSrc: "/stack/keyboard.png",
    },
    {
      name: "Logitech M590",
      brand: "Logitech Mouse",
      category: "Mouse",
      imageSrc: "/stack/mouse.png",
    },
  ];

  const everyday = [
    {
      name: "iPhone 13 256 GB",
      brand: "Apple",
      category: "Phone",
      imageSrc: "/stack/phone.png",
    },
    {
      name: "MacBook M4 Pro 14” - 24 GB",
      brand: "Apple",
      category: "Laptop",
      imageSrc: "/stack/laptop.png",
    },
    {
      name: "Airpods Pro",
      brand: "Apple",
      category: "Earphones",
      imageSrc: "/stack/airpods.png",
    },
  ];

  const gaming = [
    {
      name: "XBOX Series S",
      brand: "Microsoft",
      category: "Gaming Console",
      imageSrc: "/stack/gaming.png",
    },
  ];

  return (
    <Container className="mt-16">
      <div className="max-w-2xl">
        <h1 className="tracking-tight text-5xl">Stack</h1>
        <div className="pro text-muted-foreground text-balance">
          <p className="mt-2">
            The technologies & products I use daily for building projects and
            managing my life.
          </p>
        </div>
        <StackList
          title="Desk"
          description="At home, I have a simple setup with a desk, chair, and monitor."
          items={desk}
        />
        <StackList
          title="Everyday"
          description="The devices I carry with me daily to work and around the city."
          items={everyday}
        />
        <StackList
          title="Gaming"
          description="The devices I use for gaming."
          items={gaming}
        />
      </div>
    </Container>
  );
}
