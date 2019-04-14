import { InavItem } from '../interfaces/iNavItem';

export class NavItem implements InavItem {
  name: string;
  link: string;
  class: string[];
}
