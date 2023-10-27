import { PriceModel } from '../models/price.model';


export class BookModel {
    public id = 'number';
    public title = 'string';
    public totalPages = 'number';
    public author = 'string';
    public price = PriceModel;
    public isPublished = 'boolean';
    public publishedOn = Date;
    public authors = 'string[]';
    
    }