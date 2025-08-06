document.querySelectorAll('.hidden-toggles__label').forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-href');
    window.location.href = target;
  });
});
