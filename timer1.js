let input = process.argv.slice(2);
if (input) {
    if (input.length >= 0) {
      for (let number of input) {
        number = parseInt(input);
        if (Number.isInteger(number)) {
          if (number >= 0) {
            setTimeout(() => {
              process.stdout.write('alarm');
              // process.stdout.write('\x07');
            }, number * 1000)
            setTimeout(() => { process.stdout.write('\n') }, number * 1000);
          } else {
            return;
          }
        }
      }
    } else {
      setTimeout(() => {
        process.stdout.write('alarm');
      }, input * 1000)
      setTimeout(() => {
        process.stdout.write('\n')
      }, input * 1000)
    }
}





// EDGE CASES

//No numbers are provided: //
// Easy.It should just not beep at all and end immediately since no beeps should get scheduled.

// An input is a negative number: 
// Ignore / skip any numbers that are negative.We can't schedule anything in the past.

// An input is not a number: //
// Ignore / skip these as well, instead of attempting to call setTimeout with a non - number.