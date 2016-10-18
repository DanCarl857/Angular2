import {Injectable} from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'; 

@Injectable()
export class GithubService{
    private username:string;
    private client_id = '5a11ed7bdea05ee19075';
    private client_secret = '7ee93c192f8f65dc755783b26b57e40133142028';

    constructor(private _http: Http){
        console.log("Github service ready...");
        this.username = 'DanCarl857';
    }

    getUser(){
        return this._http.get("http://api.github.com/users/" + this.username + "?client_id=" + 
            this.client_id + "&client_secret=" + this.client_secret)
            .map(res => res.json()); // returns an observable in JSON format
    }

    getRepos(){
        return this._http.get("http://api.github.com/users/" + this.username + "/repos?client_id=" + 
            this.client_id + "&client_secret=" + this.client_secret)
            .map(res => res.json()); // returns an observable in JSON format
    }
}
