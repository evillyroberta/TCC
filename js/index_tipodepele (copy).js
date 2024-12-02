const response = await fetch('../js/tipos_de_pele.json');
const tipos_de_pele = await response.json();
const section_2 = document.getElementById('section_2');
const palavra1 = document.getElementById('PrimeiraPalavra');
const palavra2 = document.getElementById('SegundaPalavra');
const tipo_de_pele = sessionStorage.getItem("tipoDePele");
let tipo;
if (true) {
  tipo = `Um`;
}
palavra2.innerHTML = `APARECEU`;
if(tipo_de_pele) {
  
  section_2.innerHTML = ``;
  
  const visualiz1 = `
<div class="container">
  <div class="row">

    <div class="col-lg-6 col-12 mb-5 mb-lg-0">
      <div class="about-image-wrap h-100">
        <img src="images/pele-oleosa-2.png" class="img-fluid about-image" alt="">

        <div class="about-image-info">
          <h4 class="text-white">PELE ${tipo.nome}</h4>

          <p class="text-white mb-0">O MELHOR TRATAMENTO PARA A BELEZA É O AUTOCUIDADO.</p>
        </div>
      </div>
    </div>

    <div class="col-lg-6 col-12 d-flex flex-column">
      <div class="about-thumb bg-white shadow-lg">

        <div class="about-info">
          <small class="small-title"> <strong class="text-warning"> </strong></small>

          <h2 class="mb-3">SUA PELE É DO TIPO ${tipo.nome}. CONFIRA AGORA AS CARACTERÍSTICAS:</h2>
          <br>`;

  section_2.insertAdjacentHTML('beforeend', visualiz1);

  const visualiz2 = `
          <hr>
          <h5 class="mb-3" style="text-align:center">PRODUÇÃO</h5>
          <p style="text-align:center">EXCESSIVA DE SEBO.</p>

          <hr>
          <h5 class="mb-3" style="text-align:center">BRILHO</h5>
          <p style="text-align:center">CONSTANTE EM TODO O ROSTO.</p>

          <hr>
          <h5 class="mb-3" style="text-align:center">POROS</h5>
          <p style="text-align:center">VISÍVEIS E DILATADOS.</p>

          <hr>
          <h5 class="mb-3" style="text-align:center">PROPENSÃO</h5>
          <p style="text-align:center">A ACNE E CRAVOS.</p>

        </div>
      </div>

      <div class="row h-100">
        <div class="col-lg-6 col-6">
          <div class="about-thumb d-flex flex-column bg-purple mb-lg-0 h-100">

            <div class="about-info">
              <h5 class="text-white mb-4">CAUSAS:</h5>
              <h6 class="text-white mb-4">
              -> Genética;<br>
              -> Flutuações hormonais;<br>
              -> Estresse e dieta;<br>
              -> Uso excessivo de produtos inadequados.</h6>

              <a class="custom-btn btn custom-bg-primary" href="#section_3">Confira os Produtos</a>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-6">
          <div class="about-thumb d-flex flex-column bg-purple mb-lg-0 h-100">

            <div class="about-info">
              <h5 class="text-white mb-4">CUIDADOS:</h5>
              <h6 class="text-white mb-4">
                -> Limpeza com produtos formulados para pele oleosa;<br>
                -> Uso de hidratantes leves e não-comedogênicos;<br>
                -> Uso regular de produtos com ácidos como salicílico para controlar a oleosidade e desobstruir poros.</h6>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
`;
}