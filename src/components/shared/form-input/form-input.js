/* eslint-disable jsx-a11y/label-has-associated-control */

import "./form-input.scss";

const FormInput = (props) => {
  return (
    <div className="group">
      <input className="form-input" {...props} />
    </div>
  );
};

export default FormInput;
