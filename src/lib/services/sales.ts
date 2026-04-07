import { prisma } from "../prisma/prisma";

type CreateSale = {
  documentType?: string | null;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  businessName?: string | null;
  companyRut?: string | null;
  companyLegalName?: string | null;
  businessActivity?: string | null;
  district?: string | null;
  businessAddress?: string | null;
  acceptedTerms?: boolean | null;
  paymentDate?: Date | null;
  paymentOperationId?: string | null;
};

export const createSale = async (sale: CreateSale) => {
  return await prisma.sale.create({
    data: {
      documentType: sale.documentType ?? null,
      name: sale.name ?? null,
      email: sale.email ?? null,
      phone: sale.phone ?? null,
      businessName: sale.businessName ?? null,
      companyRut: sale.companyRut ?? null,
      companyLegalName: sale.companyLegalName ?? null,
      businessActivity: sale.businessActivity ?? null,
      district: sale.district ?? null,
      businessAddress: sale.businessAddress ?? null,
      acceptedTerms: sale.acceptedTerms ?? false,
      paymentDate: sale.paymentDate ?? null,
      paymentOperationId: sale.paymentOperationId ?? null,
    },
  });
};
