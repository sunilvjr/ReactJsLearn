import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";

const ViewMovie = () => {
  console.log("View page");

  const getParams = useParams();

  const getId = getParams.id;

  console.log(getId);

  const [movieData, setMovieData] = useState({});

  //First time, when component is rendered
  useEffect(() => {
    console.log("First time running..");
    GetMovieDetail();
  }, []);

  //Everytime when compoent is changed/updated
  //   useEffect(() => {
  //     console.log("Something was changed!");
  //     GetMovieDetail();
  //   });

  //Each time the dependencies were udpated/changed
  //   useEffect(() => {
  //     console.log("Something was changed!");
  //     GetMovieDetail();
  //   }, [movieData]);

  const GetMovieDetail = async () => {
    try {
      const response = await axios.get(
        `https://api.dynoacademy.com/test-api/v1/movie/${getId}`
      );
      setMovieData(response.data.singleMovieData);
    } catch (error) {
      alert("Error occured!!");
    }
  };

  return (
    <>
      <MyNavbar></MyNavbar>
      <b>View Movie {getId}</b>
      {/* <button onClick={GetMovieDetail}>View Movie Detail</button> */}
      <br /> <br />
      Movie Detail :<br />
      Movie name: {movieData.name} <br />
      Info: {movieData.info} <br />
      Desc: {movieData.desc} <br />
      Image: <br />
      <img src={movieData.image} alt="Movie" style={{ height: "100px" }} />
      <br />
      Rating: {movieData.rating} <br />
    </>
  );
};

export default ViewMovie;
