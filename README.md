# React BXmart UI

React BXmart UI is a resposive UI.

## Features (TBD)

- 💪&nbsp; **TypeScript Integration**: Benefit from the advantages of [Typescript](https://www.typescriptlang.org/) for enhanced code reliability.

- 🎨&nbsp; **TailwindCSS Styling**: Achieve a sleek and modern design with styling powered by [TailwindCSS](https://tailwindcss.com/).

## Installation

Using [npm](https://npmjs.com/)

1. Install the package:

```
  pnpm install bxmart-ui
```

```
  yarn install bxmart-ui
```

```
  npm install bxmart-ui
```

2. Import the styles in your main JavaScript file:

```
  import "bxmart-ui/dist/style.css";
```

## Usage (TBD)

Example:

```javascript

```

## `<Button/> Props (TBD)`

Below are the available configuration options for the component:

| Name                | Type                           | Description                                                       |
| ------------------- | ------------------------------ | ----------------------------------------------------------------- |
| `type`              | `'vertical'` or `'horizontal'` | Specifies the orientation of the timeline (default is horizontal) |
| `animation`         | `boolean`                      | Enables/disables animation for the timeline (default is `true`)   |
| `activeLineStyle`   | `CSSProperties`                | Custom CSS properties for styling the active line                 |
| `passiveLineStyle`  | `CSSProperties`                | Custom CSS properties for styling the passive line                |
| `animationDuration` | `number`                       | Duration of the animation in milliseconds (default is `6000ms`)   |
| `responsiveWidth`   | `number`                       | Switch the orientation of the timeline at responsiveWidth         |

## `<TimelineItem/> Props`

Below are the available configuration options for the component:

| Name       | Type                       | Description                                                        |
| ---------- | -------------------------- | ------------------------------------------------------------------ |
| `dotColor` | `string`                   | Color of the dot in the TimelineItem                               |
| `place`    | `'normal'` or `'opposite'` | Specifies the orientation of the timeline item (default is normal) |
| `dotIcon`  | `any`                      | Custom content to be placed inside the dot                         |
| `dotStyle` | `CSSProperties`            | CSS properties to customize the style of the dot                   |
| `dotText`  | `any`                      | Custom content to be placed above or beside the dot                |

## Author ✨

💻 &nbsp; BXMart SL

## Licence

This project is licensed under the MIT License.
