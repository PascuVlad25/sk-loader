import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class RedirectProxy implements CanActivate {

    constructor(private router: Router, private route: ActivatedRoute){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let path = localStorage.getItem('urlPath');
        if (path && path === 'docs') {
          console.log('route', this.route);
          localStorage.removeItem('urlPath');
          this.router.navigate([`/${path}`], {relativeTo: this.route});
          return false;
        }
        return true;
    }    
}