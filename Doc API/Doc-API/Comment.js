// [GET]v1/comment/1
Response: [
  {
    id: "1",
    id_user: "1",
    id_product: "1",
    comment: "Product very good",
    rate: 5,
  },
];

// [POST]v1/comment
body: [
  {
    id_user: "2",
    id_product: "2",
    comment: "Product very good",
    rate: 5,
  },
];

Response: {
  msg: "Add comment successfully";
}

// [PUT]v1/comment/1
body: [
  {
    id_user: "2",
    id_product: "2",
    comment: "Product very good",
    rate: 5,
  },
];

Response: {
  msg: "Update comment successfully";
}

// [DELETE]v1/comment/1

Response: {
  msg: "Delete comment successfully";
}
