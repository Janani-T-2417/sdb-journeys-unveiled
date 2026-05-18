export const WHATSAPP_NUMBER = "919885745970";
export const PHONE_NUMBERS = ["9885745970", "9885073009", "9703666026"];
export const PHONE_DISPLAY = "+91 98857 45970";
export const PHONE_DISPLAY_ALL = "+91 98857 45970, +91 98850 73009, +91 97036 66026";
export const EMAIL = "SDBTRAVELS3003@GMAIL.COM";
export const ADDRESS = "Pendurthi, Gopalapatnam, Visakhapatnam";

export function waUrl(message = "Hi SDB Travels, I want to enquire about your services") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
