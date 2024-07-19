import { PrismaClient } from "@prisma/client";
import { mockDeep, mockReset, DeepMockProxy } from 'jest-mock-extended';
import { prisma } from "../../../../prisma/prisma.client";

jest.mock('.../../../../database/prisma.ts', () => ({
   __esModule: true,
   prisma: mockDeep<PrismaClient>()
}));

beforeEach(() => {
   mockReset(prismaMock);
});

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>;