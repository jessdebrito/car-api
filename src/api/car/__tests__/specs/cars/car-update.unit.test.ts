import { request } from '../../setupFiles';

describe('Unit tests: get cars, get car by id, and edit car by id', () => {
   test('should be able to get many cars with success', async () => {
      const data = await request.get('/cars').then(response => response.body);
      expect(data).toBeDefined();
   });

   test('should be able to get a car with success', async () => {
      const data = await request
         .get('/cars')
         .expect(200)
         .then(response => response.body);

      expect(data).toBeDefined();
   });

   it('should return an error when getting a car with a non-existing id', async () => {
      const response = await request.get('/cars/99999');

      const expectedBody = {
         message: 'Car not found',
      };

      expect(response.body).toEqual(expectedBody);
      expect(response.statusCode).toBe(404);
   });

   it('should be able to edit a car by id with success', async () => {
      const carId = 1;
      const updatedCar = {
         name: 'Updated Car Name',
         description: 'Updated description',
         brand: 'Updated Brand',
         year: 2022,
         km: 5000,
      };

      const response = await request
         .put(`/cars/${carId}`)
         .send(updatedCar)
         .expect(200);

      const data = response.body;

      expect(data).toBeDefined();
      expect(data.id).toBe(carId);
      expect(data.name).toBe(updatedCar.name);
      expect(data.description).toBe(updatedCar.description);
      expect(data.brand).toBe(updatedCar.brand);
      expect(data.year).toBe(updatedCar.year);
      expect(data.km).toBe(updatedCar.km);
   });

   it('should return an error when editing a car with a non-existing id', async () => {
      const carId = 99999;
      const updatedCar = {
         name: 'Updated Car Name',
         description: 'Updated description',
         brand: 'Updated Brand',
         year: 2022,
         km: 5000,
      };

      const response = await request
         .put(`/cars/${carId}`)
         .send(updatedCar)
         .expect(404);

      const expectedBody = {
         message: 'Car not found',
      };

      expect(response.body).toEqual(expectedBody);
   });
});
