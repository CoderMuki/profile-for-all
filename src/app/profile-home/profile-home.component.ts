import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.scss']
})
export class ProfileHomeComponent implements OnInit {

  live = false; //! set this to true to remove console logs and author tags

  showEdu = false; // boolean to toggle education and work details
  offBulb = true; // boolean to toggle between themes
  showsiteInfo = false; // boolean for site information from "i" icon
  @Output() showDiv = new EventEmitter<any>(); // event emitter for scroll changes
  public myData: any; // data from data.json to be patched
  public imageData: any; // data from imageData.json to be patched

  constructor(private http: HttpClient, private metaTag: Meta) { //? declared http client to get data from asset via internal api call

    this.metaTag.addTag({ name: 'title' , content: 'Profile template, DIY Profile, Online Resume, Build your own website, Free profile template'}) // SEO optimization

    //? forkjoined API calls to get image and your data from json
    forkJoin([this.http.get('assets/data.json'), this.http.get('assets/imagedata.json')]).subscribe(res => {
      this.myData = res[0];
      this.imageData = res[1];
      if(!this.live) { //? consoles for non live to view in browser dev tools
        console.log(this.myData);
        console.log(this.imageData);
      }
    })
  }

  ngOnInit(): void {

    window.addEventListener('scroll', () => { // scroll event listener
      let isEl = document.getElementById('nameDiv');
      var rect = isEl?.getBoundingClientRect();
      if (rect) {
        let ifThere = rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
          && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
        this.showDiv.emit(!ifThere);
      }
    })
    const body = document.getElementsByTagName('body')[0]; // get theme data on reload or page load
    if (!!window.sessionStorage.getItem('theme')) {
      const theme = window.sessionStorage.getItem('theme');
      if (theme == 'light') {
        body.classList.add('light-theme');
        this.offBulb = false;
        window.sessionStorage.setItem('theme', 'light')
      }
      else if (theme == 'dark') {
        if (body.classList.contains('light-theme')) {
          body.classList.remove('light-theme');
          this.offBulb = true;
          window.sessionStorage.setItem('theme', 'dark')
        }
      }
    }
  }



  urlOpen(url: any) { // common function to open URLs in new tab
    if (!!url) {
      window.open(url, '_blank');
    }
  }

  changetheme() { // theme change function
    const body = document.getElementsByTagName('body')[0];
    if (body.classList.contains('light-theme')) {
      body.classList.remove('light-theme');
      this.offBulb = true;
      window.sessionStorage.setItem('theme', 'dark')
    } else {
      body.classList.add('light-theme');
      this.offBulb = false;
      window.sessionStorage.setItem('theme', 'light')
    }
  }

  copy(mail: any) { // common copy funtion
    let msg = navigator.clipboard.writeText(mail);
    alert(`Copied to clipboard`)
  }

  expConversion() { // function to calculate years and month of experience
    const today: any = new Date();
    const startDate: any = new Date(this.myData?.exp_start_date); //? Stupid MM-DD-YYYY format
    const diffTime: any = Math.abs(today - startDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    var years = Math.floor(diffDays / 365);
    var months = Math.floor(diffDays % 365 / 30);
    return { years, months }
  }

  expShort() { // shorter version of experience
    const exp = this.expConversion();
    return `${exp.years}.${exp.months}+`
  }
  expLong() { // longer version of experience
    const exp = this.expConversion();
    var yearsDisplay = exp.years > 0 ? exp.years + (exp.years == 1 ? " year " : " years ") : "";
    var monthsDisplay = exp.months > 0 ? exp.months + (exp.months == 1 ? " month " : " months ") : "";
    return yearsDisplay + monthsDisplay;
  }

  aboutWithExp() { // replace funtion for experience tag in data.json
    let about = this.myData?.about_me?.replace('<$exp_long$>', this.expLong());
    return about;
  }

  returnKey(obj: any) { // common function to return Object Keys
    let [objKey] = Object?.keys(obj);
    return objKey;
  }

  returnValue(object: any): [] { // common function to return Object values
    let [objVal]: any[] = Object?.values(object);
    return objVal;
  }

}
