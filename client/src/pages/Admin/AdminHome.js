import React from "react";
import { useSelector } from "react-redux";
import Layout from "../../coponents/shared/Layout/Layout";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <div style={{ display: 'flex', alignItems: 'center' }}>
                <i className="fa-solid fa-hospital-user" style={{ marginRight: '10px'}}></i>
                <h3>Raktkosh Center</h3>
         </div>
          <hr />
          <p>
          Welcome to the centralized hub of Raktkosh Centre. This admin panel is designed to streamline the management of blood donation activities, ensuring efficiency and transparency in our operations.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
