import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function CheckoutForm() {
  return (
    <div className="w-full">
      <div className="space-y-6 p-0">
        {/* Contact */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold">Contact</h2>
            <a href="#" className="text-sm text-gray-500 hover:underline">Log in</a>
          </div>
          <Input placeholder="Email" type="email" />
          <div className="flex items-center space-x-2">
            <Checkbox id="offers" />
            <label htmlFor="offers" className="text-sm text-gray-600">
              Email me with news and offers
            </label>
          </div>
        </div>

        {/* Delivery */}
        <div className="space-y-3">
          <h2 className="font-semibold">Delivery</h2>
          <Select defaultValue="uk">
            <SelectTrigger>
              <SelectValue placeholder="Country/Region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="de">Germany</SelectItem>
            </SelectContent>
          </Select>

          <div className="grid grid-cols-2 gap-3">
            <Input placeholder="First name" />
            <Input placeholder="Last name" />
          </div>

          <Input placeholder="Address" />
          <Input placeholder="Apartment, suite, etc. (optional)" />

          <div className="grid grid-cols-2 gap-3">
            <Input placeholder="City" />
            <Input placeholder="Postcode" />
          </div>

          <Input placeholder="Phone" type="tel" />
        </div>

        {/* Shipping Method */}
        <div className="space-y-2">
          <h2 className="font-semibold">Shipping method</h2>
          <div className="p-4 bg-gray-100 text-sm text-gray-500 rounded-md">
            Enter your shipping address to view available shipping methods.
          </div>
        </div>
      </div>
    </div>
  );
}
