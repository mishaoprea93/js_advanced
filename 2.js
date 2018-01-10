// function sum(x, y) {
//     return x + y;
// }

// z = sum(5, 3);
// console.log(z);


// function greater(x) {
//     if (x < 2) {
//         return "null"
//     } else {
//         return "yayyy"
//     }
// }

// z = greater(5);
// console.log(z);

// function human(height, senpai) {
//     var obj = {
//         height: height,
//         senpai: senpai
//     }
//     return obj
// }

// var h1 = human(7, true);
// var h2 = human(6, false);
// console.log(h1);
// console.log(h2);


// function human(height, senpai) {
//     this.height = height;
//     this.senpai = senpai;
// }

// var h1 = new human(7, true);
// console.log(h1);



// function dog(name, furcolor) {
//     this.name = name;
//     this.furcolor = furcolor;
//     this.speak = function() {
//         console.log(" bow bow....is a great rapper");
//     }
// }

// var d1 = new dog("marley", "yellow");
// console.log(d1);
// d1.speak();



// function teacher(name, stack, power_level, fav_phrase) {
//     this.name = name;
//     this.stack = stack;
//     this.power_level;
//     this.fav_phrase = fav_phrase;
//     this.speak = function() {
//         console.log(this.fav_phrase);
//     }

// }

// var t1 = new teacher('mike', 'mean', 'pro', 'hi fuckers');
// // console.log(t1);
// t1.speak();