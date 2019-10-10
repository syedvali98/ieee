import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  itemsRef;
  itemsList: Observable<any[]>;
  localUid;

  constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth) {
    afAuth.auth.onAuthStateChanged(function (user) {
      if (user) {
        console.log('Signed In');
        this.localUid = user.uid;
        console.log(this.localUid);
      }
    });
    this.itemsList = db.list('donors/'+this.localUid+'/tasks').valueChanges();
    console.log(this.itemsList);
    /*
    this.itemsRef = db.list('items').valueChanges().subscribe(
      actions => {
        actions.forEach(action => {
          console.log(action);

        });
      });*/
  }

  getListwa(path) {
    this.itemsList = this.db.list('donors/' + path + '/tasks').valueChanges();
  }
  ngOnInit() {
  }

}
