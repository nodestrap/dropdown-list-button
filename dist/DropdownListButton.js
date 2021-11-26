// react:
import { default as React, } from 'react'; // base technology of our nodestrap components
import { 
// utilities:
calculateSemanticRole, DropdownListItem, DropdownListSeparatorItem, DropdownListElement, } from '@nodestrap/dropdown-list';
import { DropdownButton, } from '@nodestrap/dropdown-button';
export { DropdownListItem, DropdownListItem as Item };
export { DropdownListSeparatorItem, DropdownListSeparatorItem as SeparatorItem };
export function DropdownListButton(props) {
    // rest props:
    const { 
    // accessibilities:
    active, // from accessibilities, removed
    inheritActive, // from accessibilities, removed
    // children:
    children, // delete
    // essentials:
    style, // delete
    // semantics:
    listTag, listRole, listSemanticTag, listSemanticRole, tag, // delete, replace with: listTag
    role, // delete, replace with: listRole
    semanticTag, // delete, replace with: listSemanticTag
    semanticRole, // delete, replace with: listSemanticRole
    // identifiers:
    id, // delete
    // classes:
    mainClass, // delete
    classes, // delete
    variantClasses, // delete
    stateClasses, // delete
    ...restProps } = props;
    // jsx:
    return (React.createElement(DropdownButton, { ...props, 
        // semantics:
        dropdownSemanticTag: props.dropdownSemanticTag ?? [null], dropdownSemanticRole: props.dropdownSemanticRole ?? calculateSemanticRole(props) },
        React.createElement(DropdownListElement, { ...restProps, 
            // semantics:
            tag: listTag, role: listRole, semanticTag: listSemanticTag, semanticRole: listSemanticRole }, children)));
}
DropdownListButton.prototype = DropdownButton.prototype; // mark as DropdownButton compatible
export { DropdownListButton as default };
