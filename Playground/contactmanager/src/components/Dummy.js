const Dummy = (props) => {
  const dummyButtonClickHandler = () => {
    //alert("grand child");
    props.onDumyClicked();
  };
  return (
    <>
      <button onClick={dummyButtonClickHandler}>Grand Child</button>
    </>
  );
};

export default Dummy;
