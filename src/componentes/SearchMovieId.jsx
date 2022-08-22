
const SearchMovieId = (consulta) => {

    const Api = process.env.REACT_APP_URL_BASE;
    const Api_key = process.env.REACT_APP_API_SEARCH;

    const peticion = Api + consulta + Api_key;

    return(

        fetch(peticion)
        .then((result) => result.json())

    );
};

export default SearchMovieId;
