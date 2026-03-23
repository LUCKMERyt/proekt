const blocks = document.querySelectorAll('.blocks');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0; // текущий показываемый блок

// функция для отображения блока по индексу
function showBlock(index) {
  if (index < 0) {
    currentIndex = blocks.length - 1; // переходим к последнему
  } else if (index >= blocks.length) {
    currentIndex = 0; // переходим к первому
  } else {
    currentIndex = index;
  }

  // скрываем все блоки и показываем только текущий
  blocks.forEach((block, i) => {
    block.style.display = i === currentIndex ? 'block' : 'none';
  });
}

// первоначально показываем первый блок
showBlock(currentIndex);

// обработчики кнопок
prevBtn.addEventListener('click', () => showBlock(currentIndex - 1));
nextBtn.addEventListener('click', () => showBlock(currentIndex + 1));