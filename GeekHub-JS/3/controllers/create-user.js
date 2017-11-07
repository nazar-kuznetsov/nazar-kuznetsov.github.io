let path = require('path');

const regExp = {
  number: /[0-9]/,
  letters: /^[a-d]+$/i
};

let arrError = [];

module.exports = function (req, res) {
  let user = req.body;

  if (!regExp.number.test(+user.numbers) || user.numbers.length === 0) {
    arrError.push({
      inputName: 'input[name=numbers]',
      massageError: 'Можно вводить только цыфры!'
    });
  }

  if (!regExp.letters.test(user.letters)) {
    arrError.push({
      inputName: 'input[name=letters]',
      massageError: 'Можно ввести только буквы a b c d'
    });
  }

  if (user.agreement !== 'active') {
    arrError.push({
      inputName: 'input[name=agreement]',
      massageError: 'Вы забыли поставить галочку'
    });
  }

  if (user.type === undefined) {
    arrError.push({
      inputName: '.last-radio',
      massageError: 'Выберите язык програмирование!'
    });
  }

  if (arrError.length > 0) {
    res.status(500).json(arrError);
  } else {
    res.status(200).json('.form-seccess');
  }

  arrError.length = 0;
  return false;
};
