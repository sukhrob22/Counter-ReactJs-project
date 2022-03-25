const Counter = (props) => {
  const { increment, decreament, refresh, counter } = props;
  console.log(props)
  let width = 600;
  let logoUrl =
    "https://tvfinternational.com/assets/Uploads/_resampled/FillWyIxOTAwIiwiMTAwMCJd/photo-1444703686981-a3abbc4d4fe4.jpg";

  return (
    <div className="myContainer">
      <img width={width} src={logoUrl} />
      <div>
        <h1>gitCount the stars</h1>
        <br></br>

        <h1 id="value" style={{ fontSize: "100px", textAlign: "center" }}>
          {counter}
        </h1>
        <br></br>

        <button className="btn btn-danger m-3" onClick={decreament}>
          -
        </button>

        <button className="btn btn-dark m-3 " onClick={refresh}>
          restart
        </button>
        
        <button className="btn btn-success m-3" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;