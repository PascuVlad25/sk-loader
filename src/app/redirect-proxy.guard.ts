import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class RedirectProxy implements CanActivate {

    constructor(private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let path = localStorage.getItem('urlPath');
        if (path) {
          localStorage.removeItem('urlPath');
          this.router.navigate([path]);
          return false;
        }
        return true;
    }    
}