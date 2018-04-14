import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfilesService } from '../profiles.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;

  constructor(public ps: ProfilesService, public activeRoute: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(single => {
      const detail = single['id'];
      this.profile = this.ps.getSingleProfile(detail);
    })
  }


  back() {
    this.router.navigate(['profiles']);
  }

}
