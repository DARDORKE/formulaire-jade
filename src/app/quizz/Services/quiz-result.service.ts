import {Injectable} from '@angular/core';

interface ResultsDictionary {
  [key: string]: string[];
}

@Injectable({
  providedIn: 'root'
})
export class QuizResultService {
  private results: ResultsDictionary = {
    '1.1.1': [
      'Faire une visite guidée exploration phoques / grande marée / traversée de la baie de Somme',
      'Visiter des réserves ornithologiques : Parc du Marquenterre / Réserve de Grand-laviers / Hâble d’Ault',
      'Parcourir le sentier du littoral',
      'Boire un verre en terrasse ou dans des bars de plage à Cayeux-sur-Mer (Cabine de Mouné ou Mouton Phare)',
      'Aller voir les phoques avec une paire de jumelles à la pointe du Hourdel',
    ],
    '1.1.2': [
      'Visite Saint-Valery-sur-Somme et sa rue commerçante',
      'Découvrir le patrimoine architectural d’Abbeville grâce au parcours sur le plan et faire une visite guidée de la collégiale Saint-Vulfran ou de l’église Saint-Sépulcre',
      'Visiter la Maison de la baie de Somme pour découvrir l’histoire de la Baie de Somme',
    ],
    '1.1.3': [
      'Visiter la cité médiévale de Saint-Valery-sur-Somme et le musée de Picarvie',
      'Faire une visite guidée de Saint-Valery-sur-Somme',
      'Découvrir le patrimoine architectural d’Abbeville grâce au parcours sur le plan et faire une visite guidée de la collégiale Saint-Vulfran ou de l’église Saint-Sépulcre',
      'Visiter des lieux culturels incontournables comme le château de Rambure, le château de Bagatelle à Abbeville ou encore l’Abbaye et les jardins de Valloires…',
      'Faire un aller-retour en train à vapeur (voyage commenté) : Saint-Valery-sur-Somme/ Le Crotoy'
    ],
    '1.2.1': [
      'Visiter des réserves ornithologiques : Parc du Marquenterre / Réserve de Grand-laviers / Hâble d’Ault',
      'Se promener dans le bois de Pins de Brighton-les-Pins et admirer le joli phare rouge et blanc',
      'Faire une visite guidée pour observer les phoques',
      'Faire une ballade en barque dans les marais de Longpré-les-Corps-Saints',
      'Faire une chasse aux trésors et des randonnées mystères avec Baie de Somme exploration ou Va’a en Baie.',
      'Aller voir les phoques avec une paire de jumelles à la pointe du Hourdel',
    ],
    '1.2.2': [
      'Visiter la maison de la baie de Somme pour découvrir l’histoire de la Baie de Somme',
      'Se promener à Saint-Valery-sur-Somme, visiter la rue commerçante et le quartier des Marins avec les petites maisons de pêcheurs',
      'Se promener dans Abbeville et suivre le parcours historique proposé sur le plan en passant par le Jardin d’Emonville et ensuite aller au parc de la Bouvaque',
    ],
    '1.2.3': [
      'Faire une visite guidée de la Collégiale Saint-Vulfran ou de l’église Saint-Sépulcre à Abbeville',
      'Visiter la cité médiévale de Saint-Valery-sur-Somme ou faire une visite guidée de la ville de Saint-Valery-sur-Somme',
      'Faire le quizz découverte de Saint-Valery-sur-Somme du carnet d’aventure',
      'Faire une balade en Tuk tour électrique',
    ],
    '1.3.1': [
      'Visiter des réserves ornithologiques : Parc du Marquenterre / Réserve de Grand-laviers / Hâble d’Ault',
      'Boire un verre en terrasse ou dans des bars de plage (Cabine de Mouné ou Mouton Phare)',
      'Observer le coucher de soleil au Cap Hornu',
      'S’offrir un moment bien-être dans un institut SPA',
      'Aller voir les phoques avec une paire de jumelles à la pointe du Hourdel',
    ],
    '1.3.2': [
      'Visiter la rue commerçante et le centre ville de Saint-Valery-sur-Somme',
      'Visiter le musée de Picarvie et la Maison de la baie de Somme',
      'Visiter de centre ville d’Abbeville et aller voir un concert ou une pièce de théâtre',
    ],
    '1.3.3': [
      'Faire l’ascension des tours de la collégiale Saint-Vulfran à Abbeville',
      'Visiter l’herbarium de Saint-Valery-sur-Somme',
      'Se promener dans la cité médiévale de Saint-Valery-sur-Somme',
    ],
    '2.1.1': [
      'Se promener sur le quai de Saint-Valery-sur-Somme',
      'Flâner sur le chemin de planche et se baigner à Cayeux-sur-Mer',
      'Faire une promenade en barque à Longpré-les-Corps-Saints',
      'Aller voir les phoques avec une paire de jumelles à la pointe du Hourdel',
    ],
    '2.1.2': [
      'Faire une tour en tuk tour électrique à Saint-Valery-sur-Somme',
      'Manger une bonne glace dans la rue commerçante de Saint-Valery-sur-Somme',
      'Faire une session shopping dans le centre-ville d’Abbeville',
      'Aller voir des expositions à Abbeville ou Saint-Valery-sur-Somme',
    ],
    '2.1.3': [
      'Faire une tour en tuktuk électrique à Saint-Valery-sur-Somme',
      'Visiter le musée de Picarvie et flâner dans la cité médiévale de Saint-Valery-sur-Somme',
      'Faire le parcours Manessier à Abbeville et découvrir le parc de la Bouvaque',
      'Faire une sortie en trottinette électrique et faire le tour de la baie par les pistes cyclables',
    ],
    '2.2.1': [
      'Flâner sur le chemin de planche et se baigner à Cayeux-sur-Mer',
      'Faire une promenade en barque à Longpré-les-Corps-Saints',
      'Faire jouer les enfants dans le sable sur la plage et dans les aire de jeux',
      'Faire une tour de bateau pour découvrir la baie',
      'Manger une bonne glace face à la mer',
      'Aller voir les phoques avec une paire de jumelles à la pointe du Hourdel',
    ],
    '2.2.2': [
      'Faire une tour en tuktuk électrique à Saint- Valery-sur-Somme',
      'Flâner dans la rue commerçante de Saint-Valery-sur-Somme',
      'Faire le jeu de piste à Abbeville dans le carnet d’aventure',
      'Manger une bonne glace dans un parc',
    ],
    '2.2.3': [
      'Faire une aller-retour Saint-Valery-sur-Somme - Le Crotoy en train à vapeur',
      'Visiter le musée de Picarvie à Saint-Valery-sur-Somme',
      'Flâner dans la cité médiévale de Saint-Valery-sur-Somme',
      'Manger une bonne glace sur le chemin de planche de Cayeux-sur-Mer',
    ],
    '2.3.1': [
      'Flâner sur le chemin de planche et se baigner à la plage de Cayeux-sur-Mer',
      'Faire une promenade en barque à Longpré-les-Corps-Saints',
      'Faire un tour en bateau pour découvrir la baie',
      'Marcher le long du quai de Saint-Valery-sur-Somme',
      'Profiter du coucher de soleil au Cap Hornu',
      'Visiter “l’herbarium” à Saint-Valery-sur-Somme',
      'Aller voir les phoques avec une paire de jumelles à la pointe du Hourdel',
    ],
    '2.3.2': [
      'Faire une tour en tuktuk électrique',
      'Flâner dans la rue commerçante de Saint-Valery-sur-Somme',
      'Visiter le jardin d’Emonville et le parc de la Bouvaque à Abbeville',
      'Profiter d’une séance de SPA bien-être à Saint-Valery-sur-Somme',
    ],
    '2.3.3': [
      'Faire un aller-retour en train à vapeur commenté : Saint-Valery-sur-Somme/ Le Crotoy',
      'Flâner dans la cité médiévale de Saint-Valery-sur-Somme',
      'Visiter le musée de Picarvie',
      'Faire le parcours patrimoine à Abbeville',
    ],
    '3.1.1': [
      'Louer un vélo ou une trottinette électrique et faire le tour de la baie via la piste cyclable',
      'Faire une sortie en canoë/kayak pour aller observer les phoques',
      'Faire une traversée de la baie avec un guide',
    ],
    '3.1.2': [
      'Faire une visite guidée de Saint-Valery-sur-Somme',
      'Faire une visite guidée d’Abbeville (avec des audio-guides)',
      'Faire une randonnée guidée dans les marais de Longpré-les-corps-Saints avec Marc',
      'Visiter les villes autour de la baie en trottinette électrique',
      'Faire une sortie en zodiac pour aller voir les phoque',
    ],
    '3.1.3': [
      'Faire une visite guidée de Saint-Valery-sur-Somme',
      'Faire une visite guidée d’Abbeville (avec des audio-guides)',
      'Faire une randonnée guidée dans les marais de Longpré-les-corps-Saints avec Marc',
      'Visiter les villes autour de la baie en trottinette électrique',
      'Faire une sortie en zodiac pour aller voir les phoque',
      'Faire une chasse aux trésors et des randonnées mystères avec Baie de Somme exploration ou Va’a en Baie'
    ],
    '3.2.1': [
      'Louer un vélo ou une trottinette électrique et faire le tour de la baie via la piste cyclable',
      'Faire une sortie en canoë/kayak pour aller observer les phoques',
      'Faire la traversée de la baie du Crotoy à Saint-Valery-sur-Somme avec un guide',
      'Visiter des réserves ornithologiques : Parc du Marquenterre / Réserve de Grand-laviers / Hâble d’Ault',
    ],
    '3.2.2': [
      'Faire une visite guidée de Saint-Valery-sur-Somme',
      'Faire une visite guidée d’Abbeville (avec des audio-guides)',
      'Faire une randonnée guidée dans les marais de Longpré-les-corps-Saints avec Marc',
      'Visiter les villes autour de la baie en trottinette électrique',
      'Faire une promenade à dos d’âne ou à cheval',
    ],
    '3.2.3': [
      'Faire une visite guidée de Saint-Valery-sur-Somme',
      'Faire une visite guidée d’Abbeville (avec des audio-guides)',
      'Faire une randonnée guidée dans les marais de Longpré-les-corps-Saints avec Marc',
      'Visiter les villes autour de la baie en trottinette électrique',
      'Faire une sortie en zodiac pour aller voir les phoque',
      'Faire une chasse aux trésors et des randonnées mystères avec Baie de Somme exploration ou Va’a en Baie',
    ],
    '3.3.1': [
      'Faire une sortie en zodiac pour aller voir les phoque',
      'Louer un vélo ou une trottinette électrique et faire le tour de la baie via la piste cyclable',
      'Faire la traversée de la baie du Crotoy à Saint-Valery-sur-Somme avec un guide',
      'Faire une sortie en canoë/kayak ou même en pirogue pour aller observer les phoques',
    ],
    '3.3.2': [
      'Faire une visite guidée de Saint-Valery-sur-Somme',
      'Faire une visite guidée d’Abbeville (avec des audio-guides)',
      'Faire une randonnée guidée dans les marais de Longpré-les-corps-Saints avec Marc',
      'Visiter les villes autour de la baie en trottinette électrique',
      'Faire une promenade à cheval dans les dunes',
    ],
    '3.3.3': [
      'Faire une visite guidée de Saint-Valery-sur-Somme',
      'Faire une visite guidée d’Abbeville (avec des audio-guides)',
      'Faire une randonnée guidée dans les marais de Longpré-les-Corps-Saints avec Marc',
      'Visiter Saint-Valery-sur-Somme de la baie en trottinette électrique',
      'Faire une sortie en canoë/kayak ou même en pirogue pour aller observer les phoques',
      'Faire une chasse aux trésors et des randonnées mystères avec Baie de Somme exploration ou Va’a en Baie.'
    ]
  };

  getResult(combination: string): string[] {
    return this.results[combination] || ['Aucune activité trouvée pour cette combinaison.'];
  }
}
