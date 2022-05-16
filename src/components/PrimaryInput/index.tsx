import React from "react";
import styles from "./style.module.scss";

type Props = {
    className?: any;
    placeholder: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    type?: string;
    disabled?: boolean;
    name?: string;
    id?: string;
    label?: string;
};

export function PrimaryInput(props: Props) {
    return (
        <>
            <label className={styles.label} htmlFor={props.type}>
                {props.label}
            </label>
            <input
                className={`${styles.primaryInput} ${styles[props.className]}`}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                disabled={props.disabled}
                name={props.name}
                id={props.id}
                onChange={props.onChange}
            />
        </>
    );
}