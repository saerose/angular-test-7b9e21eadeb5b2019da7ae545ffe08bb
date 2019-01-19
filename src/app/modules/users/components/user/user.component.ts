import { Component, Input, OnInit } from '@angular/core';
import { IUser as User } from '../../../../types';
import { ModulesService } from '../../../modules.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  user: User;

  constructor(
    private modulesService: ModulesService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.modulesService.getUsersFromApi()
      .subscribe((response: User) => {
        this.user = response;
      });
  }
}
