import { Component, OnInit } from "@angular/core";

import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { DatabaseService } from "../../services/database.service";

@Component({
  selector: "app-user-add",
  templateUrl: "./user-add.component.html",
  styleUrls: ["./user-add.component.scss"]
})
export class UserAddComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  data = {
    password: "",
    username: "",
    type: "",
    name: ""
  };
  constructor(private router: Router, private db: DatabaseService) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      name: new FormControl(this.data.name, [
        Validators.required,
        this.validateLetters
      ]),
      password: new FormControl(this.data.password, [
        Validators.required,
        this.validatePassword
      ]),
      type: new FormControl(this.data.type, [Validators.required]),
      username: new FormControl(this.data.username, [Validators.required])
    });
  }

  get username() {
    return this.form.get("username");
  }

  get password() {
    return this.form.get("password");
  }

  get name() {
    return this.form.get("name");
  }

  get type() {
    return this.form.get("type");
  }

  validateLetters(controls) {
    const regExp = new RegExp(/^[a-zA-Z0-9_\-.\s]+$/);

    if (!regExp.test(controls.value)) {
      return { validateLetters: { value: true } };
    }
  }

  validatePassword(controls) {
    const regExp = new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,100})/
    );

    if (!regExp.test(controls.value)) {
      return { validateLetters: { value: true } };
    }
  }

  addUser() {
    this.submitted = true;

    const data = {
      name: this.form.controls["name"].value,
      type: this.form.controls["type"].value,
      username: this.form.controls["username"].value,
      password: this.form.controls["password"].value
    };
    this.form.disable();

    this.db.post("user", data).subscribe((res:any) => {
      console.log(res);
      if (res.id !== null) {
        this.form.reset();
        this.router.navigate(["/list"])
      } else {
          this.form.enable();
      }
      this.submitted = false;
    });
  }
}
