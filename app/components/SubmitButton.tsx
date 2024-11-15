'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Loader2Icon } from 'lucide-react';
import { useFormStatus } from 'react-dom';

interface buttonProps {
  text: string;
  className?: string;
  variant:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | null
    | undefined;
}

export default function SubmitButton({ text, variant, className }: buttonProps) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled variant={variant} className={cn(className, "uppercase")}>
          <Loader2Icon size={24} className="mr-2 h-2 w-2 animate-spin" />
          Please Wait ....
        </Button>
      ) : (
        <Button variant={variant} type="submit" className="uppercase">
          {text}
        </Button>
      )}
    </>
  );
}

export function shoppingBagButton({text, variant} :buttonProps) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled variant={variant} className="uppercase">
          Adding Item
        </Button>
      ) : (
        <Button>
          {text}
        </Button>
      )}
    </>
  );
}
