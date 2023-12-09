class Comment {
    reverse(str) {
        return str.split('').reverse().join('');
    }
    ucFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    ucWords(str) {
        return str.split(' ').map((el) => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()).join(' ');
    }
    }
    
let comment = new Comment();
console.log(comment.reverse('abcde'));
console.log(comment.ucFirst('abcde'));
console.log(comment.ucWords('abcde abcde abcde'));
    