# Nilkamal Global Eggs — React + Vite + Tailwind

## Local development

1. Install Node.js LTS.
2. Open a terminal in this folder.
3. Run:

```bash
npm install
npm run dev
```

4. Open the local URL shown by Vite, normally `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Images

Put all supplied images in `public/assets/` using the filenames listed in:

`public/assets/PUT-YOUR-IMAGES-HERE.txt`

## Contact form

The site uses FormSubmit for static-hosting form delivery:

`https://formsubmit.co/nilkamalglobalegg@gmail.com`

The first submission may require one-time email activation. No database or backend is required.

## GitHub Pages

The repository already contains `.github/workflows/deploy.yml`.

For a repository URL such as:

`https://USERNAME.github.io/REPOSITORY/`

the Vite base is configured as `./`, so assets remain relative and work from the repository Pages path.

After pushing to `main`, GitHub Actions builds the React app and deploys `dist/` to Pages.
