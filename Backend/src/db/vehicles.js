import ford_exterior_1 from '../assets/vehicles/ford_exterior_1.jpg';
import ford_interior_1 from '../assets/vehicles/ford_interior_1.jpg';

import honda_exterior_1 from '../assets/vehicles/honda_exterior_1.jpg';
import honda_interior_1 from '../assets/vehicles/honda_interior_1.jpg';

import hyundai_exterior_1 from '../assets/vehicles/Hyundai_exterior_1.jpg';
import hyundai_interior_1 from '../assets/vehicles/Hyundai_interior_1.jpg';

import toyota_exterior_1 from '../assets/vehicles/toyota_exterior_1.jpg';
import toyota_interior_1 from '../assets/vehicles/toyota_interior_1.jpg';

import wv_exterior_1 from '../assets/vehicles/wv_exterior_1.jpg';
import wv_interior_1 from '../assets/vehicles/wv_interior_1.jpg';

const vehiculos = [
    {
        tipoVehiculo: "sedan",
        marca: "Toyota",
        modelo: "Corolla",
        ano: "2015",
        placa: "XYZ123",
        precio: "15000",
        negociable: "sí",
        recibeVehiculo: "no",
        asociadoLeasing: "no",
        internalPhotos: [toyota_interior_1],
        externalPhotos: [toyota_exterior_1],
        doors: "4",
        largo: "4.62",
        ancho: "1.78",
        alto: "1.43",
        seatMaterial: "tela",
        motor: "gasolina",
        transmission: "automático",
        is4x4: "no",
        electricWindows: "sí",
        electricMirrors: "sí",
        rearSensors: "sí",
        frontSensors: "sí",
        sideSensors: "no",
        reverseCamera: "sí",
        camera360: "no",
        dashboardType: "digital",
        soundSystem: "estándar",
        estadoGeneral: "2",
        tapizado: "tela"
    },
    {
        tipoVehiculo: "SUV",
        marca: "Honda",
        modelo: "CR-V",
        ano: "2018",
        placa: "ABC456",
        precio: "22000",
        negociable: "sí",
        recibeVehiculo: "sí",
        asociadoLeasing: "no",
        internalPhotos: [honda_interior_1],
        externalPhotos: [honda_exterior_1],
        doors: "5",
        largo: "4.57",
        ancho: "1.85",
        alto: "1.68",
        seatMaterial: "cuero",
        motor: "híbrido",
        transmission: "automático",
        is4x4: "sí",
        electricWindows: "sí",
        electricMirrors: "sí",
        rearSensors: "sí",
        frontSensors: "sí",
        sideSensors: "sí",
        reverseCamera: "sí",
        camera360: "sí",
        dashboardType: "ambos",
        soundSystem: "estereo7_1",
        estadoGeneral: "1",
        tapizado: "cuero"
    },
    {
        tipoVehiculo: "pickup",
        marca: "Ford",
        modelo: "Ranger",
        ano: "2020",
        placa: "DEF789",
        precio: "30000",
        negociable: "no",
        recibeVehiculo: "sí",
        asociadoLeasing: "sí",
        internalPhotos: [ford_interior_1],
        externalPhotos: [ford_exterior_1],
        doors: "4",
        largo: "5.35",
        ancho: "1.85",
        alto: "1.81",
        seatMaterial: "cuero",
        motor: "diésel",
        transmission: "manual",
        is4x4: "sí",
        electricWindows: "sí",
        electricMirrors: "sí",
        rearSensors: "sí",
        frontSensors: "sí",
        sideSensors: "sí",
        reverseCamera: "sí",
        camera360: "no",
        dashboardType: "análogo",
        soundSystem: "estándar",
        estadoGeneral: "1",
        tapizado: "cuero"
    },
    {
        tipoVehiculo: "hatchback",
        marca: "Volkswagen",
        modelo: "Golf",
        ano: "2019",
        placa: "GHI012",
        precio: "18000",
        negociable: "sí",
        recibeVehiculo: "no",
        asociadoLeasing: "no",
        internalPhotos: [wv_interior_1],
        externalPhotos: [wv_exterior_1],
        doors: "5",
        largo: "4.26",
        ancho: "1.79",
        alto: "1.49",
        seatMaterial: "tela",
        motor: "gasolina",
        transmission: "manual",
        is4x4: "no",
        electricWindows: "sí",
        electricMirrors: "sí",
        rearSensors: "sí",
        frontSensors: "no",
        sideSensors: "no",
        reverseCamera: "no",
        camera360: "no",
        dashboardType: "digital",
        soundSystem: "estándar",
        estadoGeneral: "2",
        tapizado: "tela"
    },
    {
        tipoVehiculo: "sedan",
        marca: "Hyundai",
        modelo: "Elantra",
        ano: "2021",
        placa: "JKL345",
        precio: "19000",
        negociable: "no",
        recibeVehiculo: "no",
        asociadoLeasing: "sí",
        internalPhotos: [hyundai_interior_1],
        externalPhotos: [hyundai_exterior_1],
        doors: "4",
        largo: "4.68",
        ancho: "1.80",
        alto: "1.44",
        seatMaterial: "cuero",
        motor: "híbrido",
        transmission: "automático",
        is4x4: "no",
        electricWindows: "sí",
        electricMirrors: "sí",
        rearSensors: "sí",
        frontSensors: "sí",
        sideSensors: "no",
        reverseCamera: "sí",
        camera360: "no",
        dashboardType: "ambos",
        soundSystem: "estereo7_1",
        estadoGeneral: "1",
        tapizado: "cuero"
    }
];
export default vehiculos;
