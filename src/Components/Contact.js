const Contact = () => {
    return (
      <form
        action="https://formsubmit.co/juliadolata007@gmail.com"
        method="POST"
      >
        <input type="text" name="Imię i nazwisko" placeholder="Imię i nazwisko" required />
        <input type="email" name="Email" required />
        <input type="text" name="Numer telefonu" />
        <input type="text" name="Wiadomość" required />
        <button type="submit">Wyślij</button>
      </form>
    );
  };
  
  export default Contact;