import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatFormFieldModule} from '@angular/material/form-field';
import { PostCreateComponent } from './posts/post-create/post-create.component';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    HeaderComponent,
    PostCreateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
