// [GET]v1/user
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

// [GET]v1/user/1
Response: [
  {
    id: "1",
    image: "img.png",
  },
];

// [POST]v1/user
body: [
  {
    image: "img3.png",
  },
];

Response: [
  {
    msg: "Add product image successfully",
  },
];

// [PUT]v1/user/1
body: [
  {
    image: "img4.png",
  },
];

Response: [
  {
    msg: "Update product image successfully",
  },
];

// [DELETE]v1/user/1
Response: [
  {
    msg: "Delete product image successfully",
  },
];
