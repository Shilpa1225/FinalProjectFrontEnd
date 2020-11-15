import { Component, OnInit } from '@angular/core';
import {Match} from '../matches';
import { DataService } from '../data.service';
@Component({
  selector: 'app-bidding',
  templateUrl: './bidding.component.html',
  styleUrls: ['./bidding.component.css']
})
export class BiddingComponent implements OnInit {
  matches:Match[];
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
  }

}
