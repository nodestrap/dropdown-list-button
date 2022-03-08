/// <reference types="react" />
import type { Tag, Role, SemanticTag, SemanticRole } from '@nodestrap/element';
import { PopupPlacement, PopupMiddleware, PopupStrategy, OrientationName, OrientationVariant, ListStyle, ListVariant, DropdownListCloseType, DropdownListItemProps, DropdownListItem, DropdownListSeparatorItem, DropdownListComponentProps } from '@nodestrap/dropdown-list';
import { DropdownButtonProps } from '@nodestrap/dropdown-button';
export type { DropdownListItemProps, DropdownListItemProps as ItemProps };
export { DropdownListItem, DropdownListItem as Item };
export { DropdownListSeparatorItem, DropdownListSeparatorItem as SeparatorItem };
export type { DropdownListCloseType };
export interface DropdownListButtonProps<TCloseType = DropdownListCloseType> extends DropdownButtonProps<TCloseType>, DropdownListComponentProps<HTMLButtonElement, TCloseType> {
    listTag?: Tag;
    listRole?: Role;
    listSemanticTag?: SemanticTag;
    listSemanticRole?: SemanticRole;
}
export declare function DropdownListButton<TCloseType = DropdownListCloseType>(props: DropdownListButtonProps<TCloseType>): JSX.Element;
export declare namespace DropdownListButton {
    var prototype: any;
}
export { DropdownListButton as default };
export type { OrientationName, OrientationVariant };
export type { PopupPlacement, PopupMiddleware, PopupStrategy };
export type { ListStyle, ListVariant };
