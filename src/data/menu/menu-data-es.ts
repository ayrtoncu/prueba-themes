import { MenuType } from "@/interFace/interFace";

const menu_dataes: MenuType[] = [
  {
    id: 1,
    hasDropdown: false,
    active: true,
    title: "Inicio",
    link: "/",
  },
  {
    id: 2,
    hasDropdown: false,
    active: true,
    title: "Nosotros",
    link: "/about",
  },
  {
    id: 3,
    hasDropdown: true,
    active: true,
    megaMenu: false,
    title: "Camino Inca",
    pluseIncon: true,
    link: "#",
    submenus: [
      {
        title: "Camino Inca Clásico 4 Días",
        link: "/tour/camino-inca-clasico-4-dias/",
      },
      {
        title: "Camino Inca corto de 2 días",
        link: "/tour/camino-inca-corto-de-2-dias/",
      },
    ],
  },
  {
    id: 4,
    hasDropdown: true,
    active: true,
    megaMenu: true,
    children: true,
    title: "Alternative Treks",
    pluseIncon: true,
    link: "#",
    submenus: [
      {
        title: "Caminata a la montaña Ausangate y  5 Días",
        link: "/tour/caminata-a-la-montana-ausangate-y-5-dias/",
      },
      {
        title: "Inca Jungle hacia Machu Picchu 4 Días",
        link: "/tour/inca-jungle-hacia-machu-picchu-4-dias/",
      },
      {
        title: "Salkantay Hacia Machu Picchu 5 Días",
        link: "/tour/salkantay-hacia-machu-picchu-5-dias/",
      },
      {
        title: "Salkantay Hacia Machu Picchu 4 Días",
        link: "/tour/salkantay-hacia-machu-picchu-4-dias/",
      },
      {
        title: "Camino Lares a Machu Picchu 4 Días",
        link: "/tour/camino-lares-a-machu-picchu-4-dias/",
      },
      {
        title: "Caminata a Choquequirao 4 Dias",
        link: "/tour/caminata-a-choquequirao-4-dias/",
      },
    ],
  },
  {
    id: 5,
    hasDropdown: true,
    active: true,
    megaMenu: true,
    children: true,
    title: "Extremos",
    pluseIncon: true,
    link: "#",
    submenus: [
      {
        title: "Cuatrimotos a Morada de Dioses",
        link: "/tour/cuatrimotos-a-morada-de-dioses/",
      },
      {
        title: "Maras Moray en bicicleta 1 Día",
        link: "/tour/maras-moray-en-bicicleta-dia-completo/",
      },
      {
        title: "Tour Zipline o Canopy",
        link: "/tour/tour-zipline-o-canopy/",
      },
      {
        title: "Deportes Extremos Cusco",
        link: "/tour/deportes-extremos-cusco/",
      },
      {
        title: "Tour de Parapente",
        link: "/tour/tour-de-parapente/",
      },
      {
        title: "Salto en Puenting",
        link: "/tour/salto-en-puenting/",
      },
      {
        title: "Tour de Skybike",
        link: "/tour/tour-de-skybike/",
      },
    ],
  },
  {
    id: 6,
    hasDropdown: true,
    active: true,
    megaMenu: true,
    children: true,
    title: "Tours Diarios",
    pluseIncon: true,
    link: "#",
    submenus: [
      {
        title: "Excursión a Maras Moray y Salineras",
        link: "/tour/excursion-a-maras-moray-y-salineras/",
      },
      {
        title: "Tour a Q’eswachaka Puente Inca",
        link: "/tour/tour-a-qeswachaka-puente-inca/",
      },
      {
        title: "Tour a la Ciudad del Cusco",
        link: "/tour/tour-a-la-ciudad-del-cusco/",
      },
      {
        title: "Tour a Machupicchu en Tren",
        link: "/tour/tour-a-machupicchu-en-tren/",
      },
      {
        title: "Tour al Valle Sagrado 1 Dia",
        link: "/tour/tour-al-valle-sagrado-1-dia/",
      },
      {
        title: "Tour al Valle Sur",
        link: "/tour/tour-al-valle-sur/",
      },
      {
        title: "Tour La Morada de los Dioses",
        link: "/tour/tour-la-morada-de-los-dioses/",
      },
    ],
  },
  {
    id: 7,
    hasDropdown: true,
    active: true,
    megaMenu: true,
    children: true,
    title: "Caminatas",
    pluseIncon: true,
    link: "#",
    submenus: [
      {
        title: "Full Day Laguna Singrenacocha",
        link: "/tour/full-day-laguna-singrenacocha/",
      },
      {
        title: "Full Day Catarata Perolniyoc",
        link: "/tour/full-day-catarata-perolniyoc/",
      },
      {
        title: "Full Day 7 Lagunas Ausangate",
        link: "/tour/full-day-7-lagunas-ausangate/",
      },
      {
        title: "Full Day Montaña de 7 Colores",
        link: "/tour/full-day-montana-de-colores/",
      },
      {
        title: "Full Day Laguna Humantay",
        link: "/tour/full-day-laguna-humantay/",
      },
      {
        title: "Full Day a Pallay Punchu",
        link: "/tour/full-day-a-pallay-punchu/",
      },
      {
        title: "Full Day a Waqrapukara",
        link: "/tour/full-day-a-waqrapukara/",
      },
      {
        title: "Tour a Huchuy Qosqo 1 Dia",
        link: "/tour/tour-a-huchuy-qosqo-1-dia/",
      },
      {
        title: "Tour a Montaña Palcoyo",
        link: "/tour/tour-a-montaña-palcoyo/",
      },
    ],
  },
  {
    id: 8,
    hasDropdown: true,
    active: true,
    megaMenu: true,
    children: true,
    title: "Arequipa",
    pluseIncon: true,
    link: "#",
    submenus: [
      {
        title: "Cañón del Colca 3 Días",
        link: "/tour/canon-del-colca-3-dias/",
      },
      {
        title: "Cañón de Colca 2 Días",
        link: "/tour/canon-de-colca-2-dias/",
      },
      {
        title: "Ascenso al Volcan Chachani 2 Días",
        link: "/tour/ascenso-al-volcan-chachani-2-dias/",
      },
      {
        title: "Tour Cañon del Colca 2 Días",
        link: "/tour/tour-canon-del-colca-2-dias/",
      },
      {
        title: "Ascenso al Volcán Misti 2 Días",
        link: "/tour/ascenso-al-volcan-misti-2-dias/",
      },
    ],
  },
];

export default menu_dataes;
