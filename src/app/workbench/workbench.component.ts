import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-workbench',
  templateUrl: './workbench.component.html',
  styleUrls: ['./workbench.component.css']
})
export class WorkbenchComponent implements OnInit {

  constructor(private elref : ElementRef) { console.log(elref); }

  ngOnInit() {
    let list: Array<object> = this.elref.nativeElement.parentElement.childNodes;
    console.log(list[1]);
    console.log(this.elref.nativeElement.parentElement.childNodes[1]);
  }

}