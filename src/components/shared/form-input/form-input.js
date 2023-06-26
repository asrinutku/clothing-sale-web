/* eslint-disable jsx-a11y/label-has-associated-control */

import "./form-input.scss";

const FormInput = ({ label, props }) => {
  return (
    <div className="group">
      <input className="form-input" {...props} />
      {label && (
        <label
          className={`${props?.value.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
