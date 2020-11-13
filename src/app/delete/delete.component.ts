import { Component, OnInit } from '@angular/core';
import { Match } from '../matches';
import {DataService} from '../data.service'
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  match:Match[];
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    
    this.dataservice.getMatches().subscribe(match=>this.match=match)
  }
  delete(id:number)
  {
    alert("press ok to confirm");
    this.dataservice.delete(id).subscribe(match=>this.match=match)
    alert("deleted successfully")
  }



  }

  