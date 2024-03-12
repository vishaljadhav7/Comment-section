

const commentData = [
    {
        id : Math.random()*1000,
        comment: "Tom really likes Mary",
        replies : []
    },
    {
        id : Math.random()*1000,
        comment: "Let's play another game",
        replies : [
            {
                id : Math.random()*1000,
                comment: "Let's play game",
                replies : []
            }
        ]
    },
    {
        id : Math.random()*1000,
        comment: "You didn't have to come",
        replies : [
            {
            id : Math.random()*1000,
            comment: "Please repeat after me",
            replies : []
            },
            {
            id : Math.random()*1000,
                comment: "Stop the countdown",
                replies : []
            }]
    },
    {
        id : Math.random()*1000,
        comment: "I tried to call her",
        replies : []
    },
    {
        id : Math.random()*1000,
        comment: "Go and help them, Bud",
        replies : []
    }
];

export default commentData;