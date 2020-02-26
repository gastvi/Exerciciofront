let inputCRM = document.getElementById("CRMdoMedico");
let inputCpf = document.getElementById("CpfdoPaciente");



//validação cpf
inputCpf.addEventListener("keyup", (event) => {

    if (isNaN(inputCpf.value)) {

        inputCpf.value = inputCpf.value.substring(0, (inputCpf.value.length - 1))
    }
    if (inputCpf.value.length >= 11) {
        inputCpf.value = inputCpf.value.substring(0, 11)
    }

})

//validação CRM do médico
inputCRM.addEventListener("keyup", (event) => {

    if (isNaN(inputCRM.value)) {

        inputCRM.value = inputCRM.value.substring(0, (inputCRM.value.length - 1))
    }
    if (inputCRM.value.length >= 7) {
        inputCRM.value = inputCRM.value.substring(0, 7)
    }

})