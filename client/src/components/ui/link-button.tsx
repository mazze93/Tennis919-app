import { Link } from "wouter";
import { Button, ButtonProps } from "@/components/ui/button";

interface LinkButtonProps extends ButtonProps {
  href: string;
}

/**
 * A reusable component that wraps Button with Link for SPA navigation.
 * Automatically detects internal vs external links:
 * - Internal routes (e.g., "/shop") use wouter Link for SPA navigation
 * - External URLs (http://, https://, mailto:, tel:) use anchor tags with target="_blank"
 */
export function LinkButton({ href, children, ...buttonProps }: LinkButtonProps) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:") || href.startsWith("tel:");

  if (isExternal) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        <Button {...buttonProps}>{children}</Button>
      </a>
    );
  }

  return (
    <Link href={href}>
      <Button {...buttonProps}>{children}</Button>
    </Link>
  );
}
