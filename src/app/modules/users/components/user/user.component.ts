import { Component, OnInit } from '@angular/core';
import { IUser as User, IResponse as Response } from '../../../../types';
import { ModulesService } from '../../../modules.service';

const NOT_FOUND = 404;

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: User[];

  constructor(
    private modulesService: ModulesService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.modulesService.getUsersFromApi()
      .subscribe((response: Response) => {
        const users = response.body as User[];
        this.users = users.sort((a: User, b: User) => {
          const aName = a.username.toLowerCase();
          const bName = b.username.toLowerCase();
          if (aName > bName) {
            return 1;
          } else if (bName > aName) {
            return -1;
          }

          return 0;
        });
        if ( Number(status) === NOT_FOUND) {
          window.location.pathname = '/error';
        }
      });
  }
}
