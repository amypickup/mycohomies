"use client";

import React from "react";
import {
  composeRenderProps,
  Button as RACButton,
  ButtonProps as RACButtonProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { focusRing } from "@components/ui/utils";

export interface ButtonProps extends RACButtonProps {
  /** @default 'primary' */
  variant?: "primary" | "secondary" | "icon";
}

const button = tv({
  extend: focusRing,
  base: "px-6 py-3 text-sm text-center transition rounded-4xl font-bold border border-black/10 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:shadow-none cursor-default",
  variants: {
    variant: {
      primary:
        "bg-orange-400 hover:bg-pink-400 pressed:bg-pink-600 dark:bg-blue-400 dark:hover:bg-violet-600 dark:pressed:bg-violet-800 text-white",
      secondary:
        "bg-orange-100 hover:bg-orange-200 pressed:bg-orange-300 text-gray-800 dark:bg-blue-600 dark:hover:bg-blue-100 dark:pressed:bg-blue-200 dark:text-zinc-100",
      icon: "border-0 p-1 flex items-center justify-center text-gray-600 hover:bg-black/[5%] pressed:bg-black/10 dark:text-zinc-400 dark:hover:bg-white/10 dark:pressed:bg-white/20 disabled:bg-transparent",
    },
    isDisabled: {
      true: "bg-gray-100 dark:bg-zinc-800 text-gray-300 dark:text-zinc-600 forced-colors:text-[GrayText] border-black/5 dark:border-white/5",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export function Button(props: ButtonProps) {
  return (
    <RACButton
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        button({ ...renderProps, variant: props.variant, className }),
      )}
    />
  );
}
