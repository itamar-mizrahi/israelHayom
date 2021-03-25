// import logo from './logo.svg';
import "./App.css";
import React, { useState, useEffect } from "react";

function MyComponent() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://sheet.best/api/sheets/650df199-9f1a-4c64-ba44-d33e5582abd7")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <div class="header">
          נבחרת<b>הכתבים</b>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center"

            // alignIitems: "center",
          }}
        >
          {items.map((item) => (
            <div
              style={{
                width: "190px",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
              key={item.id}
            >
              <img
                style={{ position: "relative", zIndex: 1, margin: "0px 5px" }}
                src={item.url}
              ></img>
              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  padding: "2px",
                  backgroundColor: "rgba(1,1,1,0.5)",
                  textAlign: "center",
                  marginTop: "-40px",
                  color: "white",
                  fontWeight: "bolder",
                  alignSelf: "center",
                  borderRadius: "3px",
                  padding: "3px 10px",
                }}
              >
                {item.name}
              </div>
              <div
                style={{
                  textAlign: "center",
                  padding: "5px 0px 0px 0px",
                  position: "relative",
                  marginTop: "40px",
                  margin: "18px 5px 0px 5px",
                  fontWeight: "bolder",
                  background: "lightgrey",
                }}
              >
                {item.details}
                <div
                  style={{
                    border: "1px solid #efefef",
                    textAlign: "center",
                    background: "lightgrey",
                    wordWrap: "break-word",
                  }}
                >
                  {item.url}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MyComponent;
