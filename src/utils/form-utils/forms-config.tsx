import * as Yup from 'yup';

export const forms = [
    {
      title: "Paso 1: Rellene sus datos personales",
      fields: [
        { name: "nombre", label: "Nombre", type: "text", validation: Yup.string()
        .matches(/^[A-Za-z ]+$/, "Ingrese solo letras y espacios")
        .min(4, "Debe ingresar como mínimo 6 carácteres")
        .required("Campo Requerido")},
        { name: "apellido", label: "Apellido", type: "text", validation: Yup.string()
        .matches(/^[A-Za-z ]+$/, "Ingrese solo letras y espacios")
        .min(4, "Debe ingresar como mínimo 6 carácteres")
        .required("Campo Requerido")},
        { name: "telefono", label: "Número de teléfono", type: "number", validation: Yup.string()
        .matches(/^\d+$/, "Solo es válido ingresar números")
        .min(6, "Debe tener como mínimo 6 dígitos")
        .max(15, "No debe superar los 15 dígitos")
        .required("Campo Requerido")},
        { name: "direccion", label: "Dirección", type: "text", validation: Yup.string().required()},
        { name: "email", label: "Email", type: "text", validation: Yup.string().email().required() },
      ],
    },
    {
      title: "Paso 2: Rellene con los datos de su tarjeta",
      fields: [
        { name: "cardNumber", label: "Número de tarjeta de crédito", type: "text", validation: Yup.string().matches(/^\d+$/, "Solo es válido ingresar números")
        .required("Campo requerido") },
        { name: "securityCode", label: "Código de seguridad", type: "text",  validation: Yup.string().matches(/^\d+$/, "Solo puede ingresar números")
        .required("Campo requerido")
        .min(3, "El código debe ser de 3 dígitos")
        .max(3, "El código debe ser de 3 dígitos"), },
        { name: "expirationDate", label: "Fecha de expiración", type: "month", validation: Yup.date().min(new Date(2000, 0, 1), "La fecha debe ser posterior al año 2000")
        .max(new Date(2036, 11, 31), "La fecha debe ser anterior a 2036")
        .required() },
        { name: "ownerName", label: "Nombre del titular", type: "text", validation: Yup.string()
        .matches(/^[A-Za-z ]+$/, "Ingrese solo letras y espacios")
        .oneOf([Yup.ref("nombre")], "El nombre debe coincidir con el titular de la tarjeta")
        .required("Campo requerido"), },
        { name: "ownerAddress", label: "Dirección jurídica del titular", type: "text",validation: Yup.string().oneOf([Yup.ref("direccion")], "La dirección debe ser coincidir con el titular de la tarjeta").required()},
      ],
    },
  ];