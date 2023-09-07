const pathname_fix = pathname => {
  return pathname.replace(/ /g, '-').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export { pathname_fix };
