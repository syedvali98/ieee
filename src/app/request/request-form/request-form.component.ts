import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/global.service';



@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {

  userLocation;
  users: any[];
  sample
  Pname
  ubtype
  paddress
  Pnumber
  pincode
  request
  flag = false;

  constructor(public globalService: GlobalService) { }

  ngOnInit() {
  }

  
  onSubmit() {

    this.request = this.globalService.getUsers().subscribe(
      success => {
        success.forEach(data => {
          console.log(data);
          this.sample = data.payload.val();
         // console.log(this.sample)
          if((this.sample.bloodType == 'AB+')&&(this.pincode == this.sample.pincode)){
            let pdata = [{
              RbType:this.ubtype,
              Pname: this.Pname,
              status: true,
              pnumber: this.Pnumber,
              pincode: this.pincode
            }]
            if(this.flag == false){
            this.globalService.setRequest(data.key,pdata);
            this.flag = true;
          }
          }
        })
      })
  }

}

