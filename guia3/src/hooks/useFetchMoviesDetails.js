import { useEffect, useState } from "react";
import { API_KEY } from "./useFetchMovies";

/**
 * Hook personalizado para obtener los detalles de una pelicula desde la API de OMDb
 * @param {string} selectedId - ID unico de la pelicula seleccionada
 * @returns {Object} - retorna un objeto con:
 * -movie: detalles de la pelicula
 * -isLoading: estado de carga de la solicitud
 * -error: mensaje de error en caso de fallo
 */

export function useFetchMovieDetails(selectedId) {
    const [movie, setMovie] = useState({});

    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState("");

    useEffect(() => {
        //si no hay un id seleccionado, limpiar el estado
        if (!selectedId) {
            setMovie({});
            setError("");
            return;
        }

        /**
        * Funcion asincronica que obtiene los detalles de la pelicula
        * @param {string} selectedId - ID unico de la pelicula a consultar
        */
       async function useFetchMovieDetails(selectedId) {
        try{
            setIsLoading(true); //activa el estado de carga
            setError(null); //reinicia errores previos

            //peticion a la API de OMDb con la clave de acceso y el ID de la peli

            const response = await

fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedId}`);

            if (!response.ok)
                throw new Error("Error al cargar los detalles de la pelicula");

            const data = await response.json();

            setMovie(data);
        } catch (err){
            setError(err.message);
            setMovie({});
        } finally {
            setIsLoading(false);
        }
       }

       useFetchMovieDetails(selectedId);
    }, [selectedId]);

    return {movie, isLoading, error};
}