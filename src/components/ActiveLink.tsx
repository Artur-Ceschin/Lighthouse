import Link, { LinkProps } from 'next/link';
import { cloneElement, ReactElement } from 'react';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
}

export function ActiveLink({ children, ...rest }: ActiveLinkProps) {
  const isActive = true;
  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'red.600' : 'gray.900',
      })}
    </Link>
  );
}
