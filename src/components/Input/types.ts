export type InputProps = {
    title: string;
    placeholder: string;
    disabled?: boolean;
    errorText?: boolean;
    type?: "password" | "text" | "number" | "email" | "tel";
    className?: string;
};