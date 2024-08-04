import express from "express";

const app = express();
app.use(express.static('dist'))
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("<h1> This is testing the server is running or not </h1>");
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        { index : 1,
          type : "Funny",
          content : "Knock-Knock Joke: Knock knock.Who's there? Interrupting cow.Interrupting cow wh-MOOOO!"
        },
        {
            index : 2,
            type : "Scary",
            content : "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
            index : 3,
            type : "Romantic",
            content : "Are you a loan? Because you've got 'outstanding' written all over you."
        },
        {
            index : 4,
            type : "Friendly",
            content : "Why can't a bicycle stand up on its own? Because it's two-tired!"
        },
        {
            index : 5,
            type : "Dark",
            content : "How many feet are there in a yard? It depends on how many people are standing there"

        },
        {
            index : 6,
            type : "Humour",
            content : "I'm not saying I'm Batman, but have you ever seen me and Batman in the same room together?"

        }
    ];
    res.send(jokes);
})

app.listen(port , () => {
    console.log(`Server is listening at the port : http://localhost:${port}`);
})
