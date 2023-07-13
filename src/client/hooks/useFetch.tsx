import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url: string) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    try {
      const res = await axios.get(`/${url}`);
      setData(res.data);
    } catch (e: any) {
      setError(e);
    }
    setLoading(false);
  }

  useEffect(() => { 
    fetchData();
  }, [url]);

  return { data, loading, error, refetchData: fetchData }
};