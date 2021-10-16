import React from "react";
import { Container, Row } from "reactstrap";
import EmployeeCard from "./EmployeeCard";
import _ from "lodash";

const MetEmployee = () => {
  let dataInLocalStorage;
  dataInLocalStorage = JSON.parse(localStorage.getItem("met"));
  console.log("dataInLocalStorage", typeof dataInLocalStorage);
  return (
    <Container>
      {_(dataInLocalStorage).isEmpty() ? (
        <Row className="align-items-center cards-section card-deck my-5 ">
          is empty
        </Row>
      ) : (
        ""
      )}
      <Row className=" align-content-end cards-section card-deck my-5 ">
        {Object.values(dataInLocalStorage).map((el) => (
          <EmployeeCard key={el.id} {...el} />
        ))}
      </Row>
    </Container>
  );
};

export default MetEmployee;
