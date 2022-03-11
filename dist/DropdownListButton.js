// react:
import { default as React, } from 'react'; // base technology of our nodestrap components
// nodestrap components:
import { 
// utilities:
calculateSemanticRole, DropdownListItem, DropdownListSeparatorItem, DropdownListComponent, } from '@nodestrap/dropdown-list';
import { DropdownButton, } from '@nodestrap/dropdown-button';
export { DropdownListItem, DropdownListItem as Item };
export { DropdownListSeparatorItem, DropdownListSeparatorItem as SeparatorItem };
export function DropdownListButton(props) {
    // rest props:
    const { 
    // essentials:
    listRef, 
    // components:
    list, 
    // children:
    children, ...restDropdownProps } = props;
    const { 
    // layouts:
    size, orientation, 
    // nude,
    // colors:
    theme = 'secondary', // set default to secondary
    gradient, outlined, mild, 
    // variants:
    listStyle = 'joined', // set default to joined
    // behaviors:
    actionCtrl, 
    // <Indicator> states:
    enabled, inheritEnabled, readOnly, inheritReadOnly,
    // active,
    // inheritActive,
     } = restDropdownProps;
    // jsx:
    return (React.createElement(DropdownButton, { ...restDropdownProps, 
        // semantics:
        semanticTag: props.semanticTag ?? [null], semanticRole: props.semanticRole ?? calculateSemanticRole(props) },
        React.createElement(DropdownListComponent, { 
            // essentials:
            listRef: listRef, 
            // components:
            list: list, 
            // variants:
            // layouts:
            size: size, orientation: orientation, nude: false, 
            // colors:
            theme: theme, gradient: gradient, outlined: outlined, mild: mild, 
            // variants:
            listStyle: listStyle, 
            // behaviors:
            actionCtrl: actionCtrl, 
            // <Indicator> states:
            enabled: enabled, inheritEnabled: inheritEnabled, readOnly: readOnly, inheritReadOnly: inheritReadOnly, active: false, inheritActive: false }, children)));
}
DropdownListButton.prototype = DropdownButton.prototype; // mark as DropdownButton compatible
export { DropdownListButton as default };
