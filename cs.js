var a = 1; 
function fn(){
    if (a < 5 ) {
        console.log(a)
        a++;
        fn(a);
    }
}
fn();