import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  a: String;
  arr: String[][] = [
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"]
  ];

  user: String = "0";
  count = 0;
  values1 = 0;
  values2 = 0;
  userwin = "";
  tampil = false;

  onKey(event: any) {
    if (event.target.value.length == 3) {
      this.values1 = event.target.value[0] * 1;
      this.values2 = event.target.value[2] * 1;
      this.arr[this.values1][this.values2] = this.user;
      if (this.user == "0") {
        this.user = "1";
        this.cekMenang("0");
      } else if (this.user == "1") {
        this.user = "0";
        this.cekMenang("1");
      }
      event.target.value="";
    }
  }

  cekMenang(users) {
    for (var i = 0; i < 5; i++) {
      this.count = 0;
      for (var j = 0; j < 5; j++) {
        if (this.arr[i][j] == users) {
          this.count++;
        }
      }
      if (this.count == 5) {
        this.tampil = true;
        this.userwin = users;
        this.arr = [
          ["*", "*", "*", "*", "*"],
          ["*", "*", "*", "*", "*"],
          ["*", "*", "*", "*", "*"],
          ["*", "*", "*", "*", "*"],
          ["*", "*", "*", "*", "*"]
        ];
      }
    }
    for (var i = 0; i < 5; i++) {
      this.count = 0;
      for (var j = 0; j < 5; j++) {
        if (this.arr[j][i] == users) {
          this.count++;
        }
      }
      if (this.count == 5) {
        this.tampil = true;
        this.userwin = users;
        this.arr = [
          ["*", "*", "*", "*", "*"],
          ["*", "*", "*", "*", "*"],
          ["*", "*", "*", "*", "*"],
          ["*", "*", "*", "*", "*"],
          ["*", "*", "*", "*", "*"]
        ];
      }
    }
  }
}
