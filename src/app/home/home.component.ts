import { Component, OnInit } from "@angular/core";
import { DataService, IDataItem } from "../shared/data.service";
import { ListPicker } from "tns-core-modules/ui/list-picker";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})

export class HomeComponent implements OnInit {
    val1: string;
    val2: string;
    result: number;
    operations = ["Add", "Subtract", "Multiply", "Divide", "Power of"];
    operator = 0;

    changeOperator(e) {
        let picker = <ListPicker>e.object;
        this.operator = picker.selectedIndex;
        this.calculate(null);
    }

    ngOnInit() {
        this.val1 = this.val2 = "";
    }

    calculate(e) {
        console.log(e);
        console.log(this.val1);
        console.log(this.val2);
        switch (this.operator) {
            case 0:
                this.result = Number(this.val1) + Number(this.val2);
                break;
            case 1:
                this.result = Number(this.val1) - Number(this.val2);
                break;
            case 2:
                this.result = Number(this.val1) * Number(this.val2);
                break;
            case 3:
                this.result = Number(this.val1) / Number(this.val2);
                break;
            case 4:
                this.result = Math.pow(Number(this.val1), Number(this.val2));
                break;
        }
    }
}
