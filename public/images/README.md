This folder is the canonical location for static images used by the website.

How to use
- Files placed in this folder will be served at the root of your site at `/images/<filename>`.

Examples
- Simple img tag:
  <img src="/images/hero.jpg" alt="Hero image" />

- Next.js Image component:
  import Image from 'next/image'

  <Image src="/images/hero.jpg" alt="Hero" width={1200} height={600} />

Notes
- For responsive and optimized images prefer Next's `Image` component when possible.
- Keep file names lowercase and use hyphens, e.g. `product-shot-01.jpg`.
- You can commit images directly to the repo under `public/images`. If you prefer not to check large binary files into git, consider an external CDN or an assets pipeline.
