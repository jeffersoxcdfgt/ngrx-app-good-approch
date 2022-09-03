import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { Observable } from "rxjs";
import { filter, map ,tap} from "rxjs/operators";

export const getId = (router:Router,route: ActivatedRoute): Observable<string> =>{
    return router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => rootRoute(route)),
        filter((route: ActivatedRoute) => route.outlet === 'primary'),
        map((valueId:ActivatedRoute) => valueId.snapshot.paramMap.get('id') as string),
        //tap((val)=> !!val ? val:router.navigate(['not-found']))
        filter((val)=> val !==null  )
    )
}

export const rootRoute = (route: ActivatedRoute): ActivatedRoute => {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
}