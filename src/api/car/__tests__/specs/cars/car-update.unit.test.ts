import { container } from 'tsyringe';
import { CarService } from '../../../service';
import { mock_createCar, mock_invalidCarData, mock_updateCar, mock_updateCarBody } from '../../__mocks__/car.mock';
import { prismaMock } from "../../__mocks__/prisma.mock";
import { request } from '../../setupFiles';
import { mockReset } from 'jest-mock-extended';


describe('Integrations test: update car', () => {

   beforeEach(() => {
      prismaMock.car.findUnique.mockResolvedValue(mock_createCar);
    });

    afterEach(() => {
      mockReset(prismaMock); 
   });

   it('should be able to update car with sucess', async () => {
      const carService = container.resolve(CarService);

      const car = mock_updateCar;

      prismaMock.car.update.mockResolvedValue(car);

      const data = await carService.update(mock_updateCarBody, car.id);

      expect(data).toStrictEqual(mock_updateCar);
   });

   it("should throw error when try to update a invalid car", async () => {
  
      const car = await prismaMock.car.findFirst();
  
      const id = (car?.id as string) + 1;
  
      await request
        .patch(`/cars/${id}`)
        .expect(404)
        .then((response) => response.body);
    });
  
    it("should throw error when try to update a car with invalid data types", async () => {
  
      const car = await prismaMock.car.findFirst();
  
      const id = (car?.id);
  
      await request
        .patch(`/cars/${id}`)
        .send(mock_invalidCarData)
        .expect(400);
    });
});