import React, {Component} from 'react';

class Validate {
  constructor() {
    this.setting = {
      email: {
        pattern: /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i,
        message: 'E-mail адрес не валидный',
        default: 'Поле не может быть пустым'
      },
      textarea: {
        pattern: /.{15,}/i,
        message: 'Сообщение не меньше 15 символов',
        default: 'Поле не может быть пустым'
      },
      name: {
        pattern: /.{2,}/i,
        message: 'Заголовок не меньше 2 символа',
        default: 'Поле не может быть пустым'
      }
    };
  }

  field({name, value}) {
    return !(this.setting[name].pattern.test(value));
  }

  form(form) {
    let valid = true;

    for (const key in form) {
      if (!(this.setting[key].pattern.test(form[key]))) {
        valid = false;
      }
    }

    return valid;
  }
}


class Form extends Component {
  constructor() {
    super();

    this.validate = new Validate();

    this.state = {
      name: '',
      email: '',
      formIsValid: false,
      nameError: false,
      emailError: false
    };
  }

  serialize = () => {
    return {
      name: this.state.name,
      email: this.state.email
    };
  }

  submit = e => {
    e.preventDefault();

    if (this.checkForm()) {
      // форма валидная
    }

  }

  checkForm = () => {
    const formIsValid = this.validate.form(this.serialize());
    this.setState({formIsValid});
    return formIsValid;
  }


  onChange = ({currentTarget: field}) => {
    this.setState({[field.name]: field.value}, () => this.checkForm());

    const isValid = this.validate.field(field);

    this.setState({[`${field.name}Error`]: isValid});
  }


  render() {
    return (
      <div>
        <form autoComplete="off" onSubmit={this.submit}>

          <div className="form-group">
            <label>
              <input type="text" value={this.state.name} name="name" onChange={this.onChange} placeholder="имя" />
              {this.state.nameError && <div className="error">Имя не меньше 2 символа</div>}
            </label>
          </div>

          <div className="form-group">
            <label>
              <input type="text" value={this.state.email} name="email" onChange={this.onChange} placeholder="email" />
              {this.state.emailError && <div className="error">E-mail адрес не валидный</div>}
            </label>
          </div>

          <div>
            <button disabled={!this.state.formIsValid}>Отправить</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
