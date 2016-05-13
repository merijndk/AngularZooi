import {Component} from 'angular2/core'
import {SidebarComponent} from './sidebar/sidebar.component'


@Component({
    selector: 'my-app',
    templateUrl: 'app/main.template.html',
    directives: [SidebarComponent]
})
export class AppComponent { }
