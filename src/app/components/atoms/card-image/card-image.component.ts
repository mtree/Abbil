import { Component, Input } from '@angular/core';
import { Base64 } from '../../../lib/types';

@Component({
  selector: 'app-card-image',
  standalone: true,
  imports: [],
  templateUrl: './card-image.component.html',
  styleUrl: './card-image.component.scss'
})
export class CardImageComponent {
  @Input() public imageSrc: Base64<'jpeg' | 'jpg' | 'png'> | null = null;
}
