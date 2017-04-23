import { GridItem } from './GridItem';
import { Category } from './Category';

export class Article implements GridItem {
    public id: number;
    public title: string;
    public timestamp: Date;
    public category: number;
    public score: Number;
    public html: string;
}