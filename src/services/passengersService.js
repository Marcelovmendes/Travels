import * as passengersRepository from '../repositories/passengersRepository';

export async function getPassengersWithTravels(page=1) {

    const size = 100;
    const offSet= (page-1)*size

    const passengers = await passengersRepository.getPassengersWithTravels();

    if(passengers.length>size){
        const totalPage = passengers.length/ size 
        const resultPage = passengers.slice(offSet,offSet+size)
    
 return{
    totalPage,
    currentPage:page,
    results:resultPage
 }
    }
}