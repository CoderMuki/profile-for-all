import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.scss']
})
export class ProfileHomeComponent implements OnInit {

  showEdu = false;
  offBulb = true;
  showsiteInfo = false;
  @Output() showDiv = new EventEmitter<any>();
  public myData: any;
  public imageData: any;

  constructor(private http: HttpClient) {
    forkJoin([this.http.get('assets/data.json'), this.http.get('assets/imagedata.json')]).subscribe(res => {
      this.myData = res[0];
      this.imageData = res[1];
      console.log(this.myData) //! comment when going to production 
      console.log(this.imageData) //! comment when going to production
    })
  }

  ngOnInit(): void {

    window.addEventListener('scroll', () => {
      let isEl = document.getElementById('nameDiv');
      var rect = isEl?.getBoundingClientRect();
      if (rect) {
        let ifThere = rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
          && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
        this.showDiv.emit(!ifThere);
      }
    })
    const body = document.getElementsByTagName('body')[0];
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



  urlOpen(url: any) {
    if (!!url) {
      window.open(url, '_blank');
    }
  }

  changetheme() {
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

  copy(mail: any) {
    let msg = navigator.clipboard.writeText(mail);
    alert(`Copied to clipboard`)
  }

  expConversion() {
    const today: any = new Date();
    const startDate: any = new Date(this.myData?.exp_start_date); //? Stupid MM-DD-YYYY format
    const diffTime: any = Math.abs(today - startDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    var years = Math.floor(diffDays / 365);
    var months = Math.floor(diffDays % 365 / 30);
    return { years, months }
  }

  expShort() {
    const exp = this.expConversion();
    return `${exp.years}.${exp.months}+`
  }
  expLong() {
    const exp = this.expConversion();
    var yearsDisplay = exp.years > 0 ? exp.years + (exp.years == 1 ? " year " : " years ") : "";
    var monthsDisplay = exp.months > 0 ? exp.months + (exp.months == 1 ? " month " : " months ") : "";
    return yearsDisplay + monthsDisplay;
  }

  aboutWithExp() {
    let about = this.myData?.about_me?.replace('<$exp_long$>', this.expLong());
    return about;
  }

  returnKey(obj: any) {
    let [objKey] = Object?.keys(obj);
    return objKey;
  }

  returnValue(object: any): [] {
    let [objVal]: any[] = Object?.values(object);
    return objVal;
  }

}
