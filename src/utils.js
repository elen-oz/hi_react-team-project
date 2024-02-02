export function makeShorterName(name, length = 17) {
  let nameArray = name;

  if (Array.isArray(name)) {
    nameArray = name.length > 0 ? name[0] : '';
    if (nameArray.length > length) {
      nameArray = `${nameArray.slice(0, length)}...`;
    }
  } else {
    if (name.length > length) {
      nameArray = `${name.slice(0, length)}...`;
    }
  }

  return nameArray;
}
