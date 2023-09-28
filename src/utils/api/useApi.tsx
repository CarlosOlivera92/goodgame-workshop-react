import { useState, useEffect, useCallback } from "react";

export const useApi = (config) => {
  const { apiEndpoint, httpVerb } = config;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(apiEndpoint, httpVerb);

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
      }

      const responseData = await response.json();
      setData(responseData);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [apiEndpoint, httpVerb]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Método para realizar solicitudes manuales
  const request = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    request, // Proporciona un método para realizar solicitudes manuales
  };
};
