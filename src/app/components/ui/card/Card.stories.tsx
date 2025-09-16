import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Card } from "./Card";
import clsx from "clsx";

const meta = {
  title: "Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

const data = [
  {
    id: 1,
    href: "#card-1",
    image:
      "https://plus.unsplash.com/premium_photo-1704737966313-746586e51913?q=80&w=707&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Mushrooms Demystified",
    author: "David Arora",
  },
  {
    id: 2,
    href: "#card-2",
    image:
      "https://images.unsplash.com/photo-1542913235-1f46ce06443d?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Complete Mushroom Book",
    author: "Gary Lincoff",
  },
  {
    id: 3,
    href: "#card-3",
    image:
      "https://images.unsplash.com/photo-1571074635691-b910c7a5cdbb?q=80&w=1503&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "The Mushroom Cultivator",
    author: "Paul Stamets, J.S. Chilton",
  },
  {
    id: 4,
    href: "#card-4",
    image:
      "https://images.unsplash.com/photo-1572782132197-79d85a8d16de?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Entangled Life",
    description: "My favorite book about all the best mushroom things.",
    author: "Merlin Sheldrake",
  },
];

export default meta;
type Story = StoryObj<typeof meta>;

const GridTemplate = (args: { className: string }) => (
  <div
    className={clsx(
      "grid gap-3 max-w-7xl bg-white dark:bg-black",
      args.className,
    )}
  >
    {data.map((card) => (
      <Card
        key={card.id}
        image={card.image}
        title={card.title}
        author={card.author}
        description={card.description}
        href={card.href}
      />
    ))}
  </div>
);

export const Default: Story = {
  args: {
    image: data[0].image,
    title: data[0].title,
    author: data[0].author,
    href: data[0].href,
  },
};

export const GridTwoColumns = {
  render: GridTemplate,
  args: {
    className: "grid-cols-2",
  },
  parameters: {
    docs: {
      description: {
        story: "Cards displayed in a 2-column grid layout.",
      },
    },
  },
};

export const GridThreeColumns = {
  render: GridTemplate,
  args: {
    className: "grid-cols-3",
  },
  parameters: {
    docs: {
      description: {
        story: "Cards displayed in a 3-column grid layout.",
      },
    },
  },
};
