import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular 6";
  idType;
  cprNumber;
  ewaAccNumber;
  ewaAmount;
  crCprNumber;
  crNumber;
  data = {
    biller: {
      billerID: "WLTB0001",
      catagory: "TELEPHONES/TELCOMS",
      form: "",
      id: "224",
      name: "EWA",
      value: {
        m1: "342434234324",
        m2: "34234324.234",
        m4: "342434234324",
        m5: "cr",
        m6: "32434342343434"
      }
    }
  };

  card = [
    {
      cardNumber: "6088 98** **** 2867",
      expireDate: "9/22",
      cardHolderName: null,
      balance: [
        { currency: "BHD", balance: 10.904, account: "0000035060480000061603" },
        { currency: "BHD", balance: 20.904, account: "0000035060480000061603" },
        { currency: "BHD", balance: 30.904, account: "0000035060480000061603" }
      ],
      instrumentID: "2305"
    },
    {
      cardNumber: "2222 22** **** 2225",
      expireDate: "1/3131",
      cardHolderName: "wrff",
      balance: [
        {
          currency: "BHD",
          balance: 100.904,
          account: "0000035060480000061603"
        },
        {
          currency: "BHD",
          balance: 200.904,
          account: "0000035060480000061603"
        },
        { currency: "BHD", balance: 300.904, account: "0000035060480000061603" }
      ],
      instrumentID: "2665"
    }
  ];

  constructor() {
    if (this.card !== undefined) {
      let total=0;
      for (const card of this.card) {
        for (let i = 0; i < card.balance.length; i++) {
          console.log("Card balance...", card.balance[i].balance);
          total= total+card.balance[i].balance;
        }
        console.log("Card balance...",total);
      }
    }

    // console.log(this.data.biller);

    // if (this.data.biller.value.m5 == "cr") console.log(event);
  }

  setupSavedBills() {
    this.cprEvent(event, this.data.biller.value.m5);
    this.ewaAccNumber = this.data.biller.value.m4;
    console.log("Eva No :", this.ewaAccNumber);

    this.ewaAmount = this.data.biller.value.m2;
    console.log("Amount  :", this.ewaAmount);

    this.crCprNumber = this.data.biller.value.m6;
    console.log("crCprNumber  :", this.crCprNumber);
  }

  cprEvent(event, type) {
    console.log(event);
    if (type == "cr") {
      (this.idType = "cr"), (this.cprNumber = false);
      this.crNumber = true;
    } else if (type == "cpr") {
      (this.idType = "cpr"), (this.cprNumber = true);
      this.crNumber = false;
    }
  }
}
