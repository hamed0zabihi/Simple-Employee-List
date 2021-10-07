import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import { Row } from "reactstrap";
import testJsonData from "../../server/testJsonData";
import EmployeeCard from "./EmployeeCard";
import _ from "lodash";

const ArchiveEmployee = () => {
  const [localStorageMet, setLocalStorageMet] = useState(
    JSON.parse(localStorage.getItem("met"))
  );

  // useEffect - update localstorage when check or unchecked checkbox
  useEffect(() => {
    localStorage.setItem("met", JSON.stringify(localStorageMet));
  }, [localStorageMet]);

  //handle checkbox click
  const handleClickCheckBox = (event, id) => {
    if (event.target.checked) {
      const addToStorage = [...localStorageMet, id];
      setLocalStorageMet(_.uniq(addToStorage));
    } else {
      const removeStorage = localStorageMet.filter((el) => el !== id);
      setLocalStorageMet(_.uniq(removeStorage));
    }
  };

  return (
    <Container>
      this is employee archive page
      <Link to="/met">met</Link>
      <Row className="align-items-center cards-section card-deck my-5 ">
        {testJsonData.map((el) => (
          <EmployeeCard
            key={el.id}
            {...el}
            handleClickCheckBox={handleClickCheckBox}
          />
        ))}
      </Row>
    </Container>
  );
};

export default ArchiveEmployee;
