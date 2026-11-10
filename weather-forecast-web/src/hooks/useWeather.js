import { use, useEffect, useState } from "react";
import { api } from "../services/api";

export const CITIES = [
  { query: "Sao Paulo,BR", name: "São Paulo" },
  { query: "Rio de Janeiro,BR", name: "Rio de Janeiro" },
  { query: "Lisbon,PT", name: "Lisboa" },
  { query: "New York,US", name: "Nova York" },
  { query: "Tokyo,JP", name: "Tóquio" },
  { query: "London,GB", name: "Londres" },
  { query: "Paris,FR", name: "Paris" },
  { query: "Rome,IT", name: "Roma" },
  { query: "Berlin,DE", name: "Berlim" },
  { query: "Buenos Aires,AR", name: "Buenos Aires" },
  { query: "Sydney,AU", name: "Sydney" },
  { query: "Cairo,EG", name: "Cairo" },
];

export function useWeather() {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState([true]);
  const [error, setError] = useState([null]);

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        setLoading(true)
        // requisicao http - get
        const requests = CITIES.map(( city ) => 
            api.get('/weather', { params: {q: city.query} })
        )

        // receber resposta webservice - openWeatherMap
        const responses = await Promise.all(requests)

        // declarando variável que obtenha os dados de cada codade
        const data = responses.map(( res, index ) => ({
            ...res.data,
            name: CITIES[index].name
        }))
        setWeatherData(data)
      } catch (err) {
        setError('Erro ao carregar dados metereológicos.')
      } finally {
        setLoading(false)
      }
    }
    fetchWeatherData();
  }, []);
}
