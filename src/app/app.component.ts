import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "profile-for-all",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Profile For All';
  mobHeader = (window.innerWidth < 600) ? true : false;
  showMenu = false;
  checkDiv(event: any) {
    this.mobHeader = (window.innerWidth < 600) ? true : false;
  }

  scrollView(element: any) {
    let el = document.getElementById(`${element}`);
    if (el) {
      el.scrollIntoView(
        {
          behavior: "smooth",
          block: "start",
          inline: "start"
        })
      this.showMenu = !this.showMenu;
    }
  }
}
