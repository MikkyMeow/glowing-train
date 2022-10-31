import { makeAutoObservable } from "mobx";
import { IPayment } from "./types";

class PaymentHistory {
  paymentHistory: IPayment[] = [
    {
      id: 1,
      date: "13.13.2022",
      amount: 140,
      description: "Breakfast",
      category: "Food",
    },
    {
      id: 2,
      date: "10.10.1998",
      amount: 12489,
      description: "Car",
      category: "Auto",
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  add(payment: IPayment) {
    this.paymentHistory.push(payment);
  }

  remove(id: number) {
    this.paymentHistory = this.paymentHistory.filter(
      (payment) => payment.id !== id
    );
  }
}

export default new PaymentHistory();
