//useFetch.js
import { useState, useEffect } from 'react';

const useFetch = ({ url }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        (async () => {
			const response  = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                }
            });
            if (response.status >= 200 && response.status <= 299) {
                const jsonResponse = await response.json();
                setLoading(false)
                setData(jsonResponse);
              } else {
                setLoading(false);
                setError({code: response.status, message: response.statusText});
            }
		})();
    }, [url])

    return { data, loading, error }
}

export default useFetch;