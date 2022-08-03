
interface Mappable {
    location : {
        lat: number;
        lng: number;
    }
    markerContent(): string
}

export class CustomMaps {
    private googleMap: google.maps.Map;

    constructor(private divId: string) {
        this.googleMap = new google.maps.Map(
            document.getElementById(divId),
            {
                zoom: 1,
                center:{
                    lat: 0,
                    lng: 0

                }
            }
        )
    }


    addMarker(mappable: Mappable):void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng

            }
        })

        marker.addListener('click', ()=> {
            const inforWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            })
            inforWindow.open(this.googleMap, marker)
        })
    }

}