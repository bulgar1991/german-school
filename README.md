# CLG Deutsch – German School Website

Angular 21 · Tailwind CSS v4 · Swiper 11 · ngx-translate · Web3Forms · FTP Deploy

## Quick start

```bash
npm install
npm start          # dev server → http://localhost:4200
```

## Configuration

```bash
cp .env.example .env   # fill FTP creds
```

Set your Web3Forms key in `src/environments/environment.ts`:
```ts
web3formsKey: 'YOUR_KEY'   // free at https://web3forms.com
```

## Build & Deploy

```bash
npm run build:prod    # outputs → dist/german-school/browser/
npm run deploy:ftp    # uploads dist/ to FTP
npm run build:deploy  # both in one step
```

## i18n

Files in `public/i18n/` (copied to dist root at build):

| File      | Language   |
|-----------|------------|
| ro.json   | Romanian ✅ default |
| de.json   | German     |
| en.json   | English    |
| ru.json   | Russian    |

## Structure

```
src/app/
├── core/services/language.service.ts   # lang switching + persistence
├── features/home/sections/             # all page sections
└── shared/components/                  # Navbar · Footer · LangSwitcher
public/i18n/                            # translation files
```
