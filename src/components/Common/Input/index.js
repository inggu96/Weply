import React, { memo } from "react";
import cx from "classnames";
import styles from "./input.module.scss";

const Input = ({ className, label, errorText, onChange, ...props }) => {
  return (
    <label
      className={cx(styles.label, className, { [styles.error]: errorText })}
    >
      {label && <p className={styles.labelText}>{label}</p>}
      <input className={styles.input} onChange={onChange} {...props} />
      {errorText && <p className={styles.errorText}>{errorText}</p>}
    </label>
  );
};

export default memo(Input);
