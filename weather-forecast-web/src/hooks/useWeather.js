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
