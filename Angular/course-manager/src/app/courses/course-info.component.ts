import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component
({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit
{
    course: Course = 
    {
        id: 0,
        name: '',
        releaseDate: '',
        description: '',
        duration: 0,
        code: '',
        rating: 0,
        price: 0,
        imageUrl: '',
    };

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService){}

    ngOnInit(): void 
    {
        this.courseService.retrievebyId(Number(this.activatedRoute.snapshot.paramMap.get('id'))).subscribe
        ({
            next: course => this.course = course,
            error: err => console.log("Error", err)
        });
    }

    save(): void
    {
        this.courseService.save(this.course);
    }

}