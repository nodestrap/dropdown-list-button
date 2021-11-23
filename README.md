# &lt;DropdownListButton&gt;&lt;/DropdownListButton&gt;
A button combined with a list element (menu).

## Preview

```jsx
<DropdownListButton theme='primary' size='lg' gradient={true} outlined={true} buttonChildren='Show menu'>
    <ListItem>hello</ListItem>
    <ListItem>world</ListItem>
    <ListSeparatorItem />
    <ListItem theme='danger'>important</ListItem>
    <ListItem actionCtrl={true} onClick={() => console.log('tadaa!')}>click me</ListItem>
    // ...
</DropdownListButton>
```
Rendered to:
```html
<button class="c1 thPrimary szLg gradient outlined">
    Show menu
</button>
<div class="c2">
    <ul class="c3 thPrimary szLg gradient outlined">
        <li>/* ... */</li>
        <li>/* ... */</li>
        <li>/* ... */</li>
    </ul>
</div>
```

## Features
* Includes all features in [`<ButtonIcon />`](https://www.npmjs.com/package/@nodestrap/button-icon).
* Includes all features in [`<Dropdown />`](https://www.npmjs.com/package/@nodestrap/dropdown).
* Includes all features in [`<List />`](https://www.npmjs.com/package/@nodestrap/list).
* Customizable via [`@cssfn/css-config`](https://www.npmjs.com/package/@cssfn/css-config).

## Installation

Using npm:
```
npm i @nodestrap/dropdown-list-button
```

## Support Us

If you feel our lib is useful for your projects,  
please make a donation to avoid our project from extinction.

We always maintain our projects as long as we're still alive.

[[Make a donation](https://ko-fi.com/heymarco)]
