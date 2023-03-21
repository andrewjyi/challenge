const getMuricanDateFormat = (dateString) => {
  return new Date(dateString).toLocaleDateString();
};

export { getMuricanDateFormat };
