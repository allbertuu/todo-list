
# todo 📃

Desafio dado pela [Rocketseat](https://www.rocketseat.com.br/) na trilha Ignite, a qual estou comprometido neste momento.  
Segui **fielmente** o [protótipo](https://www.figma.com/file/0n0zDN7zbzhRbaEO74Xesx/ToDo-List/duplicate) feito para o desafio no Figma, me botando a prova e fazendo a aplicação completa em tempo recorde. ☄  
Fui além do que foi pedido, e estou muito contente com o resultado! 🎀  
⌚ Terminado em: **5 horas** `=>` 2 dias

### Deploy
Live: https://todo-ecru-ten.vercel.app/
## Sobre o desafio
Nesse desafio, você vai desenvolver uma aplicação de controle de tarefas no estilo **to-do list**, que contém as seguintes funcionalidades:

- Adicionar uma nova tarefa
- Marcar e desmarcar uma tarefa como concluída
- Remover uma tarefa da listagem
- Mostrar o progresso de conclusão das tarefas

Apesar de serem poucas funcionalidades, você vai precisar relembrar conceitos como:

- Estados
- Imutabilidade do estado
- Listas e chaves no ReactJS
- Propriedades
- Componentização


## Stack utilizada

**Front-end:** ReactJS, Redux, TailwindCSS, TypeScript, Vite, Radix UI


## Aprendizados

Nesse desafio enfrentei problemas.  
- Um deles foi que no começo do app, fiz prop drilling nos componentes, mas aquilo me deu uma agonia absurda, não gostei, e como sei Redux, criei o ambiente voltado a esse gerenciador de estados. Ganhei ganho de performance, manutenibilidade, e gerador de IDs sem precisar de libs externas (como uuid, por exemplo).  
- Queria ordenar as tarefas feitas para ficar por último na lista, então criei um algoritmo de ordenação por tarefas feitas e não feitas: o `sortNotDoneToDone`. Uma função que usada como callback do método nativo `sort` em um array, ordena baseando-se na prop `isDone` iterando cada objeto do array.
- Criei Generics em TypeScript para minha função de ordenação personalizada, para testar meus conhecimentos em TypeScript hehe, e ainda utilizar ao máximo o intellisense do VS Code, previnindo erros na aplicação.

Ressalto a importância de se estudar a base, os fundamentos. Construí com uma facilidade imensa pois sabia o que queria, e como fazer a principio. Na seção [Referências](#referências), disponibilizei alguns links úteis de métodos JS muitooo usados em aplicações React.
## Rodando localmente

> Você mesmo pode rodar e ver!

Clone o projeto

```bash
  git clone https://github.com/allbertuu/todo
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

## Autor(es) 🙎🏻‍♂️

- Instagram - [@albert.vny](https://www.instagram.com/albert.vny/?hl=pt-br)
- [Meu portfólio website](https://portfolio-allbertuu.vercel.app/)
- [LinkedIn](https://www.linkedin.com/in/albertov-albuquerque/)
- [Frontend Mentor](https://www.frontendmentor.io/profile/allbertuu)
## Feedback

Se você tiver algum feedback, por favor me deixe saber por meio de albertovinicius3@gmail.com, ou pela seção "Contato" no meu portfólio website.


## Referências

 - [Método Sort - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
 - [Método Filter - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
 - [Método Reduce - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
 
