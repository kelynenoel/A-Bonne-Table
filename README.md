# À Bonne Table website

A one-page site for À Bonne Table, built to run free on GitHub Pages. No build tools, no frameworks: just HTML, CSS and a few lines of JavaScript.

## Put it online (GitHub Pages)

1. Sign in at github.com and create a new repository. Name it `abonnetable` (or anything you like). Set it to **Public**.
2. On the new repo page, click **uploading an existing file**.
3. Unzip this folder on your computer, open it, select **everything inside** (index.html, README.md, the `assets` folder, and the hidden `.nojekyll` file) and drag it into the upload box. Click **Commit changes**.
4. Go to **Settings > Pages**. Under "Build and deployment", set Source to **Deploy from a branch**, Branch to **main**, folder **/ (root)**. Click **Save**.
5. Wait a minute or two, then refresh that page. Your link shows up at the top, something like `https://yourusername.github.io/abonnetable/`.

Tip: on a Mac, press Cmd + Shift + . in Finder to see the hidden `.nojekyll` file.

## Turn on the inquiry form (one time)

The form sends inquiries to abonnetable@gmail.com through FormSubmit, a free service that works with GitHub Pages.

1. Once the site is live, fill out the form on the live site yourself as a test.
2. Check abonnetable@gmail.com (and the spam folder) for an email from FormSubmit. Click **Activate Form**.
3. Done. Every inquiry after that lands in your inbox as a neat table: name, email, phone, service, date, guests, and message. Hit reply to answer them.

After you submit, visitors land on `thanks.html`, a simple "Inquiry sent" page.

Optional: FormSubmit's activation email gives you a random code. Swapping it in for the email address in the form's `action` line in `index.html` keeps your address out of the page source and cuts down on spam.

## Use your own domain (optional)

If you buy a domain like abonnetable.com, go to **Settings > Pages > Custom domain**, type it in and save. GitHub shows you the DNS records to add at your domain provider.

## Where to edit things

Everything you'll want to change is in `index.html`. You can edit it right on GitHub: open the file, click the pencil icon, make changes, then **Commit changes**. The site updates in about a minute.

- **Your story**: look for `EDIT ME` in the Story section. The two short paragraphs there are placeholders built only from facts you've shared. Rewrite them in your own words.
- **Dish photos and names**: the "From the pot" section. Each photo is a `<figure>` with a caption.
- **Services list**: the "Services" section. If you add a service, also add it to the dropdown in the inquiry form.
- **Inquiry form**: the "Send an inquiry" section. Change the email in the `action` line if the inbox ever changes.
- **Instagram link**: search for `instagram.com/abonnetable` if the handle ever changes.

## Swapping photos or videos

Drop new files into `assets/img` or `assets/video`, then update the file name in `index.html`. Keep photos under about 1,400 px on the long side and videos short (5 to 10 seconds, no sound) so the page stays fast on phones.

## Brand colors used

Your logo is in `assets/img` (logo.png and logo.webp), and the pot from the logo is the browser tab icon.

| Name | Hex | Where |
|---|---|---|
| Laterite | #B85C2A | Ladle accent, closing section |
| Forest | #1C3528 | Story text, "Come to the table" |
| Enamel | #F2EBE0 | Light sections, text on dark |
| Charcoal | #1A1208 | Hero, "Behind the ladle", footer |
| Palm Oil | #C89B4A | Main button, event names, links |

Fonts: Young Serif (headings and wordmark) and Karla (body), both free from Google Fonts.
