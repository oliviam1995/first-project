const myElement = document.getElementsByClassName("bars");
myElement( "bars" ).clone().appendTo( document.body );
myElement( window ).scroll(function() {
myElement( "span" ).css( "display", "inline" ).fadeOut( "slow" );
});