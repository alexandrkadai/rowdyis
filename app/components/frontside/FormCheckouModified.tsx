'use client';
import { placeOrder } from '@/app/actions';
import { orderSchema } from '@/app/lib/zodSchemas';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import useDebounce from '../../hooks/useDebounce';
import { novaPoshtaService } from '@/app/services';
import React, { useActionState, useEffect, useState } from 'react';
import SubmitButton from '../SubmitButton';

interface DeliveryState {
  city: {
    input: string;
    selected: string;
    options: any[];
  };
  warehouse: {
    input: string;
    selected: string;
    options: any[];
  };
}

const FormCheckout = () => {
  const [deliveryState, setDeliveryState] = useState<DeliveryState>({
    city: {
      input: '',
      selected: '',
      options: [],
    },
    warehouse: {
      input: '',
      selected: '',
      options: [],
    },
  });

  const [lastResult, action] = useActionState(placeOrder, undefined);

  const debouncedCitySearch = useDebounce(deliveryState.city.input, 500);
  const debouncedWarehouseSearch = useDebounce(
    deliveryState.warehouse.input,
    500
  );

  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: orderSchema });
    },
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  });

  const handleCityInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDeliveryState((prev) => ({
      ...prev,
      city: {
        ...prev.city,
        input: event.target.value,
      },
    }));
  };

  const handleCitySelect = (cityName: string) => {
    setDeliveryState((prev) => ({
      ...prev,
      city: {
        ...prev.city,
        selected: cityName,
        input: cityName,
      },
    }));
  };

  const handleWarehouseInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDeliveryState((prev) => ({
      ...prev,
      warehouse: {
        ...prev.warehouse,
        input: event.target.value,
      },
    }));
  };

  const handleWarehouseSelect = (warehouse: string) => {
    setDeliveryState((prev) => ({
      ...prev,
      warehouse: {
        ...prev.warehouse,
        selected: warehouse,
        input: warehouse,
      },
    }));
  };

  // Move API calls to a separate service
  useEffect(() => {
    const fetchCities = async () => {
      if (!debouncedCitySearch) return;

      const cities = await novaPoshtaService.getCities(debouncedCitySearch);
      setDeliveryState((prev) => ({
        ...prev,
        city: {
          ...prev.city,
          options: cities,
        },
      }));
    };

    fetchCities();
  }, [debouncedCitySearch]);

  useEffect(() => {
    const fetchWarehouses = async () => {
      if (!deliveryState.city.selected || !debouncedWarehouseSearch) return;

      const warehouses = await novaPoshtaService.getWarehouses({
        cityName: deliveryState.city.selected,
        searchQuery: debouncedWarehouseSearch,
      });

      setDeliveryState((prev) => ({
        ...prev,
        warehouse: {
          ...prev.warehouse,
          options: warehouses,
        },
      }));
    };

    fetchWarehouses();
  }, [deliveryState.city.selected, debouncedWarehouseSearch]);

  // Rest of the JSX remains similar but uses the new state structure
  // ...
};

// ////
// Key improvements:

// Combined related state into a single state object

// Removed direct DOM manipulation

// Added debouncing for API calls

// Suggested moving API calls to a separate service

// Improved TypeScript typing

// Made the component more maintainable and predictable

// You'll need to:

// Create a useDebounce hook

// Create a novaPoshstaService for API calls

// Move the API key to environment variables on the server

// Update the JSX to use the new state structure

// Consider using a form library like React Hook Form for better form management
