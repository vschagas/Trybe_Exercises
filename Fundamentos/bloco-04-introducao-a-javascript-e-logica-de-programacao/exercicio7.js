let a = 110

if ( a >= 90 && a <= 100){
    console.log('nota A');
}
if ( a >= 80 && a < 90){
    console.log('nota B');
}
if ( a >= 70 && a < 80){
    console.log('Nota C');
}
if ( a >= 60 && a < 70){
    console.log('Nota D');
}
if  ( a >= 50 && a < 60){
    console.log('Nota E');
}
if ( a < 50 && a  >= 0){
    console.log('Nota F');
}
else if ( a > 100 || a < 0) {
    console.log('Erro');
}