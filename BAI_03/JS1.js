function kiemTraChanLe(so) { 

    if(so % 2 ==0){
        return "chẵn";
    }else{
        return "lẻ";
    }



} 
var so = prompt("hay nhap so:");
console.log(kiemTraChanLe(so));
