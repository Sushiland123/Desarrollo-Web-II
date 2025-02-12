import { useEffect, useState } from "react"; 

export const API_KEY = '8ed81e3d';
/**
    * Hook personalizado para obtener peliculas desde la API de OMDd
    * @param {string} query - termino de busqueda ingresado por el usuario
    * @returns {Object} - retorna un objeto con: -movies, isLoading, error.
*/
export function useFetchMovies(query){
    const [movies, setMovies] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState("");

    useEffect(() => {
        if (query.length < 3){
            setMovies([]);
            setError("");
            return;
        }
   
    async function fetchMovies() {
        try {
            setIsLoading(true);
            setError(null);

            const response = await
            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);

            if (!response.ok)
                throw new Error("Error al cargar peliculas");

            const data = await response.json();

            if (data.Response === "False")
                throw new Error("No se encontraron resultados");

            setMovies(data.Search);
            } catch (err){
                setError(err.message);
                setMovies([]);
            } finally{
                setIsLoading(false);
            }
    }

    fetchMovies();
}, [query]);

return {movies, isLoading, error};
}