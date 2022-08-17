export const availableContact = (contscts, contact) => {
  const { name } = contact;
  const nameNormalize = name.toLowerCase();
  const findName = contscts.filter(
    el => nameNormalize === el.name.toLowerCase()
  );

  return findName.length === 0 ? null : name;
};
