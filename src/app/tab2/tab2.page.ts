import { Windmill } from './../WindmillInterfaces/Windmill';
import { PrototypeService } from './../prototype.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private prototypeService: PrototypeService) { }

  prototypes: Windmill[] = [];

  ngOnInit(): void {
    this.getPrototypes();
  }

  getPrototypes() {
    this.prototypeService.getPrototypes().subscribe(data => {
      this.prototypes = data as Windmill[];
    });
  }

}
