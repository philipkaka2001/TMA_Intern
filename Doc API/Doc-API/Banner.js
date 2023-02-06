// [GET]v1/banner
Response: [
  {
    id: "1",
    image: "img.png",
  },
  {
    id: "2",
    image: "img1.png",
  },
  {
    id: "3",
    image: "img2.png",
  },
];

// [GET]v1/banner/1

Response: [
  {
    id: "1",
    image: "img.png",
  },
];

// [POST]v1/banner
body: [
  {
    id: "4",
    image: "img3.png",
  },
];

Response: {
  msg: "Add banner successfully";
}

// [PUT]v1/banner/1

body: [
  {
    image: "img3.png",
  },
];

Response: {
  msg: "Update banner successfully";
}

// [DELETE]v1/banner/1
Response: {
  msg: "Delete banner successfully";
}
