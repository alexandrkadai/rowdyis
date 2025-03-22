import { iWarhousesOptions } from './findWarhousesTypes';
export default function findWarhouses({
  optionsState,
  warhouseChoose,
  setWarhouseW,
}: iWarhousesOptions) {
  const url: string = 'https://api.novaposhta.ua/v2.0/json/';
  const apiKey = process.env.PUBLIC_NOVA_KEY;
  try {
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
            FindByString: warhouseChoose
              ? 'Відділення №' + warhouseChoose
              : ' ',
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
  } catch (error) {
    throw new Error('Failed to find warhouses ');
  }
}
