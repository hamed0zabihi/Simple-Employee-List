import React from "react";
import { useLocation } from "react-router-dom";

import {
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const EmployeeCard = (props) => {
  const { avatar, email, first_name, last_name, id, handleClickCheckBox } =
    props;

  //give data met from localstorage for defualt checked in check box
  let dataMet = JSON.parse(localStorage.getItem("met")) || {};
  let location = useLocation();

  return (
    <Col className="py-2" md="4" sm="12" xs="12">
      <Card className="text-center h-100 ">
        <CardBody className="my-2 px-4">
          <img src={avatar} alt={email} className="img-fluid rounded-circle" />
          <CardTitle tag="h5" className=" my-2 pt-2">
            {first_name} {last_name}
          </CardTitle>
          <CardText className="text-center py-1">{email}</CardText>
          {location.pathname === "/met" ? (
            ""
          ) : (
            <FormGroup check>
              <Label check>
                <Input
                  type="checkbox"
                  onClick={(e) =>
                    handleClickCheckBox(
                      e,
                      avatar,
                      email,
                      first_name,
                      last_name,
                      id
                    )
                  }
                  defaultChecked={
                    // dataMet.findIndex((el) => el === id) ? "checked" : ""
                    Object.keys(dataMet).find((el) => parseInt(el) === id)
                      ? "checked"
                      : ""
                  }
                />
                met
              </Label>
            </FormGroup>
          )}
        </CardBody>
      </Card>
    </Col>
  );
};

export default EmployeeCard;
