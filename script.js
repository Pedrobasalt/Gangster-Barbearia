document.addEventListener('DOMContentLoaded', () => {
  const signup = document.getElementById('signup-form');
  if (signup) signup.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('nome').value.trim();
    const message = document.getElementById('signup-success');
    message.textContent = `Cadastro demonstrativo preenchido, ${name.split(' ')[0]}! Nenhum dado foi enviado para a internet.`;
    message.classList.add('show');
  });

  const booking = document.getElementById('booking-form');
  if (booking) {
    const date = document.getElementById('data');
    const today = new Date();
    const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0,10);
    date.min = localToday;
    booking.addEventListener('submit', (event) => {
      event.preventDefault();
      const who = document.getElementById('barbeiro').value;
      const when = document.getElementById('data').value;
      const time = document.getElementById('hora').value;
      const message = document.getElementById('booking-success');
      message.textContent = `Pedido demonstrativo: ${who}, ${when} às ${time}. Isso não é uma reserva confirmada.`;
      message.classList.add('show');
    });
  }
});