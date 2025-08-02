import { Button, ButtonProps } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

interface HeroButtonProps extends ButtonProps {
  href: string;
  children: ReactNode;
}

export const HeroButton = ({ href, children, ...props }: HeroButtonProps) => (
  <Button component={Link} href={href} {...props}>
    {children}
  </Button>
);
