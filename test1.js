function area(input1,input2){
    base = input1;
    height = input2;
    let area;
    if(base<0||height<0){
        area=0;
}
else if(base>250||height>250){
    area=0;
}
else{
    area=0.5*(base)*(height);
}
return area;
    
 }
