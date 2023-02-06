// [GET]v1/product
Response: [
  {
    id: "1",
    image: "1",
    title: "Điện thoại 14 Promax",
    type: "Iphone",
    description: "Điện thoại được xuất xứ tại Mỹ",
    newPrice: 45000000,
    oldPrice: 50000000,
    quantity: 14,
    status: "còn hàng",
    rates: 5,
  },
  {
    id: "2",
    image: "1",
    title: "Điện thoại 14 Promax",
    type: "Iphone",
    description: "Điện thoại được xuất xứ tại Mỹ",
    newPrice: 45000000,
    oldPrice: 50000000,
    quantity: 14,
    status: "còn hàng",
    rates: 5,
  },
];

// [GET]v1/product/1
Response: [
  {
    id: "1",
    image: "1",
    title: "Điện thoại 14 Promax",
    type: "Iphone",
    description: "Điện thoại được xuất xứ tại Mỹ",
    newPrice: 45000000,
    oldPrice: 50000000,
    quantity: 14,
    status: "còn hàng",
    rates: 5,
  },
];

// [POST]v1/product
body: [
  {
    image: "1",
    title: "Điện thoại S23Utral",
    type: "SamSung",
    description: "Điện thoại được xuất xứ tại Hàn Quốc",
    newPrice: 45000000,
    oldPrice: 50000000,
    quantity: 23,
    status: "còn hàng",
    rates: 5,
  },
];

Response: {
  msg: "Add product successfully";
}

// [PUT]v1/product/:id
{
  msg: "Update product successfully";
}

// [DELETE]v1/product/:id
{
  msg: "Delete product successfully";
}
