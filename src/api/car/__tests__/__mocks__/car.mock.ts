export const mock_createCar = {
    id: 'b42f6e4d-20e7-4867-91e0-08388193d85c',
    name: 'Car name',
    description: 'Car description',
    brand: 'Car brand',
    year: 2023,
    km: 10000
 };
 
 export const mock_createCarBody = {
    name: mock_createCar.name,
    description: mock_createCar.description,
    brand: mock_createCar.brand,
    year: mock_createCar.year,
    km: mock_createCar.km
 };
 
 export const mock_createCarReturn = mock_createCar;
 
 export const mock_invalidCarData = {
   name: 123, 
   description: 123, 
   brand: 123, 
   year: "2023", 
   km: "10000" 
 };
 
 
 export const mock_getManyCars = [
    {
       name: mock_createCar.name,
       description: mock_createCar.description,
       brand: mock_createCar.brand,
       year: mock_createCar.year,
       km: '123'
    }
 ];
 
 export const mock_deleteCar = 'invalidId';
 
 export const mock_updateCarBody = {
    name: 'Car name updated',
    description: 'Car description updated',
    brand: 'Car brand updated',
    year: 2022,
    km: 20000
 };
 
 export const mock_updateCar = { ...mock_updateCarBody, id: mock_createCar.id };