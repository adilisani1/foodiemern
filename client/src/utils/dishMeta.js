const PERSONS_BY_CATEGORY = {
  burger: 1,
  fries: 1,
  drinks: 1,
  desert: 1,
  noodle: 1,
  pizza: 2,
};

export const getDishPersons = (category = '') =>
  PERSONS_BY_CATEGORY[String(category).toLowerCase()] ?? 1;

export const getDishType = (title = '', category = '') => {
  const name = String(title).toLowerCase();
  const cat = String(category).toLowerCase();
  if (name.includes('veggie') || name.includes('veg ') || cat === 'drinks') {
    return 'Veg';
  }
  return 'Non Veg';
};

export const getDishCalories = (category = '') => {
  const cat = String(category).toLowerCase();
  if (cat === 'burger') return 520;
  if (cat === 'pizza') return 780;
  if (cat === 'noodle') return 610;
  if (cat === 'fries') return 340;
  if (cat === 'desert') return 420;
  if (cat === 'drinks') return 90;
  return 320;
};
