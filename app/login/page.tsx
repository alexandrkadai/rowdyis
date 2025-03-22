import { Button } from '@/components/ui/button';
import {
  RegisterLink,
  LoginLink,
} from '@kinde-oss/kinde-auth-nextjs/components';

export default function LoginPage() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="mt-20 flex h-[350px] w-[400px] flex-col items-center justify-center rounded-xl bg-purple-500/10">
        <h2 className="text-xl font-bold uppercase">Login to your account</h2>
        <div className="mt-5 flex flex-row items-center gap-5">
          <Button className="uppercase" asChild>
            <LoginLink>Sign in</LoginLink>
          </Button>
          <Button className="uppercase">
            <RegisterLink>Sign up</RegisterLink>
          </Button>
        </div>
      </div>
    </div>
  );
}
