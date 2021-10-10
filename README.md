# Cadastro de carro

**RF** => Requisitos funcionais
Deve ser possivel cadastrar um novo carro

**RN** => Regras de Negocio
Não deve ser possivel cadastrar um carro com uma placa ja existente.
Não deve ser possivel alterar a placa de um carro já cadastrado.
O carro deve ser cadastrado, por padrão, com disponibilidade.
* O usuário responsavel pelo cadastro deve ser uma usuário administrador.

# Listagem de carro

**RF** => Requisitos funcionais
Deve ser possivel listar todos os carros disponiveis
Deve ser possivel listar todos os carros disponiveis pelo nome da categoria
Deve ser possivel listar todos os carros disponiveis pelo nome da marca
Deve ser possivel listar todos os carros disponiveis pelo nome do carro

**RNF** => Requisitos não funcionais
O usuario não precisa estar logado no sistema.

# Cadastro de especificação no carro

**RF** => Requisitos funcionais
Deve ser possivel cadastrar uma especificação para um cargo

**RNF** => Requisitos não funcionais
Não deve ser possivel cadastrar uma especificação para um carro não cadastrado.
Não deve ser possivel cadastrar uma especificação já existente para o mesmo carro.
O usuário responsavel pelo cadastro deve ser uma usuário administrador.

# Cadastro de imagens do carro

**RF** => Requisitos funcionais
Deve ser possivel cadastrar a imagem do carro
Deve ser possivel listar todos os carros

**RNF** => Requisitos não funcionais
Ultilizar o multer para upload dos arquivos

**RN** => Regras de Negocio
O Usuario deve poder cadastrar mais de uma imagem para o mesmo carro
O Usuario responsavel pelo cadastro deve ser um usuario administrador.

# Aluguel de carro

**RF** => Requisitos funcionais
Deve ser possivel cadastrar um aluguel

**RNF** => Requisitos não funcionais

**RN** => Regras de Negocio
O aluguel deve ter duração minima de 24 horas.
Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
Não deve ser possivel cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
O usuário deve estar logado na aplicação
Ao realizar um aluguel, o status do carro deverá ser alterado para indisponivel.

# Devolução de carro

**RF**
Deve ser possível realizar a devolução de um carro

**RN**
Se o carro for devolvido com menos de 24 horas, deve ser cobrado diaria completa.
Ao realizar a devolução, o carro deverá ser liberado para outro aluguel.
Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.
Ao realizar a devolução, devera ser calculado o total do aluguel.
Caso o horário de devolução seja superior ao horário previsto de entrega, devera ser cobrado multa proporcionou aos dias de atraso.
Caso haja multa, devera ser somado ao total do aluguel.
O usuário deve esta logado na aplicação
