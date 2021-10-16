import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "./../../redux/actions/Employee";
import ReactPaginate from "react-paginate";
import { Col, Container } from "reactstrap";
import { Link } from "react-router-dom";
import { Row } from "reactstrap";
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
    let { selected } = data;
    console.log("selected", selected);
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
        {Employees.isFetching
          ? "loading"
          : Employees.employees.map((el) => (
              <EmployeeCard
                key={el.id}
                {...el}
                handleClickCheckBox={handleClickCheckBox}
              />
            ))}{" "}
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
