import { Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'jumbotron',
    templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent{
    branding = "Angular 2 Website";

    private jbtheading:string;
    private jbtText:string;
    private jbtBtnText:string;
    private jbtBtnUrl:string;

    constructor(){
        this.jbtHeading = "Hello World";
        this.jbtText = "This is a simple hero unit, a simple jumbotron";
        this.jbtBtnText = "Read More";
        this.jbtBtnUrl = "/about";
    }
}