import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Match } from '../matches';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  matches:Match[];


  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.dataservice.getMatchDetails().subscribe(matches=>this.matches=this.matches);
  }
  }


