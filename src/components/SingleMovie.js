import React , {useState, useEffect}from 'react'
import {NavLink, useParams} from "react-router-dom";
import {API_URL} from "./context";

const SingleMovie = () => {
    const { id } = useParams();
    console.log(id);

    const[isLoading, setIsLoading]= useState(true);
    const [movie, setMovie] = useState("");
    const [isError, setIsError]= useState({ show:"false", msg:""});



    const getMovies = async(url) => {
        setIsLoading(true);
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if(data.Response === "True"){
                setIsLoading(false);
                setMovie(data.Search || data);
                setIsError({show:"false" , msg: " "});
            }
            else{
                setIsError({
                    show: true,
                    msg: data.Error
                });
            }

        } catch(error){
            console.log(error);
        }

    };

    useEffect (()=>{
      let timerOut = setTimeout(()=>{
        getMovies(`${API_URL}&i=${id}`);
      }, 800);

      return ()=> clearTimeout(timerOut);
    }, [id]);
    

    if(isLoading){  
      return(
        <section className="movie-section">
          <div className="loading">Loading...</div>
        </section>
      );
    }

    return (
      <section className="movie-section">
        <div className="movie-card">
          <figure>
            <img src={movie.Poster} alt=""/>
          </figure>
          <div className="card-content">
            <p className="title">{movie.Title}</p>
            <p className=""></p>
            <p className="card-text">{movie.Released}</p>
            <p className="card-text">{movie.Genre}</p>
            <p className="card-text">{movie.imdbRating}</p>
            <p className="card-text">{movie.Country}</p>
            <NavLink to="/" className="back-btn">Go Back</NavLink>
          </div>
        </div>
      </section>
    );
 
};

export default SingleMovie;
