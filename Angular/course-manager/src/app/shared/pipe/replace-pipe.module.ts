import { NgModule } from "@angular/core";
import { ReplacePipe } from "./pipe/replace.pipe";

@NgModule
({
    declarations:
    [
        ReplacePipe,
    ],
    exports:
    [
        ReplacePipe
    ]
})

export class ReplacePipeModule
{

}