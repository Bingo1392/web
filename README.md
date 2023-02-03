# Web - Jan Žitník's personal site

This is a personal site project made for self-presenting purposes. I used technologies as [Next.js](https://nextjs.org/), [Mantine](https://mantine.dev/) and much more.

## License

The project is under MIT license. You can grab it and use any part of it for your personal or commercial need exept some pictures. You can't use these pictures until you get written permission from Jan Žitník (owner of [this repository](https://github.com/Bingo1392/web)) himself.

List of files you can't use without written permission:
- favicon.ico
- logo.svg
- profile.png
- rr-people.jpg

Same rule apply for Word templates but if you edit them and delete the picture of me (same picture as profile.png), you can use it freely. List of concerning files:

- cv.docx
- cv_print.docx

## Getting Started

First, install node_modules:
```bash
yarn
```

and run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the pages. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Config file

You can edit `data/config.yaml` to change data shown on [http://localhost:3000/cv](http://localhost:3000/cv) or in downloadable `.docx` and `.pdf` files.

Files are generated during the build or when dev server is restarted. Site is generated during the build or live when the dev server is running.
