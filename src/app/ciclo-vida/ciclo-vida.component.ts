import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.component.html',
  styleUrls: ['./ciclo-vida.component.css']
})
export class CicloVidaComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit  {
  
  constructor() { }
  
  @Input()
  titulo = String;


  ngOnChanges(changes: SimpleChanges): void {
    console.log("On Changes");
  }
  ngOnDestroy(): void {
    console.log("On Destroy");
  }
  ngDoCheck(): void {
    console.log("Do check");
  }
  ngAfterViewInit(): void {
    console.log("On After View");
  }
  ngOnInit(): void {
    console.log("On Init");
  }

}
