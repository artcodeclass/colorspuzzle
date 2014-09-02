$(function(){

   

      	$('.box').draggable();



      		// COLOR OBJECTS
	        var purple = { 
	            name: 'purple',
	            combination: ['blue', 'red']
	        };

	        var orange = { 
	            name: 'orange',
	            combination: ['yellow', 'red']
	        };

	        var cyan = { 
	            name: 'cyan',
	            combination: ['green', 'blue']
	        };

	        var colorArray = [purple, orange, cyan];
	        
            // GET RAMDOM COLOR
            getRandomColor();
            var sourcecolor1 = randColor.combination[0],
                sourcecolor2 = randColor.combination[1]
            
            var randColor;
            function getRandomColor () {
                randColor = colorArray[Math.floor(Math.random() * colorArray.length)];
                console.log(randColor);
            }

            initGame(randColor.combination[0], randColor.combination[1], randColor.name);

  
            function initGame (color1, color2, resultColor) {
                console.log(color1 + ' ' + color2 + ' ' + resultColor);

                $('.colortofind').html(resultColor) 
                                 // .addClass(resultColor + 'color');

                $('.' + color1).droppable({
                    accept: '.' + color2,     
                    drop: function(){

                        $(this).transition({
                            perspective : '100px',
                            rotateX : '180deg'
                        });

                        $(this).addClass(resultColor);
                        $('.' + color2).hide();
                       
                        setTimeout( function(){
                            $('.blank').show();
                                }, 400 )                   
                    }    
                });


                $('.' + color2).droppable({
                    accept: '.' + color1,
                    drop: function(){

                         $(this).transition({
                            perspective : '100px',
                            rotateX : '180deg'
                        });

                        $(this).addClass(resultColor);
                        $('.' + color1).hide();

                        setTimeout( function(){
                            $('.blank').show();
                                }, 400 )
                    }
                    
                });
            }


        // STORE ORIGINAL POSITION BOXES
        $(".box").data({'originalLeft': $(".box").css('left'),
                        'origionalTop': $(".box").css('top')
                             });

        // RESET BOXES AND HIDE OVERLAY ETC
        $(".nextgame").click(function() {
                $(".box").css({'left': $(".box").data('originalLeft'),
                                'top': $(".box").data('origionalTop')}
                                     );
                $('.' + sourcecolor1).show();
                $('.' + sourcecolor2).show();
                $('.box').removeClass(randColor.name);
                $('.blank').hide();

                getRandomColor();
                initGame(randColor.combination[0], randColor.combination[1], randColor.name);
                console.log('2nd' + randColor.name);


        });


    });










