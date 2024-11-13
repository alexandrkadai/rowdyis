'use client';
import { placeOrder } from '@/app/actions';
import { orderSchema } from '@/app/lib/zodSchemas';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import React, { useEffect, useState, useRef, useActionState } from 'react';

const FormCheckout = () => {
  const apiKey = process.env.PUBLIC_NOVA_KEY;
  let citySelect = document.getElementById('citySelect');
  let warhouseSelect = document.getElementById('warhouseSelect');

  const warhouseRef = useRef<HTMLInputElement>(null);

  const [inputCity, setInputCity] = useState<string>('');

  const [cityChoose, setCitiChoose] = useState<string | null>(null);
  const [city, setCity] = useState([]);

  const [warhouseChoose, setWarhouseChoose] = useState<string | null>(null);

  const [warhouseW, setWarhouseW] = useState([]);

  const [warhouseInput, setWarhouuseInput] = useState<string>('');

  const [optionsState, setOptionsState] = useState<string>('');
  //Validation point

  const [lastResult, action] = useActionState(placeOrder, undefined);

  const [form, fields] = useForm({
    lastResult,

    onValidate({ formData }) {
      return parseWithZod(formData, { schema: orderSchema });
    },

    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput',
  });

  // input for user city to send for city search 1st step  selectElement
  const cityOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInputCity(event.target.value);
    setTimeout(() => {
      setCitiChoose(event.target.value);
      citySelect!.style.display = 'block';
    }, 2000);
  };

  //Select your city from city list 2nd step
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOptionsState(event.target.value);
    setInputCity(event.target.value);
    citySelect!.style.display = 'none';
    setCity([]);
  };

  //Start typing to see all warhouses 1st step
  const warhouseFinderHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setWarhouuseInput(event.target.value);
    if (warhouseRef.current !== null) {
      setTimeout(() => {
        setWarhouseChoose(warhouseRef.current!.value);
        warhouseSelect!.style.display = 'block';
      }, 2000);
    }
  };

  //Selecting warhouse that user Wish from warhouse list
  const handleWarhouseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setWarhouuseInput(event.target.value);
    warhouseSelect!.style.display = 'none';
    setWarhouseW([]);
  };

  var url: string = 'https://api.novaposhta.ua/v2.0/json/';

  // Find City of Delivery
  useEffect(() => {
    if (cityChoose) {
      const getDepartment = async (): Promise<any> =>
        fetch(url, {
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
              FindByString: cityChoose,
            },
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            setCity(data.data);
          });
      getDepartment();
    }
  }, [cityChoose]);

  // Choose an delivery warehouse
  useEffect(() => {
    const getDepartment = async (): Promise<any> =>
      fetch(url, {
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
            FindByString: warhouseChoose ? 'Відділення №' + warhouseChoose : ' ',
            CityName: optionsState,
            Page: '1',
            Limit: '50',
            Language: 'UA',
          },
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setWarhouseW(data.data);
        });
    getDepartment();
  }, [optionsState, warhouseChoose]);

  return (
    <div className="flex flex-col w-full">
      <h4 className="text-2xl font-bold">Відправка</h4>
      <form
        className="mt-10 flex flex-col gap-4"
        action={action}
        id={form.id}
        onSubmit={form.onSubmit}>
        <div className="flex flex-col">
          <label htmlFor="name">І`мя</label>
          <input
            className="border-2 border-black"
            type="text"
            placeholder="Напишіть своє Імʼя"
            key={fields.firstName.key}
            name={fields.firstName.name}
            defaultValue={fields.firstName.initialValue}
          />
          <p className="text-red-500">{fields.firstName.errors}</p>
        </div>
        <div className="flex flex-col">
          <label htmlFor="surname">Прізвище</label>
          <input
            className="border-2 border-black"
            key={fields.lastName.key}
            name={fields.lastName.name}
            defaultValue={fields.lastName.initialValue}
            type="text"
            placeholder="Напишіть свою Фамілію"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phoneNum">Телефон</label>
          <input
            className="border-2 border-black"
            key={fields.phoneNum.key}
            name={fields.phoneNum.name}
            defaultValue={fields.phoneNum.initialValue}
            type="tel"
            placeholder="Напишіть свій Телефон"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="emailAd">Email адреса</label>
          <input
            className="border-2 border-black"
            key={fields.emailAdd.key}
            name={fields.emailAdd.name}
            defaultValue={fields.emailAdd.initialValue}
            type="email"
            placeholder="Напишіть свій Імейл"
          />
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
              key={fields.city.key}
              name={fields.city.name}
              defaultValue={fields.city.initialValue}
              placeholder="Назва міста"
              value={inputCity}
              onChange={cityOnChangeHandler}
            />
            {city && (
              <select
                className="w-[350px] mt-2 hidden p-1 border-2 border-black"
                onChange={handleSelectChange}
                id="citySelect">
                <option selected={true}>Виберіть</option>
                {city.map((item: any) => (
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
              key={fields.warhouse.key}
              name={fields.warhouse.name}
              defaultValue={fields.warhouse.initialValue}
              placeholder="Відділення"
              ref={warhouseRef}
              value={warhouseInput}
              onChange={warhouseFinderHandler}
            />

            {warhouseW && (
              <select
                className="w-[350px] mt-2  p-1 border-2 border-black"
                onChange={handleWarhouseChange}
                id="warhouseSelect"
                defaultValue={warhouseW[0]}>
                <option selected={true}>Виберіть</option>
                {warhouseW.map((item: any) => (
                  <option key={item.SiteKey} value={item.Description}>
                    {item.Description}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
        <input type="hidden" />
        <Button className="mt-5 uppercase tracking-widest">відправлення</Button>
      </form>
    </div>
  );
};

export default FormCheckout;
