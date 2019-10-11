import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  itemsRef: any[];
  itemsPRef: any[];
  itemsList: Observable<any[]>;
  localUid;
  constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth, public globalService: GlobalService) {

  }

  shiftTask() {
    const itemRef = this.db.database.ref('donors/' + this.localUid + '/tasks');
    itemRef.push(this.itemsPRef).then(
      data => {
        console.log(data);
        this.globalService.getPendingtasks(this.localUid).remove();
      }
    )
  }

  //


  ngOnInit() {
    this.afAuth.auth.onAuthStateChanged(user => {
      this.localUid = user.uid;
      console.log(this.localUid)
      this.globalService.gettasks(this.localUid).forEach(
        result => {
          this.itemsRef = result;
        }
      ),
        this.globalService.getPendingtasks(this.localUid).valueChanges().forEach(
          result => {
            this.itemsPRef = result;
          }
        )
    });
  }
}
