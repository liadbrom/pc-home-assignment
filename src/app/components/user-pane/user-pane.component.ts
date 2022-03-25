import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-pane',
  templateUrl: './user-pane.component.html',
  styleUrls: ['./user-pane.component.scss']
})
export class UserPaneComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
  }

}
