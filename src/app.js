export default function sortArrayHero(arr) {
  return arr.sort((x, y) => y.health - x.health);
}
