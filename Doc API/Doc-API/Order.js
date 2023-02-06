// [GET]v1/order
Response: [
  {
    id: "1",
    id_product: "1",
    id_user: "1",
  },
  {
    id: "2",
    id_product: "2",
    id_user: "2",
  },
];
// [GET]v1/order/1
Response: [
  {
    id: "1",
    id_product: "1",
    id_user: "1",
  },
];

// [POST]v1/order
body: [
  {
    id_product: "3",
    id_user: "3",
  },
];

Response: [
  {
    msg: "Add Order successfully",
  },
];

// [PUT]v1/order/1
body: [
  {
    id_product: "4",
    id_user: "1",
  },
];

Response: [
  {
    msg: "Update Order successfully",
  },
];

// [DELETE]v1/order/1

Response: [
  {
    msg: "Delete Order successfully",
  },
];
