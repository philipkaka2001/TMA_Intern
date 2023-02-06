// [GET]v1/user
Response: [
  {
    id: "1",
    name: "Iphone",
  },
  {
    id: "2",
    name: "LapTop",
  },
  {
    id: "3",
    name: "Samsung",
  },
];

// [GET]v1/user/1
Response: [
  {
    id: "1",
    name: "Iphone",
  },
];

// [POST]v1/user
body: [
  {
    name: "Iphone",
  },
];

Response: [
  {
    msg: "Add product type successfully",
  },
];

// [PUT]v1/user/1

body: [
  {
    name: "Ipad",
  },
];

Response: [
  {
    msg: "Update product type successfully",
  },
];

// [DELETE]v1/user/1

Response: [
  {
    msg: "Delete product type successfully",
  },
];
