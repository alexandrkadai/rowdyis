'use client';
import { useForm } from 'react-hook-form';

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
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>();

  const onSubmit = (data: CheckoutFormData) => {
    console.log('Checkout form data:', data);
    // Implement your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4 mt-10">
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
            {...register('firstName', { required: 'First name is required' })}
            className="mt-1 block w-full border-2 border-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Enter your name"
          />
          {errors.firstName && (
            <div className="text-red-500">{errors.firstName.message}</div>
          )}
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
            {...register('lastName', { required: 'Last name is required' })}
            className="mt-1 block w-full border-2 border-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.lastName && (
            <div className="text-red-500">{errors.lastName.message}</div>
          )}
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
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
          })}
          className="mt-1 block w-full border-2 border-black focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}
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
          {...register('phone', { required: 'Phone is required' })}
          className="mt-1 block w-full border-2 border-black focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.phone && (
          <div className="text-red-500">{errors.phone.message}</div>
        )}
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
          {...register('address', { required: 'Address is required' })}
          className="mt-1 block w-full border-2 border-black focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.address && (
          <div className="text-red-500">{errors.address.message}</div>
        )}
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
            {...register('city', { required: 'City is required' })}
            className="mt-1 block w-full border-2 border-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.city && (
            <div className="text-red-500">{errors.city.message}</div>
          )}
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
            {...register('state', { required: 'State/Region is required' })}
            className="mt-1 block w-full border-2 border-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          {errors.state && (
            <div className="text-red-500">{errors.state.message}</div>
          )}
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
          {...register('zip', { required: 'Zip/Postal code is required' })}
          className="mt-1 block w-full border-2 border-black shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.zip && <div className="text-red-500">{errors.zip.message}</div>}
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
