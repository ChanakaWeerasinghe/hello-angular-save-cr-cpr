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

  constructor() {
    console.log(this.data.biller);

    if (this.data.biller.value.m5 == "cr") console.log(event);

   
  }

  setupSavedBills()
  {
     this.cprEvent(event, this.data.biller.value.m5);
    this.ewaAccNumber = this.data.biller.value.m4;
    console.log("Eva No :", this.ewaAccNumber);

    this.ewaAmount = this.data.biller.value.m2;
    console.log("Amount  :", this.ewaAmount);

    this.crCprNumber= this.data.biller.value.m6;
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
