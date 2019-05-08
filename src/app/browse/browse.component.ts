import { Component, OnInit } from "@angular/core";
import { ListPicker } from "tns-core-modules/ui/list-picker";

@Component({
    selector: "Browse",
    moduleId: module.id,
    templateUrl: "./browse.component.html"
})
export class BrowseComponent implements OnInit {
    val1: string;
    val2: string;
    result: number;

    changeOperator(e) {

        this.calculate(null);
    }

    ngOnInit() {
        this.val1 = this.val2 = "";
    }

    calculate(e) {
        console.log(e);
        console.log(this.val1);
        console.log(this.val2);

        this.result = Number(this.val1) * Number(this.val2) / 100;

        }
    }
