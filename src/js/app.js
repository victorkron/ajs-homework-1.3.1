// TODO: write your code here
// import sum from './basic';
// console.log('worked');
// console.log(sum([1, 2]));

export default function indication(obj) {
  let str = '';

  if (obj.health > 50) {
    str = 'healthy';
  } else if (obj.health >= 15 && obj.health <= 50) {
    str = 'wounded';
  } else if (obj.health < 15) {
    str = 'critical';
  } else {
    str = 'error';
  }

  return str;
}
