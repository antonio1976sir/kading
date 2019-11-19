

function readFile(input) {
    let file = input.files[0];
    
    let reader = new FileReader();
    
    reader.readAsText(file);
    
    reader.onload = function() {
        console.log(reader.result);
        var arr = reader.result.split("\n");
        console.log(arr);
        getdata(arr);
    }
    ;
    
    reader.onerror = function() {
        console.log(reader.error);
    }
    ;

}

function getdata(arr) {
    arr.forEach(function(item) {
        $.get('http://ppoz-service-bal-01.prod.egrn:9001/manager/requests/byId?id='+item, function(data) {
            
            data.files.forEach(function(item){
            if (item.dynType=="statement") {    
            $.get('http://ppoz-service-bal-01.prod.egrn:9001/filestorage/' + item.fileStoragePath + '?attachment=true', function(data) {
                console.log(data);
                        })
            }
            }) //foreach data.files
        });
        //get
    }//each func
    )
    //each
}
