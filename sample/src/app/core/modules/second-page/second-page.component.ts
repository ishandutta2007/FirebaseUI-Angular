import { Component, OnInit, Input } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireDatabaseModule, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { FirebaseUISignInSuccess } from 'firebaseui-angular';

import { firebase } from '../firebase';
import { UserProfile } from '../../../shared/models/user-profile';
import { UserProfileService } from '../../../shared/services/user-profile.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit {
  private authUser: firebase.User | null;
  private dbUser: {};
  private allDbUsers$: Observable<any[]>;

  constructor(private afAuth: AngularFireAuth, private afDb: AngularFireDatabase, private itemService: UserProfileService) {
  }

  ngOnInit(): void {
    this.afAuth.authState.subscribe(aUser => {
      if (aUser) {
        this.authUser = aUser;
        this.itemService.getItem(this.authUser.uid).valueChanges().subscribe(dUser => {
          this.dbUser = dUser;
          this.dbUser['uid'] = this.authUser.uid;
          this.itemService.setItem(this.authUser.uid, this.dbUser);
        });
      }
    });
    this.allDbUsers$ = this.itemService.getItemsList().valueChanges();
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  successCallback(data: FirebaseUISignInSuccess) {
    console.log(data);
  }
}
