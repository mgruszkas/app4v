import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Article } from '../../models/Article';
import { Category } from '../../models/Category';
import { DummyData } from '../../models/DummyData';
import { Subject, Observable } from 'rxjs';
import 'rxjs/add/operator/map';

const DATA_STUB = '/assets/stub/data.json';

@Injectable()
export class GridDataProvider {
    constructor(private http: Http) {
        
    }

    public getCategories(): Subject<Category[]> {
        let subscription = new Subject<Category[]>();
        this.getData().subscribe( (data: DummyData) => {
            subscription.next(data.categories);
        });
        return subscription;
    }

    public getArticles(category: Category = null): Subject<Article[]> {
        let subscription = new Subject<Article[]>(); 
        this.getData().subscribe( (data: DummyData) => {

            let articles =  data.articles || []
            articles = articles.filter( (article) => {
                return !category || article.category === category.id;
            });
            
            articles.sort( (a: Article, b: Article) => {
                return a.score < b.score ? 1 : -1;
            });

            subscription.next(articles);
        });
        return subscription;
    }

    private getData(): Observable<DummyData>{
        return this.http.get(DATA_STUB).map( (data) => {
            return data.json();
        });
    }
}