import {Component} from 'angular2/core';
import {SidebarService} from './sidebar.service';
import {SlidebarComponent} from './slidebar.component'

// import {SlideDirective} from './sidebar.directives'

@Component({
  selector: 'sidebar',
  templateUrl: 'app/sidebar/sidebar.template.html',
  providers: [SidebarService],
  directives: [SlidebarComponent]
})

export class SidebarComponent {
  menuArray;
  waarde = "1";
  active = true;
  
  isActive(waarde){
    this.waarde = waarde;
    this.active = !this.active;
    
  }
 
  constructor( sidebarService : SidebarService){
    this.menuArray = sidebarService.renderToolsMenu();
  }


}
