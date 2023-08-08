import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Index = () => {
  const [movies, setMovies] = useState([]);

  const [isError, setIsError] = useState(false);

  const [errorText, setErrorText] = useState("");

  const [movieNameText, setMovieNameText] = useState("");

  const [searchErrorText, setSearchErrorText] = useState("");

  const [loading, setLoading] = useState(false);

  const [firstRun, setFirstRun] = useState(true);

  useEffect(() => {
    console.log("First time running..");
    fetchMovies();
  }, []);

  useEffect(() => {
    //Searching code....
    if (!firstRun) {
      console.log("Search Text changed..");

      const fetchTimer = setTimeout(() => {
        if (movieNameText && movieNameText.length > 2) {
          fetchMovies();
          setSearchErrorText("");
        } else if (movieNameText.length < 1) {
          fetchMovies();
          setSearchErrorText("");
        } else {
          setSearchErrorText(
            "Please enter atleast 3 characters for searching."
          );
        }
      }, 2000);

      //Cleanup function as debouncer....
      return () => {
        clearTimeout(fetchTimer);
      };
    }
  }, [movieNameText]);

  const fetchMovies = async () => {
    //Fetch Resource...
    console.log("Calling api...");
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.dynoacademy.com/test-api/v1/movies?search=${movieNameText}`
      );
      setMovies(response.data.moviesData);
      setIsError(false);
      setLoading(false);
      setFirstRun(false);
    } catch (error) {
      setIsError(true);
      setLoading(false);
      setErrorText("Cannot get movie data.");
      setFirstRun(false);
    }
    console.log(movies);
    //console.log(response);
    //console.log("Finish..");

    // const promise = new Promise((resolve, reject) => {
    //   const response = axios.get(
    //     "https://api.dynoacademy.com/test-api/v1/movies"
    //   );
    //   resolve(response);
    // });

    // promise
    //   .then((result) => {
    //     console.log(result);
    //     console.log("Finish..");
    //   })
    //   .catch((error) => {});
  };

  return (
    <div className="App">
      <Link to="/AddMovie">Add Movie</Link>
      <div>
        <input
          type="text"
          value={movieNameText}
          placeholder="Type movie name"
          onChange={(e) => {
            setMovieNameText(e.target.value);
          }}
        ></input>
        <span style={{ color: "red" }}>{searchErrorText}</span>
      </div>
      <b>Suggested Movies</b>
      <br />
      {/* <button onClick={fetchMovies}>Get All Movies</button> */}
      {isError ? (
        <>
          <div
            style={{
              background: "red",
              padding: "5px",
              color: "white",
              margin: "10px",
            }}
          >
            {errorText}
          </div>
        </>
      ) : (
        <>
          <div
            style={{ background: "#e7e7e7", padding: "5px", margin: "10px" }}
          >
            {/* Loading */}
            <div>{loading ? <>Loading....</> : <></>}</div>
            {movies && movies.length > 0 && !loading ? (
              <>
                {movies.map((el) => (
                  <div key={el.id}>
                    <Link to={`/view_movie/${el.id}`}>
                      <b>{el.name}</b>
                    </Link>
                    <br />
                    <img
                      src={el.image}
                      alt="Movie"
                      style={{ height: "100px" }}
                    />
                    <br />
                    <b>Info</b>: {el.info}
                    <br />
                    <b>Rating</b>: {el.rating ? el.rating : 0}
                    <br /> <br />
                  </div>
                ))}
              </>
            ) : (
              <>{!loading ? <>No movie found!</> : <></>}</>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Index;
