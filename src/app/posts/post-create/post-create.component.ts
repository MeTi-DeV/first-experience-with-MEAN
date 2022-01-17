import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  entredValue = ''
  defaultValue = 'This value is empty'
  constructor() { }
  addNewPost() {
    this.defaultValue = this.entredValue
  }

  ngOnInit(): void {
  }

}
