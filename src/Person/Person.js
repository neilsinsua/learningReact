import React from "react";

const Person = (props) => {
  const stylePerson = {
    border: "solid black 2px",
    margin: "5px auto",
    width: "20%",
    padding: "5px",
  };

  const styleWord = {
    fontWeight: "bold",
  };

  return (
    <div className="person" style={stylePerson}>
      <p onClick={props.click}>
        My name is
        <span className="name" style={styleWord}>
          {" " + props.name}
        </span>
        <br />
        and I am
        <span className="age" style={styleWord}>
          {" " + props.age + " "}
        </span>
        years old
      </p>
    </div>
  );
};

export default Person;
