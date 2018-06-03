import {Component, Inject, OnInit} from '@angular/core';
import { injT } from './toastr.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(@Inject(injT) private a: any ) {
    }

    ngOnInit() {
        this.a.success('Have fun storming the castle!', 'Miracle Max Says');
    }
}




