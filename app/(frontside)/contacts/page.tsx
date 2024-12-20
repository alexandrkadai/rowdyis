import { Button } from '@/components/ui/button';

export default function ConatcsPage() {
  return (
    <div className="mt-14 w-full justify-center text-center lg:mt-10">
      <h2 className="text-2xl font-bold">Будемо на звʼязку</h2>
      <div className="mx-auto mt-5 flex w-[350px] flex-col items-center justify-center lg:mx-auto lg:mt-10">
        <form className="">
          <div className="mt-2 text-left">
            <label htmlFor="nameUser" className="font-bold uppercase">Імʼя</label>
            <input
              className="w-[350px] border-2 border-black p-1"
              id="nameUser"
              name="name"
              type="text"
              required
              placeholder="Введіть ваше імʼя"
            />
          </div>
          <div className="mt-2 flex flex-col text-left">
            <label htmlFor="phone" className="font-bold uppercase">
              Телефон
            </label>
            <input
              id="phone"
              name="phone"
              type="phone"
              required
              placeholder="Введіть ваш номер телефону"
              className="w-[350px] border-2 border-black p-1"
            />
          </div>
          <div className="mt-2 flex flex-col text-left">
            <label htmlFor="email" className="font-bold uppercase">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Введіть ваш Email"
              className="w-[350px] border-2 border-black p-1"
            />
          </div>
          <div className="mt-2 flex flex-col text-left">
            <label htmlFor="messageText" className="font-bold uppercase">
              Ваше повідомлення
            </label>
            <textarea
              name="message"
              id="messageText"
              required
              placeholder="Введіть ваше повідомлення"
              className="w-[350px] border-2 border-black p-1"
            />
          </div>
          <Button className="mt-5 w-full font-bold uppercase" type="submit">
            Відправити
          </Button>
        </form>
      </div>
    </div>
  );
}
