'use client';

import { Button } from '@/components/ui/button';
import { Loader2Icon } from 'lucide-react';
import { useFormStatus } from 'react-dom';

interface buttonProps {
  text: string;
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

export default function SubmitButton({ text, variant }: buttonProps) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled variant={variant} className="uppercase">
          <Loader2Icon size={24} />
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
