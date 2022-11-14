<canvas width="600" height="400"></canvas>

<script type="text/javascript">
	var tela = document.querySelector('canvas');
	var pincel = tela.getContext('2d');

	pincel.fillStyle = 'grey';
	pincel.fillRect(0, 0 , 600 , 400);


function desenhaCirulo(evento) {
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    pincel.fillStyle="blue";
    pincel.beginPath();
    pincel.arc(x, y, 10, 0, 2*3.14);
    pincel.fill();

    console.log("posição do clique : " + x + ", " + y);
}

	tela.onclick = desenhaCirulo;



</script>