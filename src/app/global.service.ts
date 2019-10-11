import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  userUid;
  itemsList: Observable<any[]>;

  constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth) {
  }

  gettasks(path) {
    return this.db.list('donors/' + path + '/tasks').valueChanges();
  } 
  getPendingtasks(path) {
    return this.db.list('donors/' + path + '/pendingtasks');
  }
  getUsers() {
    return this.db.list('donors').snapshotChanges();
  }
  getItemBloodType(path) {
    return this.db.list('donors/' + path).valueChanges();
  }
  setRequest(path, Rdata) {
    const itemsRef = this.db.database.ref('donors/' + path + '/pendingtasks');
    itemsRef.set(Rdata).then(
      data => {
        console.log(data);
      }
    )

  }

}
