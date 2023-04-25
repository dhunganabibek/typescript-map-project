import faker from "@faker-js/faker";

class User {
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };

  constructor() {
    this.name = faker.faker.name.firstName();
    this.location = {
      latitude: parseFloat(faker.faker.address.latitude()),
      longitude: parseFloat(faker.faker.address.longitude()),
    };
  }
}
