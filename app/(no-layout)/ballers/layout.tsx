import { ReactNode } from 'react';

interface LayoutBallersProps {
  children: ReactNode;
}

export default function LayoutBallers({ children }: LayoutBallersProps) {
  return (
    <main>{children}</main>
  )
}
