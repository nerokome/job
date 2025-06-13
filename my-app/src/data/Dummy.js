export const towers = ["Tower A", "Tower B", "Tower C"];

export const floors = Array.from({ length: 15 }, (_, i) => Floor `${15 - i}`);

export const apartments = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    area: "1200 sqft",
    type: "2BHK",
    rooms: "2 Bed, 1 Kitchen",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    area: "1500 sqft",
    type: "3BHK",
    rooms: "3 Bed, 1 Kitchen",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
    area: "900 sqft",
    type: "1BHK",
    rooms: "1 Bed, 1 Kitchen",
  },
];
