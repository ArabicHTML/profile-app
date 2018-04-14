import { Injectable } from '@angular/core';

const profiles = [
  {
    "id": "1",
    "title": "Web developer with 5 years experience",
    "excerpt": "Lorem ipsum dolor sit amet, pri ex idque labitur, diam inermis an duo. Eum an justo mandamus. Eum ad iuvaret omnesque splendide.",
    "description": "Material design system icons are simple, modern, friendly, and sometimes quirky. Each icon is created using our design guidelines to depict in simple and minimal forms the universal concepts used commonly."
  }, {
    "id": "2",
    "title": "Prolific, full stack web developer with a passion for metrics and beating former",
    "excerpt": "Lorem ipsum dolor sit amet, pri ex idque labitur, diam inermis an duo. Eum an justo mandamus. Eum ad iuvaret omnesque splendide.",
    "description": "Material design system icons are simple, modern, friendly, and sometimes quirky. Each icon is created using our design guidelines to depict in simple and minimal forms the universal concepts used commonly."
  }, {
    "id": "3",
    "title": "Web developer with a BA in computer",
    "excerpt": "Lorem ipsum dolor sit amet, pri ex idque labitur, diam inermis an duo. Eum an justo mandamus. Eum ad iuvaret omnesque splendide.",
    "description": "Material design system icons are simple, modern, friendly, and sometimes quirky. Each icon is created using our design guidelines to depict in simple and minimal forms the universal concepts used commonly."
  }, {
    "id": "4",
    "title": "Hard-working web developer with a flair for creating elegant solutions",
    "excerpt": "Lorem ipsum dolor sit amet, pri ex idque labitur, diam inermis an duo. Eum an justo mandamus. Eum ad iuvaret omnesque splendide.",
    "description": "Material design system icons are simple, modern, friendly, and sometimes quirky. Each icon is created using our design guidelines to depict in simple and minimal forms the universal concepts used commonly."
  }, {
    "id": "5",
    "title": "Only as important as the power plant in a Ferrari",
    "excerpt": "Lorem ipsum dolor sit amet, pri ex idque labitur, diam inermis an duo. Eum an justo mandamus. Eum ad iuvaret omnesque splendide.",
    "description": "Material design system icons are simple, modern, friendly, and sometimes quirky. Each icon is created using our design guidelines to depict in simple and minimal forms the universal concepts used commonly."
  }
];

@Injectable()
export class ProfilesService {

  constructor() { }

  getProfiles() {
    return profiles;
  }

  getSingleProfile(id: string) {
    for (let i = 0; i < profiles.length; i++) {
      if (profiles[i].id === id) {
        return profiles[i];
      }

    }
  }

}
