export interface Tour {
  id: number;
  name: string;
  duration: string;
  image: string;
  itinerary: string[];
}

export const tours: Tour[] = [
  {
    id: 1,
    name: "Hội An",
    duration: "Ngày thứ 3",
    image: "/image/hoian.jpg",
    itinerary: [
      "Ngày 1: Hà Nội - Khởi hành",
      "Ngày 2: Huế - Kinh thành",
      "Ngày 3: Hội An - Phố cổ",
      "Ngày 4: Đà Nẵng - Biển",
      "Ngày 5: Kết thúc",
    ],
  },
  {
    id: 2,
    name: "Đà Nẵng",
    duration: "Ngày thứ 2",
    image: "/image/danang.jpg",
    itinerary: [
      "Ngày 1: Hà Nội - Khởi hành",
      "Ngày 2: Huế - Kinh thành",
      "Ngày 3: Hội An - Phố cổ",
      "Ngày 4: Đà Nẵng - Biển",
      "Ngày 5: Kết thúc",
    ],
  },

  {
    id: 3,
    name: "Huế",
    duration: "Ngày đầu tiên",
    image: "/image/hue2.jpg",
    itinerary: [
      "Ngày 1: Hà Nội - Khởi hành",
      "Ngày 2: Huế - Kinh thành",
      "Ngày 3: Hội An - Phố cổ",
      "Ngày 4: Đà Nẵng - Biển",
      "Ngày 5: Kết thúc",
    ],
  },
];
