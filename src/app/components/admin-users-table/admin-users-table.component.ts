import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user.model';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-admin-users-table',
  templateUrl: './admin-users-table.component.html',
  styleUrls: ['./admin-users-table.component.css']
})
export class AdminUsersTableComponent {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  
  deleteUser(user: User) {
    this.userService.updateUserStatus(user.userId, true).subscribe(() => {
      user.delete = true;
    });
  }
}
