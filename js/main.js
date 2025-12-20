$(function () {
    var mixer = mixitup('.directions_list')
    $('.directions_link-btn').on('click', function () {
        $('.directions_link-btn ').removeClass('directions_filter-btn--active')
        $(this).addClass('directions_filter-btn--active')
    } )
})


$(document).ready(function () {
    var mixer = mixitup('.directions_list');

    // Изначально устанавливаем активный класс для первой кнопки
    $('.directions_filter-btn:first').addClass('active');

    $('.directions_filter-btn').on('click', function () {
        // Удаляем класс active у всех кнопок
        $('.directions_filter-btn').removeClass('active');
        
        // Добавляем класс active к нажатой кнопке
        $(this).addClass('active');
        
        // Получаем фильтр из data-атрибута
        var filterValue = $(this).attr('data-filter');
        
        // Применяем фильтрацию с MixItUp
        mixer.filter(filterValue);
    });
});


    // Инициализация Slick Slider
$(document).ready(function(){
    $('.team_slider').slick({
        dots: false, // Убираем точки, если не нужны
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3, // Показываем 3 слайда
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
  