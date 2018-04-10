import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from '@firebase/auth-types';

@Injectable()
export class AuthService {

  private _user: User
  private _userData: any;
  constructor(public afAuth: AngularFireAuth) { }

  public async loginWithGoogle() {
    let user = await this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    this._user = this.afAuth.auth.currentUser
  }

  public async loginWithEmailAndPassword(email: string, pass: string){
    let user = await this.afAuth.auth.signInWithEmailAndPassword(email, pass)
    this._user = this.afAuth.auth.currentUser
  }

  public get isLogin(){
    return this.afAuth.auth.currentUser != null;
  }

  public logout() {
    this.afAuth.auth.signOut();
  }

}
