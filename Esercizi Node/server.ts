import express from 'express'
import "express-async-errors"
import morgan from 'morgan'
import 'dotenv/config'

const app = express()
const port = process.env.PORT || 3000

type Planet = {
    id: number,
    name: string,
};

type Planets = Planet[];

let planets: Planets = [
    {
        id: 1,
        name: "Earth",
    },
    {
        id: 2,
        name: "Mars",
    },
];

app.use(express.json())

app.use(morgan("dev"))

app.get('/api/planets', (req, res) => {
    res.status(200).json(planets)
})

app.get('/api/planets/:id', (req, res) => {
    const { id } = req.params
    const planet = planets.find(p => p.id === Number(id))

    res.status(200).json(planet)
})

app.post('/api/planets', (req, res) => {
    const { id, name } = req.body
    const newPlanet = { id, name }
    planets = [...planets, newPlanet]

    res.status(201).json({ msg: "The planet was created." })
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
