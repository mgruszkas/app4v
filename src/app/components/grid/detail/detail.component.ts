import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'detail',
    template: `
        <section class="detail">
            <span [routerLink]="['/']" class="close">X</span>
            <article *ngIf="article">
                <h1 class="title">{{ article.title }}</h1>
                <div class="content" [innerHtml]="article.html"></div>
            </article>
        </section>
    `,
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
    @Input() public article: any = null;
    @Output() public onClose: EventEmitter<any> = new EventEmitter();
    constructor() {

    }

    public close(): void {
        this.onClose.emit(true);
    }

}