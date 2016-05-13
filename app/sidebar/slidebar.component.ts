import {Component, Input} from 'angular2/core';

@Component({
  selector: 'slider',
  templateUrl: "app/sidebar/slidebar.template.html"
})

export class SlidebarComponent {
  @Input() waarde;
  @Input() active;
  menu1 = ["hoi","hoi","hoi"];
  menu2 = ["doei", "doei", "doei", "doei"]
}
