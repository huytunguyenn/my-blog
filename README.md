# Website

**My blog** is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

Visit **my blog** at: https://huytunguyenn.github.io/my-blog/

## i18n

### Start your site

```shell
npm run start -- --locale vi
```

### Translate data API

```shell
npm run write-translations -- --locale vi
```

### Translate Markdown files

#### Translate the docs

```shell
mkdir -p i18n/vi/docusaurus-plugin-content-docs/current
cp -r docs/** i18n/vi/docusaurus-plugin-content-docs/current
```

#### Translate the blog

```shell
mkdir -p i18n/vi/docusaurus-plugin-content-blog
cp -r blog/** i18n/vi/docusaurus-plugin-content-blog
```

#### Translate the pages

```shell
mkdir -p i18n/vi/docusaurus-plugin-content-pages
cp -r src/pages/**.md i18n/vi/docusaurus-plugin-content-pages
cp -r src/pages/**.mdx i18n/vi/docusaurus-plugin-content-pages
```