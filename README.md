# QuickToolLab PS

QuickToolLab PS is a browser-based image editor for quick edits, layers, filters, brushes, cropping, text, and common visual adjustments.

It operates directly in the browser. Users can create images, paste from the clipboard, upload from the computer, or use drag and drop. Image editing runs locally in the browser.

## Preview

Production domain:

https://ps.quicktoollab.top

## Browser Support

- Chrome
- Firefox
- Opera
- Edge
- Safari

## Deploy

This project is a static site and does not need a build step.

### Cloudflare Pages

- Project name: `quicktoollab-ps`
- Build command: `exit 0`
- Build output directory: `.`
- Custom domain: `ps.quicktoollab.top`

Deploy with Wrangler:

```bash
npx wrangler pages deploy . --project-name quicktoollab-ps --branch main
```

After the first deployment, add `ps.quicktoollab.top` in Cloudflare Pages > Custom domains.

## QuickToolLab Customization

This deployment has a separate branding layer:

- `quicktoollab-brand.css`
- `quicktoollab-brand.js`
- `images/quicktoollab-ps.svg`
- `_headers`

The core editor bundle is kept intact, while the public title, metadata, logo, favicon, loading screen, color treatment, cache behavior, and Cloudflare Pages settings are customized for `QuickToolLab PS`.

Before publishing, check the upstream project's license and keep any required open-source attribution.

## Thanks

This customized deployment is based on the open-source browser image editor ecosystem.

https://github.com/viliusle/miniPaint
