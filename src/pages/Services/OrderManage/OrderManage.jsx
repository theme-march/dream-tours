import React from "react";
import useDatabase from "../../../hooks/useDatabase";
import "./OrderManage.css";
const OrderManage = () => {
  const {
    dataLoadTime,
    booktourslist,
    deletebooktoursrlist,
    udatebooktoursrlist,
  } = useDatabase();
  return (
    <div className=" table-responsive t-body-h ">
      <table className="table  table-borderless   caption-top">
        <caption className="fw-bolder fs-4">Manage All Orders</caption>
        <thead>
          <tr>
            <th scope="col">Order Id</th>
            <th scope="col">Email id</th>
            <th scope="col">Booktours List</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {dataLoadTime ? (
            <div className="row">
              <div
                className="spinner-border text-success mx-auto"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            booktourslist?.map((booktours) => {
              return (
                <tr key={booktours?._id}>
                  <th scope="row">{booktours?.bookserviceid}</th>
                  <td>{booktours?.email}</td>
                  <td>
                    {booktours?.bookservicetitle.slice(0, 20)}
                    {"..."}
                  </td>
                  <td>
                    {booktours?.status === "update" ? (
                      <span className="badge rounded-pill bg-success">
                        {booktours?.status}
                      </span>
                    ) : (
                      <span className="badge rounded-pill bg-primary">
                        {booktours?.status}
                        {"..."}
                      </span>
                    )}
                  </td>

                  <td>
                    <button
                      onClick={() => udatebooktoursrlist(booktours._id)}
                      className="btn btn-sm btn-success me-3"
                    >
                      <i className="fas fa-pen-alt" aria-hidden="true"></i>
                    </button>
                    <button
                      onClick={() =>
                        window.confirm(
                          "Are you sure ? this item has been detected "
                        ) && deletebooktoursrlist(booktours._id)
                      }
                      className="btn btn-sm btn-danger"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderManage;
