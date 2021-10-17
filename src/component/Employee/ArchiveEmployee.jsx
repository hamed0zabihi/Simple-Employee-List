import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees, toggleMet } from "./../../redux/actions/Employee";
import ReactLoading from "react-loading";
import ReactPaginate from "react-paginate";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import EmployeeCard from "./EmployeeCard";

const ArchiveEmployee = () => {
  const Employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();
  const [localStorageMet, setLocalStorageMet] = useState(
    JSON.parse(localStorage.getItem("met"))
  );

  // current page
  const [currentPage, setCurrentPage] = useState(0);

  // useEffect - update localstorage when check or unchecked checkbox
  useEffect(() => {
    if (localStorageMet) {
      localStorage.setItem("met", JSON.stringify(localStorageMet) || []);
    }
  }, [localStorageMet]);

  // handle page for pagination
  const handlePageClick = (data) => {
    // data from react-paginate
    let { selected } = data;
    // if we want use offset
    // let offset = Math.ceil(selected * this.props.perPage);
    dispatch(fetchEmployees(selected + 1));
    setCurrentPage(selected);
  };

  //handle checkbox click
  const handleClickCheckBox = (
    event,
    avatar,
    email,
    first_name,
    last_name,
    id
  ) => {
    let newEmployee = { id, avatar, email, first_name, last_name };
    //met save in redux state
    dispatch(toggleMet(newEmployee));
    //met save in localstorage - when refreshed, Met Data is not lost
    if (event.target.checked) {
      const addToStorage = {
        ...localStorageMet,
        [id]: newEmployee,
      };
      setLocalStorageMet(addToStorage);
    } else {
      const deleteToStorage = { ...localStorageMet, [id]: undefined };
      setLocalStorageMet(deleteToStorage);
    }
  };

  return (
    <Container>
      <span> this is employee archive page </span>
      <Link to="/met">met</Link>
      <Row className="align-items-center cards-section card-deck my-5 ">
        {Employees.isFetching ? (
          <Col md="12" className="d-flex justify-content-center">
            <ReactLoading type="bars" color="#f00" />
          </Col>
        ) : (
          Employees.employees.map((el) => (
            <EmployeeCard
              key={el.id}
              {...el}
              handleClickCheckBox={handleClickCheckBox}
            />
          ))
        )}
      </Row>
      <Row className="align-items-center  my-5 ">
        <nav aria-label="Page navigation example ">
          <ReactPaginate
            previousLabel="previous"
            nextLabel="next"
            breakLabel="..."
            breakClassName="page-item"
            pageCount={Employees.total_pages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            initialPage={currentPage}
            containerClassName="pagination justify-content-center"
            activeClassName={"active"}
            breakLinkClassName="page-item"
            pageClassName="page-item"
            previousClassName="page-item"
            nextClassName="page-item"
            pageLinkClassName="page-link"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
          />
        </nav>
      </Row>
    </Container>
  );
};

export default ArchiveEmployee;
