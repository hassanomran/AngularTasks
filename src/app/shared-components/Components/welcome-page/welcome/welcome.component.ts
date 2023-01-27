import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  username?: string;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.username = params['Username'];
    }) 
    console.log(this.username);
  }

  ngOnInit() {
  }

}
