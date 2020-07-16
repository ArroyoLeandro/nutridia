// Login

//cambiar icono password
$('#pass').click(() => {
    //si el campo es tipo text lo modifico a password y cambio el icono al ojo 
    if ($('#password').get(0).type == 'text') {
        $('#password').get(0).type = 'password';
        $('.right-icon').removeClass('fa-eye-slash').addClass('fa-eye');
    }    
    //si era password lo cambio a text y cambio al icono del ojo con raya
    else {
        $('#password').get(0).type = 'text';
        $('.right-icon').removeClass('fa-eye').addClass('fa-eye-slash');
    }
});



//esta funcion se ejecuta cada medio segundo siempre y cuando se este en la vista register
function verificacionCheck() {

    //si  restaurante o dietetica esta seleccionado 
    if ($('#restaurante').prop("checked") || $('#dietetica').prop("checked")) {
        //si es version mobile muestro la calculadora mobile y oculto la desktop
        if ($(window).width() < 768) {
            $('#calculadoraImg').addClass('d-none');
            
        }//caso contrario oculto la mobile y muestro desktop
        else {
            $('#calculadoraImg').removeClass('d-none');

        }
        
    }//si la opcion no era dietetica o restaurante oculto ambas
    else {
            
        $('#calculadoraImg').addClass('d-none');
    }
}



function colorearBoton() {
    $('button').click(function(){
          
        switch(this.id){
            case 'DiabetesSi':
            case 'DiabetesNo':
            case 'DiabetesPre':
            case 'DiabetesOtro':
                $('.btn-tengo').each(function(){
                    $(this).removeClass('colorear');
                });                
                $(this).addClass('colorear')
                $('#inputDiabetesSi').attr('checked', false);
                $('#inputDiabetesNo').attr('checked', false);
                $('#inputDiabetesPre').attr('checked', false);
                $('#inputDiabetesOtro').attr('checked', false);
                $('#input'+this.id).attr('checked', true);
            break;
            case 'TipoDiabetes1':
            case 'TipoDiabetes2':
            case 'TipoDiabetesGestacional':
            case 'TipoDiabetesOtro':
                $('.btn-tipo').each(function(){
                    $(this).removeClass('colorear');
                });                
                $(this).addClass('colorear')
                $('#inputTipoDiabetes1').attr('checked', false);
                $('#inputTipoDiabetes2').attr('checked', false);
                $('#inputTipoDiabetesGestacional').attr('checked', false);
                $('#inputTipoDiabetesOtro').attr('checked', false);
                $('#input'+this.id).attr('checked', true);
            break;
            case 'TratamientoDiabetesDieta':
            case 'TratamientoDiabetesEjercicio':
            case 'TratamientoDiabetesMedicacion':
            case 'TratamientoDiabetesInsulina':
                $('.btn-tratamiento').each(function(){
                    $(this).removeClass('colorear');
                });                
                $(this).addClass('colorear')
                $('#inputTratamientoDiabetesDieta').attr('checked', false);
                $('#inputTratamientoDiabetesEjercicio').attr('checked', false);
                $('#inputTratamientoDiabetesMedicacion').attr('checked', false);
                $('#inputDiabetesInsulina').attr('checked', false);
                $('#input'+this.id).attr('checked', true);
            break;
            case 'AntecedenteDiabetesHipertension':
            case 'AntecedenteDiabetesHipercolesterolemia':
            case 'AntecedenteDiabetesACV':
            case 'AntecedenteDiabetesAlergias':
            case 'AntecedenteDiabetesOtro':
                $('.btn-antecedente').each(function(){
                    $(this).removeClass('colorear');
                });                
                $(this).addClass('colorear')
                $('#inputAntecedenteDiabetesHipertension').attr('checked', false);
                $('#inputAntecedenteDiabetesHipercolesterolemia').attr('checked', false);
                $('#inputAntecedenteDiabetesACV').attr('checked', false);
                $('#inputAntecedenteDiabetesAlergias').attr('checked', false);
                $('#inputAntecedenteDiabetesOtro').attr('checked', false);
                $('#input'+this.id).attr('checked', true);
            break;
        }
    });
}


function formularioActivo(opcion) {
    

    var paciente = `<form class="mt-5">
            <div class="row">
                <div class="col-8">
                    <label style="color:var(--primary); font-family: UniversBold; font-size: 1.2em;">
                        Suscripcion Nutridia - Paciente
                    </label>
                </div>
                <div class="col-4">
                    <button class="form-control btn-volver" onclick(function(){ $('.form-container').removeClass('d-none');$('.form-controls').remove();})>Volver</button>
                </div>
            </div>
       
            <div class="form-group mt-4">
                <input type="text" class="form-control" id="inputNombre" placeholder="Nombre">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" id="inputApellido" placeholder="Apellido">
            </div>
            <div class="form-group">
                <input type="number" min="0" class="form-control" id="inputCuil" placeholder="CUIT/CUIL">
            </div>
            <div class="form-group">
                <div class="inner-addon left-addon">
                    <i class="glyphicon fas fa-envelope"></i>
                    <input type="email" class="form-control" id="inputEmail" placeholder="Mail">
                </div>
            </div>
            <div class="form-group">
                <div class="inner-addon left-addon">
                    <i class="glyphicon fas fa-phone-alt"></i>
                    <input type="number" class="form-control" id="inputTelefono" placeholder="Telefono Movil">
                </div>
            </div>
            <div class="form-group">
                <label style="color:var(--primary)">Tengo Diabetes</label>
                <div class="d-flex flex-direction-row justify-content-center">
                    <button type="button" class="btn seg mr-2 btn-tengo" id="DiabetesSi" >Si</button>
                    <button type="button" class="btn seg mr-2 btn-tengo" id="DiabetesNo" >No</button>
                    <button type="button" class="btn seg mr-2 btn-tengo" id="DiabetesPre" >Prediabetes</button>
                    <button type="button" class="btn seg btn-tengo" id="DiabetesOtro" >Otros</button>
                </div>
                <input type="radio" class="d-none" id="inputDiabetesSi" name="radioDiabetes">
                <input type="radio" class="d-none" id="inputDiabetesNo" name="radioDiabetes">
                <input type="radio" class="d-none" id="inputDiabetesPre" name="radioDiabetes">
                <input type="radio" class="d-none" id="inputDiabetesOtro" name="radioDiabetes">
            </div>
            <div class="form-group row mt-4">
                <div class="col-6">
                    <label for="inputDiagnostico" style="color:var(--primary)">Año de Diagnostico</label>
                </div>
                <div class="col-4">
                    <input type="number" min="1930" class="form-control" id="inputDiagnostico">
                </div>
            </div>
            <div class="form-group">
                <label style="color:var(--primary)">Que tipo de Diabetes</label>
                <div class="d-flex flex-direction-row justify-content-center">
                    <button type="button" class="btn seg mr-2 btn-tipo" id="TipoDiabetes1" >Tipo 1</button>
                    <button type="button" class="btn seg mr-2 btn-tipo" id="TipoDiabetes2" >Tipo 2</button>
                    <button type="button" class="btn seg mr-2 btn-tipo" id="TipoDiabetesGestacional" >Gestacional</button>
                    <button type="button" class="btn seg btn-tipo" id="TipoDiabetesOtro" >Otros</button>
                </div>
                <input type="radio" class="d-none" id="inputTipoDiabetes1" name="radioTipoDiabetes">
                <input type="radio" class="d-none" id="inputTipoDiabetes2" name="radioTipoDiabetes">
                <input type="radio" class="d-none" id="inputTipoDiabetesGestacional" name="radioTipoDiabetes">
                <input type="radio" class="d-none" id="inputTipoDiabetesOtro" name="radioTipoDiabetes">
            </div>    
            <div class="form-group">
                <label style="color:var(--primary)">Tratamiento Actual</label>
                <div class="d-flex flex-direction-row justify-content-center" >
                    <button type="button" class="btn seg btn-green mr-2  btn-tratamiento" id="TratamientoDiabetesDieta" >Dieta</button>
                    <button type="button" class="btn seg btn-red mr-2 btn-tratamiento" id="TratamientoDiabetesEjercicio" >Ejercicio</button>
                    <button type="button" class="btn seg btn-orange mr-2 btn-tratamiento" id="TratamientoDiabetesMedicacion" >Medicacion</button>
                    <button type="button" class="btn seg btn-yellow btn-tratamiento" id="TratamientoDiabetesInsulina" >Insulina</button>
                </div>
                <input type="radio" class="d-none" id="inputTratamientoDiabetesDieta" name="radioTratamientoDiabetes">
                <input type="radio" class="d-none" id="inputTratamientoDiabetesEjercicio" name="radioTratamientoDiabetes">
                <input type="radio" class="d-none" id="inputTratamientoDiabetesMedicacion" name="radioTratamientoDiabetes">
                <input type="radio" class="d-none" id="inputTratamientoDiabetesInsulina" name="radioTratamientoDiabetes">
            </div>             
            
            <div class="form-group">
                <label style="color:var(--primary)">Antecedente</label>
                <div class="d-flex flex-direction-row justify-content-center">
                    <button type="button" class="btn seg mr-2  btn-green btn-antecedente" id="AntecedenteDiabetesHipertension" >Hipertension</button>
                    <button type="button" class="btn seg mr-2 btn-red btn-antecedente" id="AntecedenteDiabetesHipercolesterolemia" >Hipercolesterolemia</button>
                </div>
                <div class="d-flex flex-direction-row justify-content-center mt-2">
                    <button type="button" class="btn seg  mr-2 btn-orange btn-antecedente" id="AntecedenteDiabetesACV" >ACV</button>
                    <button type="button" class="btn seg mr-2 btn-secondary btn-antecedente" id="AntecedenteDiabetesAlergias" >Alergias</button>
                    <button type="button" class="btn seg btn-yellow btn-antecedente" id="AntecedenteDiabetesOtro" >Otros</button>
                </div>
                <input type="radio" class="d-none" id="inputAntecedenteDiabetesHipertension" name="radioAntecedenteDiabetes">
                <input type="radio" class="d-none" id="inputAntecedenteDiabetesHipercolesterolemia" name="radioAntecedenteDiabetes">
                <input type="radio" class="d-none" id="inputAntecedenteDiabetesACV" name="radioAntecedenteDiabetes">
                <input type="radio" class="d-none" id="inputAntecedenteDiabetesAlergias" name="radioAntecedenteDiabetes">
                <input type="radio" class="d-none" id="inputAntecedenteDiabetesOtro" name="radioAntecedenteDiabetes">
                
            </div>
            <div class="form-group">
                <label style="font-size:.6em;color:var(--gray); margin-top:1em; display:flex; flex-wrap: nowrap; ">
                    Una copia de tus respuestas se enviara por correo electronico a la direccion que proporcionaste
                </label>
            </div>
            <button type="submit" class="btn mb-4 mt-4 float-right">Revisar y Enviar</button>
            </form> `;
    
    
    
            var profesional = `<form class="mt-5">
            <div class="row">
                <div class="col-8">
                    <label style="color:var(--primary); font-family: UniversBold; font-size: 1.2em;">
                        Suscripcion Nutridia - Profesional
                    </label>
                </div>
                <div class="col-4">
                    <button class="form-control  btn-volver" onclick(function(){ $('.form-container').removeClass('d-none');$('.form-controls').remove();})>Volver</button>
                </div>
            </div>
            <div class="form-group mt-4">
                <input type="text" class="form-control" id="inputNombre" placeholder="Nombre">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" id="inputApellido" placeholder="Apellido">
            </div>
            <div class="form-group">
                <input type="number" min="0" class="form-control" id="inputCuil" placeholder="CUIT/CUIL">
            </div>
            <div class="form-group">
                <div class="inner-addon left-addon">
                    <i class="glyphicon fas fa-envelope"></i>
                    <input type="email" class="form-control" id="inputEmail" placeholder="Mail">
                </div>
            </div>
            <div class="form-group">
            <div class="inner-addon left-addon">
                    <i class="glyphicon fas fa-id-card"></i>
                    <input type="number" min="0" class="form-control" id="inputMatricula" placeholder="Matricula">
                </div>
                
            </div>
                
            <div class="form-group">
                <label style="font-size:14px;color:var(--gray); margin-top:1em; display:flex; flex-wrap: nowrap; ">
                    Una copia de tus respuestas se enviara por correo electronico a la direccion que proporcionaste
                </label>
            </div>         
            <button type="button" class="btn mb-2 mt-4 float-right" style="width:60%">Subir Archivo</button>
           
            <button type="submit" class="btn mb-4  float-right" style="width:60%">Revisar y Enviar</button>
            </form> `;
    
    
    

            switch (opcion) {
                case 'paciente':
                    return paciente;
                    break;
                    case 'profesional':
                        return profesional;
                        break;
                default:
                    $('.form-container').removeClass('d-none');
                    $('.form-controls').addClass('d-none');
                    return "";
                    break;
            }
    
}



//seleccionar opcion
function check(opcion) {
    $('.form-container').addClass('d-none');
    $('.form-controls').removeClass('d-none');
    $('.form-controls').append(formularioActivo(opcion));
    
    colorearBoton();
    if (opcion == 'paciente') {
        $('#registerImg').addClass('margenes');
    }
    //si la opcion ya estaba seleccionada
    if ($('#' + opcion).prop("checked")) {
        // la deselecciono
        $('#' + opcion).prop("checked", false);
        $('#btn-' + opcion).removeClass('colorear');
        //si es dietetica o restaurante oculto la calculadora 
        if (opcion == 'restaurante' || opcion == 'dietetica') {
            $('#calculadoraImg').addClass('d-none');

        }//si no es dietetica o restaurante 
        else {
            $('#calculadoraImg').removeClass('d-none');
            
        }
    }//en caso de que la opcion no estaba seleccionada
    else {
        //deselecciono para resetear
        deseleccionarTodo();
        //cambio la imagen en ambos contenedores (mobile y desktop)
        $("#registerImg").attr("src","assets/img/Registro/img_"+opcion+".jpg");
        $("#registerImg2").attr("src", "assets/img/Registro/img_" + opcion + "_mobile.jpg");
        //selecciono la opcion
        $('#'+opcion).prop("checked", true);
        $('#btn-' + opcion).addClass('colorear');
        //si es dietetica o restaurante muestro la calculadora
        if (opcion == 'restaurante' || opcion == 'dietetica') {
            //en caso de que sea tamaño desktop
            if ($(window).width() > 768) {
                // muestro la desktop
                $('#calculadoraImg').removeClass('d-none');
            }
        }//en caso de que no sea dietetica o restaurante oculto ambas calculadoras (mobile y desktop)
        else {
            $('#calculadoraImg').addClass('d-none');
        }
    }   
    // $('#form-box').addClass('d-none');
    
    // $('#form-control').removeClass('d-none');
}
//desmarcar todos los checkboxs
function deseleccionarTodo() {
    $('#paciente').prop("checked", false);
    $('#profesional').prop("checked", false);
    $('#laboratorio').prop("checked", false);
    $('#restaurante').prop("checked", false);
    $('#dietetica').prop("checked", false);
    $('#btn-paciente').removeClass('colorear');
    $('#btn-profesional').removeClass('colorear');
    $('#btn-laboratorio').removeClass('colorear');
    $('#btn-restaurante').removeClass('colorear');
    $('#btn-dietetica').removeClass('colorear');
}

