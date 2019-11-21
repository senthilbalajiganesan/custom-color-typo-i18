This app is to learn how to build apps with dynamic of following things:

1. Colors (#colors)
2. Fonts
3. FontSizes
4. Language using i18Next (#languages)

## Colors

- primary (screen bg)
- secondary (card bg)
- button
- Text

## Steps to Create Dynamic colors

1. `npm i node-sass css-vars`
2. create `App.scss` and configure all variables
3. create `theme.scss` and put all default values for all color vars
4. create `themeOptios.ts` and have multiple themes having a name
5. use variable names all over the design like `var(--variable-name)`

## Languages

- English
- Tamil

## Steps to implement internationaliztion

1. `npm i i18next react-i18next`
2. create and configure i18next.js (index.js in ./src/i18)
3. initialize in `App.tsx`
4. use `t` from `useTranslation` hook from i18next
5. change language on fly using `useTranslation` hook
