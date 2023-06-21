import { getPassengersWithTravels } from "../services/passengersService"

export const getPassagers = async (req, res) => {
const {page} = req.query
    const passengers = await getPassengersWithTravels(page)

    return res.json(passengers)
}