'use client';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import React, { useEffect, useState, useRef } from 'react';

const FormCheckout = () => {
  const apiKey = process.env.PUBLIC_NOVA_KEY;
  const warhouseRef = useRef<HTMLInputElement>(null);

  const [inputCity, setInputCity] = useState<string>('');
  const [cityChoose, setCityChoose] = useState<string | null>(null);
  const [cities, setCities] = useState<any[]>([]);

  const [warhouseChoose, setWarhouseChoose] = useState<string | null>(null);
  const [warhouses, setWarhouses] = useState<any[]>([]);
  const [warhouseInput, setWarhouseInput] = useState<string>('');

  const [selectedCity, setSelectedCity] = useState<string>('');

  const apiUrl = 'https://api.novaposhta.ua/v2.0/json/';

  const fetchCities = async (cityName: string) => {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        apiKey: apiKey,
        modelName: 'Address',
        calledMethod: 'getCities',
        methodProperties: {
          FindByString: cityName,
        },
      }),
    });
    const data = await response.json();
    setCities(data.data);
  };

  const fetchWarehouses = async (cityName: string, warehouseNumber: string) => {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        apiKey: apiKey,
        modelName: 'Address',
        calledMethod: 'getWarehouses',
        methodProperties: {
          FindByString: warehouseNumber ? `Відділення №${warehouseNumber}` : ' ',
          CityName: cityName,
          Page: '1',
          Limit: '50',
          Language: 'UA',
        },
      }),
    });
    const data = await response.json();
    setWarhouses(data.data);
  };

  useEffect(() => {
    if (cityChoose) {
      fetchCities(cityChoose);
    }
  }, [cityChoose]);

  useEffect(() => {
    if (selectedCity || warhouseChoose) {
      fetchWarehouses(selectedCity, warhouseChoose || '');
    }
  }, [selectedCity, warhouseChoose]);

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputCity(event.target.value);
    setCityChoose(event.target.value);
  };

  const handleCitySelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
    setInputCity(event.target.value);
    setCities([]);
  };

  const handleWarhouseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWarhouseInput(event.target.value);
    setWarhouseChoose(event.target.value);
  };

  const handleWarhouseSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setWarhouseInput(event.target.value);
    setWarhouses([]);
  };

  return (
    <div className="flex flex-col w-full">
      <h4 className="text-2xl font-bold">Відправка</h4>
      <form className="mt-10 flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="name">І`мя</label>
          <input className="border-2 border-black" type="text" name="name" placeholder="" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="surname">Прізвище</label>
          <input className="border-2 border-black" name="surname" type="text" placeholder="" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phoneNum">Телефон</label>
          <input className="border-2 border-black" name="phoneNum" type="tel" placeholder="" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="emailAd">Email адреса</label>
          <input className="border-2 border-black" name="emailAd" type="email" placeholder="" />
        </div>

        <div className="mt-5">
          <h4 className="text-xl">Доставка</h4>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ukraine">Ukraine</SelectItem>
              <SelectItem value="world">World</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex flex-col mt-5">
            <label htmlFor="city">Місто доставки</label>
            <input
              className="border-2 border-black p-1"
              type="text"
              name="city"
              placeholder="Назва міста"
              value={inputCity}
              onChange={handleCityChange}
            />
            {cities.length > 0 && (
              <select
                className="w-[350px] mt-2 p-1 border-2 border-black"
                onChange={handleCitySelect}
                id="citySelect">
                <option value="">Виберіть</option>
                {cities.map((item: any) => (
                  <option key={item.Description} value={item.Description}>
                    {item.Description}
                  </option>
                ))}
              </select>
            )}
          </div>

          <div className="mt-5 flex flex-col">
            <label htmlFor="warhouse">Оберіть відділення</label>
            <input
              className="border-2 border-black p-1"
              type="text"
              name="warhouse"
              placeholder="Відділення"
              ref={warhouseRef}
              value={warhouseInput}
              onChange={handleWarhouseChange}
            />

            {warhouses.length > 0 && (
              <select
                className="w-[350px] mt-2 p-1 border-2 border-black"
                onChange={handleWarhouseSelect}
                id="warhouseSelect">
                <option value="">Виберіть</option>
                {warhouses.map((item: any) => (
                  <option key={item.SiteKey} value={item.Description}>
                    {item.Description}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
        <Button className="mt-5 uppercase tracking-widest">відправлення</Button>
      </form>
    </div>
  );
};

export default FormCheckout;
