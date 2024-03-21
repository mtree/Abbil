import { Component } from '@angular/core';
import { CardImageComponent } from "../../atoms/card-image/card-image.component";

@Component({
    selector: 'app-card',
    standalone: true,
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
    imports: [CardImageComponent]
})
export class CardComponent {

}
