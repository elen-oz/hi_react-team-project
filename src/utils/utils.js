export function makeShorterName(name, length = 29) {
  let nameArray = '';

  if (Array.isArray(name) && name.length > 0) {
    nameArray = name[0];
  } else if (name && name.length) {
    nameArray = name;
  }

  if (nameArray.length > length) {
    nameArray = `${nameArray.slice(0, length)}...`;
  }

  return nameArray;
}
