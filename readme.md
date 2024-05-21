# todo-list 📃

Desafio proposto pela [Rocketseat](https://www.rocketseat.com.br/) na Trilha ReactJS do Ignite.  
Segui **fielmente** o [protótipo](https://www.figma.com/file/0n0zDN7zbzhRbaEO74Xesx/ToDo-List/duplicate) feito para o desafio no Figma, indo além do que foi pedido, e estou muito contente com o resultado! 🎀  

### Deploy 💻

Live: https://todo-allbertuu.vercel.app/

## Sobre o desafio ⚡

Nesse desafio, desenvolvi uma aplicação de controle de tarefas no estilo **to-do list**, que contém as seguintes funcionalidades:

- Adicionar uma nova tarefa
- Marcar e desmarcar uma tarefa como concluída
- Remover uma tarefa da listagem
- Mostrar o progresso de conclusão das tarefas

Apesar de serem poucas funcionalidades, relembrei conceitos como:

- Estados (states) no ReactJS
- Imutabilidade do estado
- Listas e chaves no ReactJS
- Propriedades (props)
- Componentização

## Minhas próprias adições de funcionalidades 🚀

- Aviso/bloqueio ao usuário se ele está tentando adicionar uma tarefa que já existe.
- Aviso/bloqueio se o usuário está tentando adicionar uma tarefa sem texto.
- Responsividade. Responsivo para dispositivos móveis, tablets e desktops.
- Adicionado temas. "Light Theme" para modo claro, e "Dark Theme" para modo escuro. Possui persistência usando o LocalStorage no ReactJS.

## Stack utilizada ⚙

- ReactJS
- Redux
- TailwindCSS
- TypeScript
- Vite
- Radix UI

## Aprendizados 📚

Nesse desafio enfrentei problemas.

- Um deles foi que no começo do app, fiz prop drilling nos componentes, mas aquilo me deu uma agonia absurda, não gostei, e como sei Redux, criei o ambiente voltado a esse gerenciador de estados. Ganhei ganho de performance, manutenibilidade, e gerador de IDs sem precisar de libs externas (como uuid, por exemplo).
- Queria ordenar as tarefas feitas para ficar por último na lista, então criei um algoritmo de ordenação por tarefas feitas e não feitas: o `sortNotDoneToDone`. Uma função que usada como callback do método nativo `sort` em um array, ordena baseando-se na prop `isDone` iterando cada objeto do array.
- Criei Generics em TypeScript para minha função de ordenação personalizada para testar meus conhecimentos em TypeScript, como também utilizar ao máximo o intellisense do VS Code, prevenindo erros na aplicação.

### Função que me orgulho (falada acima) ⭐

```typescript
function sortNotDoneToDone<TaskType extends TaskState>(
  a: TaskType,
  b: TaskType
) {
  // anterior não feito, próximo sim
  if (!a.isDone && b.isDone) {
    return -1;
  }
  // anterior feito, próximo não
  if (a.isDone && !b.isDone) {
    return 1;
  }
  // ambos feitos, ou não
  return 0;
}
// uso da função
array.sort(sortNotDoneToDone);
```

> Ressalto a importância de se estudar a base, os fundamentos. Construí com muita facilidade pois sabia o que queria, e como fazer a principio. Na seção [Referências](#referências-), disponibilizei alguns links úteis de métodos JS muito usados em aplicações ReactJS.

## Rodando localmente ▶

> Você mesmo pode rodar e ver!

Clone o projeto

```bash
  git clone https://github.com/allbertuu/todo-list
```

Entre no diretório do projeto

```bash
  cd todo
```

Instale as dependências

```bash
  yarn install
```

Inicie o servidor

```bash
  yarn dev
```

## Autor 🙎🏻‍♂️

- Instagram - [@albert.vny](https://www.instagram.com/albert.vny/?hl=pt-br)
- [Meu portfólio website](https://www.albertosantos.dev/)
- [LinkedIn](https://www.linkedin.com/in/albertov-albuquerque/)
- [Frontend Mentor](https://www.frontendmentor.io/profile/allbertuu)

## Feedback 💬

Se você tiver algum feedback, por favor me deixe saber por meio do meu LinkedIn 💬💙 (seção [Autor](#autor-%EF%B8%8F)).

## Referências 📑

- [Método Sort - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Método Filter - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Método Reduce - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
