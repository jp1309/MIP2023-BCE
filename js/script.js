// Initialize global variables
var network;
var nodes, edges;

function drawGraph() {
    var container = document.getElementById('mynetwork');

    // Nodes data
    nodes = new vis.DataSet([
        { "color": "#d1ea9f", "id": "Cultivo de arroz", "label": "Cultivo de arroz", "shape": "dot", "size": 6, "title": "Cultivo de arroz<br>Insumos recibidos: 164,278.27<br>Insumos enviados: 365,051.75" },
        { "color": "#cee79d", "id": "Elaboración de productos de molinería", "label": "Elaboración de productos de molinería", "shape": "dot", "size": 8, "title": "Elaboración de productos de molinería<br>Insumos recibidos: 430,001.41<br>Insumos enviados: 530,079.87" },
        { "color": "#d0e99e", "id": "Cultivo de frutos oleaginosos", "label": "Cultivo de frutos oleaginosos", "shape": "dot", "size": 6, "title": "Cultivo de frutos oleaginosos<br>Insumos recibidos: 136,377.12<br>Insumos enviados: 460,855.07" },
        { "color": "#cfe89d", "id": "Elaboración de aceites y grasas de origen vegetal y animal", "label": "Elaboración de aceites y grasas de origen vegetal y animal", "shape": "dot", "size": 11, "title": "Elaboración de aceites y grasas de origen vegetal y animal<br>Insumos recibidos: 736,821.89<br>Insumos enviados: 492,939.37" },
        { "color": "#cde69c", "id": "Actividades de apoyo a la agricultura, poscosecha y tratamiento de semillas para propagación", "label": "Actividades de apoyo a la agricultura, poscosecha y tratamiento de semillas para propagación", "shape": "dot", "size": 6, "title": "Actividades de apoyo a la agricultura, poscosecha y tratamiento de semillas para propagación<br>Insumos recibidos: 191,302.45<br>Insumos enviados: 622,607.56" },
        { "color": "#d6eda1", "id": "Cultivos de frutas, y otros tipos de cultivos n.c.p.", "label": "Cultivos de frutas, y otros tipos de cultivos n.c.p.", "shape": "dot", "size": 19, "title": "Cultivos de frutas, y otros tipos de cultivos n.c.p.<br>Insumos recibidos: 1,639,828.46<br>Insumos enviados: 154,196.83" },
        { "color": "#bad891", "id": "Ganadería", "label": "Ganadería", "shape": "dot", "size": 17, "title": "Ganadería<br>Insumos recibidos: 1,350,159.91<br>Insumos enviados: 1,578,617.59" },
        { "color": "#cce59b", "id": "Elaboración y conservación de carne", "label": "Elaboración y conservación de carne", "shape": "dot", "size": 16, "title": "Elaboración y conservación de carne<br>Insumos recibidos: 1,218,222.68<br>Insumos enviados: 674,282.48" },
        { "color": "#d2ea9f", "id": "Elaboración de productos lácteos", "label": "Elaboración de productos lácteos", "shape": "dot", "size": 13, "title": "Elaboración de productos lácteos<br>Insumos recibidos: 961,133.27<br>Insumos enviados: 339,317.67" },
        { "color": "#80aa71", "id": "Pesca y acuicultura", "label": "Pesca y acuicultura", "shape": "dot", "size": 33, "title": "Pesca y acuicultura<br>Insumos recibidos: 3,116,616.37<br>Insumos enviados: 4,621,157.03" },
        { "color": "#d2ea9f", "id": "Preparación y conservación de pescado y otros productos acuaticos elaborados", "label": "Preparación y conservación de pescado y otros productos acuaticos elaborados", "shape": "dot", "size": 19, "title": "Preparación y conservación de pescado y otros productos acuaticos elaborados<br>Insumos recibidos: 1,612,255.85<br>Insumos enviados: 339,141.12" },
        { "color": "#d8efa2", "id": "Procesamiento y conservación de camarón", "label": "Procesamiento y conservación de camarón", "shape": "dot", "size": 31, "title": "Procesamiento y conservación de camarón<br>Insumos recibidos: 2,928,870.57<br>Insumos enviados: 454.00" },
        { "color": "#8ab277", "id": "Servicios Petroleros - Explotación de otras minas y canteras, y actividades de apoyo", "label": "Servicios Petroleros - Explotación de otras minas y canteras, y actividades de apoyo", "shape": "dot", "size": 16, "title": "Servicios Petroleros - Explotación de otras minas y canteras, y actividades de apoyo<br>Insumos recibidos: 1,231,635.74<br>Insumos enviados: 4,062,895.00" },
        { "color": "#c2de96", "id": "Extracción de petróleo crudo y gas natural", "label": "Extracción de petróleo crudo y gas natural", "shape": "dot", "size": 36, "title": "Extracción de petróleo crudo y gas natural<br>Insumos recibidos: 3,465,826.38<br>Insumos enviados: 1,153,533.42" },
        { "color": "#a4c685", "id": "Fabricación de productos refinados de petróleo y de otros", "label": "Fabricación de productos refinados de petróleo y de otros", "shape": "dot", "size": 21, "title": "Fabricación de productos refinados de petróleo y de otros<br>Insumos recibidos: 1,813,747.40<br>Insumos enviados: 2,753,651.18" },
        { "color": "#d2ea9f", "id": "Extracción de minerales metalíferos", "label": "Extracción de minerales metalíferos", "shape": "dot", "size": 18, "title": "Extracción de minerales metalíferos<br>Insumos recibidos: 1,497,621.06<br>Insumos enviados: 360,788.68" },
        { "color": "#bbd892", "id": "Fabricación de metales comunes ", "label": "Fabricación de metales comunes ", "shape": "dot", "size": 12, "title": "Fabricación de metales comunes <br>Insumos recibidos: 781,664.91<br>Insumos enviados: 1,554,329.67" },
        { "color": "#d7eea2", "id": "Elaboración de productos de la panadería y pastelería", "label": "Elaboración de productos de la panadería y pastelería", "shape": "dot", "size": 8, "title": "Elaboración de productos de la panadería y pastelería<br>Insumos recibidos: 406,960.07<br>Insumos enviados: 81,744.17" },
        { "color": "#afcf8b", "id": "Elaboración de alimentos preparados para animales", "label": "Elaboración de alimentos preparados para animales", "shape": "dot", "size": 13, "title": "Elaboración de alimentos preparados para animales<br>Insumos recibidos: 890,680.30<br>Insumos enviados: 2,166,587.06" },
        { "color": "#cfe89d", "id": "Producción de madera y de productos de madera", "label": "Producción de madera y de productos de madera", "shape": "dot", "size": 9, "title": "Producción de madera y de productos de madera<br>Insumos recibidos: 449,786.10<br>Insumos enviados: 485,088.24" },
        { "color": "#c9e49a", "id": "Construcción", "label": "Construcción", "shape": "dot", "size": 44, "title": "Construcción<br>Insumos recibidos: 4,339,659.56<br>Insumos enviados: 788,574.32" },
        { "color": "#c3de96", "id": "Fabricación de papel y productos de papel", "label": "Fabricación de papel y productos de papel", "shape": "dot", "size": 13, "title": "Fabricación de papel y productos de papel<br>Insumos recibidos: 915,989.23<br>Insumos enviados: 1,130,047.01" },
        { "color": "#a7c886", "id": "Suministro de electricidad, gas, vapor y aire acondicionado", "label": "Suministro de electricidad, gas, vapor y aire acondicionado", "shape": "dot", "size": 20, "title": "Suministro de electricidad, gas, vapor y aire acondicionado<br>Insumos recibidos: 1,723,135.05<br>Insumos enviados: 2,599,540.18" },
        { "color": "#6a9864", "id": "Transporte y almacenamiento", "label": "Transporte y almacenamiento", "shape": "dot", "size": 44, "title": "Transporte y almacenamiento<br>Insumos recibidos: 4,349,481.56<br>Insumos enviados: 5,753,080.33" },
        { "color": "#d3eb9f", "id": "Fabricación de productos farmacéuticos y medicamentos", "label": "Fabricación de productos farmacéuticos y medicamentos", "shape": "dot", "size": 6, "title": "Fabricación de productos farmacéuticos y medicamentos<br>Insumos recibidos: 118,970.92<br>Insumos enviados: 298,906.20" },
        { "color": "#c3df96", "id": "Actividades de atención de la salud humana y de asistencia social privada", "label": "Actividades de atención de la salud humana y de asistencia social privada", "shape": "dot", "size": 22, "title": "Actividades de atención de la salud humana y de asistencia social privada<br>Insumos recibidos: 1,890,387.61<br>Insumos enviados: 1,111,160.11" },
        { "color": "#c8e399", "id": "Fabricación de productos de plástico", "label": "Fabricación de productos de plástico", "shape": "dot", "size": 8, "title": "Fabricación de productos de plástico<br>Insumos recibidos: 361,341.98<br>Insumos enviados: 841,181.08" },
        { "color": "#c5e097", "id": "Fabricación de cemento, artículos de hormigón y piedra", "label": "Fabricación de cemento, artículos de hormigón y piedra", "shape": "dot", "size": 9, "title": "Fabricación de cemento, artículos de hormigón y piedra<br>Insumos recibidos: 461,128.95<br>Insumos enviados: 1,038,518.85" },
        { "color": "#cee79d", "id": "Fabricación de productos derivados del metal, excepto maquinaria y equipo", "label": "Fabricación de productos derivados del metal, excepto maquinaria y equipo", "shape": "dot", "size": 8, "title": "Fabricación de productos derivados del metal, excepto maquinaria y equipo<br>Insumos recibidos: 348,387.00<br>Insumos enviados: 545,781.51" },
        { "color": "#bbd892", "id": "Actividades inmobiliarias", "label": "Actividades inmobiliarias", "shape": "dot", "size": 29, "title": "Actividades inmobiliarias<br>Insumos recibidos: 2,726,283.56<br>Insumos enviados: 1,527,807.84" },
        { "color": "#004529", "id": "Actividades profesionales, científicas, técnicas y administrativas", "label": "Actividades profesionales, científicas, técnicas y administrativas", "shape": "dot", "size": 50, "title": "Actividades profesionales, científicas, técnicas y administrativas<br>Insumos recibidos: 4,949,615.35<br>Insumos enviados: 11,289,197.01" },
        { "color": "#a6c886", "id": "Información y comunicación", "label": "Información y comunicación", "shape": "dot", "size": 25, "title": "Información y comunicación<br>Insumos recibidos: 2,232,645.25<br>Insumos enviados: 2,636,218.20" },
        { "color": "#b0d08c", "id": "Actividades de servicios financieros, excepto las de seguros y fondos de pensiones", "label": "Actividades de servicios financieros, excepto las de seguros y fondos de pensiones", "shape": "dot", "size": 21, "title": "Actividades de servicios financieros, excepto las de seguros y fondos de pensiones<br>Insumos recibidos: 1,856,192.64<br>Insumos enviados: 2,098,016.13" },
        { "color": "#d7efa2", "id": "Administración pública y defensa; planes de seguridad social de afiliación obligatoria", "label": "Administración pública y defensa; planes de seguridad social de afiliación obligatoria", "shape": "dot", "size": 15, "title": "Administración pública y defensa; planes de seguridad social de afiliación obligatoria<br>Insumos recibidos: 1,168,576.97<br>Insumos enviados: 53,424.55" },
        { "color": "#c0dc95", "id": "Seguros, reaseguros y fondos de pensiones, excepto los planes de seguridad social de afiliación obligatoria", "label": "Seguros, reaseguros y fondos de pensiones, excepto los planes de seguridad social de afiliación obligatoria", "shape": "dot", "size": 14, "title": "Seguros, reaseguros y fondos de pensiones, excepto los planes de seguridad social de afiliación obligatoria<br>Insumos recibidos: 1,029,655.12<br>Insumos enviados: 1,276,420.28" },
        { "color": "#cde69c", "id": "Actividades auxiliares de las actividades de servicios financieros", "label": "Actividades auxiliares de las actividades de servicios financieros", "shape": "dot", "size": 8, "title": "Actividades auxiliares de las actividades de servicios financieros<br>Insumos recibidos: 331,546.82<br>Insumos enviados: 611,593.90" },
        { "color": "#d5eda1", "id": "Servicios de enseñanza privada", "label": "Servicios de enseñanza privada", "shape": "dot", "size": 14, "title": "Servicios de enseñanza privada<br>Insumos recibidos: 998,102.04<br>Insumos enviados: 184,830.54" },
        { "color": "#c7e299", "id": "Servicios de asociaciones, personales; esparcimiento; culturales y deportivos", "label": "Servicios de asociaciones, personales; esparcimiento; culturales y deportivos", "shape": "dot", "size": 15, "title": "Servicios de asociaciones, personales; esparcimiento; culturales y deportivos<br>Insumos recibidos: 1,174,053.03<br>Insumos enviados: 885,796.89" }
    ]);

    // Edges data
    edges = new vis.DataSet([
        { "arrows": "to", "from": "Cultivo de arroz", "title": "Flujo: 295,374.00", "to": "Elaboración de productos de molinería", "value": 295374.002582297, "width": 1 },
        { "arrows": "to", "from": "Cultivo de frutos oleaginosos", "title": "Flujo: 418,843.69", "to": "Elaboración de aceites y grasas de origen vegetal y animal", "value": 418843.694210602, "width": 1 },
        { "arrows": "to", "from": "Actividades de apoyo a la agricultura, poscosecha y tratamiento de semillas para propagación", "title": "Flujo: 255,153.69", "to": "Cultivos de frutas, y otros tipos de cultivos n.c.p.", "value": 255153.691468546, "width": 1 },
        { "arrows": "to", "from": "Ganadería", "title": "Flujo: 906,009.52", "to": "Elaboración y conservación de carne", "value": 906009.5235547, "width": 1 },
        { "arrows": "to", "from": "Ganadería", "title": "Flujo: 426,093.38", "to": "Elaboración de productos lácteos", "value": 426093.38238324, "width": 1 },
        { "arrows": "to", "from": "Pesca y acuicultura", "title": "Flujo: 1,125,381.39", "to": "Pesca y acuicultura", "value": 1125381.39474257, "width": 1 },
        { "arrows": "to", "from": "Pesca y acuicultura", "title": "Flujo: 788,748.60", "to": "Preparación y conservación de pescado y otros productos acuaticos elaborados", "value": 788748.602732795, "width": 1 },
        { "arrows": "to", "from": "Pesca y acuicultura", "title": "Flujo: 2,675,125.57", "to": "Procesamiento y conservación de camarón", "value": 2675125.5747, "width": 1 },
        { "arrows": "to", "from": "Servicios Petroleros - Explotación de otras minas y canteras, y actividades de apoyo", "title": "Flujo: 812,579.00", "to": "Servicios Petroleros - Explotación de otras minas y canteras, y actividades de apoyo", "value": 812579.0, "width": 1 },
        { "arrows": "to", "from": "Servicios Petroleros - Explotación de otras minas y canteras, y actividades de apoyo", "title": "Flujo: 3,250,316.00", "to": "Extracción de petróleo crudo y gas natural", "value": 3250316.0, "width": 1 },
        { "arrows": "to", "from": "Extracción de petróleo crudo y gas natural", "title": "Flujo: 1,065,960.70", "to": "Fabricación de productos refinados de petróleo y de otros", "value": 1065960.70192835, "width": 1 },
        { "arrows": "to", "from": "Extracción de minerales metalíferos", "title": "Flujo: 348,995.60", "to": "Fabricación de metales comunes ", "value": 348995.603435383, "width": 1 },
        { "arrows": "to", "from": "Elaboración de productos lácteos", "title": "Flujo: 211,079.91", "to": "Elaboración de productos lácteos", "value": 211079.909458344, "width": 1 },
        { "arrows": "to", "from": "Elaboración de productos de molinería", "title": "Flujo: 225,377.51", "to": "Elaboración de productos de la panadería y pastelería", "value": 225377.513035058, "width": 1 },
        { "arrows": "to", "from": "Elaboración de alimentos preparados para animales", "title": "Flujo: 639,253.70", "to": "Ganadería", "value": 639253.697282568, "width": 1 },
        { "arrows": "to", "from": "Elaboración de alimentos preparados para animales", "title": "Flujo: 1,391,316.79", "to": "Pesca y acuicultura", "value": 1391316.79080943, "width": 1 },
        { "arrows": "to", "from": "Producción de madera y de productos de madera", "title": "Flujo: 242,436.69", "to": "Construcción", "value": 242436.687966406, "width": 1 },
        { "arrows": "to", "from": "Fabricación de papel y productos de papel", "title": "Flujo: 378,465.62", "to": "Fabricación de papel y productos de papel", "value": 378465.620075155, "width": 1 },
        { "arrows": "to", "from": "Fabricación de productos refinados de petróleo y de otros", "title": "Flujo: 245,618.18", "to": "Suministro de electricidad, gas, vapor y aire acondicionado", "value": 245618.181560365, "width": 1 },
        { "arrows": "to", "from": "Fabricación de productos refinados de petróleo y de otros", "title": "Flujo: 1,982,017.23", "to": "Transporte y almacenamiento", "value": 1982017.22988479, "width": 1 },
        { "arrows": "to", "from": "Fabricación de productos farmacéuticos y medicamentos", "title": "Flujo: 207,623.00", "to": "Actividades de atención de la salud humana y de asistencia social privada", "value": 207622.998550563, "width": 1 },
        { "arrows": "to", "from": "Fabricación de productos de plástico", "title": "Flujo: 216,734.14", "to": "Cultivos de frutas, y otros tipos de cultivos n.c.p.", "value": 216734.142000603, "width": 1 },
        { "arrows": "to", "from": "Fabricación de cemento, artículos de hormigón y piedra", "title": "Flujo: 934,068.84", "to": "Construcción", "value": 934068.841564673, "width": 1 },
        { "arrows": "to", "from": "Fabricación de metales comunes ", "title": "Flujo: 210,732.31", "to": "Extracción de minerales metalíferos", "value": 210732.309471454, "width": 1 },
        { "arrows": "to", "from": "Fabricación de metales comunes ", "title": "Flujo: 784,362.91", "to": "Construcción", "value": 784362.90688254, "width": 1 },
        { "arrows": "to", "from": "Fabricación de productos derivados del metal, excepto maquinaria y equipo", "title": "Flujo: 220,038.24", "to": "Construcción", "value": 220038.244125178, "width": 1 },
        { "arrows": "to", "from": "Suministro de electricidad, gas, vapor y aire acondicionado", "title": "Flujo: 1,215,912.51", "to": "Suministro de electricidad, gas, vapor y aire acondicionado", "value": 1215912.51056915, "width": 1 },
        { "arrows": "to", "from": "Construcción", "title": "Flujo: 300,685.60", "to": "Construcción", "value": 300685.597900742, "width": 1 },
        { "arrows": "to", "from": "Construcción", "title": "Flujo: 266,027.37", "to": "Actividades inmobiliarias", "value": 266027.370797333, "width": 1 },
        { "arrows": "to", "from": "Transporte y almacenamiento", "title": "Flujo: 456,290.85", "to": "Cultivos de frutas, y otros tipos de cultivos n.c.p.", "value": 456290.845796446, "width": 1 },
        { "arrows": "to", "from": "Transporte y almacenamiento", "title": "Flujo: 270,883.29", "to": "Extracción de minerales metalíferos", "value": 270883.294341677, "width": 1 },
        { "arrows": "to", "from": "Transporte y almacenamiento", "title": "Flujo: 253,896.46", "to": "Preparación y conservación de pescado y otros productos acuaticos elaborados", "value": 253896.463642101, "width": 1 },
        { "arrows": "to", "from": "Transporte y almacenamiento", "title": "Flujo: 296,893.28", "to": "Fabricación de papel y productos de papel", "value": 296893.284955124, "width": 1 },
        { "arrows": "to", "from": "Transporte y almacenamiento", "title": "Flujo: 1,016,011.45", "to": "Transporte y almacenamiento", "value": 1016011.44692972, "width": 1 },
        { "arrows": "to", "from": "Transporte y almacenamiento", "title": "Flujo: 595,042.06", "to": "Actividades profesionales, científicas, técnicas y administrativas", "value": 595042.061177302, "width": 1 },
        { "arrows": "to", "from": "Información y comunicación", "title": "Flujo: 1,148,422.56", "to": "Información y comunicación", "value": 1148422.55783788, "width": 1 },
        { "arrows": "to", "from": "Información y comunicación", "title": "Flujo: 441,801.49", "to": "Actividades de servicios financieros, excepto las de seguros y fondos de pensiones", "value": 441801.489937928, "width": 1 },
        { "arrows": "to", "from": "Información y comunicación", "title": "Flujo: 299,884.55", "to": "Actividades profesionales, científicas, técnicas y administrativas", "value": 299884.552153239, "width": 1 },
        { "arrows": "to", "from": "Actividades de servicios financieros, excepto las de seguros y fondos de pensiones", "title": "Flujo: 259,469.39", "to": "Actividades de servicios financieros, excepto las de seguros y fondos de pensiones", "value": 259469.393902635, "width": 1 },
        { "arrows": "to", "from": "Actividades de servicios financieros, excepto las de seguros y fondos de pensiones", "title": "Flujo: 321,424.78", "to": "Administración pública y defensa; planes de seguridad social de afiliación obligatoria", "value": 321424.7786649, "width": 1 },
        { "arrows": "to", "from": "Seguros, reaseguros y fondos de pensiones, excepto los planes de seguridad social de afiliación obligatoria", "title": "Flujo: 365,736.94", "to": "Seguros, reaseguros y fondos de pensiones, excepto los planes de seguridad social de afiliación obligatoria", "value": 365736.936774069, "width": 1 },
        { "arrows": "to", "from": "Actividades auxiliares de las actividades de servicios financieros", "title": "Flujo: 324,221.82", "to": "Seguros, reaseguros y fondos de pensiones, excepto los planes de seguridad social de afiliación obligatoria", "value": 324221.821120011, "width": 1 },
        { "arrows": "to", "from": "Actividades inmobiliarias", "title": "Flujo: 780,378.31", "to": "Actividades inmobiliarias", "value": 780378.305044836, "width": 1 },
        { "arrows": "to", "from": "Actividades inmobiliarias", "title": "Flujo: 210,815.23", "to": "Actividades profesionales, científicas, técnicas y administrativas", "value": 210815.231334641, "width": 1 },
        { "arrows": "to", "from": "Actividades profesionales, científicas, técnicas y administrativas", "title": "Flujo: 492,669.04", "to": "Extracción de minerales metalíferos", "value": 492669.038003504, "width": 1 },
        { "arrows": "to", "from": "Actividades profesionales, científicas, técnicas y administrativas", "title": "Flujo: 242,390.89", "to": "Fabricación de productos refinados de petróleo y de otros", "value": 242390.892149209, "width": 1 },
        { "arrows": "to", "from": "Actividades profesionales, científicas, técnicas y administrativas", "title": "Flujo: 528,758.11", "to": "Construcción", "value": 528758.113857889, "width": 1 },
        { "arrows": "to", "from": "Actividades profesionales, científicas, técnicas y administrativas", "title": "Flujo: 502,543.46", "to": "Transporte y almacenamiento", "value": 502543.464938562, "width": 1 },
        { "arrows": "to", "from": "Actividades profesionales, científicas, técnicas y administrativas", "title": "Flujo: 767,809.68", "to": "Información y comunicación", "value": 767809.676380883, "width": 1 },
        { "arrows": "to", "from": "Actividades profesionales, científicas, técnicas y administrativas", "title": "Flujo: 556,906.14", "to": "Actividades de servicios financieros, excepto las de seguros y fondos de pensiones", "value": 556906.136168085, "width": 1 },
        { "arrows": "to", "from": "Actividades profesionales, científicas, técnicas y administrativas", "title": "Flujo: 1,116,480.05", "to": "Actividades inmobiliarias", "value": 1116480.05367249, "width": 1 },
        { "arrows": "to", "from": "Actividades profesionales, científicas, técnicas y administrativas", "title": "Flujo: 2,427,945.67", "to": "Actividades profesionales, científicas, técnicas y administrativas", "value": 2427945.67291128, "width": 1 },
        { "arrows": "to", "from": "Actividades profesionales, científicas, técnicas y administrativas", "title": "Flujo: 325,456.55", "to": "Administración pública y defensa; planes de seguridad social de afiliación obligatoria", "value": 325456.545661801, "width": 1 },
        { "arrows": "to", "from": "Actividades profesionales, científicas, técnicas y administrativas", "title": "Flujo: 417,131.46", "to": "Servicios de enseñanza privada", "value": 417131.460478587, "width": 1 },
        { "arrows": "to", "from": "Actividades profesionales, científicas, técnicas y administrativas", "title": "Flujo: 332,089.73", "to": "Actividades de atención de la salud humana y de asistencia social privada", "value": 332089.734306143, "width": 1 },
        { "arrows": "to", "from": "Actividades profesionales, científicas, técnicas y administrativas", "title": "Flujo: 312,993.57", "to": "Servicios de asociaciones, personales; esparcimiento; culturales y deportivos", "value": 312993.565969305, "width": 1 },
        { "arrows": "to", "from": "Actividades de atención de la salud humana y de asistencia social privada", "title": "Flujo: 974,444.39", "to": "Actividades de atención de la salud humana y de asistencia social privada", "value": 974444.388022349, "width": 1 }
    ]);

    // Graph data
    var data = { nodes: nodes, edges: edges };

    // Configuration options
    var options = {
        "configure": {
            "enabled": true,
            "filter": [
                "physics"
            ],
            "container": document.getElementById("config")
        },
        "edges": {
            "color": {
                "inherit": true
            },
            "smooth": {
                "enabled": true,
                "type": "dynamic"
            },
            "arrows": {
                "to": { "enabled": true, "scaleFactor": 1, "type": "arrow" }
            }
        },
        "interaction": {
            "dragNodes": true,
            "hideEdgesOnDrag": false,
            "hideNodesOnDrag": false,
            "hover": true,
            "tooltipDelay": 200
        },
        "physics": {
            "barnesHut": {
                "avoidOverlap": 0,
                "centralGravity": 0.3,
                "damping": 0.09,
                "gravitationalConstant": -5000,
                "springConstant": 0.001,
                "springLength": 250
            },
            "enabled": true,
            "forceAtlas2Based": {
                "avoidOverlap": 0,
                "centralGravity": 0.01,
                "damping": 0.4,
                "gravitationalConstant": -75,
                "springConstant": 0.01,
                "springLength": 250
            },
            "solver": "forceAtlas2Based",
            "stabilization": {
                "enabled": true,
                "fit": true,
                "iterations": 1000,
                "onlyDynamicEdges": false,
                "updateInterval": 50
            }
        }
    };

    // Initialize Network
    network = new vis.Network(container, data, options);
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    drawGraph();
});
