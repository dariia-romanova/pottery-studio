import { useState } from 'react';
import styles from './input.module.css';

type InputProps = {
  type: 'text' | 'email' | 'date' | 'tel' | 'textarea',
  label: string,
  tip: string,
  required?: boolean,
}

export const Input = ({ type, label, tip, required }: InputProps) => {
  const [value, setValue] = useState('');

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
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        ): (
          <input
            type={type}
            value={value}
            placeholder={tip}
            className={styles.input_area}
            onChange={(event) => setValue(event.target.value)}
          />
        )}
      </label>
    </div>

  );
};
