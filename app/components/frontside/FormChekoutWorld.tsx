'use client';
import { placeOrderWorld } from '@/app/actions';
import { useActionState } from 'react';
import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { orederWorldSchema } from '@/app/lib/zodSchemas';
import SubmitButton from '../SubmitButton';

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

const FormCheckoutWorld = () => {
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
    <form
      className="mt-10 w-full space-y-4"
      action={action}
      id={form.id}
      onSubmit={form.onSubmit}
    >
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label
            htmlFor="firstName"
            className="block "
          >
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            key={fields.firstName.key}
            name={fields.firstName.name}
            defaultValue={fields.firstName.initialValue}
            className="mt-1 block w-full border-2 border-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter your first name"
          />
          <p className="text-red-500">{fields.firstName.errors}</p>
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block "
          >
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            key={fields.lastName.key}
            name={fields.lastName.name}
            defaultValue={fields.lastName.initialValue}
            className="mt-1 block w-full border-2 border-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter your last name"
          />
          <p className="text-red-500">{fields.lastName.errors}</p>
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block "
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          key={fields.emailAdd.key}
          name={fields.emailAdd.name}
          defaultValue={fields.emailAdd.initialValue}
          className="mt-1 block w-full border-2 border-black focus:border-blue-500 focus:ring-blue-500"
          placeholder="Enter your email"
        />
        <p className="text-red-500">{fields.emailAdd.errors}</p>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block "
        >
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          key={fields.phoneNum.key}
          name={fields.phoneNum.name}
          defaultValue={fields.phoneNum.initialValue}
          className="mt-1 block w-full border-2 border-black focus:border-blue-500 focus:ring-blue-500"
          placeholder="Enter your phone number"
        />
        <p className="text-red-500">{fields.phoneNum.errors}</p>
      </div>

      <div>
        <label
          htmlFor="address"
          className="block "
        >
          Address
        </label>
        <input
          id="address"
          type="text"
          key={fields.address.key}
          name={fields.address.name}
          defaultValue={fields.address.initialValue}
          className="mt-1 block w-full border-2 border-black focus:border-blue-500 focus:ring-blue-500"
          placeholder="Enter your address"
        />
        <p className="text-red-500">{fields.address.errors}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="city"
            className="block "
          >
            City
          </label>
          <input
            id="city"
            type="text"
            key={fields.city.key}
            name={fields.city.name}
            defaultValue={fields.city.initialValue}
            className="mt-1 block w-full border-2 border-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter your city"
          />
          <p className="text-red-500">{fields.city.errors}</p>
        </div>
        <div>
          <label
            htmlFor="state"
            className="block "
          >
            State/Region
          </label>
          <input
            id="state"
            type="text"
            key={fields.state.key}
            name={fields.state.name}
            defaultValue={fields.state.initialValue}
            className="mt-1 block w-full border-2 border-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter your state/region"
          />
          <p className="text-red-500">{fields.state.errors}</p>
        </div>
      </div>

      <div>
        <label
          htmlFor="zip"
          className="block "
        >
          Zip/Postal Code
        </label>
        <input
          id="zip"
          type="text"
          key={fields.zip.key}
          name={fields.zip.name}
          defaultValue={fields.zip.initialValue}
          className="mt-1 block w-full border-2 border-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="Enter your zip/postal code"
        />
        <p className="text-red-500">{fields.zip.errors}</p>
      </div>

      <SubmitButton
        className="mt-5 uppercase tracking-widest"
        variant="default"
        text="proceed to payment"
      />
    </form>
  );
};

export default FormCheckoutWorld;
