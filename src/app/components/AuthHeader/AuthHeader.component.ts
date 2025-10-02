import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './AuthHeader.component.html',
  styleUrls: ['./AuthHeader.component.css']
})
export class AuthHeaderComponent {
  // Este componente é puramente visual, a lógica fica vazia.
}