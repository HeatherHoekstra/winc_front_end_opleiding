//2a: Nissan. Klopt niet, output is undefined. Maar ik snap niet waarom.. 

/*const car = {
    brand: "Nissan",
    getBrand: function(){
      console.log(this.brand);
    }
  };
   
  const getCarBrand = car.getBrand;
   
  getCarBrand();   // output ... ??*/

//car.getBrand(); Dit werkt ook gewoon.. Waarom zo moeilijk? 

//b: Ik verwacht dat hij nu wel nissan logt, omdat de functie nu niet meer los is, maar vast zit aan het car object. 
/*const car = {
    brand: "Nissan",
    getBrand: function(){
      console.log(this.brand);
    }
  };
  const getCarBrand = car.getBrand.bind(car);
  getCarBrand();   // output: .....??*/

  //c: Weer hetzelfde probleem als bij a; de functie wordt los gehaald van het object. 
  //omdat het een losse functie is buiten een object, refereert 'this' naar het window object (of het global object)
  //klopt niet, het is gebonden aan de knop (object) ipv aan de car. 

//d: This zit in de functie getBrand, en zal dus daarnaar verwijzen denk ik. Dus dan zal de output undefined zijn. 
const car = {
    brand: "Nissan",
    getBrand: function(){
      const printBrandName = function(){
        console.log(this.brand);
      };
      return printBrandName();
    }
  };
   
  car.getBrand();

  const car = {
    brand: "Nissan",
    getBrand: function(){
      const printBrandName = function(){
        console.log(this.brand);
      }.bind(this);
      return printBrandName();
    }
  };
   
  car.getBrand();   // output: Nissan
  // nu bind je de inner function aan het car object, waar de this naar verwijst. 
  //De this in de functie verwijst daar dan dus ook naar


