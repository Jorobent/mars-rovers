import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { NASA_API_URL, NASA_API_KEY } from '../configs';
import { getCurrentDate } from '../utils';

const useSearch = () => {
	const { rover } = useParams();
	const { search } = useLocation();
	const query = new URLSearchParams(search);
	const currentDate = getCurrentDate(); // recordar usar este dato
	const [page, setPage] = useState(query.get("page"));

	useEffect(() => {
		const newPage = query.get("page");
		setPage(prevPage => prevPage !== newPage ? true : false )
	}, [query])

	const searchData = {
		sol: query.get("sol") || 1000,
		camera: query.get("camera") || null,
		page: query.get("page") || 1,
		earth_date: query.get("sol") ? null : query.get("earth_date") || null,
	}

	const searchQuery = Object.keys(searchData).map(key => searchData[key] && key + '=' + searchData[key]).join('&');

	const url = `${NASA_API_URL}/rovers/${rover}/photos/?api_key=${NASA_API_KEY}&${searchQuery}`;

	return { url, query, rover, searchQuery, page }
}

export default useSearch;