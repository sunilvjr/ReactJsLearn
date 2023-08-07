import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import MovieNavBar from "../components/MovieNavBar";

const ViewMovie = () => {
  const getParams = useParams();
  const getID = getParams.id;

  const [movieData, setMovieData] = useState({});

  const [logged, setLogged] = useState(true);

  // First time, component is rendered

  useEffect(() => {
    getSingleMovieInfo();
  }, []);

  // Everytime each component is changed/ updated..

  // useEffect(() => {
  //   console.log("Something was updated!");
  // });

  // Each time the dependencies are updated / changed...

  // useEffect(() => {
  //   console.log("I am triggred!");
  // }, [logged, movieData]);

  const getSingleMovieInfo = async () => {
    try {
      const response = await axios.get(
        `https://api.dynoacademy.com/test-api/v1/movie/${getID}`
      );
      setMovieData(response.data.singleMovieData);
    } catch (error) {
      alert("Error occoured!");
    }
  };
  //getSingleMovieInfo();

  return (
    <>
      <MovieNavBar />

      <Container>
        <h1 className="text-info">{movieData.name}</h1> <br />
        Info: {movieData.info} <br /> <br />
        <Card body>{movieData.desc}</Card>
        <br />
        <Card body>
          {" "}
          Image: <br />
          <img
            src={movieData.image}
            alt="Movie image"
            style={{ height: "200px" }}
          />
        </Card>
        <br />
        <Card body> Rating: {movieData.rating} </Card> <br />
        <Link to="/">
          <Button className="bg-dark">Go Back!</Button>
        </Link>{" "}
        <br />
        <br />
      </Container>
    </>
  );
};

export default ViewMovie;
