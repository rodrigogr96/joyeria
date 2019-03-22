import { Component, OnInit } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

   $('.modal-active').on('click', function () {

      $('.body-popup-modal-area').fadeIn(200);

  });

  $('.modal-close').on('click', function () {
    $('.body-popup-modal-area').fadeOut();

   });



  }

}
