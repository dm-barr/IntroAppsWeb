<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:output method="html" encoding="UTF-8" indent="yes"/>

    <xsl:template match="/informacionNutricional">
        <html lang="es">
        <head>
            <meta charset="UTF-8"/>
            <title>Información Nutricional</title>

            <style>
                body {
                    font-family: Arial, sans-serif;
                }
                table {
                    border-collapse: collapse;
                    width: 50%;
                }
                th, td {
                    border: 1px solid #000;
                    padding: 8px;
                }
                th {
                    background-color: #f2f2f2;
                }
                caption {
                    font-weight: bold;
                    margin-bottom: 10px;
                }
            </style>
        </head>

        <body>

            <h2>
                <xsl:value-of select="producto/nombre"/>
            </h2>

            <p><strong>Tipo:</strong> <xsl:value-of select="producto/tipo"/></p>
            <p><strong>Porción:</strong> <xsl:value-of select="porcion/tamano"/></p>

            <table>
                <caption>Información Nutricional</caption>
                <tr>
                    <th>Nutriente</th>
                    <th>Cantidad</th>
                </tr>

                <tr>
                    <td>Calorías Totales</td>
                    <td><xsl:value-of select="valoresNutricionales/calorias/total"/></td>
                </tr>

                <tr>
                    <td>Calorías de Grasa</td>
                    <td><xsl:value-of select="valoresNutricionales/calorias/deGrasa"/></td>
                </tr>

                <tr>
                    <td>Grasa Total</td>
                    <td>
                        <xsl:value-of select="valoresNutricionales/grasa/total"/>
                        <xsl:text> </xsl:text>
                        <xsl:value-of select="valoresNutricionales/grasa/total/@unidad"/>
                    </td>
                </tr>

                <tr>
                    <td>Grasa Saturada</td>
                    <td>
                        <xsl:value-of select="valoresNutricionales/grasa/saturada"/>
                        <xsl:text> </xsl:text>
                        <xsl:value-of select="valoresNutricionales/grasa/saturada/@unidad"/>
                    </td>
                </tr>

                <tr>
                    <td>Colesterol</td>
                    <td>
                        <xsl:value-of select="valoresNutricionales/colesterol"/>
                        <xsl:text> </xsl:text>
                        <xsl:value-of select="valoresNutricionales/colesterol/@unidad"/>
                    </td>
                </tr>

                <tr>
                    <td>Sodio</td>
                    <td>
                        <xsl:value-of select="valoresNutricionales/sodio"/>
                        <xsl:text> </xsl:text>
                        <xsl:value-of select="valoresNutricionales/sodio/@unidad"/>
                    </td>
                </tr>

                <tr>
                    <td>Carbohidratos Totales</td>
                    <td>
                        <xsl:value-of select="valoresNutricionales/carbohidratos/total"/>
                        <xsl:text> </xsl:text>
                        <xsl:value-of select="valoresNutricionales/carbohidratos/total/@unidad"/>
                    </td>
                </tr>

                <tr>
                    <td>Fibra</td>
                    <td>
                        <xsl:value-of select="valoresNutricionales/carbohidratos/fibra"/>
                        <xsl:text> </xsl:text>
                        <xsl:value-of select="valoresNutricionales/carbohidratos/fibra/@unidad"/>
                    </td>
                </tr>

                <tr>
                    <td>Azúcares</td>
                    <td>
                        <xsl:value-of select="valoresNutricionales/carbohidratos/azucares"/>
                        <xsl:text> </xsl:text>
                        <xsl:value-of select="valoresNutricionales/carbohidratos/azucares/@unidad"/>
                    </td>
                </tr>

                <tr>
                    <td>Proteína</td>
                    <td>
                        <xsl:value-of select="valoresNutricionales/proteina"/>
                        <xsl:text> </xsl:text>
                        <xsl:value-of select="valoresNutricionales/proteina/@unidad"/>
                    </td>
                </tr>

            </table>

        </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
