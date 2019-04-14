import { Component, OnInit } from '@angular/core';
import { NavItem } from './navItem';
import navItemsJson from './navItems.json';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit {
  navItems: NavItem[];
  isExpanded = false;

  ngOnInit(): void {
    this.navItems = navJson;
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
