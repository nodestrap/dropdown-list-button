/// <reference types="react" />
import { PopupPlacement, PopupMiddleware, PopupStrategy, OrientationName, OrientationVariant, ListStyle, ListVariant, DropdownListCloseType, ListItemProps, ListItem, ListSeparatorItem, DropdownListComponentProps } from '@nodestrap/dropdown-list';
import { DropdownButtonProps } from '@nodestrap/dropdown-button';
export type { ListItemProps, ListItemProps as DropdownListItemProps, ListItemProps as ItemProps };
export { ListItem, ListItem as DropdownListItem, ListItem as Item };
export { ListSeparatorItem, ListSeparatorItem as DropdownListSeparatorItem, ListSeparatorItem as SeparatorItem };
export type { DropdownListCloseType };
export interface DropdownListButtonProps<TElement extends HTMLElement = HTMLElement, TCloseType = DropdownListCloseType> extends DropdownButtonProps<TElement, TCloseType>, Omit<DropdownListComponentProps<TElement, TCloseType>, 'onClick'> {
}
export declare function DropdownListButton<TElement extends HTMLElement = HTMLElement, TCloseType = DropdownListCloseType>(props: DropdownListButtonProps<TElement, TCloseType>): JSX.Element;
export declare namespace DropdownListButton {
    var prototype: any;
}
export { DropdownListButton as default };
export type { OrientationName, OrientationVariant };
export type { PopupPlacement, PopupMiddleware, PopupStrategy };
export type { ListStyle, ListVariant };
