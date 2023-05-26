function timGiaTriLonNhat(so) {   
    let max = so[0]; 
    for( let i = 0; i < so.length; i++ )
    {
        if( max < so[i]){
            max = so[i];
        }
    }
      return max; 
} 
    
var so = new Array(3,5,7,2,1,9);
console.log(timGiaTriLonNhat(so));
