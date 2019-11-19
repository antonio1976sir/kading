

function readFile(input) {
  let file = input.files[0];

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function() {   
    console.log(reader.result);
    var arr=reader.result.split("\n");
    console.log(arr);
      getdata(arr);
  };

  reader.onerror = function() {
    console.log(reader.error);
  };

}

function getdata(arr){
    arr.each(function(item){
     $.get('http://ppoz-service-bal-01.prod.egrn:9001/#/administration/details/'+item+'/docs',function(data){
         $.get($(data).find("div .row-data:contains('Заявление 0')").find("a").attr("href"),function(data){
             console.log(data);
           } //func zayav
           ) //get zayav
           }//get_func
          ); //get
    } //each func
        ) //each
}
