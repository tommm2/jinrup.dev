# [My website](https://jinrup.vercel.app/)

## 🔧 Stack
- **Framework**: [Next](https://nextjs.org/)
- **Styling**: [Tailwindcss](https://tailwindcss.com/)
- **Animation**: [Framer motion](https://www.framer.com/motion/)
- **internationalization**: [next-intl](https://next-intl-docs.vercel.app)
- **Database**: [PlanetScale](https://planetscale.com/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Deployment**: [Vercel](https://vercel.com/)
- **Content Management**: [Contentlayer](https://www.contentlayer.dev/)

## 📁 Project Structure
```
$PROJECT_ROOT
├── content/
├── messages/
├── prisma/
├── public/
└── src/
    ├── app/
    ├── components/
    ├── config/
    ├── hooks/
    ├── lib/
    ├── styles/
    ├── types/
    ├── utils/
    ├── i18n.ts # for next-intl
    └── middleware.ts # for next-intl
```
- `content/*`: MDX blog posts, projects and the content for the `about` page. 📢 Note the folder structure, which is related to how slugs are handled in contentlayer.config.ts
- `messages/*`: Data for multi-language support
- `prisma/*`: Database Model Definition
- `public/*`: Static resource, like image
- `src/app/*`: Every page and api route in the website. Uses the **App Router** from **Next.js 14**
- `src/components/*`: All components I use in the website
- `src/hooks/*`: Some custom hooks for website
- `src/lib/*`: a collection of helpful utilities or code for third-party services
- `src/styles/*`: Global Styles with Tailwindcss
- `src/types/*`: Some Global Types definitions
- `src/utils/*`: Some utilities functions , but less complex than `lib/`

## 👋 Getting Start

This application requires Node.js v19.1+.

```bash
git clone https://github.com/tommm2/jinrup.dev.git

cd jinrup.dev
npm install
node setup.mjs # Initialise the project
npm run dev
```

- Create `.env` file similar to `.env.example`.
- Change `config/site.ts`, `config/giscus.ts`, `app/sitemap.ts` to you own.

## 📝 TODO
- [ ] Add Not Found Page
- [ ] Add Table of content components for articles
- [ ] Add image blur placeholder
- [ ] Make 3D model(use three.js) in Home Page
- [ ] Make brand logo
- [ ] Make analytics
- [ ] Import playwright to test
