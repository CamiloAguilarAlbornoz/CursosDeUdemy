'use strict'

$(() => {

    // Slider de imagenes
    $('.classBxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true
    });

    // listado de Post
    let postsList = [
        {
            titlePost: 'Prueba de Titulo 1',
            datePost: `Publicado el día ${moment().date()} de ${moment().format("MMMM")} del año ${moment().format("YYYY")}`,
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id felis nisi. Mauris et erat vel
            tortor porta auctor in a turpis. Quisque fringilla velit et luctus ultricies. Ut eleifend
            pellentesque ullamcorper. In sed quam porttitor, fermentum tortor malesuada, pharetra ligula.
            Phasellus dictum tortor ligula, at ornare dui gravida eget. Sed dolor nibh, imperdiet quis neque
            eget, vehicula posuere sem. Morbi quis leo efficitur, sollicitudin risus id, vulputate dolor.
            Suspendisse efficitur, mi in gravida volutpat, lacus velit posuere eros, sed suscipit lectus
            odio a tortor. Quisque laoreet metus vel nisi congue porttitor id ac augue. Fusce at dignissim
            risus. Pellentesque ullamcorper tempor risus, sed imperdiet mauris vestibulum ullamcorper.
            Maecenas a blandit lorem. In nulla mi, suscipit id semper sit amet, faucibus ac nisl.`
        },
        {
            titlePost: 'Prueba de Titulo 2',
            datePost: `Publicado el día ${moment().date()} de ${moment().format("MMMM")} del año ${moment().format("YYYY")}`,
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id felis nisi. Mauris et erat vel
            tortor porta auctor in a turpis. Quisque fringilla velit et luctus ultricies. Ut eleifend
            pellentesque ullamcorper. In sed quam porttitor, fermentum tortor malesuada, pharetra ligula.
            Phasellus dictum tortor ligula, at ornare dui gravida eget. Sed dolor nibh, imperdiet quis neque
            eget, vehicula posuere sem. Morbi quis leo efficitur, sollicitudin risus id, vulputate dolor.
            Suspendisse efficitur, mi in gravida volutpat, lacus velit posuere eros, sed suscipit lectus
            odio a tortor. Quisque laoreet metus vel nisi congue porttitor id ac augue. Fusce at dignissim
            risus. Pellentesque ullamcorper tempor risus, sed imperdiet mauris vestibulum ullamcorper.
            Maecenas a blandit lorem. In nulla mi, suscipit id semper sit amet, faucibus ac nisl.`
        },
        {
            titlePost: 'Prueba de Titulo 3',
            datePost: `Publicado el día ${moment().date()} de ${moment().format("MMMM")} del año ${moment().format("YYYY")}`,
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id felis nisi. Mauris et erat vel
            tortor porta auctor in a turpis. Quisque fringilla velit et luctus ultricies. Ut eleifend
            pellentesque ullamcorper. In sed quam porttitor, fermentum tortor malesuada, pharetra ligula.
            Phasellus dictum tortor ligula, at ornare dui gravida eget. Sed dolor nibh, imperdiet quis neque
            eget, vehicula posuere sem. Morbi quis leo efficitur, sollicitudin risus id, vulputate dolor.
            Suspendisse efficitur, mi in gravida volutpat, lacus velit posuere eros, sed suscipit lectus
            odio a tortor. Quisque laoreet metus vel nisi congue porttitor id ac augue. Fusce at dignissim
            risus. Pellentesque ullamcorper tempor risus, sed imperdiet mauris vestibulum ullamcorper.
            Maecenas a blandit lorem. In nulla mi, suscipit id semper sit amet, faucibus ac nisl.`
        },
        {
            titlePost: 'Prueba de Titulo 4',
            datePost: `Publicado el día ${moment().date()} de ${moment().format("MMMM")} del año ${moment().format("YYYY")}`,
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id felis nisi. Mauris et erat vel
            tortor porta auctor in a turpis. Quisque fringilla velit et luctus ultricies. Ut eleifend
            pellentesque ullamcorper. In sed quam porttitor, fermentum tortor malesuada, pharetra ligula.
            Phasellus dictum tortor ligula, at ornare dui gravida eget. Sed dolor nibh, imperdiet quis neque
            eget, vehicula posuere sem. Morbi quis leo efficitur, sollicitudin risus id, vulputate dolor.
            Suspendisse efficitur, mi in gravida volutpat, lacus velit posuere eros, sed suscipit lectus
            odio a tortor. Quisque laoreet metus vel nisi congue porttitor id ac augue. Fusce at dignissim
            risus. Pellentesque ullamcorper tempor risus, sed imperdiet mauris vestibulum ullamcorper.
            Maecenas a blandit lorem. In nulla mi, suscipit id semper sit amet, faucibus ac nisl.`
        },
        {
            titlePost: 'Prueba de Titulo 5',
            datePost: `Publicado el día ${moment().date()} de ${moment().format("MMMM")} del año ${moment().format("YYYY")}`,
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id felis nisi. Mauris et erat vel
            tortor porta auctor in a turpis. Quisque fringilla velit et luctus ultricies. Ut eleifend
            pellentesque ullamcorper. In sed quam porttitor, fermentum tortor malesuada, pharetra ligula.
            Phasellus dictum tortor ligula, at ornare dui gravida eget. Sed dolor nibh, imperdiet quis neque
            eget, vehicula posuere sem. Morbi quis leo efficitur, sollicitudin risus id, vulputate dolor.
            Suspendisse efficitur, mi in gravida volutpat, lacus velit posuere eros, sed suscipit lectus
            odio a tortor. Quisque laoreet metus vel nisi congue porttitor id ac augue. Fusce at dignissim
            risus. Pellentesque ullamcorper tempor risus, sed imperdiet mauris vestibulum ullamcorper.
            Maecenas a blandit lorem. In nulla mi, suscipit id semper sit amet, faucibus ac nisl.`
        }
    ];
    postsList.forEach((post) => {
        let newPost = `
        <article class="classArticlePost">
            <h2>${post.titlePost}</h2>
            <span class="classSpanDate">${post.datePost}</span>
            <p>${post.content}</p>
            <a href="#" class="classAReadMore">Leer más</a>
        </article>
        `;
        $('#idDivPosts').append(newPost);
    });   
});