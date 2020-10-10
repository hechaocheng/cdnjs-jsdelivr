import { __decorate, __param } from "tslib";
import { Inject, Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { DefaultConfig } from './angulartics2-config';
import { ANGULARTICS2_TOKEN } from './angulartics2-token';
import { RouterlessTracking, TrackNavigationEnd } from './routerless';
import * as i0 from "@angular/core";
import * as i1 from "./routerless";
import * as i2 from "./angulartics2-token";
let Angulartics2 = class Angulartics2 {
    constructor(tracker, setup) {
        this.tracker = tracker;
        this.pageTrack = new ReplaySubject(10);
        this.eventTrack = new ReplaySubject(10);
        this.exceptionTrack = new ReplaySubject(10);
        this.setAlias = new ReplaySubject(10);
        this.setUsername = new ReplaySubject(10);
        this.setUserProperties = new ReplaySubject(10);
        this.setUserPropertiesOnce = new ReplaySubject(10);
        this.setSuperProperties = new ReplaySubject(10);
        this.setSuperPropertiesOnce = new ReplaySubject(10);
        this.userTimings = new ReplaySubject(10);
        this.unsetUserProperties = new ReplaySubject(10);
        const defaultConfig = new DefaultConfig();
        this.settings = Object.assign(Object.assign({}, defaultConfig), setup.settings);
        this.settings.pageTracking = Object.assign(Object.assign({}, defaultConfig.pageTracking), setup.settings.pageTracking);
        this.tracker
            .trackLocation(this.settings)
            .subscribe((event) => this.trackUrlChange(event.url));
    }
    /** filters all events when developer mode is true */
    filterDeveloperMode() {
        return filter((value, index) => !this.settings.developerMode);
    }
    trackUrlChange(url) {
        if (this.settings.pageTracking.autoTrackVirtualPages && !this.matchesExcludedRoute(url)) {
            const clearedUrl = this.clearUrl(url);
            let path;
            if (this.settings.pageTracking.basePath.length) {
                path = this.settings.pageTracking.basePath + clearedUrl;
            }
            else {
                path = this.tracker.prepareExternalUrl(clearedUrl);
            }
            this.pageTrack.next({ path });
        }
    }
    /**
     * Use string literals or regular expressions to exclude routes
     * from automatic pageview tracking.
     *
     * @param url location
     */
    matchesExcludedRoute(url) {
        for (const excludedRoute of this.settings.pageTracking.excludedRoutes) {
            const matchesRegex = excludedRoute instanceof RegExp && excludedRoute.test(url);
            if (matchesRegex || url.indexOf(excludedRoute) !== -1) {
                return true;
            }
        }
        return false;
    }
    /**
     * Removes id's from tracked route.
     *  EX: `/project/12981/feature` becomes `/project/feature`
     *
     * @param url current page path
     */
    clearUrl(url) {
        if (this.settings.pageTracking.clearIds || this.settings.pageTracking.clearQueryParams ||
            this.settings.pageTracking.clearHash) {
            return url
                .split('/')
                .map(part => this.settings.pageTracking.clearQueryParams ? part.split('?')[0] : part)
                .map(part => this.settings.pageTracking.clearHash ? part.split('#')[0] : part)
                .filter(part => !this.settings.pageTracking.clearIds || !part.match(this.settings.pageTracking.idsRegExp))
                .join('/');
        }
        return url;
    }
};
Angulartics2.ctorParameters = () => [
    { type: RouterlessTracking },
    { type: undefined, decorators: [{ type: Inject, args: [ANGULARTICS2_TOKEN,] }] }
];
Angulartics2.ɵprov = i0.ɵɵdefineInjectable({ factory: function Angulartics2_Factory() { return new Angulartics2(i0.ɵɵinject(i1.RouterlessTracking), i0.ɵɵinject(i2.ANGULARTICS2_TOKEN)); }, token: Angulartics2, providedIn: "root" });
Angulartics2 = __decorate([
    Injectable({ providedIn: 'root' }),
    __param(1, Inject(ANGULARTICS2_TOKEN))
], Angulartics2);
export { Angulartics2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcnRpY3MyLWNvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFydGljczIvIiwic291cmNlcyI6WyJhbmd1bGFydGljczItY29yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUE0QixhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhDLE9BQU8sRUFBd0IsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFNUUsT0FBTyxFQUFxQixrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7OztBQUd0RSxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBZXZCLFlBQ1UsT0FBMkIsRUFDUCxLQUF3QjtRQUQ1QyxZQUFPLEdBQVAsT0FBTyxDQUFvQjtRQWJyQyxjQUFTLEdBQUcsSUFBSSxhQUFhLENBQXFCLEVBQUUsQ0FBQyxDQUFDO1FBQ3RELGVBQVUsR0FBRyxJQUFJLGFBQWEsQ0FBc0IsRUFBRSxDQUFDLENBQUM7UUFDeEQsbUJBQWMsR0FBRyxJQUFJLGFBQWEsQ0FBTSxFQUFFLENBQUMsQ0FBQztRQUM1QyxhQUFRLEdBQUcsSUFBSSxhQUFhLENBQVMsRUFBRSxDQUFDLENBQUM7UUFDekMsZ0JBQVcsR0FBRyxJQUFJLGFBQWEsQ0FBdUMsRUFBRSxDQUFDLENBQUM7UUFDMUUsc0JBQWlCLEdBQUcsSUFBSSxhQUFhLENBQU0sRUFBRSxDQUFDLENBQUM7UUFDL0MsMEJBQXFCLEdBQUcsSUFBSSxhQUFhLENBQU0sRUFBRSxDQUFDLENBQUM7UUFDbkQsdUJBQWtCLEdBQUcsSUFBSSxhQUFhLENBQU0sRUFBRSxDQUFDLENBQUM7UUFDaEQsMkJBQXNCLEdB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LEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztpQkFDN0UsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUN6RyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDZDtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztDQUNGLENBQUE7O1lBcEVvQixrQkFBa0I7NENBQ2xDLE1BQU0sU0FBQyxrQkFBa0I7OztBQWpCakIsWUFBWTtJQUR4QixVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFrQjlCLFdBQUEsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUE7R0FqQmxCLFlBQVksQ0FvRnhCO1NBcEZZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMlNldHRpbmdzLCBEZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi9hbmd1bGFydGljczItY29uZmlnJztcbmltcG9ydCB7IEV2ZW50VHJhY2ssIFBhZ2VUcmFjaywgVXNlclRpbWluZ3MgfSBmcm9tICcuL2FuZ3VsYXJ0aWNzMi1pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFuZ3VsYXJ0aWNzMlRva2VuLCBBTkdVTEFSVElDUzJfVE9LRU4gfSBmcm9tICcuL2FuZ3VsYXJ0aWNzMi10b2tlbic7XG5pbXBvcnQgeyBSb3V0ZXJsZXNzVHJhY2tpbmcsIFRyYWNrTmF2aWdhdGlvbkVuZCB9IGZyb20gJy4vcm91dGVybGVzcyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQW5ndWxhcnRpY3MyIHtcbiAgc2V0dGluZ3M6IEFuZ3VsYXJ0aWNzMlNldHRpbmdzO1xuXG4gIHBhZ2VUcmFjayA9IG5ldyBSZXBsYXlTdWJqZWN0PFBhcnRpYWw8UGFnZVRyYWNrPj4oMTApO1xuICBldmVudFRyYWNrID0gbmV3IFJlcGxheVN1YmplY3Q8UGFydGlhbDxFdmVudFRyYWNrPj4oMTApO1xuICBleGNlcHRpb25UcmFjayA9IG5ldyBSZXBsYXlTdWJqZWN0PGFueT4oMTApO1xuICBzZXRBbGlhcyA9IG5ldyBSZXBsYXlTdWJqZWN0PHN0cmluZz4oMTApO1xuICBzZXRVc2VybmFtZSA9IG5ldyBSZXBsYXlTdWJqZWN0PHsgdXNlcklkOiBzdHJpbmcgfCBudW1iZXIgfSB8IHN0cmluZz4oMTApO1xuICBzZXRVc2VyUHJvcGVydGllcyA9IG5ldyBSZXBsYXlTdWJqZWN0PGFueT4oMTApO1xuICBzZXRVc2VyUHJvcGVydGllc09uY2UgPSBuZXcgUmVwbGF5U3ViamVjdDxhbnk+KDEwKTtcbiAgc2V0U3VwZXJQcm9wZXJ0aWVzID0gbmV3IFJlcGxheVN1YmplY3Q8YW55PigxMCk7XG4gIHNldFN1cGVyUHJvcGVydGllc09uY2UgPSBuZXcgUmVwbGF5U3ViamVjdDxhbnk+KDEwKTtcbiAgdXNlclRpbWluZ3MgPSBuZXcgUmVwbGF5U3ViamVjdDxVc2VyVGltaW5ncz4oMTApO1xuICB1bnNldFVzZXJQcm9wZXJ0aWVzID0gbmV3IFJlcGxheVN1YmplY3Q8YW55PigxMCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0cmFja2VyOiBSb3V0ZXJsZXNzVHJhY2tpbmcsXG4gICAgQEluamVjdChBTkdVTEFSVElDUzJfVE9LRU4pIHNldHVwOiBBbmd1bGFydGljczJUb2tlbixcbiAgKSB7XG4gICAgY29uc3QgZGVmYXVsdENvbmZpZyA9IG5ldyBEZWZhdWx0Q29uZmlnKCk7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHsgLi4uZGVmYXVsdENvbmZpZywgLi4uc2V0dXAuc2V0dGluZ3MgfTtcbiAgICB0aGlzLnNldHRpbmdzLnBhZ2VUcmFja2luZyA9IHtcbiAgICAgIC4uLmRlZmF1bHRDb25maWcucGFnZVRyYWNraW5nLFxuICAgICAgLi4uc2V0dXAuc2V0dGluZ3MucGFnZVRyYWNraW5nLFxuICAgIH07XG4gICAgdGhpcy50cmFja2VyXG4gICAgICAudHJhY2tMb2NhdGlvbih0aGlzLnNldHRpbmdzKVxuICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IFRyYWNrTmF2aWdhdGlvbkVuZCkgPT5cbiAgICAgICAgdGhpcy50cmFja1VybENoYW5nZShldmVudC51cmwpLFxuICAgICAgKTtcbiAgfVxuXG4gIC8qKiBmaWx0ZXJzIGFsbCBldmVudHMgd2hlbiBkZXZlbG9wZXIgbW9kZSBpcyB0cnVlICovXG4gIGZpbHRlckRldmVsb3Blck1vZGU8VD4oKTogTW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9uPFQ+IHtcbiAgICByZXR1cm4gZmlsdGVyKCh2YWx1ZSwgaW5kZXgpID0+ICF0aGlzLnNldHRpbmdzLmRldmVsb3Blck1vZGUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHRyYWNrVXJsQ2hhbmdlKHVybDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MucGFnZVRyYWNraW5nLmF1dG9UcmFja1ZpcnR1YWxQYWdlcyAmJiAhdGhpcy5tYXRjaGVzRXhjbHVkZWRSb3V0ZSh1cmwpKSB7XG4gICAgICBjb25zdCBjbGVhcmVkVXJsID0gdGhpcy5jbGVhclVybCh1cmwpO1xuICAgICAgbGV0IHBhdGg6IHN0cmluZztcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzLnBhZ2VUcmFja2luZy5iYXNlUGF0aC5sZW5ndGgpIHtcbiAgICAgICAgcGF0aCA9IHRoaXMuc2V0dGluZ3MucGFnZVRyYWNraW5nLmJhc2VQYXRoICsgY2xlYXJlZFVybDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhdGggPSB0aGlzLnRyYWNrZXIucHJlcGFyZUV4dGVybmFsVXJsKGNsZWFyZWRVcmwpO1xuICAgICAgfVxuICAgICAgdGhpcy5wYWdlVHJhY2submV4dCh7IHBhdGggfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVzZSBzdHJpbmcgbGl0ZXJhbHMgb3IgcmVndWxhciBleHByZXNzaW9ucyB0byBleGNsdWRlIHJvdXRlc1xuICAgKiBmcm9tIGF1dG9tYXRpYyBwYWdldmlldyB0cmFja2luZy5cbiAgICpcbiAgICogQHBhcmFtIHVybCBsb2NhdGlvblxuICAgKi9cbiAgcHJvdGVjdGVkIG1hdGNoZXNFeGNsdWRlZFJvdXRlKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgZm9yIChjb25zdCBleGNsdWRlZFJvdXRlIG9mIHRoaXMuc2V0dGluZ3MucGFnZVRyYWNraW5nLmV4Y2x1ZGVkUm91dGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVzUmVnZXggPSBleGNsdWRlZFJvdXRlIGluc3RhbmNlb2YgUmVnRXhwICYmIGV4Y2x1ZGVkUm91dGUudGVzdCh1cmwpO1xuICAgICAgaWYgKG1hdGNoZXNSZWdleCB8fCB1cmwuaW5kZXhPZihleGNsdWRlZFJvdXRlIGFzIHN0cmluZykgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBpZCdzIGZyb20gdHJhY2tlZCByb3V0ZS5cbiAgICogIEVYOiBgL3Byb2plY3QvMTI5ODEvZmVhdHVyZWAgYmVjb21lcyBgL3Byb2plY3QvZmVhdHVyZWBcbiAgICpcbiAgICogQHBhcmFtIHVybCBjdXJyZW50IHBhZ2UgcGF0aFxuICAgKi9cbiAgcHJvdGVjdGVkIGNsZWFyVXJsKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5wYWdlVHJhY2tpbmcuY2xlYXJJZHMgfHwgdGhpcy5zZXR0aW5ncy5wYWdlVHJhY2tpbmcuY2xlYXJRdWVyeVBhcmFtcyB8fFxuICAgICAgdGhpcy5zZXR0aW5ncy5wYWdlVHJhY2tpbmcuY2xlYXJIYXNoKSB7XG4gICAgICByZXR1cm4gdXJsXG4gICAgICAgIC5zcGxpdCgnLycpXG4gICAgICAgIC5tYXAocGFydCA9PiB0aGlzLnNldHRpbmdzLnBhZ2VUcmFja2luZy5jbGVhclF1ZXJ5UGFyYW1zID8gcGFydC5zcGxpdCgnPycpWzBdIDogcGFydClcbiAgICAgICAgLm1hcChwYXJ0ID0+IHRoaXMuc2V0dGluZ3MucGFnZVRyYWNraW5nLmNsZWFySGFzaCA/IHBhcnQuc3BsaXQoJyMnKVswXSA6IHBhcnQpXG4gICAgICAgIC5maWx0ZXIocGFydCA9PiAhdGhpcy5zZXR0aW5ncy5wYWdlVHJhY2tpbmcuY2xlYXJJZHMgfHwgIXBhcnQubWF0Y2godGhpcy5zZXR0aW5ncy5wYWdlVHJhY2tpbmcuaWRzUmVnRXhwKSlcbiAgICAgICAgLmpvaW4oJy8nKTtcbiAgICB9XG4gICAgcmV0dXJuIHVybDtcbiAgfVxufVxuIl19