#include <iostream>
using namespace std;

#define TAM 6

struct LISTA {
	int elem[ TAM ];
	int primeiro;
	int ultimo;
};

int main()
{
	LISTA L1, L2, L3;
	int i;

	// preenchendo a lista L1 com valores
	for( i = 0; i < TAM; i++ ) {
		cout << "\nInforme o " << (i+1) <<"o. valor: ";
		cin >> L1.elem[i];
	}
	L1.primeiro = 0;
	L1.ultimo = TAM - 1;

	// verificação CRESCENTE
	i = 0;
	while( i < TAM - 1 && L1.elem[ i ] <= L1.elem[ i + 1 ] )
		i++;

	if( i == TAM - 1 )
		cout << "Lista em ordem crescente!";
	else { // verificação DECRESCENTE
		i = 0;
		while( i < TAM - 1 && L1.elem[ i ] >= L1.elem[ i + 1 ] )
			i++;

		if( i == TAM - 1 )
			cout << "Lista em ordem decrescente!";
		else {
            cout << "Lista desordenada!";
		}
	}

}
