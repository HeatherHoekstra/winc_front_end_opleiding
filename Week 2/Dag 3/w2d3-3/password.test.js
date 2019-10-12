let passwordVerifier = require("./password.js");


test("password is > 8", function() {
    let password = "password"
    let expected = "password is te kort"
  
    let output = passwordVerifier(password);
    expect(output).toBe(expected);
  });
    
  test("not be null", function() {
    var password = null;
    var expected = "password kan niet leeg zijn";
  
    var output = passwordVerifier(password);
    expect(output).toBe(expected);
  });

  test("have >= 1 uppercase", function() {
    var password = "kdfhwnlsno";
    var expected = "password moet minstens één hoofdletter hebben";
  
    var output = passwordVerifier(password);
    expect(output).toBe(expected);
  });

  test("have >=1 lowercase", function() {
    var password = "IDKWOVLAHSD";
    var expected = "password moet minstens één kleine letter hebben";
  
    var output = passwordVerifier(password);
    expect(output).toBe(expected);
  });

  test("minstens één getal", function() {
    var password = "KLFivdeho";
    var expected = "password moet minstens één getal bevatten";
  
    var output = passwordVerifier(password);
    expect(output).toBe(expected);
  });

  test("aan genoeg eisen voldoen", function() {
    var password = kdk;
    var expected = 2;
  
    var output = numberOfValidations(password);
    expect(output).toBe(expected);
  });
 
  