import { CommonModule } from "@angular/common";
import { NgModule, ɵresetCompiledComponents } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StarModule } from "../shared/component/star/star.module";
import { ReplacePipeModule } from "../shared/pipe/replace-pipe.module";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";

@NgModule
({
    declarations: 
    [
        CourseListComponent,
        CourseInfoComponent,
    ],
    imports:
    [
        CommonModule,
        FormsModule,
        StarModule,
        ReplacePipeModule,
        RouterModule.forChild
        ([
            {
            path: 'courses',
            component: CourseListComponent,
            },
            {
            path: 'courses/info/:id',
            component: CourseInfoComponent,
            },
        ])
    ]

})
export class CourseModule
{

}