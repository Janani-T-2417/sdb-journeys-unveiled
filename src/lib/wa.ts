export const WHATSAPP_NUMBER = "91XXXXXXXXXX";
export const PHONE_DISPLAY = "+91 XXXXX XXXXX";
export const EMAIL = "hello@sdbtravels.in";
export const ADDRESS = "SDB Travels, MG Road, Visakhapatnam, Andhra Pradesh, India";

export function waUrl(message = "Hi SDB Travels, I want to enquire about your tour packages") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
