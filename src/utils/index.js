const pathname_fix = pathname => {
  return pathname.replace(/ /g, '-').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const caps_first_letter = word => word[0].toUpperCase() + word.substr(1);

const randomNum = max => Math.floor(Math.random() * max);

export { pathname_fix, caps_first_letter, randomNum };
