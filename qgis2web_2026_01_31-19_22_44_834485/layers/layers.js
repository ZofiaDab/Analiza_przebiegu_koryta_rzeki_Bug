var wms_layers = [];

var lyr_Raster_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMS/StandardResolution",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Raster",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Raster',
                            popuplayertitle: 'Raster',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Raster_0, 0]);
var format_VMAP_1 = new ol.format.GeoJSON();
var features_VMAP_1 = format_VMAP_1.readFeatures(json_VMAP_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VMAP_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VMAP_1.addFeatures(features_VMAP_1);
var lyr_VMAP_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VMAP_1, 
                style: style_VMAP_1,
                popuplayertitle: 'VMAP',
                interactive: true,
                title: '<img src="styles/legend/VMAP_1.png" /> VMAP'
            });
var format_SENTINEL_2 = new ol.format.GeoJSON();
var features_SENTINEL_2 = format_SENTINEL_2.readFeatures(json_SENTINEL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SENTINEL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SENTINEL_2.addFeatures(features_SENTINEL_2);
var lyr_SENTINEL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SENTINEL_2, 
                style: style_SENTINEL_2,
                popuplayertitle: 'SENTINEL',
                interactive: true,
                title: '<img src="styles/legend/SENTINEL_2.png" /> SENTINEL'
            });
var format_Archiwalna_3 = new ol.format.GeoJSON();
var features_Archiwalna_3 = format_Archiwalna_3.readFeatures(json_Archiwalna_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Archiwalna_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Archiwalna_3.addFeatures(features_Archiwalna_3);
var lyr_Archiwalna_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Archiwalna_3, 
                style: style_Archiwalna_3,
                popuplayertitle: 'Archiwalna',
                interactive: true,
                title: '<img src="styles/legend/Archiwalna_3.png" /> Archiwalna'
            });
var format_Siatka_2000_2024_4 = new ol.format.GeoJSON();
var features_Siatka_2000_2024_4 = format_Siatka_2000_2024_4.readFeatures(json_Siatka_2000_2024_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Siatka_2000_2024_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Siatka_2000_2024_4.addFeatures(features_Siatka_2000_2024_4);
var lyr_Siatka_2000_2024_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Siatka_2000_2024_4, 
                style: style_Siatka_2000_2024_4,
                popuplayertitle: 'Siatka_2000_2024',
                interactive: true,
    title: 'Siatka_2000_2024<br />\
    <img src="styles/legend/Siatka_2000_2024_4_0.png" /> -83,3 - -80<br />\
    <img src="styles/legend/Siatka_2000_2024_4_1.png" /> -80 - -60<br />\
    <img src="styles/legend/Siatka_2000_2024_4_2.png" /> -60 - -40<br />\
    <img src="styles/legend/Siatka_2000_2024_4_3.png" /> -40 - -20<br />\
    <img src="styles/legend/Siatka_2000_2024_4_4.png" /> -20 - 0<br />\
    <img src="styles/legend/Siatka_2000_2024_4_5.png" /> 0 - 20<br />\
    <img src="styles/legend/Siatka_2000_2024_4_6.png" /> 20 - 26,5<br />' });
var format_Siatkaa_1940_2000_5 = new ol.format.GeoJSON();
var features_Siatkaa_1940_2000_5 = format_Siatkaa_1940_2000_5.readFeatures(json_Siatkaa_1940_2000_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Siatkaa_1940_2000_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Siatkaa_1940_2000_5.addFeatures(features_Siatkaa_1940_2000_5);
var lyr_Siatkaa_1940_2000_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Siatkaa_1940_2000_5, 
                style: style_Siatkaa_1940_2000_5,
                popuplayertitle: 'Siatkaa_1940_2000',
                interactive: true,
    title: 'Siatkaa_1940_2000<br />\
    <img src="styles/legend/Siatkaa_1940_2000_5_0.png" /> -93,884752 - -80<br />\
    <img src="styles/legend/Siatkaa_1940_2000_5_1.png" /> -80 - -60<br />\
    <img src="styles/legend/Siatkaa_1940_2000_5_2.png" /> -60 - -40<br />\
    <img src="styles/legend/Siatkaa_1940_2000_5_3.png" /> -40 - -20<br />\
    <img src="styles/legend/Siatkaa_1940_2000_5_4.png" /> -20 - 0<br />\
    <img src="styles/legend/Siatkaa_1940_2000_5_5.png" /> 0 - 20<br />\
    <img src="styles/legend/Siatkaa_1940_2000_5_6.png" /> 20 - 40<br />\
    <img src="styles/legend/Siatkaa_1940_2000_5_7.png" /> 40 - 60<br />\
    <img src="styles/legend/Siatkaa_1940_2000_5_8.png" /> 60 - 80<br />\
    <img src="styles/legend/Siatkaa_1940_2000_5_9.png" /> 80 - 100<br />\
    <img src="styles/legend/Siatkaa_1940_2000_5_10.png" /> 100 - 100,000021<br />' });
var format_tamgdziekiedykolwiekplynela_6 = new ol.format.GeoJSON();
var features_tamgdziekiedykolwiekplynela_6 = format_tamgdziekiedykolwiekplynela_6.readFeatures(json_tamgdziekiedykolwiekplynela_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tamgdziekiedykolwiekplynela_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tamgdziekiedykolwiekplynela_6.addFeatures(features_tamgdziekiedykolwiekplynela_6);
var lyr_tamgdziekiedykolwiekplynela_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tamgdziekiedykolwiekplynela_6, 
                style: style_tamgdziekiedykolwiekplynela_6,
                popuplayertitle: 'tamgdziekiedykolwiekplynela',
                interactive: true,
                title: '<img src="styles/legend/tamgdziekiedykolwiekplynela_6.png" /> tamgdziekiedykolwiekplynela'
            });
var format_tamgdziezawszeplynela_7 = new ol.format.GeoJSON();
var features_tamgdziezawszeplynela_7 = format_tamgdziezawszeplynela_7.readFeatures(json_tamgdziezawszeplynela_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tamgdziezawszeplynela_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tamgdziezawszeplynela_7.addFeatures(features_tamgdziezawszeplynela_7);
var lyr_tamgdziezawszeplynela_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tamgdziezawszeplynela_7, 
                style: style_tamgdziezawszeplynela_7,
                popuplayertitle: 'tamgdziezawszeplynela',
                interactive: true,
                title: '<img src="styles/legend/tamgdziezawszeplynela_7.png" /> tamgdziezawszeplynela'
            });

lyr_Raster_0.setVisible(true);lyr_VMAP_1.setVisible(true);lyr_SENTINEL_2.setVisible(true);lyr_Archiwalna_3.setVisible(true);lyr_Siatka_2000_2024_4.setVisible(true);lyr_Siatkaa_1940_2000_5.setVisible(true);lyr_tamgdziekiedykolwiekplynela_6.setVisible(true);lyr_tamgdziezawszeplynela_7.setVisible(true);
var layersList = [lyr_Raster_0,lyr_VMAP_1,lyr_SENTINEL_2,lyr_Archiwalna_3,lyr_Siatka_2000_2024_4,lyr_Siatkaa_1940_2000_5,lyr_tamgdziekiedykolwiekplynela_6,lyr_tamgdziezawszeplynela_7];
lyr_VMAP_1.set('fieldAliases', {'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Pow': 'Pow', 'Obw': 'Obw', 'wP': 'wP', });
lyr_SENTINEL_2.set('fieldAliases', {'FID_1': 'FID_1', 'Id': 'Id', 'gridcode': 'gridcode', 'InPoly_FID': 'InPoly_FID', 'Pow': 'Pow', 'Obw': 'Obw', 'wP': 'wP', });
lyr_Archiwalna_3.set('fieldAliases', {'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Pow': 'Pow', 'Obw': 'Obw', 'wP': 'wP', });
lyr_Siatka_2000_2024_4.set('fieldAliases', {'Id': 'Id', 'GRID_ID': 'GRID_ID', 'PERCENTAGE': 'PERCENTAGE', 'PERCENTA_1': 'PERCENTA_1', 'PERCENTA_2': 'PERCENTA_2', 'ab': 'ab', 'bc': 'bc', });
lyr_Siatkaa_1940_2000_5.set('fieldAliases', {'Id': 'Id', 'GRID_ID': 'GRID_ID', 'PERCENTAGE': 'PERCENTAGE', 'PERCENTA_1': 'PERCENTA_1', 'PERCENTA_2': 'PERCENTA_2', 'ab': 'ab', 'bc': 'bc', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_tamgdziekiedykolwiekplynela_6.set('fieldAliases', {'FID_smooth': 'FID_smooth', 'FID_1': 'FID_1', 'Id': 'Id', 'gridcode': 'gridcode', 'InPoly_FID': 'InPoly_FID', 'FID_HYDRO_': 'FID_HYDRO_', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_1': 'ID_1', 'FID_mapa_a': 'FID_mapa_a', 'Id_12': 'Id_12', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_tamgdziezawszeplynela_7.set('fieldAliases', {'FID_smooth': 'FID_smooth', 'FID_1': 'FID_1', 'Id': 'Id', 'gridcode': 'gridcode', 'InPoly_FID': 'InPoly_FID', 'FID_mapa_a': 'FID_mapa_a', 'Id_1': 'Id_1', 'FID_HYDRO_': 'FID_HYDRO_', 'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID_12': 'ID_12', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_VMAP_1.set('fieldImages', {'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Pow': 'TextEdit', 'Obw': 'TextEdit', 'wP': 'TextEdit', });
lyr_SENTINEL_2.set('fieldImages', {'FID_1': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'InPoly_FID': 'TextEdit', 'Pow': 'TextEdit', 'Obw': 'TextEdit', 'wP': 'TextEdit', });
lyr_Archiwalna_3.set('fieldImages', {'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Pow': 'TextEdit', 'Obw': 'TextEdit', 'wP': 'TextEdit', });
lyr_Siatka_2000_2024_4.set('fieldImages', {'Id': 'Range', 'GRID_ID': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'PERCENTA_1': 'TextEdit', 'PERCENTA_2': 'TextEdit', 'ab': 'TextEdit', 'bc': 'TextEdit', });
lyr_Siatkaa_1940_2000_5.set('fieldImages', {'Id': 'TextEdit', 'GRID_ID': 'TextEdit', 'PERCENTAGE': 'TextEdit', 'PERCENTA_1': 'TextEdit', 'PERCENTA_2': 'TextEdit', 'ab': 'TextEdit', 'bc': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_tamgdziekiedykolwiekplynela_6.set('fieldImages', {'FID_smooth': 'TextEdit', 'FID_1': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'InPoly_FID': 'TextEdit', 'FID_HYDRO_': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_1': 'TextEdit', 'FID_mapa_a': 'TextEdit', 'Id_12': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_tamgdziezawszeplynela_7.set('fieldImages', {'FID_smooth': 'TextEdit', 'FID_1': 'TextEdit', 'Id': 'TextEdit', 'gridcode': 'TextEdit', 'InPoly_FID': 'TextEdit', 'FID_mapa_a': 'TextEdit', 'Id_1': 'TextEdit', 'FID_HYDRO_': 'TextEdit', 'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID_12': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_VMAP_1.set('fieldLabels', {'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Pow': 'no label', 'Obw': 'no label', 'wP': 'no label', });
lyr_SENTINEL_2.set('fieldLabels', {'FID_1': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'InPoly_FID': 'no label', 'Pow': 'no label', 'Obw': 'no label', 'wP': 'no label', });
lyr_Archiwalna_3.set('fieldLabels', {'Id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Pow': 'no label', 'Obw': 'no label', 'wP': 'no label', });
lyr_Siatka_2000_2024_4.set('fieldLabels', {'Id': 'no label', 'GRID_ID': 'no label', 'PERCENTAGE': 'no label', 'PERCENTA_1': 'no label', 'PERCENTA_2': 'no label', 'ab': 'no label', 'bc': 'no label', });
lyr_Siatkaa_1940_2000_5.set('fieldLabels', {'Id': 'no label', 'GRID_ID': 'no label', 'PERCENTAGE': 'no label', 'PERCENTA_1': 'no label', 'PERCENTA_2': 'no label', 'ab': 'no label', 'bc': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_tamgdziekiedykolwiekplynela_6.set('fieldLabels', {'FID_smooth': 'no label', 'FID_1': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'InPoly_FID': 'no label', 'FID_HYDRO_': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID_1': 'no label', 'FID_mapa_a': 'no label', 'Id_12': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_tamgdziezawszeplynela_7.set('fieldLabels', {'FID_smooth': 'no label', 'FID_1': 'no label', 'Id': 'no label', 'gridcode': 'no label', 'InPoly_FID': 'no label', 'FID_mapa_a': 'no label', 'Id_1': 'no label', 'FID_HYDRO_': 'no label', 'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID_12': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_tamgdziezawszeplynela_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});