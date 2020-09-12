let globe = () => {
  let firstInput = function(stringy) {
    let array = [...stringy]
    let regex = /[0-9]/;
    let reop = /[*/+-]/;
    let holder = [];
    let filter = array.filter(function(x){
    if (regex.test(x) === true || reop.test(x)=== true) {
      return true
    } else null
  })
    filter.forEach(function(x){
    if (regex.test(x)===true) {
      holder.push(parseFloat(x));
    } else {holder.push(x)}
  })
  return holder;
  }
  //let arr = firstInput('85*all[]//////34++++++++zzzy^^21');
  //let merged = arr.join('').split(/(\d+)/).filter(Boolean).map(x => +x || x);
  function process(a) {
   for (let i = 0; i < a.length; i++) {
     if (typeof a[i] === 'string' && a[i].length > 1) {
       a[i] = a[i].charAt(0);
     }
   }
   return a
  }
  //process()
  function parse(str) {
      var signs = ["*", '/', '-', "+"];             // signs in the order in which they should be evaluated
      var funcs = [multiply, divide, subtract, add];                     // the functions associated with the signs
      var tokens = str.split(/\b/);          // split the string into "tokens" (numbers or signs)
      for (var round = 0; round < signs.length; round++) {              // do this for every sign
          //document.write("tokens at this point: " + tokens.join(" ") + "<BR>");
          for (var place = 0; place < tokens.length; place++) {        // do this for every token
              if (tokens[place] == signs[round]) {                             // a sign is found
                  var a = parseInt(tokens[place - 1]);        // convert previous token to number
                  var b = parseInt(tokens[place + 1]);            // convert next token to number
                  var result = funcs[round](a, b);               // call the appropriate function
                  //document.write("calculating: " + a + signs[round] + b + "=" + result + "<BR>");
                  tokens[place - 1] = result.toString();          // store the result as a string
                  tokens.splice(place--, 2);      // delete obsolete tokens and back up one place
              }
          }
      }
      return tokens[0];                      // at the end tokens[] has only one item: the result
  
      function multiply(x, y) {                       // the functions which actually do the math
          return x * y;
      }
  
      function add(x, y) {                            // the functions which actually do the math
          return x + y;
      }
  
      function divide(x, y) {
          return x / y;
      }
  
      function subtract(x, y) {
          return x - y;
      }
  }
  
  //var str = merged.join('');
  //document.write("result: " + str + " = " + parse(str));
  //console.log(parse(str))
  
  const user = document.getElementById('large').value;
  const use = document.getElementById('large');
  
  let everycall = () => {
    let arr = firstInput(user)
    console.log(arr)
    let merged = arr.join('').split(/(\d+)/).filter(Boolean).map(x => +x || x);
    console.log(merged)
    merged = process(merged)
    console.log(process(merged))
    let str = merged.join('');
    console.log(str)
    use.value = parse(str)
  }
  everycall()
  }
  