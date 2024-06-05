# [My website](https://jinrup.vercel.app/)

## 🔧 Stack
- **Framework**: [Next](https://nextjs.org/)
- **Styling**: [Tailwindcss](https://tailwindcss.com/)
- **Animation**: [Framer motion](https://www.framer.com/motion/)
- **internationalization**: [next-intl](https://next-intl-docs.vercel.app)
- **Database**: [Neon](https://neon.tech/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Deployment**: [Vercel](https://vercel.com/)
- **Content Management**: [Velite](https://velite.js.org/)

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
    ├── providers/
    ├── config/
    ├── hooks/
    ├── lib/
    ├── styles/
    ├── types/
    ├── utils/
    ├── i18n.ts
    └── middleware.ts
```
- `content/*`: MDX blog posts, projects and the content for the `about` page.
- `messages/*`: Data for multi-language support
- `prisma/*`: Database Model Definition
- `public/*`: Static resource, like image
- `src/app/*`: Every page and api route in the website. Uses the **App Router** from **Next.js 14**
- `src/components/*`: All components I use in the website. Note that the components in the **ui** folder will be smaller components, such as link, button, dropdown etc.
- `src/providers/*`: All providers I use in the website
- `src/config/*`: Some basic settings or static data
- `src/hooks/*`: Some custom hooks for website
- `src/lib/*`: a collection of helpful utilities or code for third-party services
- `src/styles/*`: Global Styles with Tailwindcss
- `src/types/*`: Some Global Types definitions
- `src/utils/*`: Some utilities functions , but less complex than `lib/`

## 👋 Getting Start
```bash
git clone https://github.com/tommm2/jinrup.dev.git

cd jinrup.dev
pnpm install
pnpm run dev
```

- Create `.env` file similar to `.env.example`.
- Change `config/site.ts`, `config/giscus.ts`, `app/sitemap.ts` to you own and Remove `content/*`.

## 📝 TODO
- [x] Add Not Found Page
- [ ] Make 3D model(use three.js) in Home Page
- [x] Make brand logo
- [ ] Make analytics
- [ ] Import playwright to test
