'use client';
import { useAppSelector } from '@/lib/hooks/reduxHooks';
import React, { useState } from 'react';
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

export default function DeliveryCountry() {
  const check = useAppSelector((state) => state.formSet.checked);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>();

  const [isUkraine, setIsUkraine] = useState(false);

  return (
    <div className="mt-10 flex w-[350px] items-center justify-center gap-5">
      <label
        htmlFor="country"
        className="block text-sm font-medium text-gray-700"
      >
        Country
      </label>
      <select
        id="country"
        {...register('country', { required: 'Country is required' })}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        onChange={(e) => setIsUkraine(e.target.value === 'Ukraine')}
      >
        <option value="">Select a country</option>
        <option value="Ukraine">Ukraine</option>
        <option value="Other">All World</option>
      </select>
      {/* {errors.country && (
    <div className="text-red-500">{errors.country.message}</div>
  )} */}
  
    </div>
  );
}
