import { useState } from 'react';
import styles from './input.module.css';

type InputProps = {
  type: 'text' | 'email' | 'date' | 'tel' | 'textarea' | 'password', 
  label: string,
  tip: string,
  required?: boolean,
  fixedValue?: string,
}

export const Input = ({ type, label, tip, required, fixedValue }: InputProps) => {
  const [value, setValue] = useState(fixedValue || '');

  return (
    <div>
      <label>
        <p className={styles.input_label}>
          {label}
          {required && (
            <span className={styles.input_required}>{' *'}</span>
          )}
        </p>
        {type === 'textarea' ? (
          <textarea
            className={styles.input_area}
            placeholder={tip}
            rows={4}
            value={fixedValue || value}
            onChange={(event) => setValue(event.target.value)}
            readOnly={!!fixedValue}
          />
        ): (
          <input
            type={type}
            value={fixedValue || value}
            placeholder={tip}
            className={styles.input_area}
            onChange={(event) => setValue(event.target.value)}
            readOnly={!!fixedValue}
          />
        )}
      </label>
    </div>

  );
};
