import { toast } from "@/components/ui/Toast";

export const shortToast = (title: string, message: string, type: string) => {
  toast({
    title,
    message,
    type: type as any,
  });
}

export const getAsHTMLInputElement = (id: string) => {
  return document.getElementById(id) as HTMLInputElement;
}