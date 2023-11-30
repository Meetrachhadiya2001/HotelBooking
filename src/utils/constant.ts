import photo1 from "../assets/Photos/Photo1.png";
import photo2 from "../assets/Photos/Photo2.png";
import photo3 from "../assets/Photos/Photo3.png";
import photo4 from "../assets/Photos/Photo4.png";
import photo5 from "../assets/Photos/Photo5.png";
import offerPhoto1 from "../assets/Photos/OfferPhoto1.png";
import offerPhoto2 from "../assets/Photos/OfferPhoto2.png";
import offerPhoto3 from "../assets/Photos/OfferPhoto3.png";

export const photoData = [
  { src: photo1, text: "Rooms" },
  { src: photo2, text: "Dining" },
  { src: photo3, text: "Conferences & Meetings" },
  { src: photo4, text: "Service & Facilities" },
  { src: photo5, text: "Wedding Package" },
];

export const headerItems1 = [
  {
    title: "Home",
    path: "#",
  },
  {
    title: "About",
    path: "#",
  },
  {
    title: "Newsletter",
    path: "#",
  },
];

export const headerItems2 = [
  {
    title: "Rooms",
    path: "#",
  },
  {
    title: "Services",
    path: "#",
  },
  {
    title: "Pricing",
    path: "#",
  },
];

export const allHeaderItems = [
  ...headerItems1,
  { title: "logo" },
  ...headerItems2,
];

export const FooterLinks = [
  {
    title: "About",
    path: "#",
  },
  {
    title: "FAQ",
    path: "#",
  },
  {
    title: "Services & Facilities",
    path: "#",
  },
  {
    title: "Contact",
    path: "#",
  },
  {
    title: "Term of Use",
    path: "#",
  },
  {
    title: "Careers",
    path: "#",
  },
  {
    title: "Location",
    path: "#",
  },
  {
    title: "Privacy Police",
    path: "#",
  },
  {
    title: "How to book",
    path: "#",
  },
];

export const OfferCards = [
  {
    id: 1,
    img: offerPhoto1,
    name: "Room",
    title: "Honeymoon ",
    desciption: "Indulge in a Memorable One-Time Romantic Dinner for Two",
    personNumber: "2",
    price: {
      number: "$699",
      text: "/night",
    },
  },
  {
    id: 2,
    img: offerPhoto2,
    name: "Room",
    title: "Meetings",
    desciption:
      "Experience an Exclusively Private Environment to Boost Your Productivity",
    personNumber: "30",
    price: {
      number: "$999",
      text: "/night",
    },
  },
  {
    id: 3,
    img: offerPhoto3,
    name: "Dining",
    title: "Romantic Dining",
    desciption: "Indulge in a Memorable One-Time Romantic Dinner for Two",
    personNumber: "2",
    price: {
      number: "$499",
      text: "/table",
    },
  },
];
