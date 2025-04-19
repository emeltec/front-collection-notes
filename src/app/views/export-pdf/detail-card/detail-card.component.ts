import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DetailsCard } from '../utils/detail-card.interface';

@Component({
  selector: 'app-detail-card',
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.scss']
})
export class DetailCardComponent {
  @Input() detailsCard: DetailsCard[] = [];

  constructor() { }
  
}
