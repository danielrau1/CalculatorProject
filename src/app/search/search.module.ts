import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SearchRoutingModule } from "./search-routing.module";
import { SearchComponent } from "./search.component";

import { FormsModule } from "@angular/forms";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SearchRoutingModule,
        FormsModule,
        NativeScriptFormsModule
    ],
    declarations: [
        SearchComponent

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SearchModule { }
