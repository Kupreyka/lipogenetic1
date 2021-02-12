var price = {"BY": "3 бел. руб.", "KZ": "1133 тенге", "KG": "1690 сом", "RU": "186 рублей", "UA":"149 рублей", "AM":"12500 драм"};
var old_price = {"BY": "70 бел. руб.", "KZ": "13000 тенге", "KG": "3400 сом", "RU": "2000 рублей", "UA":"2000 рублей", "AM":"25000 драм"};
 
function showCity(o){
    var country = o.countryCode;
    var contry_name;
    var contry_name2;
    var contry_name3;
    
    switch (country) {
              case "KZ": {
                contry_name = "Казахстана";
                contry_name2 = "Казахстан";
                contry_name3 = "Казахстане";
                break;
              }
              case "RU": {
                contry_name = "России";
                contry_name2 = "Россия";
                contry_name3 = "России";
                break;
              }

              case "BY": {
                contry_name = "Беларуси";
                contry_name2 = "Беларусь";
                contry_name3 = "Беларуси";
                break;
              }

              case "KG": {
                contry_name = "Кыргызстана";
                contry_name2 = "Кыргызстан";
                contry_name3 = "Кыргызстане";
                break;
              }

               case "AM": {
                contry_name = "Армении";
                contry_name2 = "Армения";
                contry_name3 = "Армении";
                break;
              }

               case "UA": {
                contry_name = "России";
                contry_name2 = "Россия";
                contry_name3 = "Россие";
                break;
              }
            }

            $(".contry_money").text(price[country]);          
            $(".contry_name").text(contry_name);    
            $(".contry_name2").text(contry_name2);    
            $(".contry_name2").text(contry_name2); 
            $(".contry_name3").text(contry_name3);    
    }