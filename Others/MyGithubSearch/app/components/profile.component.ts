import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent { 
    user:any[];
    repos:any[];

    // inject service as a dependency
    constructor(private _githubService: GithubService){

        // subscribe to the observable returned by the service
        this._githubService.getUser().subscribe(user => {
            this.user = user;
        });

        // repos...
        this._githubService.getRepos().subscribe(repos => {
            this.repos = repos;
        });
    }
}
