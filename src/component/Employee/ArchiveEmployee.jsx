import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import { Row } from "reactstrap";
import testJsonData from "../../server/testJsonData";
import EmployeeCard from "./EmployeeCard";

const ArchiveEmployee = () => {
  const [localStorageMet, setLocalStorageMet] = useState(
    JSON.parse(localStorage.getItem("met"))
  );

  // useEffect - update localstorage when check or unchecked checkbox
  useEffect(() => {
    if (localStorageMet) {
      localStorage.setItem("met", JSON.stringify(localStorageMet) || []);
    }
  }, [localStorageMet]);

  //handle checkbox click
  const handleClickCheckBox = (
    event,
    avatar,
    email,
    first_name,
    last_name,
    id
  ) => {
    if (event.target.checked) {
      // const addToStorage = [...localStorageMet, id];
      // setLocalStorageMet(_.uniq(addToStorage));
      const addToStorage = {
        ...localStorageMet,
        [id]: { id, avatar, email, first_name, last_name },
      };
      setLocalStorageMet(addToStorage);
    } else {
      const deleteToStorage = { ...localStorageMet, [id]: undefined };
      setLocalStorageMet(deleteToStorage);
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
