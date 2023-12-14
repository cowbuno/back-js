function abbreviateName(name) {
  const words = name.split(' ');
  const initials = words.map((word) => word[0].toUpperCase()).join('');
  return initials;
}

input = 'George Raymond Richard Martin'
console.log(abbreviateName(input))