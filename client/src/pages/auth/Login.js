
import React from "react";
import Form from "../../coponents/shared/Forms/Form";
import Spinner from "../../coponents/shared/Spinner";
import { useSelector } from "react-redux";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-8 form-banner">
            <img src="./assets/images/Blood-Donation-1.jpg" alt="loginImage" />
          </div>
          <div className="col-md-4 form-container">
            <Form
              formTitle={"Login Page"}
              submitBtn={"Login"}
              formType={"login"}
            />
          </div>
        </div>
       )} 
    </>
  );
};

export default Login;
