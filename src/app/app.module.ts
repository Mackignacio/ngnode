import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserAddComponent } from "./components/user-add/user-add.component";
import { UserListComponent } from "./components/user-list/user-list.component";
import { UserEditComponent } from "./components/user-edit/user-edit.component";

import { DatabaseService } from "./services/database.service";

// Http
import { HttpClientModule } from "@angular/common/http";

// Forms
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    UserAddComponent,
    UserListComponent,
    UserEditComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule {}
