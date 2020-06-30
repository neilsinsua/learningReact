import React from "react";
//import Radium from "radium";
import styled from "styled-components";

const StyledDiv = styled.div`
  border: solid black 2px;
  margin: 5px auto;
  width: 20%;
  padding: 5px;
  @media (min-width: 800px) {
    border: solid pink 5px;
  }
`;

const Person = (props) => {
  const styleWord = {
    fontWeight: "bold",
  };

  return (
    <StyledDiv>
      <div className="person">
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
        <input type="text" onChange={props.change} />
      </div>
    </StyledDiv>
  );
};

export default Person;
