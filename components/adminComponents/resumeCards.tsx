import React from "react";

export default function ResumeCards({
  totalUsers,
  totalBills,
  totalProducts,
  totalReports,
  totalRevenue,
}: {
  totalUsers: number[];
  totalBills: number[];
  totalProducts: number[];
  totalReports: number[];
  totalRevenue: number[];
}) {
  return (
    <div className="container-fluid my-5 d-flex justify-content-center gap-5">
      <div className="col p-4 border rounded-3 ">
        {" "}
        <div className="card-body">
          <h5 className="card-title mb-3">Users</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Active: {totalUsers[0]}</strong>
            </li>
            <li className="list-group-item">
              <strong>Inactive: {totalUsers[1]}</strong>
            </li>
          </ul>
        </div>
      </div>

      <div className="col p-4 border rounded-3 ">
        {" "}
        <div className="card-body">
          <h5 className="card-title mb-3">Monthly Bills</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Pending: {totalBills[1]}</strong>
            </li>
            <li className="list-group-item">
              <strong>Payed:{totalBills[0]}</strong>
            </li>
            <li className="list-group-item">
              <strong>Reports: {totalBills[2]}</strong>
            </li>
          </ul>
        </div>
      </div>
      <div className="col p-4 border rounded-3 ">
        {" "}
        <div className="card-body">
          <h5 className="card-title mb-3">Products</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Above 10: {totalProducts[1]}</strong>
            </li>
            <li className="list-group-item">
              <strong>Below 10: {totalProducts[0]}</strong>
            </li>
          </ul>
        </div>
      </div>
      <div className="col p-4 border rounded-3 ">
        {" "}
        <div className="card-body">
          <h5 className="card-title mb-3">Monthly Revenue</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Received: {totalRevenue[0]}</strong>
            </li>
            <li className="list-group-item">
              <strong>Confirmed: {totalRevenue[1]}</strong>
            </li>
            <li className="list-group-item">
              <strong>Pending:{totalRevenue[2]}</strong>
            </li>
            <li className="list-group-item">
              <strong>Total Pending:{totalRevenue[2] - totalRevenue[1]}</strong>
            </li>
          </ul>
        </div>
      </div>
      <div className="col p-4 border rounded-3">
        <div className="card-body">
          <h5 className="card-title mb-3">Monthly Reports</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Received: {totalReports[2]}</strong>
            </li>
            <li className="list-group-item">
              <strong>Pending: {totalReports[0]}</strong>
            </li>
            <li className="list-group-item">
              <strong>Resolved: {totalReports[1]}</strong>
            </li>
            <li className="list-group-item">
              <strong>
                Total Pending: {totalReports[0] - totalReports[1]}{" "}
              </strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
