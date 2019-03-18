import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-joyeria',
  templateUrl: './joyeria.component.html',
  styleUrls: ['./joyeria.component.css']
})
export class JoyeriaComponent implements OnInit {

  constructor(
    private spinner: NgxSpinnerService
  ) {

   }

  ngOnInit() {

    this.spinner.show()

   setTimeout(() => {

    this.spinner.hide();

   }, 5000);

  }

}
