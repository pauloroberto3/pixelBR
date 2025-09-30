import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './authheader.component.html',
  styleUrls: ['./authheader.component.css']
})
export class AuthHeaderComponent {
  // Este componente é puramente visual, a lógica fica vazia.
}