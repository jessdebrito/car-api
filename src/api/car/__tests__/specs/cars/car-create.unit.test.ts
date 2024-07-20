import { prisma } from "../../../../../configs/prisma.config";
import { apiClient } from "../../../../@shared/__tests__/setupFiles";


describe("INTEGRATION: POST /api/cars - car creation tests", () => {

   beforeAll(async () => {
      await prisma.car.deleteMany();
   });

   beforeEach(async () => {
      await prisma.car.deleteMany();
   });

   // TEARDOWN
   afterEach(async () => {
      await prisma.car.deleteMany();
   });

   afterAll(async () => {
      await prisma.car.deleteMany();
   });


   test("should be able to create a new car", async () => {

      const newCar = {
         name: 'New Car',
         description: 'New description',
         brand: 'New Brand',
         year: 2023,
         km: 0,
         userId: 1,
      };

      const response = await apiClient.post("/api/cars").send(newCar);

      const expectedResponseBody = {
         name: newCar.name,
         description: newCar.description,
         brand: newCar.brand,
         year: newCar.year,
         km: newCar.km,
         userId: newCar.userId,
      };
      expect(response.body).toEqual(expectedResponseBody);
      expect(response.status).toBe(201);

      const carCount = await prisma.car.count();
      expect(carCount).toBe(1);
   });




   test("should return an error if creating a car without required fields", async () => {
      const response = await apiClient.post("/api/cars").send({});
  
      const expectedResponseBody = {
        details: [
          {
            field: ["name"],
            message: "Required",
          },

          {
            field: ["brand"],
            message: "Required",
          },
          {
            field: ["year"],
            message: "Required",
          },
          {
            field: ["km"],
            message: "Required",
          },
          {
            field: ["userId"],
            message: "Required",
          },
        ],
      };
  
      expect(response.body).toEqual(expectedResponseBody);
      expect(response.status).toBe(400);
  
      const carCount = await prisma.car.count();
      expect(carCount).toBe(0);
    });
  
    test("should return an error if creating a car with an empty name", async () => {
      const newCar = {
         name: 'New Car',
         description: 'New description',
         brand: 'New Brand',
         year: 2023,
         km: 0,
         userId: 1,
      };
  
      const response = await apiClient.post("/api/cars").send(newCar);
  
      const expectedResponseBody = {
        details: [
          {
            field: ["name"],
            message: "String must contain at least 1 character(s)",
          },
        ],
      };
  
      expect(response.body).toEqual(expectedResponseBody);
      expect(response.status).toBe(400);
  
      const carCount = await prisma.car.count();
      expect(carCount).toBe(0);
    });
  
    test("should return an error if creating a car with a name longer than 255 chars", async () => {
      const longTitle = "a".repeat(256);
      const newCar = {
         name: 'New Car',
         description: 'New description',
         brand: 'New Brand',
         year: 2023,
         km: 0,
         userId: 1,
      };
  
      const response = await apiClient.post("/api/cars").send(newCar);
  
      const expectedResponseBody = {
        details: [
          {
            field: ["name"],
            message: "String must contain at most 255 character(s)",
          },
        ],
      };
  
      expect(response.body).toEqual(expectedResponseBody);
      expect(response.status).toBe(400);
  
      const carCount = await prisma.car.count();
      expect(carCount).toBe(0);
    });
  
    test("should return an error if creating a car with an empty author", async () => {
      const newCar = {
         name: 'New Car',
         description: 'New description',
         brand: 'New Brand',
         year: 2023,
         km: 0,
         userId: 1,
      };
  
      const response = await apiClient.post("/api/cars").send(newCar);
  
      const expectedResponseBody = {
        details: [
          {
            field: ["author"],
            message: "String must contain at least 1 character(s)",
          },
        ],
      };
  
      expect(response.body).toEqual(expectedResponseBody);
      expect(response.status).toBe(400);
  
      const carCount = await prisma.car.count();
      expect(carCount).toBe(0);
    });
  
    test("should return an error if creating a car with a author longer than 100 chars", async () => {
      const longAuthor = "a".repeat(101);
      const newCar = {
         name: 'New Car',
         description: 'New description',
         brand: 'New Brand',
         year: 2023,
         km: 0,
         userId: 1,
      };
  
      const response = await apiClient.post("/api/cars").send(newCar);
  
      const expectedResponseBody = {
        details: [
          {
            field: ["author"],
            message: "String must contain at most 100 character(s)",
          },
        ],
      };
  
      expect(response.body).toEqual(expectedResponseBody);
      expect(response.status).toBe(400);
  
      const carCount = await prisma.car.count();
      expect(carCount).toBe(0);
    });
  
    test("should return an error if creating a car with a negative/zero publicationYear", async () => {
      const newCar = {
         name: 'New Car',
         description: 'New description',
         brand: 'New Brand',
         year: 2023,
         km: 0,
         userId: 1,
      };
  
      const response = await apiClient.post("/api/cars").send(newCar);
  
      const expectedResponseBody = {
        details: [
          {
            field: ["publicationYear"],
            message: "Number must be greater than 0",
          },
        ],
      };
  
      expect(response.body).toEqual(expectedResponseBody);
      expect(response.status).toBe(400);
  
      const carCount = await prisma.car.count();
      expect(carCount).toBe(0);
    });
  
    test("should be able to create a car with `available` field default to true if not specified", async () => {
      const carData = {
         name: 'New Car',
         description: 'New description',
         brand: 'New Brand',
         year: 2023,
         km: 0,
         userId: 1,
      };
  
      const response = await apiClient.post("/api/cars").send(carData);
  
      const expectedResponseBody = {
        id: expect.any(Number),
        name: carData.name,
        description: carData.description,
        brand: carData.brand,
        year: carData.year,
        km: carData.km,
        userId: carData.userId,
      };
  
      expect(response.body).toEqual(expectedResponseBody);
      expect(response.status).toBe(201);
  
      const carCount = await prisma.car.count();
      expect(carCount).toBe(1);
    });
  });