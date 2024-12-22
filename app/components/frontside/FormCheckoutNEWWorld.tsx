'use client';
import { placeOrderWorld } from '@/app/actions';
import { useActionState } from 'react';
import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { orederWorldSchema } from '@/app/lib/zodSchemas';

interface CheckoutFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

const CheckoutForm = () => {
  const [lastResult, action] = useActionState(placeOrderWorld, undefined);

  const [form, fields] = useForm({
      lastResult,
  
      onValidate({ formData }) {
        return parseWithZod(formData, { schema: orederWorldSchema });
      },
  
      shouldValidate: 'onBlur',
      shouldRevalidate: 'onInput',
    });

  
  const onSubmit = (data: CheckoutFormData) => {
    console.log('Checkout form data:', data);
    // Implement your form submission logic here
  };

  return (
    <form  className="w-full space-y-4 mt-10">
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            id="firstName"
            type="text"
           
            className="mt-1 block w-full border-2 border-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter your name"
          />
         
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            
            className="mt-1 block w-full border-2 border-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
         
          className="mt-1 block w-full border-2 border-black focus:border-blue-500 focus:ring-blue-500"
        />
       
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Phone
        </label>
        <input
          id="phone"
          type="tel"
         
          className="mt-1 block w-full border-2 border-black focus:border-blue-500 focus:ring-blue-500"
        />
       
      </div>

      <div>
        <label
          htmlFor="address"
          className="block text-sm font-medium text-gray-700"
        >
          Address
        </label>
        <input
          id="address"
          type="text"
         
          className="mt-1 block w-full border-2 border-black focus:border-blue-500 focus:ring-blue-500"
        />
     
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            City
          </label>
          <input
            id="city"
            type="text"
           
            className="mt-1 block w-full border-2 border-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          
        </div>
        <div>
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-700"
          >
            State/Region
          </label>
          <input
            id="state"
            type="text"
           
            className="mt-1 block w-full border-2 border-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
         
        </div>
      </div>

      <div>
        <label
          htmlFor="zip"
          className="block text-sm font-medium text-gray-700"
        >
          Zip/Postal Code
        </label>
        <input
          id="zip"
          type="text"
          
          className="mt-1 block w-full border-2 border-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
     
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-black px-4 py-2 font-medium text-white shadow-sm hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Place Order
      </button>
    </form>
  );
};

export default CheckoutForm;
