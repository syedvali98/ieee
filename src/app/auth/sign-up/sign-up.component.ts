import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {Router} from "@angular/router"
import { GlobalService } from 'src/app/global.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  userEmail;
  userPassword;
  userAddress;
  userName;
  userMobileNumber;
  userAge;
  userWeight;
  itemsRef: any;

  constructor(public afAuth: AngularFireAuth, public db:AngularFireDatabase, public router:Router, public globalService: GlobalService) { 
  }

  submit(){
    this.afAuth.auth.createUserWithEmailAndPassword(this.userEmail,this.userPassword).then(
      success =>{
        let userUid = success.user.uid;
        this.globalService.userUid = userUid;
        const itemsRef = this.db.database.ref('donors/' + userUid);
        let data = { email: this.userEmail, address: this.userAddress, name: this.userName, phone_number: this.userMobileNumber, age:this.userAge, weight:this.userWeight, tasks: [1,2,3] };
        itemsRef.set(data).then(
          success =>{
            alert('Successfully Signed Up');
            this.afAuth.auth.signOut();
            this.router.navigate(['/signin']);
          }
        );
      }
    )

  }
  ngOnInit() {
  }

}
