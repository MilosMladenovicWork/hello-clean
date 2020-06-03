
import React from "react";
import './styles/contactformsection.scss'

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <section className='contactform-section'>
        <div>
          <h2>Skontaktuj się z nami!</h2>
          <p>Poszukujesz sprawdzonych rozwiązań? Doskonale!</p>
          <p>Zadzwoń lub opisz nam swoje potrzeby w formularzu kontaktowym! Pamiętaj, że wysyłając koncepty projektowe lub preferencje zamówienia zgadzasz się na przetwarzanie danych osobowych!</p>
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/xeqraprg"
            method="POST"
          >
            <div className={status === "SUCCESS" ? 'hidden' : 'shown'}>
              <div className='inputs'>
                <label for='name'>Imię:</label>
                <input type='text' name='name' id='name'></input>
              </div>
              <div className='inputs'>
                <label for='email'>E&#8209;mail:</label>
                <input type="email" name="email" id='email'/>
              </div>
            </div>
            <div className={status === "SUCCESS" ? 'hidden' : 'shown'}>
              <div>
                <label form='message'>Wiadomość:</label>
                <textarea name="message" id='message'></textarea>
              </div>
            </div>
            {status === "SUCCESS" ? <p className='success'>Thanks!</p> : <button type='submit' className={status === "SUCCESS" ? 'hidden' : 'shown'}>Submit</button>}
            {status === "ERROR" && <p className='error'>Ooops! There was an error.</p>}
          </form>
        </div>
      </section>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}