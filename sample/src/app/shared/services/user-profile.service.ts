import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserProfile } from '../models/user-profile';

@Injectable()
export class UserProfileService {
  items: AngularFireList<UserProfile> = null;
  uid: string;
  constructor(private afDb: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user) this.uid = user.uid
    })
  }

  getItemsList(): AngularFireList<UserProfile> {
    this.items = this.afDb.list(`items/`);
    return this.items
  }

  getItem(uid): AngularFireObject<UserProfile> {
    if (!this.uid) return;
    return this.afDb.object(`items/${uid}`);
  }

  setItem(uid, obj): void {
    if (!this.uid) return;
    this.afDb.database.ref(`items/${uid}`).update(obj, () => {
      console.log();
    });
  }

  createItem(item: UserProfile) {
    this.items.push(item)
  }
}