#include <stdio.h>
#include <locale.h>

void estaNaSequenciaFibonacci(int entrada, int anterior, int atual);

int main(void) {
  setlocale(LC_ALL, "Portuguese");

  int entrada, resultado;
  int anterior = 0, atual = 1;

  printf("Digite um valor: ");
  scanf("%d", &entrada);

  estaNaSequenciaFibonacci(entrada, anterior, atual);

  return 0;
}

void estaNaSequenciaFibonacci(int entrada, int anterior, int atual) {
  int auxiliar = 0;

  //define o próximo termo da sequência
  auxiliar = atual;
  atual += anterior;

  //condição de fim da busca pelo termo na sequência
  //leva em consideração desde o primeiro termo "0"
  if (anterior >= entrada){ 
    if (entrada == anterior) {
      printf("%d faz parte da sequência de Fibonacci.", entrada);
    } else {
      printf("%d NÃO faz parte da sequência de Fibonacci.", entrada);
    }
  }
  else {
    anterior = auxiliar;
    estaNaSequenciaFibonacci(entrada, anterior, atual);
  }
}