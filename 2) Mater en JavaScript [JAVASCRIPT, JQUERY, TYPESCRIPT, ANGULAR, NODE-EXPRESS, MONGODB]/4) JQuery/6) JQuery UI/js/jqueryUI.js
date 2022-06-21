'use strict'

$(() => {

    let divElement = $('.classElement');
    let list = $('.classListaSeleccionable');

    // ========================== METODOS JQUERY UI ========================

    // Draggable : sirve para mover elemento en la página
    divElement.draggable();
    
    // Redimensionar
    divElement.resizable();

    // Seleccionar elementos
    //list.selectable();

    // sortable : para ordenar los elementos
    list.sortable({
        update : function(event, ui) {
            console.log('Ha cambiado la lista');
        }
    });

    // Drop : para soltar un elemento en otro
    $('#idDivMovido').draggable();
    $('#idDivArea').droppable({
        drop : function() {
            console.log(23)
        }
    });

    // Efectos
    $('#idBtnShow').click(function () { 
0       //$('.classDivBoxEfects').fadeToggle();
        //$('.classDivBoxEfects').toggle('explode'); // Explota el elemento
        //$('.classDivBoxEfects').toggle('blind'); // Hace aparecer el elemento desde arriba
        //$('.classDivBoxEfects').toggle('slide'); // Hace aparecer el elemento de derecha a izquierda
        //$('.classDivBoxEfects').toggle('drop');
        //$('.classDivBoxEfects').toggle('fold');
        //$('.classDivBoxEfects').toggle('puff');
        //$('.classDivBoxEfects').toggle('scale');
        $('.classDivBoxEfects').toggle('shake', 4000);
    });

    // Tooltip
    $('#idADatas').tooltip();
    $('#idAIdentifierYourself').tooltip();
    $('#idAFriends').tooltip();

    // Cuadros de Dialogo
    $('#idBtnLanzarPopup').click(function () { 
        $('#idDivPopup').dialog();
    });

    // Datepicker
    $('#idInputCalendario').datepicker();

    // Tabs
    $('#idDivPestanas').tabs();
});