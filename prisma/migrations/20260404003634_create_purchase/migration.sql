-- CreateTable
CREATE TABLE "Purchase" (
    "id" TEXT NOT NULL,
    "documentType" TEXT,
    "name" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "businessName" TEXT,
    "companyRut" TEXT,
    "companyLegalName" TEXT,
    "businessActivity" TEXT,
    "district" TEXT,
    "businessAddress" TEXT,
    "acceptedTerms" BOOLEAN NOT NULL,
    "paymentDate" TIMESTAMP(3),
    "paymentOperationId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Purchase_pkey" PRIMARY KEY ("id")
);
