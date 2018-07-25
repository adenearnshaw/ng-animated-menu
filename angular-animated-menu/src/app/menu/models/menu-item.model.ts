export interface MenuItemModel {
  title: string;
  isTopLevel: boolean;
  link: string;
  items: MenuItemModel[];
}
