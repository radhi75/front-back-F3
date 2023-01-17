import React from "react";
// import Alert from "react-bootstrap/Alert";
import Toast from "react-bootstrap/Toast";
import { useSelector } from "react-redux";
const Alerterrors = () => {
  const errors = useSelector((state) => state.errorsReducer);
  return (
    <div>
      {/* {errors.map((el) => (
        <Alert key={el.id} variant="danger">
          {el.msg}
        </Alert>
      ))} */}
      {errors.map((el) => (
        <Toast className="d-inline-block m-1" bg="danger" key={el.id}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">OOPS something want wrong</strong>
          </Toast.Header>
          <Toast.Body>{el.msg}.</Toast.Body>
        </Toast>
      ))}
    </div>
  );
};

export default Alerterrors;
