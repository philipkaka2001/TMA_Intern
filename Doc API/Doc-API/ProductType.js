// [GET]v1/typeProduct
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

// [GET]v1/typeProduct/1
Response: [
  {
    id: "1",
    name: "Iphone",
  },
];

// [POST]v1/typeProduct
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


// [DELETE]v1/typeProduct/1

Response: [
  {
    msg: "Delete product type successfully",
  },
];
