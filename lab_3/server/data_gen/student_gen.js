import {faker} from '@faker-js/faker'

export const getStudnet = (id) => {
    faker.seed(Number(id));
    return{
        id: id,
        name: faker.person.firstName(),
        surname: faker.person.lastName(),
        email: faker.internet.email()
    }
}