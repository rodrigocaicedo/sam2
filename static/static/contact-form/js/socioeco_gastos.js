
$(document).ready(function() {
   
    $('#domicilio-form').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            pais_residencia: {
                validators: {
                    notEmpty: {
                        message: 'Seleccione una opción'
                    }
                }
            },
            gastos_vivienda: {
                validators: {
                    notEmpty: {
                        message: 'Ingrese una cantidad'
                    },
                    regexp: {
                        regexp: /^[0-9,\.]+$/,
                        message: 'The username can only consist of alphabetical, number, dot and underscore'
                    }

                }
            },
            gastos_educacion: {
                validators: {
                    notEmpty: {
                        message: 'Ingrese una cantidad'
                    }

                }
            },
            gastos_alimentacion: {
                validators: {
                    notEmpty: {
                        message: 'Ingrese una cantidad'
                    }
                }
            },
            gastos_transporte: {
                validators: {
                    notEmpty: {
                        message: 'Ingrese una cantidad'
                    }
                }
            },
            gastos_salud: {
                validators: {
                    notEmpty: {
                        message: 'Ingrese una cantidad'
                    }
                }
            },          
            gastos_vestimenta: {
                validators: {
                    notEmpty: {
                        message: 'Ingrese una cantidad'
                    }
                }
            },              
            gastos_otros: {
                validators: {
                    notEmpty: {
                        message: 'Ingrese una cantidad'
                    }
                }
            },            
            provincia_residencia: {
                validators: {
                        stringLength: {
                        min: 2,
                        message:'Información no válida'
                    },
                        notEmpty: {
                        message: 'Ingrese el nombre de la provincia'
                    }
                }
            },

            ciudad_residencia: {
                validators: {
                     stringLength: {
                        min: 2,
                        message:'Información no válida'
                    },
                    notEmpty: {
                        message: 'Ingrese el nombre de la ciudad'
                    }
                }
            },
            parroquia_residencia: {
                validators: {
                     stringLength: {
                        min: 2,
                        message:'Información no válida'
                    },
                    notEmpty: {
                        message: 'Ingrese el nombre de la parroquia'
                    }
                }
            },
            tipo_parroquia: {
                validators: {
                    notEmpty: {
                        message: 'Seleccione una opción'
                    }
                }
            },            
            barrio: {
                validators: {
                     stringLength: {
                        min: 2,
                        message:'Información no válida'
                    },
                    notEmpty: {
                        message: 'Ingrese el nombre del barrio'
                    }
                }
            },
            zona: {
                validators: {
                    notEmpty: {
                        message: 'Seleccione una opción'
                    }
                }
            },             
            direccion_principal: {
                validators: {
                     stringLength: {
                        min: 2,
                        message:'Información no válida'
                    },
                    notEmpty: {
                        message: 'Ingrese la calle principal'
                    }
                }
            },
            direccion_secundaria: {
                validators: {
                     stringLength: {
                        min: 2,
                        message:'Información no válida'
                    },
                    notEmpty: {
                        message: 'Ingrese la calle secundaria'
                    }
                }
            },
            direccion_numero: {
                validators: {
                     stringLength: {
                        min: 2,
                        message:'Información no válida'
                    },
                    notEmpty: {
                        message: 'Ingrese el número'
                    }
                }
            },                       
            telefono_casa: {
                validators: {
                    notEmpty: {
                        message: 'Ingrese su teléfono de casa'
                    },
                    stringLength: {
                        min: 9,
                        max: 9,
                        message:'Ingrese el teléfono con formato 026017070'
                    }
                }
            }, 
        }
    })
    .on('success.form.bv', function(e) {
        $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
            $('#representante-form').data('bootstrapValidator').resetForm();

            e.preventDefault();

            var $form = $(e.target);

            var bv = $form.data('bootstrapValidator');

            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
    });
        
    $('.datepicker')
    .on('changeDate', function(e) {
        $('#contact_form').bootstrapValidator('updateStatus', 'fecha_de_nacimiento', 'NOT_VALIDATED')
            .bootstrapValidator('validateField', 'fecha_de_nacimiento');
        $('#contact_form').bootstrapValidator('updateStatus', 's_fecha_nacimiento_id', 'NOT_VALIDATED')
            .bootstrapValidator('validateField', 's_fecha_nacimiento');
        $('#contact_form').bootstrapValidator('updateStatus', 'm_fecha_nacimiento_id', 'NOT_VALIDATED')
            .bootstrapValidator('validateField', 'm_fecha_nacimiento');
        $('#contact_form').bootstrapValidator('updateStatus', 'p_fecha_nacimiento_id', 'NOT_VALIDATED')
            .bootstrapValidator('validateField', 'p_fecha_nacimiento');
        $('#contact_form').bootstrapValidator('updateStatus', 'r_fecha_nacimiento_id', 'NOT_VALIDATED')
            .bootstrapValidator('validateField', 'r_fecha_nacimiento');
    }); 
 
});

$(function() {
    $(".datepicker").datepicker({autoclose:true, format: 'yyyy-mm-dd'});
});

