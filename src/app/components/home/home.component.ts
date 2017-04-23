import { Component, OnInit, Renderer, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GridDataProvider, Article, Category } from './../../providers';
import { viewMode } from './../../components';
import { Subject } from 'rxjs';

const LOCAL_STORAGE_VIEW_KEY = 'app4v_view_mode';

@Component({
    selector: 'home',
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    public data: Article[] = [];
    public categories: Category[] = [];
    public viewMode: viewMode;
    public selectedCategory: Category = null;
    public selectedArticle: Article;
    constructor(private dataProvider: GridDataProvider,
                private element: ElementRef,
                private renderer: Renderer,
                private route: ActivatedRoute) {
    }

    public ngOnInit(): void {
        this.viewModeChanged(this.getViewMode());

        this.loadArticles().then(() => {
            this.route.params.subscribe( (params: any) => {
                if (params['id']) {
                    this.selectedArticle = this.data.find( article => article.id === +params.id );
                }
            });
        });
        this.dataProvider.getCategories().subscribe( categories => this.categories = categories);
    }

    public viewModeChanged(event): void {
        this.setViewMode(event);
        this.renderer.setElementClass(this.element.nativeElement, 'list', event === viewMode.List);
    }

    public categoryChanged(): void {
        this.loadArticles();
    }

    public closeDetail(): void {
        this.selectedArticle = null;
    }

    private loadArticles(): Promise<boolean> {
        let articlesLoaded = new Subject<boolean>();
        this.dataProvider.getArticles(this.selectedCategory).subscribe( (articles) =>  {
            this.data = articles;
            articlesLoaded.next(true);
            articlesLoaded.complete();
        });

        return articlesLoaded.toPromise();
    }

    private getViewMode(): number {
        if (window.localStorage) {
            return parseInt(window.localStorage.getItem(LOCAL_STORAGE_VIEW_KEY), 10) || viewMode.Grid;
        }

        return viewMode.Grid;
    }

    private setViewMode(viewMode: number): void {
        this.viewMode = viewMode;
        if (window.localStorage) {
            window.localStorage.setItem(LOCAL_STORAGE_VIEW_KEY, viewMode.toString());
        }
    }
}