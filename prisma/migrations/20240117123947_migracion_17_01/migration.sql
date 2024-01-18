-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "roles" TEXT[] DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "isAdmnin" SET DEFAULT true;
