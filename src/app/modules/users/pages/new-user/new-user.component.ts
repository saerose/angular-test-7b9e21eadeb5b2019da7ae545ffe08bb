import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {IGeo} from "../../../../types";

@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.newUserForm();
  }

  newUserForm(): void {
    this.userForm = this.formBuilder.group({
      name: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      street: new FormControl(''),
      city: new FormControl(''),
      zipcode: new FormControl(''),
      phone: new FormControl(''),
      website: new FormControl('')
    })
    this.userForm.valueChanges
      .subscribe(result => console.log('form', result))
  }
}

