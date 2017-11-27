# ValidarContaBancariaBR
Validar contas bancarias do Brasil

Projeto baseado no https://github.com/moip/bank-account-validator-js versao C#

A validação da conta bancária é realizada sobre as regras dos seguintes bancos: Itaú, Bradesco, Banco do Brasil, Santander, Citibank e HSBC. Para os outros bancos é realizada uma validação padrão:

Agência de 1 até 5 números
Dígito da agência de 0 a 2 caracteres
Conta corrente de 1 até 12 números
Dígito da conta corrente de 0 a 2 caracteres
O número da agência e conta corrente dos bancos Itaú, Bradesco, e Banco do Brasil são validados através do cálculo do dígito verificador (semelhante a validação do CPF).
