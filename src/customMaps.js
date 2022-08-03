"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomMaps = void 0;
var CustomMaps = /** @class */ (function () {
    function CustomMaps(divId) {
        this.divId = divId;
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }
    CustomMaps.prototype.addMarker = function (mappable) {
        var _this = this;
        var marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });
        marker.addListener('click', function () {
            var inforWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });
            inforWindow.open(_this.googleMap, marker);
        });
    };
    return CustomMaps;
}());
exports.CustomMaps = CustomMaps;
