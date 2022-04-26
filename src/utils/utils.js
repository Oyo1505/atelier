function getCountryPlayer(countries, code) {
  const countryPlayer = countries.filter((country) => country.code === code);
  return countryPlayer;
}
export default getCountryPlayer;
