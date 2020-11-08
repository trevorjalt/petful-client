# petFul adoptions

At petFul you have the choice between a dog and a cat, and animals are adopted on a first in, first out basis. You will have to get in line to adopt. Once you are at the front of the line, you will have the chance to adopt your new companion!

## Repo Details

* Live: [petFul-adoptions](https://petful-live.vercel.app/ "petFul adoptions")
- Client - [petFul-client](https://github.com/trevorjalt/petful-client "petFul Client")
- Server - [petFul-server](https://github.com/trevorjalt/petful-server "petFul Api")

## How to use the API

### /api/people - GET

returns all queue currently in queue

```
[
    "Randy Lahey",
    "Trevor Cory",
    "Jim Lahey"
]
```

### /api/pets - GET

returns all pets from both the dog and cat queues

```
{
    "cats": [
        {
            "age": 2,
            "breed": "Bengal",
            "description": "Orange bengal cat with black stripes lounging on concrete.",
            "gender": "Female",
            "imageURL": "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "name": "Steve French",
            "story": "Thrown on the street"
        },
        ...
    ],
    "dogs": [
        {
            "age": 3,
            "breed": "Golden Retriever",
            "description": "A smiling golden-brown golden retreiver listening to music.",
            "gender": "Male",
            "imageURL": "https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "name": "Zim",
            "story": "Owner Passed away"
        },
        ...
    ]
}
```

### /api/pets/cat - GET

returns the cat located at the top of the cat queue

```
{
    "age": 2,
    "breed": "Bengal",
    "description": "Orange bengal cat with black stripes lounging on concrete.",
    "gender": "Female",
    "imageURL": "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "name": "Steve French",
    "story": "Thrown on the street"
}
```

### /api/pets/cat - DELETE

removes the top cat, as well as the top person from the respective queues

### /api/pets/dog - GET

returns the dog located at the top of the dog queue

```
{
    "age": 3,
    "breed": "Golden Retriever",
    "description": "A smiling golden-brown golden retreiver listening to music.",
    "gender": "Male",
    "imageURL": "https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "name": "Zim",
    "story": "Owner Passed away"
}
```
### /api/pets/dog - DELETE

removes the top dog, as well as the top person from the respective queues

### /api/pets - GET

returns all pets from both the dog and cat queues

```
{
    "cats": [
        {
            "age": 2,
            "breed": "Bengal",
            "description": "Orange bengal cat with black stripes lounging on concrete.",
            "gender": "Female",
            "imageURL": "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "name": "Steve French",
            "story": "Thrown on the street"
        },
        ...
    ],
    "dogs": [
        {
            "age": 3,
            "breed": "Golden Retriever",
            "description": "A smiling golden-brown golden retreiver listening to music.",
            "gender": "Male",
            "imageURL": "https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "name": "Zim",
            "story": "Owner Passed away"
        },
        ...
    ]
}
```

## Tech Stack

- Client - React
- Server - Express
- Database - Memory