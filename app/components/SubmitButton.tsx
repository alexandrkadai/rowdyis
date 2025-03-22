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
interface newButtonProps extends buttonProps {
  onClick: () => void;
}
export default function SubmitButton({
  text,
  variant,
  className,
}: buttonProps) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button
          disabled
          variant={variant}
          className={cn(className, 'uppercase')}
        >
          <Loader2Icon size={24} className="mr-2 h-2 w-2 animate-spin" />
          Будь Ласка Зачекайте ....
        </Button>
      ) : (
        <Button
          variant={variant}
          type="submit"
          className={cn(className, 'uppercase')}
        >
          {text}
        </Button>
      )}
    </>
  );
}

export function ShoppingBagButton({ text, variant }: buttonProps) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled variant={variant} className="uppercase">
          Додаємо в Кошик...
        </Button>
      ) : (
        <Button>{text}</Button>
      )}
    </>
  );
}

export function ChooseButton({ text, variant, onClick }: newButtonProps) {
  return (
    <Button
      variant={variant}
      className={cn('h-[20px] w-[120px] px-6 py-4 uppercase')}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
