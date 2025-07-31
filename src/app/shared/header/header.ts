import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
