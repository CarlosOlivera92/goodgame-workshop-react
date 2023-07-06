import { useState, useEffect, useCallback } from "react";

export const useApi = (apiEndpoint, httpVerb) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleFetch = useCallback(
        async() => {
            try {
                const response = await fetch(apiEndpoint, httpVerb);
                if(!response.ok) throw new Error(response.statusText);
                const responseData = await response.json();
                setData(responseData);
            }
            catch (error) {
                setError(error.message)
            }
            finally {
                setLoading(false);
            }
        }, [],
    )
    useEffect(() => {
        if(data.length === 0) handleFetch();
    }, []);
  
    return {
      data,
      loading,
      error,
    };
  };