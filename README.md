# svelte-healthicons

[![NPM][npm]][npm-url]

> [Healthicons SVG icons](https://github.com/resolvetosavelives/healthicons) as Svelte components.

<!-- REPO_URL -->

<!-- Try it in the [Svelte REPL](). -->

---

<!-- TOC -->

## Installation

**Yarn**

```bash
yarn add -D svelte-healthicons
```

**NPM**

```bash
npm i -D svelte-healthicons
```

## Usage

### Basic

```svelte
<script>
  import {
    FilledBodyArm,
    NegativeBodyEnzyme,
    OutlineDevicesMicroscope,
  } from "svelte-healthicons";
</script>

<FilledBodyArm />
<NegativeBodyEnzyme />
<OutlineDevicesMicroscope />
```

Refer to [ICON_INDEX.md](ICON_INDEX.md) for a list of supported icons.

### Direct import

Use the direct import for faster compiling during development.

**Note:** even if using base imports, unused imports are still tree shakeable by application bundlers like Rollup or webpack.

```html
<script>
  import Arm from "svelte-healthicons/lib/Arm.svelte";
</script>
```

## Using `svelte:component`

```svelte
<script>
  import * as icons from "svelte-healthicons";
</script>

{#each Object.entries(icons) as [icon, component]}
  <div>
    <svelte:component this={component} />
    {icon}
  </div>
{/each}
```

## TypeScript

Svelte version 3.31 or greater is required to use this library with TypeScript.

## [Changelog](CHANGELOG.md)

## License

[MIT](LICENSE)

[npm]: https://img.shields.io/npm/v/svelte-healthicons.svg?color=%237d4cdb&style=for-the-badge
[npm-url]: https://npmjs.com/package/svelte-healthicons
