import { User } from './user';


export interface Blog {
    id?: string;
    createdAt: number;
    author?: string;
    subject: string;
    imageUrl: any;
    file: any;
    body: string;
    category: string;
    
}