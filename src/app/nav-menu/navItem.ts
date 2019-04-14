import { INavItem } from '../interfaces/iNavItem';

export class NavItem implements INavItem {
  name: string;
  link: string;
  class: string;
}
