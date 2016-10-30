import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app/templates/index.html'
          })
export class AppComponent {
    Header="this is the header part by export classes",
    Array=["In the aRRAY Part"],
    counter = 0;
    show = "false";
    toggleSidebar(): void {
        if (this.show == 'false') {
            this.show = 'true';
        } else {
            this.show = 'false';
        }
    }


 }
