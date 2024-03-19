import React from "react";
import { prisma } from "@/lib/prisma";
import { billStatus, userStatus,productStatus } from "@/lib/PrismaDataHelpers";

export default async function page() {
  const users=await prisma.user.findMany({})
  const bills=await prisma.bill.findMany({})
  const products=await prisma.product.findMany({})

  const totalUsers=userStatus(users)
  const totalBills=billStatus(bills)
  const totalProducts=productStatus(products)


  return (
    <div>
      {/*       //Cards with number of users, bills (payed and pending), products, monthly revenue.

      //Charts with the number of new users by month
      //chart with the number of bills by month
      //chart with the amount of revenue by month
       */}

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
                <strong>Received:</strong>
              </li>
              <li className="list-group-item">
                <strong>Pending:</strong>
              </li>
              <li className="list-group-item">
                <strong>Total:</strong>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-4 border rounded-3">
        <div className="card-body">
            <h5 className="card-title mb-3">Monthly Reports</h5>
            <ul className="list-group list-group-flush">

            <li className="list-group-item">
              <strong>Received:</strong>
            </li>
             <li className="list-group-item">
              <strong>Pending:</strong>
            </li>
            <li className="list-group-item">
              <strong>Resolved:</strong>
            </li>
            <li className="list-group-item">
              <strong>Total:</strong>
            </li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
}
