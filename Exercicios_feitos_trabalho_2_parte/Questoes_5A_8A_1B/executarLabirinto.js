import { encontrarCaminhoNoLabirinto } from '../src/Labirinto.js';

const labirintos = [
  [
    [0, 0, 1, 0],
    [1, 0, 1, 0],
    [0, 0, 0, 0],
    [1, 1, 1, 0]
  ],
  [
    [0, 1, 1, 0],
    [1, 1, 1, 0],
    [0, 1, 1, 0],
    [1, 1, 1, 0]
  ]
];

labirintos.forEach((labirinto, index) => {
  const caminho = encontrarCaminhoNoLabirinto(labirinto);
  if (caminho) {
    console.log(`Labirinto ${index + 1}:`);
    console.log(`Caminho encontrado: ${JSON.stringify(caminho)}`);
  } else {
    console.log(`Labirinto ${index + 1}: Nenhum caminho encontrado`);
  }
});
