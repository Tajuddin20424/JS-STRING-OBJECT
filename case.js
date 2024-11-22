const school = 'RAJ UK Uttara Model School';

console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());

// upper case: ABCD EFG
// lower case: abcd efg

const subject = 'Chemistry';
const book = 'chemIsTry';

if(subject.toLowerCase() == book.toLowerCase()){
    console.log('I am reading book aibar porikhai fatai felmu');
}
else{
    console.log('Hudai hudai pristra ultai ar vat khawer jonno');
}


const drink = ' water';
const liquid = 'water ';

if(drink.trim() === liquid.trim()){
    console.log('panir opor nam life');
}
else{
    console.log('somudrer pani ache khaite pari na');
}

