import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[0];

  get imagePath() {
    return `assets/users/${this.selectedUser.avatar}`;
  }

  onSelectUser() {
    console.log('clicked on user!');
  }

}
