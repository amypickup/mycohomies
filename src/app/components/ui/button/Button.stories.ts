import { Button } from "./Button";
import { expect, userEvent } from "storybook/test";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    isDisabled: false,
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
  play: async ({ canvas, args }) => {
    await userEvent.click(await canvas.getByRole("button"));
    await expect(args.onClick).toHaveBeenCalled();
  },
};

export const Secondary = {
  args: {
    variant: "secondary",
  },
};
