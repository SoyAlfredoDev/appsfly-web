export type Plan = {
  id: string;
  name: string;
  price: number;
  iva: number;
  highlight: boolean;
  results: string[];
  features: string[];
  cta: string;
  linkCheckout: string;
  linkMercadoPago: string;
};
