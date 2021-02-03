
//https://learn.javascript.ru/task/random-int-min-max#
const randomIntegerInclusive = (min, max) => {
  return min >= max ? false : Math.floor(min + Math.random() * (max + 1 - min));
}

const checkStringMaxLength = (string, max) => {
  return string.length > max ? false : true;
}



