import { useState, useEffect } from "react";
import profileApi from "../Api/config";
import i18next from "i18next";

const useFetchData = (route) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await profileApi.get(route);
        setData(response.data.data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [route , i18next.language]);

  return { data, loading, error };
};

export default useFetchData;
