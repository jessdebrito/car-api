import { request } from "../../setupFiles";


describe('Unit tests: get cars and get car by id', () => {
   test('should be able to get many car with success', async () => {
      const data = await request.get('/cars').then(response => response.body);
      expect(data).toBeDefined();
   });

   test('should be able to get car with sucess', async () => {
    const data = await request
       .get('/cars')
       .expect(200)
       .then(response => response.body);

    expect(data).toBeDefined();
 });

 it("should return an error getting a car with non existing id", async () => {
   const response = await request.get("/cars/99999");

   const expectedBody = {
     message: "Car not found",
   };

   expect(response.body).toEqual(expectedBody);
   expect(response.statusCode).toBe(404);
 });
});