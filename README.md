# Profile Details React App

Screenshot එකේ mobile **Profile Details App** එක reference කරගෙන හදපු static, responsive React + Vite UI project එකකි.

## VS Code එකෙන් run කරන විදිහ

1. `profile-details-react` folder එක VS Code එකෙන් open කරන්න.
2. VS Code terminal එක open කරන්න (`Ctrl + ``).
3. පහත commands run කරන්න:

```bash
npm install
npm run dev
```

4. Terminal එකේ පෙන්වන URL එක browser එකෙන් open කරන්න (සාමාන්‍යයෙන් `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

Build කළ files `dist` folder එකට ලැබේ.

## UI එකේ අඩංගු දේ

- Mobile සහ desktop දෙකටම responsive UI
- Profile avatar සහ verified mark
- Name, email සහ points display කිරීම
- Screenshot එකේ වගේ black app bar සහ floating `+` button
- `+` button එක click කරන සෑම වාරයකම points එකකින් වැඩි වීම
- Form හෝ backend එකක් නොමැති front-end implementation එකක්

## Main files

- `src/App.jsx` — React UI components සහ profile details
- `src/styles.css` — complete responsive styling
- `src/main.jsx` — React entry point
