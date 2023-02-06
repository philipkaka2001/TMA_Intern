// [GET]v1/user
Response:
[
        {
            id: "1",
            role: true,
            username: "Vanson",
            email: "son@gmail.com",
            password: "123abc",
            phone: 375521434,
            address: "Quy Nhon",
            image: "img1.png"
        },
        {
            id: "2",
            role: true,
            username: "PhiLip",
            email: "lip@gmail.com",
            password: "123abc",
            phone: 384567432,
            address: "Quy Nhon",
            image: "img1.png"
        }
    ]

// [GET]v1/user/1
Response:
[
        {
            id: "1",
            role: true,
            username: "Vanson",
            email: "son@gmail.com",
            password: "123abc",
            phone: 375521434,
            address: "Quy Nhon",
            image: "img1.png"
        },
    ]


// [Post]v1/user
Response:
[
    {
        username: "Vanson",
        email: "son@gmail.com",
        password: "123abc",
        phone: 375521434,
        address: "Quy Nhon",
        image: "img1.png"
    },
]

// [Put]v1/user/:id
Response:
{
    msg: "Update successfully"
}

// [Delete]v1/user/:id
Response:
{
    msg: "Delete successfully"
}

