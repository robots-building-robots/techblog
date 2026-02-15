# model collapse

A static blog built with [TinyJam](https://github.com/mourner/tinyjam).

## Prerequisites

- [Node.js](https://nodejs.org/) v12.17+
- Python 3 (for local server)

## Install

```bash
npm install
```

## Build

```bash
npm run build
```

This generates the site into the `public/` folder.

## Run locally

```bash
cd public
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000).

## Watch mode (auto-rebuild on changes)

In one terminal:

```bash
npm run watch
```

In another terminal:

```bash
cd public
python3 -m http.server 8000
```
