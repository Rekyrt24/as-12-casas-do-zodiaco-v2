function MudaDesenho(){
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const descricion = document.querySelector("h3");
    const dia = document.querySelector("#valor").value;
    const mes = document.querySelector("#valor2").value;
    const data = "2023"+"/"+mes+"/"+dia;
    
    
    if(data>='2023/05/21' && data<='2023/06/21'){
        texto.innerHTML = "Gêmeos";
        imagem.setAttribute("src","./imagem/gemeos.webp");
        imagem.setAttribute("width","300px");
        descricion.innerHTML = "Saga de Gêmeos é um poderoso cavaleiro de ouro, sendo considerado como o mais poderoso dentre os doze cavaleiros de ouro, ele era um exemplo de conduta e comprometimento para com sua deusa Athena.";
    }

    else if(data>='2023/10/23' && data<='2023/11/21'){
        texto.innerHTML = "Escorpião";
        imagem.setAttribute("src","./imagem/escorpiao.webp");
        imagem.setAttribute("width","300px");
        descricion.innerHTML = "Milo de Escorpião, no século XX, o Cavaleiro de Ouro de Escorpião que protegia a Casa de Escorpião no Santuário. Era um Cavaleiro fiel ao Santuário, inicialmente obedecendo as ordens do Grande Mestre.";
    }
    
    else if(data>='2023/02/20' && data<='2023/03/20'){
        texto.innerHTML = "Peixes";
        imagem.setAttribute("src","./imagem/peixes.webp");
        imagem.setAttribute("width","300px");
        descricion.innerHTML = "Afrodite é o Cavaleiro de Ouro de Peixes e protetor da última Casa do Zodíaco do século XX. Usa variações de golpes com rosas, como o Rosas Diabólicas Reais. Sua ideia é de que só um poder supremo pode manter a paz e ordem no mundo, mesmo que esse poder provenha do mal.";
    }
    else if(data>='2023/01/21' && data<='2023/02/19'){
        texto.innerHTML = "Aquario";
        imagem.setAttribute("src","./imagem/aquario.webp");
        imagem.setAttribute("width","300px");
        descricion.innerHTML = "Camus de Aquario é um cavaleiro bastante poderoso, com habilidade de baixar a temperatura e lançar o Pó de Diamante com grande facilidade. A Execução Aurora é o seu golpe secreto mais poderoso, que emite um frio próximo ao zero absoluto, e foi herdado por Hyoga.";
    }
    else if(data>='2023/04/21' && data<='2023/05/20'){
        texto.innerHTML = "Touro";
        imagem.setAttribute("src","./imagem/touro.webp");
        imagem.setAttribute("width","300px");
        descricion.innerHTML = "Harbinger de Touro. O Cavaleiro de Touro que protege o segundo templo, das novas doze casas. É o guerreiro mais forte que possui um grande poder de destruição. Desde sua infância, começou o seu desejo por poder. Ele adora apenas uma coisa, suas batalhas, pois podia ouvir o 'som dos ossos quebrando'. ";
    }
    else if(data>='2023/09/23' && data<='2023/10/22'){
        texto.innerHTML = "Libra";
        imagem.setAttribute("src","./imagem/libra.webp");
        imagem.setAttribute("width","300px");
        descricion.innerHTML = "Dohko de Libra foi um lendário e renomado Cavaleiro de Ouro do Santuário de Atena por ter lutado e sobrevivido a Guerra Santa contra Hades no Século XVIII ao lado de seu parceiro de batalhas, Shion de Áries.";
    }
    else if(data>='2023/07/23' && data<='2023/08/22'){
        texto.innerHTML = "Leão";
        imagem.setAttribute("src","./imagem/leao.webp");
        imagem.setAttribute("width","300px");
        descricion.innerHTML = "Aiolia de Leão. Apesar de sua personalidade explosiva, tem um coração puro que distingue rapidamente os justos, por isso foi um dos primeiros Cavaleiros de Ouro a reconhecer a autoridade de Atena.";
    }
    else if(data>='2023/08/22' && data<='2023/09/23'){
        texto.innerHTML = "Virgem";
        imagem.setAttribute("src","./imagem/virgem.webp");
        imagem.setAttribute("width","300px");
        descricion.innerHTML = "Shaka de Virgem é o Cavaleiro de Ouro de Virgem do Século XX, que protege a Casa de Virgem no Santuário. Considerado como a reencarnação de Buda, possui um poder de observação que permite conhecer a verdade escondida sob as aparências.";
    }
    else if(data>='2023/06/21' && data<='2023/07/21'){
        texto.innerHTML = "Câncer";
        imagem.setAttribute("src","./imagem/cancer.webp");
        imagem.setAttribute("width","300px");
        descricion.innerHTML = "Máscara da Morte de Câncer é o Cavaleiro de Ouro de Câncer e protetor da quarta Casa do Zodíaco do século XX. Adora lutas, matança e acredita que, para um objetivo maior, alguns sacrifícios são inevitáveis.";
    }
    else if(data>='2023/11/21' && data<='2023/12/22'){
        texto.innerHTML = "Sagitário";
        imagem.setAttribute("src","./imagem/sagitario.jpg");
        imagem.setAttribute("width","300px");
        descricion.innerHTML = "Seiya de Sagitário. Cavaleiro Lendário que salvou Atena e protegeu a Terra várias vezes. Ele traja a Armadura de Ouro de Sagitário como um Cavaleiro de Ouro, a classe mais alta da ordem dos Cavaleiros. Embora seu posto de Cavaleiro de Bronze fosse o mais baixo da ordem, ele conseguiu derrotar Cavaleiros de Prata, Cavaleiros de Ouro, e até mesmo deuses, e é lembrado como o Cavaleiro Lendário de Pégaso."
    }
    else if(data>='2022/12/23' && data<='2023/01/20'){
        texto.innerHTML = "Capricornio";
        imagem.setAttribute("src","./imagem/capricornio.jpg");
        imagem.setAttribute("width","300px");
        descricion.innerHTML = "Shura de Capricórnio é o Cavaleiro de Ouro que protege a Casa de Capricórnio. Shura se considera o cavaleiro mais fiel a Atena, porém sua excessiva lealdade ao Santuário acabou levando-o a cometer uma série de equívocos. Seu golpe principal é Excalibur, no qual concentra seu cosmo numa rajada cortante de energia, como uma espada. "
    }
    else if(data>='2023/03/21' && data<='2023/04/20'){
        texto.innerHTML = "Aries";
        imagem.setAttribute("src","./imagem/aries.jpg");
        imagem.setAttribute("width","300px");
        descricion.innerHTML = "Mu é o Cavaleiro de Ouro de Áries do século XX, que protege a Casa de Áries no Santuário. Hábil na restauração de Armaduras, é ele quem conserta as Armaduras de Bronze do Seiya e dos outros antes da Batalha das Doze Casas do Zodíaco. ";
    }
    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","./imagem/erro.webp");
        imagem.setAttribute("width","250px");
    }
}
