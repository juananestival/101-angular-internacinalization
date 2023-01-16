import { APP_BASE_HREF, getLocaleId } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(@Inject(LOCALE_ID) private localeId: string) {
    console.log(this.localeId);
  }

  public selectedLocale:string=this.localeId;
  
  public locales:any=[
    { name:"French(France)",code:"fr-FR"},
    { name:"English(US)",code:"en-US"},
    { name:"English(Canada)",code:"en-CA"},
    { name:"sp",code:"es-ES"}

  ]

  ngOnInit() {
  }

  changePath(code:string){
    location.replace(`/${code}/`);
  }

}