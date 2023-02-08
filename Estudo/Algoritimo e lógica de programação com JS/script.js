/*
    Crie uma lista de pacientes

    Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

    Escreva ama lista contendo o nome dos pacientes
*/

let patients = [
    {
        name: 'Ana',
        age: 20,
        weight: 100,
        height: 1.50
    },
    {
        name: 'Fred',
        age: 15,
        weight: 200,
        height: 1.30
    },
    {
        name: 'Joana',
        age: 80,
        weight: 10,
        height: 3.0
    }
];

let patientList = []

for(let patient of patients) {
    patientList.push(patient.name)
    patientList.push(patient.age)
    patientList.push(patient.weight)
    patientList.push(patient.height)

}
alert(patientList)