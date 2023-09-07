import { toast } from "@/components/ui/Toast";

export const shortToast = (title: string, message: string, type: string, duration: number) => {
  toast({
    title,
    message,
    type: type as any,
    duration
  });
}

export const getAsHTMLInputElement = (id: string) => {
  return document.getElementById(id) as HTMLInputElement;
}