import { MenuType } from "@/interFace/interFace";

const menu_data: MenuType[] = [
  {
    id: 1,
    hasDropdown: false,
    active: true,
    title: "Home",
    link: "/en/",
  },
  {
    id: 2,
    hasDropdown: false,
    active: true,
    title: "About Us",
    link: "/en/about",
  },
  {
    id: 3,
    hasDropdown: true,
    active: true,
    megaMenu: false,
    title: "Inca Trail",
    pluseIncon: true,
    link: "#",
    submenus: [
      {
        title: "Inca Trail to Machu Picchu 4 Days",
        link: "/en/tour/inca-trail-to-machu-picchu-4-days/",
      },
      {
        title: "Short Inca Trail to Machu Picchu 2 Days",
        link: "/en/tour/short-inca-trail-to-machu-picchu-2-days/",
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
        title: "Ausangate Trek to Rainbow Mountain 5 Days",
        link: "/en/tour/ausangate-trek-to-rainbow-mountain-5-days/",
      },
      {
        title: "Inca Jungle Trek to Machu Picchu 4 Days",
        link: "/en/tour/inca-jungle-trek-to-machu-picchu-4-days/",
      },
      {
        title: "Salkantay Trek To Machu Picchu 5 days",
        link: "/en/tour/salkantay-trek-to-machu-picchu-5-days/",
      },
      {
        title: "Salkantay Trek To Machu Picchu 4 days",
        link: "/en/tour/salkantay-trek-to-machu-picchu-4-days/",
      },
      {
        title: "Lares Trek to Machu Picchu 4 days",
        link: "/en/tour/lares-trek-to-machu-picchu-4-days/",
      },
      {
        title: "Choquequirao Trek 4 days",
        link: "/en/tour/choquequirao-trek-4-days/",
      },
    ],
  },
  {
    id: 5,
    hasDropdown: true,
    active: true,
    megaMenu: true,
    children: true,
    title: "Extreme",
    pluseIncon: true,
    link: "#",
    submenus: [
      {
        title: "Cusco Atv Tour",
        link: "/en/tour/cusco-atv-tour/",
      },
      {
        title: "Biking Maras Moray Full Day",
        link: "/en/tour/biking-maras-moray-full-day/",
      },
      {
        title: "Tour Zipline or Canopy in Cusco",
        link: "/en/tour/tour-zipline-or-canopy-in-cusco/",
      },
      {
        title: "Extreme Sports",
        link: "/en/tour/extreme-sports/",
      },
      {
        title: "Paragliding Tour",
        link: "/en/tour/paragliding-tour/",
      },
      {
        title: "Bungee Jumping",
        link: "/en/tour/bungee-jumping/",
      },
      {
        title: "Skybike Tour",
        link: "/en/tour/skybike-tour/",
      },
    ],
  },
  {
    id: 6,
    hasDropdown: true,
    active: true,
    megaMenu: true,
    children: true,
    title: "Day Tours",
    pluseIncon: true,
    link: "#",
    submenus: [
      {
        title: "Moray and Salt Mines Half Day Tour",
        link: "/en/tour/moray-and-salt-mines-half-day-tour/",
      },
      {
        title: "Q’eswachaka Inca Bridge Full Day",
        link: "/en/tour/qeswachaka-inca-bridge-full-day/",
      },
      {
        title: "City Tour Cusco Half Day Tour",
        link: "/en/tour/city-tour-cusco-half-day-tour/",
      },
      {
        title: "Machu Picchu Full Day Tour",
        link: "/en/tour/machu-picchu-full-day-tour/",
      },
      {
        title: "Sacred Valley Full Day Tour",
        link: "/en/tour/sacred-valley-full-day-tour/",
      },
      {
        title: "South Valley Half Day Tour",
        link: "/en/tour/south-valley-half-day-tour/",
      },
      {
        title: "Apukunaq Tianan Tour",
        link: "/en/tour/apukunaq-tianan-tour/",
      },
    ],
  },
  {
    id: 7,
    hasDropdown: true,
    active: true,
    megaMenu: true,
    children: true,
    title: "Day Hikes",
    pluseIncon: true,
    link: "#",
    submenus: [
      {
        title: "Singrenacocha Lake Full Day Hike",
        link: "/en/tour/singrenacocha-lake-full-day-hike/",
      },
      {
        title: "Perolniyoc Waterfall Full Day Hike",
        link: "/en/tour/perolniyoc-waterfall-full-day-hike/",
      },
      {
        title: "Ausangate 7 Lakes Full Day Hike",
        link: "/en/tour/ausangate-7-lakes-full-day-hike/",
      },
      {
        title: "Rainbow Mountain Full Day Hike",
        link: "/en/tour/rainbow-mountain-full-day-hike/",
      },
      {
        title: "Humantay Lake Full Day Hike",
        link: "/en/tour/humantay-lake-full-day-hike/",
      },
      {
        title: "Pallay Punchu Full Day Hike",
        link: "/en/tour/pallay-punchu-full-day-hike/",
      },
      {
        title: "Waqrapukara Full Day Hike",
        link: "/en/tour/waqrapukara-full-day-hike/",
      },
      {
        title: "Huchuy Qosqo Full Hike",
        link: "/en/tour/huchuy-qosqo-full-hike/",
      },
      {
        title: "Palccoyo Full Day Hike",
        link: "/en/tour/palccoyo-full-day-hike/",
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
        title: "Trekking Colca Canyon 3 Days",
        link: "/en/tour/trekking-colca-canyon-3-days/",
      },
      {
        title: "Trekking Colca Canyon 2 Days",
        link: "/en/tour/trekking-colca-canyon-2-days/",
      },
      {
        title: "Chachani Volcano Trek 2 Days",
        link: "/en/tour/chachani-volcano-trek-2-days/",
      },
      {
        title: "Classic Colca Canyon 2 Days",
        link: "/en/tour/classic-colca-canyon-2-days/",
      },
      {
        title: "Misti Volcano Trek 2 Days",
        link: "/en/tour/misti-volcano-trek-2-days/",
      },
    ],
  },
];

export default menu_data;
