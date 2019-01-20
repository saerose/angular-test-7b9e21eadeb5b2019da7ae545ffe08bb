import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IResponse as Response } from '../../../../types';
import { ModulesService } from '../../../modules.service';

const NOT_FOUND = 404;

@Component({
  selector: 'new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  userForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private modulesService: ModulesService
  ) {}

  ngOnInit(): void {
    this.newUserForm();
  }

  newUserForm(): void {
    this.userForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      street: new FormControl(''),
      city: new FormControl(''),
      zipcode: new FormControl(''),
      phone: new FormControl('', Validators.required),
      website: new FormControl('')
    });
  }

  postUser(): void {
    const { value: userBody } =  this.userForm;

    this.modulesService.postNewUser(userBody)
      .subscribe((response: Response) => {
        const { status } = response;
        if ( Number(status) === NOT_FOUND) {
          window.location.pathname = '/error';
        }
      });
  }
}
