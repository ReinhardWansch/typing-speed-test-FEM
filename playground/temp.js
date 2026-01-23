
const randomObject = {
    id: Math.floor(Math.random() * 1000),
    name: "User" + Math.floor(Math.random() * 100),
    age: Math.floor(Math.random() * 80) + 18,
    email: `user${Math.floor(Math.random() * 1000)}@example.com`,
    isActive: Math.random() > 0.5,
    score: Math.random() * 100,
    createdAt: new Date(),
    tags: ["tag1", "tag2", "tag3"]
};

console.log(randomObject['name']);