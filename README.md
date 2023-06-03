<h1 align="center">
    TermBlock
</h1>

<p align="center">
    Small react library for displaying faux terminal commands
</p>
<br/>
<br/>
<br/>
<br/>

# What it is

A small, stateless react library that lets you render faux terminals with command inputs and outputs.

# Example usage

For the absolute basic usage, you probably only want to render a single terminal with a single command, and the text that the command outputs. For example:

```tsx
import TermBlock from "termblock";

function App() {
  return (
    <TermBlock
      commands={[
        {
          command: "npm install termblock",
          output: [
            "added 1 package, and audited 2 packages in 520ms",
            "found 0 vulnerabilities",
          ],
        },
      ]}
    />
  );
}
```

![Simple_Command](/docs/images/TermBlock_SimpleCommand.png "Simple Command")

# Themes

Themes can either be configured globally or provided as props when you render each terminal (or a combination of both!). 

## Built in themes

There are a few built in themes, and this list is expected to continue to grow.

### Nord
![NordTheme](/docs/images/themes/NordTheme.png "Nord Theme")

### One Dark Pro
![OneDarkProTheme](/docs/images/themes/OneDarkProTheme.png "One Dark Pro Theme")

### Paper Color
![PaperColorTheme](/docs/images/themes/PaperColorTheme.png "Paper Color Theme")

### Windows 10
![Windows10Theme](/docs/images/themes/Windows10Theme.png "Windows 10 Theme")

### MacOS
![MacOsTheme](/docs/images/themes/MacOsTheme.png "MacOS Theme")

## Custom theme

You can create your own theme by creating an object that implements either the `TerminalTheme` or `PartialTerminalTheme` interface. For example:

```ts
import { TerminalTheme } from "termblock";
const customTheme: TerminalTheme = {
  titleBar: {
    colors: {
      background: "#2b2a28",
      foreground: "#c4a244",
    },
    buttons: {
      colors: {
        close: "#a53731",
        max: "#585e3c",
        min: "#b4a681",
      },
    },
  },
  content: {
    colors: {
      background: "#585e3c",
      foreground: "#b4a681",
      context: "#c4a244",
      separator: "#2b2a28",
      scrollbar: "#585e3c",
    },
  },
  footer: {
    colors: {
      background: "#585e3c",
      foreground: "#b4a681",
    },
  },
},
```
![Custom_Theme](/docs/images/themes/CustomTheme.png "Custom Theme")

### Note:
If you want to apply a custom global theme, you *must* implement the `TerminalTheme` interface (see [Configure global theme](#configure-global-theme)). Otherwise, if you just want to override certain styles of the global theme, you can implement `PartialTerminalTheme` and pass that object in to the `TermBlock` component's `theme` prop (see [Theme props](#theme-props)).


## Configure global theme

To configure a theme globally, you need to call the `configureGlobal` function and pass in the theme you want. For example:

```tsx
import TermBlock, { themes } from "termblock";
themes.configureGlobal(themes.oneDarkPro);
```

Note that you only need to do this once, so probably most suitable to do this in your `App.tsx`.

## Theme props

In addition to configuring a global theme, you can also pass in a theme to the `TermBlock` component. For example:

```tsx
import TermBlock, { themes } from "termblock";

function App() {
  return <TermBlock theme={themes.paperColor} />;
}
```

Note that all properties of the theme props are optional. Any values provided will be the priority, and any props omitted will fall back on the global theme. For example, the following will simply override the default button position, and the rest of the global theme will apply:

```tsx
import TermBlock, { PartialTerminalTheme } from "termblock";

const partialCustomTheme: PartialTerminalTheme = { 
  titleBar: { 
    buttons: { 
      position: "right" 
    } 
  } 
};

function App() {
  return <TermBlock theme={{ titleBar: { buttons: { position: "right" } } }} />;
  // or 
  // return <TermBlock theme={partialCustomTheme} />;
}
```