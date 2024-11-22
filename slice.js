 const address = 'andorkilla';
 const part = address.slice(2, 5);
//  console.log(part);

 const sentence = 'I am a good and hardworking person.';
//  console.log(sentence.split(' '));
// console.log(sentence.split('a'));

const friendsStr = 'Tajuddin, Riaz, sagor, santo';
const friends = friendsStr.split(',');
console.log(friends);

const realFriend = ['Tajuddin', 'Riaz', 'sagor', 'santo'];
console.log(realFriend.join());
console.log(realFriend.join('|'));