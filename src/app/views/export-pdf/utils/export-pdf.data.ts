import { TextFamily, TextSize } from "./detail-card.interface";

export class ExportPdfData {
    
    static getDetailsCard() {

        return [
            {
                section: "Proceso de afiliación",
                dataDetails: [
                    {
                        key: "Tipo de operación",
                        value: "Factoring electrónico - Pagadores (HUB)",
                        textType: {
                            family: TextFamily.bold,
                            size: TextSize.md
                        }
                    },
                    {
                        key: "Fecha de afiliación",
                        value: "2022-10-19",
                        textType: {
                            family: TextFamily.bold,
                            size: TextSize.md
                        }
                    },
                    {
                        key: "Estado",
                        value: "Procesada",
                        indicator: true,
                        helperText: "Las operaciones se podrán realizar a partir del día siguiente hábil",
                        textType: {
                            family: TextFamily.bold,
                            size: TextSize.md
                        }
                    }
                ]
            },
            {
                section: "Datos de la empresa",
                dataDetails: [
                    {
                        key: "Empresa",
                        value: "Abratech Ingenieros S.A.C.",
                        textType: {
                            family: TextFamily.bold,
                            size: TextSize.md
                        }
                    },
                    {
                        key: "RUC",
                        value: "20100245871",
                        textType: {
                            family: TextFamily.bold,
                            size: TextSize.md
                        }
                    },
                    {
                        key: "TCL Contrato",
                        value: "001A10",
                        textType: {
                            family: TextFamily.bold,
                            size: TextSize.md
                        }
                    }
                ]
            },
            {
                section: "Datos de afiliación",
                dataDetails: [
                    {
                        key: "Metodología",
                        value: "Descuento - Neteo",
                        textType: {
                            family: TextFamily.bold,
                            size: TextSize.md
                        }
                    },
                    {
                        key: "Categoría",
                        value: "Empresa A",
                        textType: {
                            family: TextFamily.bold,
                            size: TextSize.md
                        }
                    },
                    {
                        key: "Abono documentos negativos",
                        value: "Moneda equivalente",
                        textType: {
                            family: TextFamily.bold,
                            size: TextSize.md
                        }
                    },
                    {
                        key: "Bloqueo de planilla",
                        value: "Sí",
                        textType: {
                            family: TextFamily.bold,
                            size: TextSize.md
                        }
                    },
                    {
                        key: "Beneficio",
                        value: "Comisión de confirmación (%)",
                        textType: {
                            family: TextFamily.bold,
                            size: TextSize.md
                        }
                    },
                    {
                        key: "Cuenta en soles",
                        value: "-",
                        textType: {
                            family: TextFamily.bold,
                            size: TextSize.md
                        }
                    },
                    {
                        key: "Cuenta en dólares",
                        value: "191-0030271-1-67",
                        textType: {
                            family: TextFamily.bold,
                            size: TextSize.md
                        }
                    },
                    {
                        key: "Plazo maximo de vencimiento",
                        value: "180 días",
                        textType: {
                            family: TextFamily.bold,
                            size: TextSize.md
                        }
                    },
                    {
                        key: "Modo de asignación de línea",
                        value: "Automática",
                        textType: {
                            family: TextFamily.bold,
                            size: TextSize.md
                        }
                    },
                    {
                        key: "Correo de contacto",
                        value: "company@mail.com",
                        textType: {
                            family: TextFamily.bold,
                            size: TextSize.md
                        }
                    },
                    {
                        key: "Línea de crédito - Factoring",
                        value: "$ 4,426.00",
                        textType: {
                            family: TextFamily.bold,
                            size: TextSize.lg
                        }
                    }
                ]
            }
        ]
    }
}
