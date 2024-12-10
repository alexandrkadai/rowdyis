import { iFindCities } from './findCitiesType';

export default function findCities({
  cityChoose,
  setCity,
}: iFindCities) {
  const apiKey = process.env.PUBLIC_NOVA_KEY;
  const url: string = 'https://api.novaposhta.ua/v2.0/json/';

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
          calledMethod: 'getCities',
          methodProperties: {
            FindByString: cityChoose,
          },
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setCity(data.data);
          console.log(data.data);
        });
    getDepartment();
  } catch (error) {
    throw new Error('Problem with Getting Cities');
  }
}
