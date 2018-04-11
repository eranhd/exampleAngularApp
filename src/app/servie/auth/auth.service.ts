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
    // this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(user => {
    //   this._user = this.afAuth.auth.currentUser
    // }).catch(err => {
    //   throw new Error("Auth error");
    // })
    console.log(this._user)

  }

  public async loginWithEmailAndPassword(email: string, pass: string) {
    let user = await this.afAuth.auth.signInWithEmailAndPassword(email, pass)
    this._user = this.afAuth.auth.currentUser
  }

  public async signupWithEmailAndPass(email: string, pass: string) {
    await this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
  }



  public get isLogin() {
    return this.afAuth.auth.currentUser != null;
  }

  public logout() {
    this.afAuth.auth.signOut();
  }

}
