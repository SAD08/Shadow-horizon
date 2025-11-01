document.querySelectorAll('.side-panel').forEach(panel => {
  panel.addEventListener('mouseenter', () => {
    // Сначала закрываем все панели
    document.querySelectorAll('.side-panel').forEach(p => {
      if (p !== panel) p.classList.remove('active');
    });
    // Потом открываем только ту, на которую навели
    panel.classList.add('active');
  });

  panel.addEventListener('mouseleave', () => {
    panel.classList.remove('active');
  });
});