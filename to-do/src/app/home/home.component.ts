import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  //router navigate to go to list view
  goToListView(): void {
      this.router.navigateByUrl('/list-view');
  }

  //router navigate to go to card view
  goToCardView(): void {
      this.router.navigateByUrl('/card-view');
  }

}
