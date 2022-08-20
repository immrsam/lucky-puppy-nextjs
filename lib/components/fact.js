import { useState, useEffect } from "react";

export default function Facts() {
  const [data, setData] = useState(null);

  function getFact() {
    setData("loading");
    const url = "https://dog-facts2.p.rapidapi.com/facts";

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "97fe31f750msh78db3c7da2d0d3fp1926a7jsn473f0ce2a8de",
        "X-RapidAPI-Host": "dog-facts2.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then(function (res) {
        return res.json();
      })
      .then(function (info) {
        setData(info);
      });
  }

  useEffect(() => {
    getFact();
  }, []);

  function handleButtonClick() {
    getFact();
  }

  //   useEffect(function () {
  //     setData("loading");
  //     const url = "https://dog-facts2.p.rapidapi.com/facts";

  //     const options = {
  //       method: "GET",
  //       headers: {
  //         "X-RapidAPI-Key": "97fe31f750msh78db3c7da2d0d3fp1926a7jsn473f0ce2a8de",
  //         "X-RapidAPI-Host": "dog-facts2.p.rapidapi.com",
  //       },
  //     };

  //     fetch(url, options)
  //       .then(function (res) {
  //         return res.json();
  //       })
  //       .then(function (info) {
  //         setData(info);
  //       });
  //   }, []);
  //}

  let markUp = null;

  if (data === null) {
    markUp = (
      <div>
        <h3>No data to show</h3>
      </div>
    );
  } else if (data === "loading") {
    markUp = (
      <div>
        <h3>Loading</h3>
      </div>
    );
  } else {
    let funcFactMarkup = <p>{data.facts[0]}</p>;
    markUp = <div>{funcFactMarkup}</div>;
  }

  return (
    <div>
      <h3>Fun Fact</h3>
      {markUp}
      <button onClick={handleButtonClick}>Load new fact</button>
    </div>
  );
}
