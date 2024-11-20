import { Button } from '@/components/ui/button';

export default function ConatcsPage() {
  return (
    <div className="mt-10 w-full justify-center text-center">
      <h2 className="text-2xl font-bold">Lets get in touch</h2>
      <div className="m-auto flex w-[350px] flex-col items-center justify-center">
        <form className="">
          <div className="mt-2 text-left">
            <label htmlFor="nameUser" className="font-bold uppercase">
              Name
            </label>
            <input
              className="w-[350px] border-2 border-black p-1"
              id="nameUser"
              name="name"
              type="text"
              required
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mt-2 flex flex-col text-left">
            <label htmlFor="phone" className="font-bold uppercase">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="phone"
              required
              placeholder="Enter Your Phone Number"
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
              placeholder="Enter Your Email"
              className="w-[350px] border-2 border-black p-1"
            />
          </div>
          <div className="mt-2 flex flex-col text-left">
            <label htmlFor="messageText" className="font-bold uppercase">
              Your Message
            </label>
            <textarea
              name="message"
              id="messageText"
              required
              placeholder="Enter Your Message"
              className="w-[350px] border-2 border-black p-1"
            />
          </div>
          <Button className="mt-5 w-full font-bold uppercase" type="submit">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}
