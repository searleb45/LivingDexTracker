import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let headerSpacer: HTMLElement = document.querySelector('.header-spacer') as HTMLElement;
    headerSpacer.style.height = document.querySelector('header').clientHeight + 'px';
  }

}
