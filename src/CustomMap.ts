import { User } from "./User";
import { Company } from "./Company";
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 1,
        lng: 1,
      },
    });
  }

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.latitude,
        lng: user.location.longitude,
      },
    });
  }

  addCompanyMarker(company: Company): void {}
}
