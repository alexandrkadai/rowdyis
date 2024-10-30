import { Button } from '@/components/ui/button';

export default function ConatcsPage() {
  return (
    <div className="w-full mt-10 text-center justify-center">
      <h2 className="text-2xl font-bold">Lets get in touch</h2>
      <div className="w-[350px] flex flex-col items-center justify-center m-auto">
        <form className="">
          <div className="text-left mt-2">
            <label htmlFor="nameUser" className="uppercase font-bold">
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
          <div className="flex flex-col text-left mt-2">
            <label htmlFor="phone" className="uppercase font-bold">
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
          <div className="flex flex-col text-left mt-2">
            <label htmlFor="email" className="uppercase font-bold">
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
          <div className="flex flex-col text-left mt-2">
            <label htmlFor="messageText" className="uppercase font-bold">
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
          <Button className="w-full mt-5 uppercase font-bold" type="submit">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}
