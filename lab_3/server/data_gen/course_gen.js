import {faker} from '@faker-js/faker'
import { getStudnet } from '../data_gen/student_gen.js';

export const getCourse = (id) => {
    const studnets = []
    faker.seed(Number(id));
    for(let i = 0 ; i < 10 ; i++){
        studnets.push(getStudnet(i * id * 13))
    }
    return{
        id: id,
        name: faker.vehicle.manufacturer(),
        place: faker.word.adjective(),
        leader_name: faker.person.firstName(),
        leader_surname: faker.person.lastName(),
        students_list: studnets
    }
}