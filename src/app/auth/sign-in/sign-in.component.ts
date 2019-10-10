import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import {Router} from "@angular/router"

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  userEmail;
  userPassword;

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.userEmail,this.userPassword).then(
      success =>{
        this.router.navigate(['/dashboard']);
      }
    )
  }
  logout() {
    this.afAuth.auth.signOut();
  }
  ngOnInit() {
  }

}
