import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;
  repos: any;
  username: string;
  constructor(private profileService: ProfileService) { }
  getUserProfile(user) {

    this.profileService.getProfileInformation(user).subscribe(profile => {
      
      this.profile = profile;
    });

    this.profileService.getProfileRepos(user).subscribe(repos => {
      //console.log(repos)
      this.repos = repos;
    });
  }
  ngOnInit(): void {
    this.getUserProfile('Preston-Too');
  }

}
