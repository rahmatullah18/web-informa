function slugify(str: string) {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();
  let date = new Date().getSeconds().toString();
  return str.replace(/\s+/g, "-") + "-" + date;
}

export default slugify;
