import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Form, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import MovieNavBar from "../components/MovieNavBar";
import SingleMovie from "../components/SingleMovie";

const Index = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovieText, setSearchMovieText] = useState("");

  const [searchErrorText, setSearchErrorText] = useState(false);

  const [firstRun, setFirstRun] = useState(true);

  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (!firstRun) {
      // Searching code...
      const fetchTimer = setTimeout(() => {
        if (searchMovieText && searchMovieText.length > 2) {
          fetchMovies();
        } else if (searchMovieText.length < 1) {
          fetchMovies();
        } else {
          setSearchErrorText(
            "Please enter at least 3 characters for searching."
          );
        }
      }, 800);

      // Clean up function...
      return () => {
        clearTimeout(fetchTimer);
      };
    }
  }, [searchMovieText]);

  const fetchMovies = async () => {
    setLoading(true);
    // Fetch resource...
    setSearchErrorText("");
    try {
      const response = await axios.get(
        `https://api.dynoacademy.com/test-api/v1/movies?search=${searchMovieText}`
      );
      setMovies(response.data.moviesData);
      setIsError(false);
      setLoading(false);
      setFirstRun(false);
    } catch (error) {
      setIsError(true);
      setErrorText("Cannot get movie info!");
      setLoading(false);
      setFirstRun(false);
    }
  };

  return (
    <div className="App">
      <MovieNavBar />
      <div>
        <div className="text-center mt-2">
          <Container>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Type Movie Title For Searching!"
                onChange={(e) => setSearchMovieText(e.target.value)}
                value={searchMovieText}
              />
              {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
            </Form.Group>
          </Container>
        </div>

        <span style={{ color: "red" }}>{searchErrorText}</span>
      </div>

      {isError ? (
        <>
          <div
            style={{
              background: "red",
              color: "#fff",
              padding: "10px",
              margin: "10px",
            }}
          >
            {errorText}
          </div>
        </>
      ) : (
        <>
          <div
            style={{ background: "#e7e7e7", padding: "10px", margin: "5px" }}
          >
            <div>
              {loading ? (
                <>
                  <Container className="text-center">
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  </Container>
                </>
              ) : (
                <></>
              )}
            </div>
            {!loading && movies.length < 1 ? (
              <> No movies found!</>
            ) : (
              <>
                <Row>
                  {movies.map((el) => (
                    <SingleMovie data={el} />
                  ))}
                </Row>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Index;
