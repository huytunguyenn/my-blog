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

Copy file markdown from `docs/` to `i18n/${lang}/docusaurus-plugin-content-${type}` and translate them.

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


## Thêm mới

Đầu tin, với mỗi file markdown, tạo file đuôi `mdx` thay vì `md`
- tạo folder chứa các file đó
- mỗi file `mdx` thêm ở đầu:

```
---
sidebar_position: x
---
```

*Với x là vị trí cho thanh sổ ra bên trái. Hoặc nếu đã đặt tên file là `x-name.mdx` thì ko cần định nghĩa x trong mỗi file nữa* (not recommended).

### Deprecated way

Sau đó, vào `sidebars.js` thêm code:

```javascript
{
    type: 'category', // do not replace
    label: 'Languages',
    link: {
      type: 'generated-index', // do not replace
      title: 'Languages Index Page',
      description: 'This is the index page of Languages',
      keywords: ['language', 'python'],
      image: '/img/banner-small.png', 
    },
    items: [
      {
        type: 'autogenerated', // do not replace
        dirName: 'learn/languages',
      },
    ],
},
```
Sau này, nếu muốn thêm sub folder trong folder languages & tự tạo mục lục thì với mỗi folder mới nhớ thêm `_category_.yml` là được.

### New way

Hiện tại để tiện lợi cho việc tạo index và hierarchy thì mọi thứ đã được code dynamic. Ở trong file `sidebars.js`:

```javascript
{
    type: 'autogenerated', 
    dirName: 'learn', // docs/learn
},
```

Nghĩa là mọi thứ bên trong folder *learn* sẽ được tạo tự động. *Learn* là 1 tab trên navigate bar trên cùng.

Khi muốn thêm mục mới, tạo folder mới trong *folder*. Với mỗi subfolder được tạo ra cần thêm file `_category_.yml`.

Sample `_category_.yml`:

```yaml
# file này đại diện cho `type: category`: là hierarchy - tạo cái trang index cho danh sách sổ ra
label: 'mySchool' # chữ bên sidebar sổ ra
position: 1
link: # tự tạo ra page mục lục hiển thị mọi direct children của category đó
  type: generated-index
  title: '@ HCMUS' # chữ ở trang chính giữa screen
  description: Things I've learned at HCMUS
  # slug: '/not-category/not-label-name', // tạo đường dẫn custom cho page mục lục, default: /category/[categoryName] -> ở đây là /docs/category/at-school
  keywords:
    - 'school'
    - 'hcmus'
  image: '/img/banner-small.png' # cover or thumbnail image that will be used when displaying the link to your post
```

File trên tương đương với việc thêm ở phía dưới vào `sidebars.js` thủ công:

```javascript
{
    type: 'category',
    label: 'my School',
    link: {
        type: 'generated-index', 
        title: '@ HCMUS',
        description: 'Things I\'ve learned at HCMUS 💕',
        // slug: '/not-category/not-label-name',
        keywords: ['school', 'hcmus'],
        image: '/img/banner-small.png'
      },
      items: [ // bên trong items có thể là 1 type category nữa -> sổ nhiều cấp
        {
          type: 'autogenerated',
          dirName: 'learn/school',
        },
      ],
},
```

### Ví dụ 

Ví dụ vừa mới học xong kiến thức về cloud. Để ghi chép lại, bắt đầu từ home directory là `docs`:

Đầu tiên, tạo folder `learn/cloud`. Sau đó, tạo `learn/cloud/aws` và `learn/cloud/gcp`.

Thêm `learn/cloud/_category_.yml`, `learn/cloud/aws/_category_.yml`, `learn/cloud/gcp/_category_.yml`.

Lần lượt thêm các file markdown `.mdx` vào folder `learn/cloud/gcp` và `learn/cloud/aws` (nhớ ở đầu file markdown thêm `--- sidebar_position: 1 ---`, 2, 3, v.v.)
