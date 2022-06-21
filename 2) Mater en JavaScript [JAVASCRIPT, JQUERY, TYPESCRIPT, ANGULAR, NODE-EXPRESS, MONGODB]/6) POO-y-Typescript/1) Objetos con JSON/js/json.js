'use strict'

let bike = {
    
    color : 'red',
    model : 'BMX',
    stoppers : 'Disco',
    maxVel : '60 KM por hora',

    setColor : function(color) {
        this.color = color;
    }
};
alert(bike.color);
bike.setColor('blue');
alert(bike.color);