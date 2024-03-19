import React from "react";
import { prisma } from "@/lib/prisma";
import { billStatus, userStatus,productStatus, reportStatus,revenueStatus } from "@/lib/PrismaDataHelpers";
import ResumeCards from "@/components/adminComponents/resumeCards";
export default async function page() {
  const users=await prisma.user.findMany({})
  const bills=await prisma.bill.findMany({})
  const products=await prisma.product.findMany({})
  const reports=await prisma.report.findMany({})

  const totalUsers=userStatus(users)
  const totalBills=billStatus(bills)
  const totalProducts=productStatus(products)
  const totalReports=reportStatus(reports)
  const totalRevenue=revenueStatus(bills)

  return (
    <div>
      {/*
       //Charts with the number of new users by month
      //chart with the number of bills by month
      //chart with the amount of revenue by month
       */}

      <ResumeCards
        totalUsers={totalUsers}
        totalBills={totalBills}
        totalProducts={totalProducts}
        totalReports={totalReports}
        totalRevenue={totalRevenue}
      />

    </div>
  );
}
