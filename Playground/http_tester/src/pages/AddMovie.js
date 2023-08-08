import axios from "axios";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const AddMovie = () => {
  const movie_name_ref = useRef();
  const movie_desc_ref = useRef();
  const movie_rating_ref = useRef();

  const history = useHistory();

  const AddMovieHandler = async (e) => {
    e.preventDefault();

    console.log(movie_name_ref.current.value);

    const movieData = {
      movie_name: movie_name_ref.current.value,
      description: movie_desc_ref.current.value,
      rating: movie_rating_ref.current.value,
    };

    try {
      var repsonse = await axios.post(
        "https://api.dynoacademy.com/test-api/v1/movies",
        movieData,
        { timeout: 10000 }
      );
      console.log(repsonse.data.message);
      history.replace("/");
    } catch (ex) {
      console.log(ex.response.data.errors[0].message);
      if (ex.response) {
        alert(ex.response.data.errors[0].message);
      } else {
        alert("Unknown error occured! Please try again after few minutes");
      }
    }
  };

  return (
    <>
      <Link to="">Home</Link>
      <br />
      <br />
      <b>Add Movie</b>
      <br />
      <br />
      <form onSubmit={AddMovieHandler}>
        <b>Movie name</b>
        <br />
        <input type="text" placeholder="Movie name" ref={movie_name_ref} />
        <br /> <br />
        <b>Description</b>
        <br />
        <textarea
          placeholder="Movie Description"
          ref={movie_desc_ref}
          rows="5"
        />
        <br /> <br />
        <b>Rating</b>
        <br />
        <input type="text" placeholder="Movie Rating" ref={movie_rating_ref} />
        <br />
        <br />
        <button type="submit">Add Movie</button>
      </form>
    </>
  );
};

export default AddMovie;
