import boardData from '../../helpers/data/boardData';

const boardsOnDom = (obj) => {
  $('#app').html('');
  Object.keys(obj).forEach((item) => {
    $('#app').append(`<h3>${obj[item].name}</h3>`);
  });
};

const buildBoards = () => {
  boardData
    .getBoards()
    .then((resp) => boardsOnDom(resp.data))
    .catch((err) => console.error('get boards broke', err));
};

export default { buildBoards };
