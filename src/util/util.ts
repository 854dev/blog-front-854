export const toggleDarkMode = () => {
  // prefers-color-scheme 확인
  // window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const isContainDark = document.body.classList.contains('dark');

  if (isContainDark) {
    document.body.classList.remove('dark');
  } else {
    document.body.classList.add('dark');
  }
};
