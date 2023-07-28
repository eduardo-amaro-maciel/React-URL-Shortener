import { toast } from "react-toastify";

export default function clipboard(textToCopy: string) {
   navigator.clipboard.writeText(textToCopy);
   toast.success("Link copiado para area de transferência");
}
