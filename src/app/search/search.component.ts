import { Component, OnInit } from "@angular/core";

@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {
    val1: string;

    result: number;

    changeOperator(e) {

        this.calculate(null);
    }

    ngOnInit() {
        this.val1 =  "";
    }

    calculate(e) {
        console.log(e);
        console.log(this.val1);

        this.result = (Number(this.val1) * Number(this.val1) + Number(this.val1) + 2) / 2;

    }
}
