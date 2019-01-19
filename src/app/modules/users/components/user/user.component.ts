import { Component, Input, OnInit } from '@angular/core';
import { ModulesService } from '../../../modules.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  user: object;

  constructor(
    private modulesService: ModulesService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.modulesService.getUsersFromApi()
      .subscribe(response => {
        this.user = response;
      });
  }
}
