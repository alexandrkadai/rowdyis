import { Button } from '@/components/ui/button';
import { RegisterLink, LoginLink } from '@kinde-oss/kinde-auth-nextjs/components';

export default function LoginPage() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[400px] h-[350px] bg-purple-500/10 mt-20 flex items-center justify-center flex-col rounded-xl">
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
