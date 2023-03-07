export const toggleDarkMode = () => {
  const isContainDark = document.body.classList.contains('dark');

  if (isContainDark) {
    document.body.classList.remove('dark');
  } else {
    document.body.classList.add('dark');
  }
};
