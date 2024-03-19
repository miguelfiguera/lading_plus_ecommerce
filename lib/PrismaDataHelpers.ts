import { User, Bill, Product,Report } from "@prisma/client";

export function userStatus(array: User[]): number[] {
  let active = 0;
  let disabled = 0;

  array.forEach((user: User) => {
    if (user.active) {
      active += 1;
    } else {
      disabled += 1;
    }
  });

  return [active, disabled];
}

export function billStatus(array: Bill[]): number[] {
  let confirmed = 0;
  let pending = 0;
  let reported = 0;

  array.forEach((bill: Bill) => {
    if (bill.confirmed) {
      confirmed += 1;
    } else {
      pending += 1;
    }
  });

  array.forEach((bill: Bill) => {
    if (bill.reported) {
      reported += 1;
    }
  });

  return [confirmed, pending, reported];
}

export function productStatus(array: Product[]): number[] {
  let belowTen = 0;
  let aboveTen = 0;

  array.forEach((product: Product) => {
    if (product.quantity < 10) {
      belowTen += 1;
    } else {
      aboveTen += 1;
    }
  });
  return [belowTen, aboveTen];
}

export function reportStatus(array:Report[]):number[]{
    let pending = 0
    let resolved = 0
    let totalReportsReceived=array.length
    array.forEach((report:Report)=>{
        if(report.solved){
            resolved += 1
        }else{
            pending += 1
        }
    })


    return [pending,resolved,totalReportsReceived]
}

export function revenueStatus(array:Bill[]):number[]{
    let netAmount=0
    let confirmedAmount = 0
    let pendingAmount=0
    array.forEach((bill:Bill)=>{
        netAmount += bill.amount
        if(bill.confirmed){
        confirmedAmount += bill.amount}
        else{
            pendingAmount += bill.amount
        }

    })
    return [netAmount,confirmedAmount,pendingAmount]
}