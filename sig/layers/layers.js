var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_lainnya_0 = new ol.format.GeoJSON();
var features_lainnya_0 = format_lainnya_0.readFeatures(json_lainnya_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lainnya_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_lainnya_0.addFeatures(features_lainnya_0);var lyr_lainnya_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lainnya_0, 
                style: style_lainnya_0,
                title: '<img src="styles/legend/lainnya_0.png" /> lainnya'
            });var format_buddha_1 = new ol.format.GeoJSON();
var features_buddha_1 = format_buddha_1.readFeatures(json_buddha_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buddha_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_buddha_1.addFeatures(features_buddha_1);var lyr_buddha_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_buddha_1, 
                style: style_buddha_1,
                title: '<img src="styles/legend/buddha_1.png" /> buddha'
            });var format_hindu_2 = new ol.format.GeoJSON();
var features_hindu_2 = format_hindu_2.readFeatures(json_hindu_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hindu_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_hindu_2.addFeatures(features_hindu_2);var lyr_hindu_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_hindu_2, 
                style: style_hindu_2,
                title: '<img src="styles/legend/hindu_2.png" /> hindu'
            });var format_katolik_3 = new ol.format.GeoJSON();
var features_katolik_3 = format_katolik_3.readFeatures(json_katolik_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_katolik_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_katolik_3.addFeatures(features_katolik_3);var lyr_katolik_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_katolik_3, 
                style: style_katolik_3,
                title: '<img src="styles/legend/katolik_3.png" /> katolik'
            });var format_protestan_4 = new ol.format.GeoJSON();
var features_protestan_4 = format_protestan_4.readFeatures(json_protestan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_protestan_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_protestan_4.addFeatures(features_protestan_4);var lyr_protestan_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_protestan_4, 
                style: style_protestan_4,
                title: '<img src="styles/legend/protestan_4.png" /> protestan'
            });var format_islam_5 = new ol.format.GeoJSON();
var features_islam_5 = format_islam_5.readFeatures(json_islam_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_islam_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_islam_5.addFeatures(features_islam_5);var lyr_islam_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_islam_5, 
                style: style_islam_5,
                title: '<img src="styles/legend/islam_5.png" /> islam'
            });

lyr_lainnya_0.setVisible(false);lyr_buddha_1.setVisible(false);lyr_hindu_2.setVisible(false);lyr_katolik_3.setVisible(false);lyr_protestan_4.setVisible(false);lyr_islam_5.setVisible(true);
var layersList = [baseLayer,lyr_lainnya_0,lyr_buddha_1,lyr_hindu_2,lyr_katolik_3,lyr_protestan_4,lyr_islam_5];
lyr_lainnya_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'Kota': 'Kota', 'Provinsi': 'Provinsi', 'Umat Musli': 'Umat Musli', 'Masjid': 'Masjid', 'Protestan': 'Protestan', 'Gereja Pro': 'Gereja Pro', 'Katolik': 'Katolik', 'Gereja Kat': 'Gereja Kat', 'Hindu': 'Hindu', 'Pura': 'Pura', 'Buddha': 'Buddha', 'Vihara': 'Vihara', 'Lainnya': 'Lainnya', });
lyr_buddha_1.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'Kota': 'Kota', 'Provinsi': 'Provinsi', 'Umat Musli': 'Umat Musli', 'Masjid': 'Masjid', 'Protestan': 'Protestan', 'Gereja Pro': 'Gereja Pro', 'Katolik': 'Katolik', 'Gereja Kat': 'Gereja Kat', 'Hindu': 'Hindu', 'Pura': 'Pura', 'Buddha': 'Buddha', 'Vihara': 'Vihara', 'Lainnya': 'Lainnya', });
lyr_hindu_2.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'Kota': 'Kota', 'Provinsi': 'Provinsi', 'Umat Musli': 'Umat Musli', 'Masjid': 'Masjid', 'Protestan': 'Protestan', 'Gereja Pro': 'Gereja Pro', 'Katolik': 'Katolik', 'Gereja Kat': 'Gereja Kat', 'Hindu': 'Hindu', 'Pura': 'Pura', 'Buddha': 'Buddha', 'Vihara': 'Vihara', 'Lainnya': 'Lainnya', });
lyr_katolik_3.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'Kota': 'Kota', 'Provinsi': 'Provinsi', 'Umat Musli': 'Umat Musli', 'Masjid': 'Masjid', 'Protestan': 'Protestan', 'Gereja Pro': 'Gereja Pro', 'Katolik': 'Katolik', 'Gereja Kat': 'Gereja Kat', 'Hindu': 'Hindu', 'Pura': 'Pura', 'Buddha': 'Buddha', 'Vihara': 'Vihara', 'Lainnya': 'Lainnya', });
lyr_protestan_4.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'Kota': 'Kota', 'Provinsi': 'Provinsi', 'Umat Musli': 'Umat Musli', 'Masjid': 'Masjid', 'Protestan': 'Protestan', 'Gereja Pro': 'Gereja Pro', 'Katolik': 'Katolik', 'Gereja Kat': 'Gereja Kat', 'Hindu': 'Hindu', 'Pura': 'Pura', 'Buddha': 'Buddha', 'Vihara': 'Vihara', 'Lainnya': 'Lainnya', });
lyr_islam_5.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'Kota': 'Kota', 'Provinsi': 'Provinsi', 'Umat Musli': 'Umat Musli', 'Masjid': 'Masjid', 'Protestan': 'Protestan', 'Gereja Pro': 'Gereja Pro', 'Katolik': 'Katolik', 'Gereja Kat': 'Gereja Kat', 'Hindu': 'Hindu', 'Pura': 'Pura', 'Buddha': 'Buddha', 'Vihara': 'Vihara', 'Lainnya': 'Lainnya', });
lyr_lainnya_0.set('fieldImages', {'Kecamatan': 'TextEdit', 'Kota': 'TextEdit', 'Provinsi': 'TextEdit', 'Umat Musli': 'Hidden', 'Masjid': 'Hidden', 'Protestan': 'Hidden', 'Gereja Pro': 'Hidden', 'Katolik': 'Hidden', 'Gereja Kat': 'Hidden', 'Hindu': 'Hidden', 'Pura': 'Hidden', 'Buddha': 'Hidden', 'Vihara': 'Hidden', 'Lainnya': 'TextEdit', });
lyr_buddha_1.set('fieldImages', {'Kecamatan': 'TextEdit', 'Kota': 'TextEdit', 'Provinsi': 'TextEdit', 'Umat Musli': 'Hidden', 'Masjid': 'Hidden', 'Protestan': 'Hidden', 'Gereja Pro': 'Hidden', 'Katolik': 'Hidden', 'Gereja Kat': 'Hidden', 'Hindu': 'Hidden', 'Pura': 'Hidden', 'Buddha': 'TextEdit', 'Vihara': 'TextEdit', 'Lainnya': 'Hidden', });
lyr_hindu_2.set('fieldImages', {'Kecamatan': 'TextEdit', 'Kota': 'TextEdit', 'Provinsi': 'TextEdit', 'Umat Musli': 'Hidden', 'Masjid': 'Hidden', 'Protestan': 'Hidden', 'Gereja Pro': 'Hidden', 'Katolik': 'Hidden', 'Gereja Kat': 'Hidden', 'Hindu': 'TextEdit', 'Pura': 'TextEdit', 'Buddha': 'Hidden', 'Vihara': 'Hidden', 'Lainnya': 'Hidden', });
lyr_katolik_3.set('fieldImages', {'Kecamatan': 'TextEdit', 'Kota': 'TextEdit', 'Provinsi': 'TextEdit', 'Umat Musli': 'Hidden', 'Masjid': 'Hidden', 'Protestan': 'Hidden', 'Gereja Pro': 'Hidden', 'Katolik': 'TextEdit', 'Gereja Kat': 'TextEdit', 'Hindu': 'Hidden', 'Pura': 'Hidden', 'Buddha': 'Hidden', 'Vihara': 'Hidden', 'Lainnya': 'Hidden', });
lyr_protestan_4.set('fieldImages', {'Kecamatan': 'TextEdit', 'Kota': 'TextEdit', 'Provinsi': 'TextEdit', 'Umat Musli': 'Hidden', 'Masjid': 'Hidden', 'Protestan': 'TextEdit', 'Gereja Pro': 'TextEdit', 'Katolik': 'Hidden', 'Gereja Kat': 'Hidden', 'Hindu': 'Hidden', 'Pura': 'Hidden', 'Buddha': 'Hidden', 'Vihara': 'Hidden', 'Lainnya': 'Hidden', });
lyr_islam_5.set('fieldImages', {'Kecamatan': 'TextEdit', 'Kota': 'TextEdit', 'Provinsi': 'TextEdit', 'Umat Musli': 'TextEdit', 'Masjid': 'TextEdit', 'Protestan': 'Hidden', 'Gereja Pro': 'Hidden', 'Katolik': 'Hidden', 'Gereja Kat': 'Hidden', 'Hindu': 'Hidden', 'Pura': 'Hidden', 'Buddha': 'Hidden', 'Vihara': 'Hidden', 'Lainnya': 'Hidden', });
lyr_lainnya_0.set('fieldLabels', {'Kecamatan': 'inline label', 'Kota': 'inline label', 'Provinsi': 'inline label', 'Lainnya': 'inline label', });
lyr_buddha_1.set('fieldLabels', {'Kecamatan': 'inline label', 'Kota': 'inline label', 'Provinsi': 'inline label', 'Buddha': 'inline label', 'Vihara': 'inline label', });
lyr_hindu_2.set('fieldLabels', {'Kecamatan': 'header label', 'Kota': 'inline label', 'Provinsi': 'inline label', 'Hindu': 'inline label', 'Pura': 'inline label', });
lyr_katolik_3.set('fieldLabels', {'Kecamatan': 'inline label', 'Kota': 'inline label', 'Provinsi': 'inline label', 'Katolik': 'inline label', 'Gereja Kat': 'header label', });
lyr_protestan_4.set('fieldLabels', {'Kecamatan': 'inline label', 'Kota': 'inline label', 'Provinsi': 'inline label', 'Protestan': 'inline label', 'Gereja Pro': 'inline label', });
lyr_islam_5.set('fieldLabels', {'Kecamatan': 'inline label', 'Kota': 'inline label', 'Provinsi': 'inline label', 'Umat Musli': 'inline label', 'Masjid': 'inline label', });
lyr_islam_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});