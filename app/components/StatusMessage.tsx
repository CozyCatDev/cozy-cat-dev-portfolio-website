import s from "@componentStyles/StatusMessage.module.scss";

export default function StatusMessage({message, status}: {message: string, status: string}){
    return (
        <p className={s[`${status}-message`]}>
            {message}
        </p>
    )
}