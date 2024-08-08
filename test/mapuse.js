const list = [
    {
        name:"hello"
    },
    {
        name: "by"
    }
];
const mapped =new Map(list.map(user=>[user.name, user]));
console.log(mapped)
