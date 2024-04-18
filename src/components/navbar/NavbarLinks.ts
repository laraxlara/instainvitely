export interface Sublinks {
  id: number;
  title: string;
  url: string;
}

export interface NavLink {
  id: number;
  title: string;
  url: string;
  sublinks: Sublinks[];
}

export const links: NavLink[] = [
  {
    id: 1,
    title: "Holidays & Seasonal Events",
    url: "/products",
    sublinks: [
      { id: 1, title: "Christmas", url: "/christmas" },
      { id: 2, title: "New Year's", url: "/new-year" },
      { id: 3, title: "Halloween", url: "/halloween" },
      { id: 4, title: "Valentine's Day", url: "/valentines-day" },
    ],
  },
  {
    id: 2,
    title: "Birthday",
    url: "/products",
    sublinks: [
      { id: 1, title: "Kids' Birthdays", url: "/kids-birthday" },
      { id: 2, title: "Teen Birthdays", url: "/teen-birthday" },
      {
        id: 3,
        title: "Milestone Birthdays (30th, 40th, etc.)",
        url: "/milestone-birthday",
      },
      { id: 4, title: "Themed Parties", url: "/themed-birthday" },
    ],
  },
  {
    id: 3,
    title: "Wedding",
    url: "/products",
    sublinks: [
      { id: 1, title: "Traditional", url: "/traditional" },
      { id: 2, title: "Modern", url: "/modern" },
      { id: 3, title: "Destionation", url: "/destionation" },
      { id: 4, title: "Save The Date", url: "/save-the-date" },
      { id: 5, title: "Bridal Shower", url: "/bridal-shower" },
    ],
  },
  {
    id: 4,
    title: "Special Occasions",
    url: "/products",
    sublinks: [
      { id: 1, title: "Graduation", url: "/graduation" },
      { id: 2, title: "Baby Shower", url: "/baby-shower" },
      { id: 3, title: "Anniversary", url: "/anniversary" },
      { id: 4, title: "Housewarming", url: "/housewarming" },
    ],
  },
  {
    id: 5,
    title: "Corporate & Business Events",
    url: "/products",
    sublinks: [
      { id: 1, title: "Conferences", url: "/conferences" },
      { id: 2, title: "Networking Events", url: "/networkin-events" },
      { id: 3, title: "Product Launches", url: "/product-launches" },
      { id: 4, title: "Company Parties", url: "/company-parties" },
    ],
  },
];
