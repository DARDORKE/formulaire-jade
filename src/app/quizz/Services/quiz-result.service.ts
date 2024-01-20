import {Injectable} from '@angular/core';

interface ActivityDetails {
  title: string;
  image: string;
  link: string;
  description: string;
  showDetails?: boolean; // optionnel, utilisé pour contrôler l'affichage des détails
}

interface ResultsDictionary {
  [key: string]: ActivityDetails[];
}

@Injectable({
  providedIn: 'root'
})
export class QuizResultService {
  private results: ResultsDictionary =
    {
      '1.1.1': [
        {
          title: 'Faire une visite guidée exploration phoques / grande marée / traversée de la baie de Somme',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…'
        },
        {
          title: 'Visiter des réserves ornithologiques : Parc du Marquenterre / Réserve de Grand-laviers / Hâble d’Ault',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…'
        },
        {
          title: 'Parcourir le sentier du littoral',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…'
        },
        {
          title: 'Boire un verre en terrasse ou dans des bars de plage à Cayeux-sur-Mer (Cabine de Mouné ou Mouton Phare)',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…'
        },
        {
          title: 'Aller voir les phoques avec une paire de jumelles à la pointe du Hourdel',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…'
        },
      ],
      '1.1.2': [
        {
          title: 'Visite Saint-Valery-sur-Somme et sa rue commerçante',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…'
        },
        {
          title: 'Découvrir le patrimoine architectural d’Abbeville grâce au parcours sur le plan et faire une visite guidée de la collégiale Saint-Vulfran ou de l’église Saint-Sépulcre',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…'
        },
        {
          title: 'Visiter la Maison de la baie de Somme pour découvrir l’histoire de la Baie de Somme',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…'
        },
      ],
      '1.1.3': [
        {
          title: 'Visiter la cité médiévale de Saint-Valery-sur-Somme et le musée de Picarvie',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…'
        },
        {
          title: 'Faire une visite guidée de Saint-Valery-sur-Somme',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…'
        },
        {
          title: 'Découvrir le patrimoine architectural d’Abbeville grâce au parcours sur le plan et faire une visite guidée de la collégiale Saint-Vulfran ou de l’église Saint-Sépulcre',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…'
        },
        {
          title: 'Visiter des lieux culturels incontournables comme le château de Rambure, le château de Bagatelle à Abbeville ou encore l’Abbaye et les jardins de Valloires…',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…'
        },
        {
          title: 'Faire un aller-retour en train à vapeur (voyage commenté) : Saint-Valery-sur-Somme/ Le Crotoy',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
      ],
      '1.2.1': [
        {
          title: 'Visiter des réserves ornithologiques : Parc du Marquenterre / Réserve de Grand-laviers / Hâble d’Ault',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Se promener dans le bois de Pins de Brighton-les-Pins et admirer le joli phare rouge et blanc',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une visite guidée pour observer les phoques',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une ballade en barque dans les marais de Longpré-les-Corps-Saints',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une chasse aux trésors et des randonnées mystères avec Baie de Somme exploration ou Va’a en Baie.',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Aller voir les phoques avec une paire de jumelles à la pointe du Hourdel',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
      ],
      '1.2.2': [
        {
          title: 'Visiter la maison de la baie de Somme pour découvrir l’histoire de la Baie de Somme',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Se promener à Saint-Valery-sur-Somme, visiter la rue commerçante et le quartier des Marins avec les petites maisons de pêcheurs',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Se promener dans Abbeville et suivre le parcours historique proposé sur le plan en passant par le Jardin d’Emonville et ensuite aller au parc de la Bouvaque',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
      ],
      '1.2.3': [
        {
          title: 'Faire une visite guidée de la Collégiale Saint-Vulfran ou de l’église Saint-Sépulcre à Abbeville',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Visiter la cité médiévale de Saint-Valery-sur-Somme ou faire une visite guidée de la ville de Saint-Valery-sur-Somme',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire le quizz découverte de Saint-Valery-sur-Somme du carnet d’aventure',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une balade en Tuk tour électrique',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
      ],
      '1.3.1': [
        {
          title: 'Visiter des réserves ornithologiques : Parc du Marquenterre / Réserve de Grand-laviers / Hâble d’Ault',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Boire un verre en terrasse ou dans des bars de plage (Cabine de Mouné ou Mouton Phare)',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Observer le coucher de soleil au Cap Hornu',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'S’offrir un moment bien-être dans un institut SPA',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Aller voir les phoques avec une paire de jumelles à la pointe du Hourdel',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
      ],
      '1.3.2': [
        {
          title: 'Visiter la rue commerçante et le centre ville de Saint-Valery-sur-Somme',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Visiter le musée de Picarvie et la Maison de la baie de Somme',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Visiter de centre ville d’Abbeville et aller voir un concert ou une pièce de théâtre',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
      ],
      '1.3.3': [
        {
          title: 'Faire l’ascension des tours de la collégiale Saint-Vulfran à Abbeville',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Visiter l’herbarium de Saint-Valery-sur-Somme',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Se promener dans la cité médiévale de Saint-Valery-sur-Somme',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
      ],
      '2.1.1': [
        {
          title: 'Se promener sur le quai de Saint-Valery-sur-Somme',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Flâner sur le chemin de planche et se baigner à Cayeux-sur-Mer',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une promenade en barque à Longpré-les-Corps-Saints',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Aller voir les phoques avec une paire de jumelles à la pointe du Hourdel',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
      ],
      '2.1.2': [
        {
          title: 'Faire une tour en tuk tour électrique à Saint-Valery-sur-Somme',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Manger une bonne glace dans la rue commerçante de Saint-Valery-sur-Somme',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une session shopping dans le centre-ville d’Abbeville',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Aller voir des expositions à Abbeville ou Saint-Valery-sur-Somme',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
      ],
      '2.1.3': [
        {
          title: 'Faire une tour en tuktuk électrique à Saint-Valery-sur-Somme',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Visiter le musée de Picarvie et flâner dans la cité médiévale de Saint-Valery-sur-Somme',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire le parcours Manessier à Abbeville et découvrir le parc de la Bouvaque',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une sortie en trottinette électrique et faire le tour de la baie par les pistes cyclables',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
      ],
      '2.2.1': [
        {
          title: 'Flâner sur le chemin de planche et se baigner à Cayeux-sur-Mer',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une promenade en barque à Longpré-les-Corps-Saints',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire jouer les enfants dans le sable sur la plage et dans les aire de jeux',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une tour de bateau pour découvrir la baie',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Manger une bonne glace face à la mer',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Aller voir les phoques avec une paire de jumelles à la pointe du Hourdel',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
      ],
      '2.2.2': [
        {
          title: 'Faire une tour en tuktuk électrique à Saint- Valery-sur-Somme',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Flâner dans la rue commerçante de Saint-Valery-sur-Somme',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire le jeu de piste à Abbeville dans le carnet d’aventure',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Manger une bonne glace dans un parc',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
      ],
      '2.2.3': [
        {
          title: 'Faire une aller-retour Saint-Valery-sur-Somme - Le Crotoy en train à vapeur',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Visiter le musée de Picarvie à Saint-Valery-sur-Somme',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Flâner dans la cité médiévale de Saint-Valery-sur-Somme',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Manger une bonne glace sur le chemin de planche de Cayeux-sur-Mer',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
      ],
      '2.3.1': [
        {
          title: 'Flâner sur le chemin de planche et se baigner à la plage de Cayeux-sur-Mer',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une promenade en barque à Longpré-les-Corps-Saints',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire un tour en bateau pour découvrir la baie',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Marcher le long du quai de Saint-Valery-sur-Somme',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Profiter du coucher de soleil au Cap Hornu',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Visiter “l’herbarium” à Saint-Valery-sur-Somme',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Aller voir les phoques avec une paire de jumelles à la pointe du Hourdel',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
      ],
      '2.3.2': [
        {
          title: 'Faire une tour en tuktuk électrique',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Flâner dans la rue commerçante de Saint-Valery-sur-Somme',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Visiter le jardin d’Emonville et le parc de la Bouvaque à Abbeville',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Profiter d’une séance de SPA bien-être à Saint-Valery-sur-Somme',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
      ],
      '2.3.3': [
        {
          title: 'Faire un aller-retour en train à vapeur commenté : Saint-Valery-sur-Somme/ Le Crotoy',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Flâner dans la cité médiévale de Saint-Valery-sur-Somme',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Visiter le musée de Picarvie',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire le parcours patrimoine à Abbeville',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
      ],
      '3.1.1': [
        {
          title: 'Louer un vélo ou une trottinette électrique et faire le tour de la baie via la piste cyclable',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une sortie en canoë/kayak pour aller observer les phoques',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une traversée de la baie avec un guide',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
      ],
      '3.1.2': [
        {
          title: 'Faire une visite guidée de Saint-Valery-sur-Somme',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une visite guidée d’Abbeville (avec des audio-guides)',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une randonnée guidée dans les marais de Longpré-les-corps-Saints avec Marc',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Visiter les villes autour de la baie en trottinette électrique',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une sortie en zodiac pour aller voir les phoque',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
      ],
      '3.1.3': [
        {
          title: 'Faire une visite guidée de Saint-Valery-sur-Somme',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une visite guidée d’Abbeville (avec des audio-guides)',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une randonnée guidée dans les marais de Longpré-les-corps-Saints avec Marc',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Visiter les villes autour de la baie en trottinette électrique',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une sortie en zodiac pour aller voir les phoque',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une chasse aux trésors et des randonnées mystères avec Baie de Somme exploration ou Va’a en Baie',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
      ],
      '3.2.1': [
        {
          title: 'Louer un vélo ou une trottinette électrique et faire le tour de la baie via la piste cyclable',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une sortie en canoë/kayak pour aller observer les phoques',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire la traversée de la baie du Crotoy à Saint-Valery-sur-Somme avec un guide',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Visiter des réserves ornithologiques : Parc du Marquenterre / Réserve de Grand-laviers / Hâble d’Ault',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
      ],
      '3.2.2': [
        {
          title: 'Faire une visite guidée de Saint-Valery-sur-Somme',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une visite guidée d’Abbeville (avec des audio-guides)',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une randonnée guidée dans les marais de Longpré-les-corps-Saints avec Marc',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Visiter les villes autour de la baie en trottinette électrique',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une promenade à dos d’âne ou à cheval',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
      ],
      '3.2.3': [
        {
          title: 'Faire une visite guidée de Saint-Valery-sur-Somme',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une visite guidée d’Abbeville (avec des audio-guides)',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une randonnée guidée dans les marais de Longpré-les-corps-Saints avec Marc',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Visiter les villes autour de la baie en trottinette électrique',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une sortie en zodiac pour aller voir les phoque',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une chasse aux trésors et des randonnées mystères avec Baie de Somme exploration ou Va’a en Baie',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
      ],
      '3.3.1': [
        {
          title: 'Faire une sortie en zodiac pour aller voir les phoque',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Louer un vélo ou une trottinette électrique et faire le tour de la baie via la piste cyclable',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire la traversée de la baie du Crotoy à Saint-Valery-sur-Somme avec un guide',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une sortie en canoë/kayak ou même en pirogue pour aller observer les phoques',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
      ],
      '3.3.2': [
        {
          title: 'Faire une visite guidée de Saint-Valery-sur-Somme',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une visite guidée d’Abbeville (avec des audio-guides)',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une randonnée guidée dans les marais de Longpré-les-corps-Saints avec Marc',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Visiter les villes autour de la baie en trottinette électrique',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une promenade à cheval dans les dunes',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
      ],
      '3.3.3': [
        {
          title: 'Faire une visite guidée de Saint-Valery-sur-Somme',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une visite guidée d’Abbeville (avec des audio-guides)',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une randonnée guidée dans les marais de Longpré-les-Corps-Saints avec Marc',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Visiter Saint-Valery-sur-Somme de la baie en trottinette électrique',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une sortie en canoë/kayak ou même en pirogue pour aller observer les phoques',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
        {
          title: 'Faire une chasse aux trésors et des randonnées mystères avec Baie de Somme exploration ou Va’a en Baie.',
          image: '/assets/images/baie_de_somme.jpg',
          link: 'https://www.tourisme-baiedesomme.fr/decouvrir/la-baie-de-somme/',
          description: 'Un pays où la couleur change toute la journée passant du gris bleuté à l’ocre tendre puis au rose lorsque le soleil vient à décliner en fin de journée.\n' +
            '\n' +
            'Ces lumières soyeuses ont inspiré bon nombre de peintres et écrivains : Delacroix, Degas, Corot mais aussi Colette, Jules Verne, Victor Hugo, Alfred Manessier et bien d’autres…',
        },
      ]
    };

  getResult(combination: string): ActivityDetails[] {
    return this.results[combination] || [{
      title: 'Aucune activité trouvée pour cette combinaison.',
      image: '',
      link: '',
      description: ''
    }];
  }
}
