import { Component, Input } from '@angular/core';
import { GridItem } from './../../../models/GridItem';

@Component({
    selector: 'item',
    styleUrls: ['./item.component.scss'],
    templateUrl: './item.component.html'
})
export class ItemComponent {
    @Input() public article: GridItem;
    constructor() {

    } 
    
}