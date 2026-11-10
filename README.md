# Folio — an independent creative’s portfolio

A responsive, dependency-free HTML/CSS/JavaScript template. All included projects and experience are fictional demo content. All four project illustrations are original editable SVG assets included with the template. No third-party fonts, image downloads, analytics, or paid services are needed.

## Quick start

1. Open `content.js` in a text editor. Replace the name, headline, biography, Discord details, projects, experience, and social links.
2. Put your images in `assets/images/` and update each project’s `image` and `imageAlt`. Use approximately 1350 × 1000 pixels; WebP or JPEG works well. Images are cropped to the same proportion.
3. Choose `paper`, `sage`, or `night` with the `theme` setting. For your own palette, edit the matching variables in `theme.css`.
4. Add your PDF in `assets/` and set `resumeUrl`, or leave it empty to hide the résumé link.
5. Set any unwanted section to `false`. Empty project and social URLs automatically hide their links.
6. Set `showCustomiser: false` before publishing. Replace all demo details and update `assets/favicon.svg` for your own brand.

You can double-click `index.html` to view the site. For the theme download button and a realistic hosting preview, use a local server: from this folder run `python -m http.server 8080`, then visit http://localhost:8080. Stop with Ctrl+C. No Python? Upload to your static hosting provider to preview there.

## Preview customiser

“Make it yours” lets you preview your name, Discord contact details, introduction, and one of three palettes. These edits are saved only in this browser. Download `content.js` and replace the file in this folder to keep your changes in the actual site. Exported content hides the customiser automatically. The theme download is optional when you are using the included presets. Use Reset preview to clear saved browser changes. The full project list, headline, initials, skills, and experience remain editable in `content.js`.

## Publish on GitHub Pages

1. Create a GitHub account and a new public repository, for example `portfolio`.
2. Upload the **contents of this folder**, including index.html, css/, js/, and assets/, to the repository root. Keep folder names and filename capitalisation unchanged.
3. In the repository, open **Settings → Pages**.
4. Under Build and deployment, choose **Deploy from a branch**, choose **main** and **/(root)**, and save.
5. Wait for deployment. The Pages settings show your site address, normally `https://YOUR-USERNAME.github.io/portfolio/`.
6. To update it later, edit or upload the changed files and commit them to main.

GitHub Free supports Pages from public repositories. This means your uploaded source is public. Never include passwords, private data, API secrets, or confidential documents. GitHub Pages is static hosting and has restrictions on websites primarily facilitating commercial transactions; sell the template through your storefront. See https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits for current terms.

## Editing guide

- `index.html`: page structure, section labels, static supporting copy, contact headline, and footer tagline.
- `content.js`: personal details and repeated content; preserve valid JavaScript syntax.
- `theme.css`: palette, fonts, width, and corner radius.
- `css/styles.css`: responsive layout and component styling.
- `js/render.js`: turns content into page elements, validates links, renders filters.
- `js/interactions.js`: mobile menu, local preview settings, downloads.
- `assets/images/`: project artwork. Replace these with your own work before representing the portfolio as yours.

Use normal https:// URLs for external links and ./assets/... for files. The site renders user content as text, so HTML tags in content fields are displayed literally. Each project can have a live link, source link, both, or neither. The contact section links to your Discord profile and a community server. It shows your username, community name, and role. These are manually entered details, not live membership or availability data.

## Before selling your version

This is an editable starter, not an exclusive legal licence package. Fill in `LICENSE.txt` with your seller name and actual buyer terms before distributing it. Decide whether client work, multiple sites, redistribution, and template resale are allowed. Do not claim the fictional sample work as real client work.

Check the deployed site on a phone, test your Discord profile, invite, and external links, confirm your résumé opens, and review keyboard navigation. Social sharing images and custom domain setup are optional additions. The title and description update from your content in the browser; for search and link-preview crawlers that do not execute JavaScript, also edit the initial title and description in index.html.

## Discord portfolio cards

Each entry in content.js → projects creates a showcase card. Duplicate an entry to add more. Cards support title, category, status, description, image, imageAlt, client (community name), role, tags, liveUrl, linkLabel, discordUrl, and sourceUrl. Categories automatically become filter buttons. Empty links hide their buttons. Use a https://discord.gg/... invitation for discordUrl, a case study or demo URL for liveUrl, and your repository for sourceUrl. Leave image empty for a neutral placeholder. Screenshot previews are static illustrations, not embedded live Discord widgets. Remove private messages and personal information from your own screenshots before publishing.

## Discord contact details

In content.js, edit discordUsername, discordProfileUrl, discordServerName, discordServerUrl, discordServerRole, and discordServerDescription. Replace YOUR_USER_ID in the template profile URL and YOUR_INVITE in the server invite URL before publishing. Both template URLs are placeholders. Empty profile or server URLs hide the corresponding buttons; an empty role hides the role badge. These fields can also be previewed in Make it yours, except the longer server description, which is edited in content.js.

## Add more cards without writing code

1. Double-click `card-editor.html` in your portfolio folder.
2. Choose **Add card**, or select an existing card and choose **Duplicate this card**.
3. Fill in its title, category, description, image path, tags, and optional details. Choose a card in the left list to edit it. Remove card removes it from the draft.
4. Click **Download content.js**. Replace the content.js in your portfolio folder with this downloaded file. If the browser names it content (1).js, rename it to content.js.
5. Refresh index.html to see your changes. If hosted, upload the updated content.js and any new screenshots to your repository too.

The editor loads your existing content.js, preserving your personal details, theme, and section settings. Edits stay in the open editor until downloaded; closing it can lose the draft. Removing a card changes only the draft until you replace content.js. The editor does not upload or copy images: place screenshots in assets/images yourself and enter the matching path. Only the title is required; blank categories become Other. There is no card limit built into the template. The editor is a separate local tool and has no button or link on the public portfolio.
