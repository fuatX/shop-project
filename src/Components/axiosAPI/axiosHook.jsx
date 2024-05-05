// axiosHook.js

import { useState, useEffect } from "react";
import { axiosAPI } from "./axiosAPI";

export default function useAxiosHook() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosAPI("/categories");
        const responseData = await response?.data;
        setData(responseData);
        setLoading(false); // Yüklemenin tamamlandığını belirtmek için false yap
      } catch (error) {
        setIsError(true);
        setErrorMessage("Veri alınamıyor"); // Hata durumunu ayarla
        setLoading(false); // Hata olduğunda da yüklemeyi durdur
        console.error("Veri alınamıyor", error);
      }
    };

    fetchData(); // useEffect içinde fonksiyon çağır
  }, []);

  return { data, loading, isError, errorMessage };
}
