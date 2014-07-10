// JavaScript Document

 $.getJSON("agile_carousel/agile_carousel_data.php", function(data) {
        $(document).ready(function(){
            $("#flavor_2").agile_carousel({
                
                // required settings
                
                carousel_data: data,
                carousel_outer_height: 330,
                carousel_height: 230,
                slide_height: 230,
                carousel_outer_width: 480,
                slide_width: 480,
                                                
                // end required settings
                                                
                transition_type: "fade",
                transition_time: 600,
                timer: 3000,
                continuous_scrolling: true,
                control_set_1: "numbered_buttons,previous_button,
                ... (continues on same line)... pause_button,next_button",
                control_set_2: "content_buttons",
                change_on_hover: "content_buttons"
            });
        });
    });