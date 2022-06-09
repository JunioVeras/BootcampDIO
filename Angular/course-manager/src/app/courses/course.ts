export class Course
{
    id: number = 0;
    name: string = '';
    imageUrl: string = '';
    price: number = 0;
    code: string = '';
    duration: number = 0;
    rating: number = 0;
    releaseDate: string = '';
    description?: string;
    constructor()
    {
        this.id = 0,
        this.name = '',
        this.imageUrl = '',
        this.price = 0,
        this.code = '',
        this.duration = 0,
        this.rating = 0,
        this.releaseDate = ''
    }
}