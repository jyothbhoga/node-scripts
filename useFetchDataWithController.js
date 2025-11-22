import { useEffect, useState } from "react";

const usePracticeFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      try {
        setLoading(true);
        const resp = await fetch(url, { signal });
        if (!resp.ok) {
          throw new Error("HTTP error Status" + resp.status);
        }
        const result = await resp.json();
        if (!signal.aborted) {
          setData(result);
          setError(null);
        }
      } catch (error) {
        if (error.message === "AbortError") {
          setError("Controller aborted");
        } else {
          setError(error.message);
          setData(null);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };
    if (url) fetchData();

    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, error, isLoading };
};

export default usePracticeFetch;