import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Match} from '../matches';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
         matches:Match[];
     
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
   
  }

}
