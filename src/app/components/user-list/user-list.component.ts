import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "../../services/database.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit {
  users;
  constructor(private db: DatabaseService) {}

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.db.get("user").subscribe((data: any) => {
      console.log(data);
      this.users = data;
    });
  }
}
