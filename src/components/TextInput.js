import { useField } from "formik";

export const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            {!props.as ? <input className={meta.error && meta.touched ?
                "ring-red-500 focus:ring-red-500 ring-1" :
                "focus:ring-green-500 focus:ring-1"}
                {...field} {...props} />
                : <textarea className={meta.error && meta.touched ?
                    "ring-red-500 focus:ring-red-500 ring-1" :
                    "focus:ring-green-500 focus:ring-1"}
                    {...field} {...props}></textarea>
            }
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
}
