import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from 'angular-web-storage';
<<<<<<< HEAD
import {ActivatedRoute} from '@angular/router';
=======
import {Router,ActivatedRoute} from '@angular/router';
>>>>>>> second commit
declare const $: any;
declare const Morris: any;
declare const slimscroll: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
<<<<<<< HEAD
=======

>>>>>>> second commit
export class DashboardComponent implements OnInit {

  date = new Date();
  parametres :any;
  constructor(private route: ActivatedRoute,
<<<<<<< HEAD
              public local: LocalStorageService) {
=======
              public local: LocalStorageService,
              private root :Router) {
>>>>>>> second commit
    this.parametres = this.local.get("param");
    console.log(this.parametres);
  }


  ngOnInit() {

  }

<<<<<<< HEAD
=======
  redirect(path){
    this.local.set("mode",'consult');
    this.root.navigate([path]);
  }
>>>>>>> second commit

}
