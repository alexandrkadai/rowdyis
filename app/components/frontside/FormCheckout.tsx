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
  // const apiKey = process.env.REACT_APP_PUBLIC_NOVA_KEY;
  const apiKey = process.env.PUBLIC_NOVA_KEY;
  let selectElement = document.getElementById('selectInput');
  let warhouseSelect = document.getElementById('warhouseSelect');

  const warhouseRef = useRef<HTMLInputElement>(null);

  const [inputCity, setInputCity] = useState<string>('');

  const [cityChoose, setCitiChoose] = useState<string | null>(null);
  const [city, setCity] = useState([]);

  const [warhouseChoose, setWarhouseChoose] = useState<string | null>(null);

  const [warhouseW, setWarhouseW] = useState([]);

  const [warhouseInput, setWarhouuseInput] = useState<string>('');

  const [optionsState, setOptionsState] = useState<string>('');

  // input for user city to send for city search 1st step
  const cityOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInputCity(event.target.value);
    setTimeout(() => {
      setCitiChoose(event.target.value);
      selectElement!.style.display = 'block';
    }, 2000);
  };

  //Select your city from city list 2nd step
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOptionsState(event.target.value);
    setInputCity(event.target.value);
    selectElement!.style.display = 'none';
    setCity([]);
  };

  //Start typing to see all warhouses 1st step
  const warhouseOnChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setWarhouuseInput(event.target.value);
    if (warhouseRef.current !== null) {
      setTimeout(() => {
        setWarhouseChoose(warhouseRef.current.value);
        warhouseSelect!.style.display = 'block';
      }, 300);
    }
  };

  //Selecting warhouse that user Wish from warhouse list
  const handleWarhouseChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setWarhouuseInput(event.target.value);
    // setWarhouseSetted(event.target.value);
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
            FindByString: 'Відділення №' + warhouseChoose,
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
  }, [warhouseChoose]);

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
              onChange={cityOnChangeHandler}
            />

            {city ? (
              <select className="w-[350px]" onChange={handleSelectChange} id="selectInput">
                {city.map((item: any) => (
                    <option key={item.Description} value={item.Description}>
                      {item.Description}
                    </option>
                  ))}
              </select>
            ) : (
              <></>
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
              onChange={warhouseOnChangeHandler}
            />
            {warhouseInput ? (
              <select className="w-[350px]" onChange={handleWarhouseChange} id="warhouseSelect">
                {warhouseW &&
                  warhouseW.map((item: any) => (
                    <option key={item.SiteKey} value={item.Description}>
                      {item.Description}
                    </option>
                  ))}
              </select>
            ) : (
              <> </>
            )}
          </div>
        </div>
        <Button className='mt-5 uppercase tracking-widest'>відправлення</Button>
      </form>
    </div>
  );
};

export default FormCheckout;
