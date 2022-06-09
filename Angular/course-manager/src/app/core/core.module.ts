import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Component404 } from "./component/404/404.component";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";

@NgModule
({
    declarations:
    [
        NavBarComponent,
        Component404
    ],
    imports:
    [
        RouterModule.forRoot
        ([
            {
                path: '**',
                component: Component404,
            }
        ])
    ],
    exports:
    [
        NavBarComponent,
        Component404
    ]
})

export class CoreModule
{

}