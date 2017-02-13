/**
 * Created by ant on 02/02/17.
 */

function getPos(e){
    x=e.clientX;
    y=e.clientY;
    console.log("mousePosition: "+ x + ";" + y );
}

function onMouseMove(event) {
    console.log("onMouseMove");
    //getPos(event);
}