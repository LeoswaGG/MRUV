document.addEventListener( 'click', element => {
    if ( element.target.matches( '.calculation' ) ) {
        let $vo = document.getElementById( 'vo' ).value;
        let $vf = document.getElementById( 'vf' ).value;
        let $t = document.getElementById( 't' ).value;
        let $a = document.getElementById( 'a' ).value;
        let $d = document.getElementById( 'd' ).value;
        // si los demás input, no tiene ningún valor...
        if ( !$vo ) {
            $vo = parseFloat( $vf ) - parseFloat( $a ) * parseFloat( $t );
            document.getElementById( "resultado_vo" ).textContent = $vo.toFixed( 2 );
        }

        if ( !$vf ) {
            $vf = parseFloat( $vo ) + parseFloat( $a ) * parseFloat( $t );
            document.getElementById( "resultado_vf" ).textContent = $vf.toFixed( 2 );
        }

        if ( !$t ) {
            $t = ( parseFloat( $vf ) - parseFloat( $vo ) ) / parseFloat( $a );
            document.getElementById( "resultado_t" ).textContent = $t.toFixed( 2 );
        }

        if ( !$a ) {
            $a = ( parseFloat( $vf ) - parseFloat( $vo ) ) / parseFloat( $t );
            document.getElementById( "resultado_a" ).textContent = $a.toFixed( 2 );
        }

        if ( !d ) {
            $d = parseFloat( $vo ) * parseFloat( $t ) + 0.5 * parseFloat( $a ) * parseFloat( $t ) * parseFloat( $t );
            document.getElementById( "resultado_d" ).textContent = $d.toFixed( 2 );
        }
    };
} );

document.addEventListener( 'click', element => {
    if ( element.target.matches( '.velocity' ) ) {
        const $velocityKm = Number( document.getElementById( 'velocidad_km' ).value ); // recupera el valor y cambia el valor a number
        const velocityMs = $velocityKm * 1000 / 3600;
        if ( isNaN( $velocityKm ) ) {
            document.getElementById( 'resultado_velocidad' ).textContent = `Por favor ingresa un valor numérico para la velocidad`;
        } else {
            document.getElementById( 'resultado_velocidad' ).textContent = `${ $velocityKm } km/h son: ${ velocityMs } m/s`;
        }
    }
} );

document.addEventListener( 'click', element => {
    if ( element.target.matches( '.minutes' ) ) {
        const $minutes = Number( document.getElementById( 'minutos' ).value );
        const seconds = $minutes * 60;
        if ( isNaN( $minutes ) ) {
            document.getElementById( 'resultado_minutos' ).textContent = `Por favor ingrese un valor numérico para los minutos`;
        } else {
            document.getElementById( 'resultado_minutos' ).textContent = `${ $minutes } minutos son: ${ seconds } segundos`;
        }
    }
} );

document.addEventListener( 'click', element => {
    if ( element.target.matches( '.convertKm' ) ) {
        const $distanceKm = Number( document.getElementById( 'distancia' ).value );
        const distanceM = $distanceKm * 1000;
        if ( isNaN( $distanceKm ) ) {
            document.getElementById( 'resultado_distancia' ).textContent = `Por favor ingrese un valor numérico para calcular la distancia`;
        } else {
            document.getElementById( 'resultado_distancia' ).textContent = `${ $distanceKm } km son: ${ distanceM } metros`;
        }
    }
} );
