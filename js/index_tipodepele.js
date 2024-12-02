const response = await fetch('../js/tipos_de_pele.json');
const tipos_de_pele = await response.json();
const section_2 = document.getElementById('section_2');
const tipo_de_pele = sessionStorage.getItem("tipoDePele");

if(tipo_de_pele) {
  section_2.classList.add('about', 'section-padding');
  
  let pele;
  if (tipo_de_pele == 1) {
    pele = tipos_de_pele.Seca;
  }
  else if (tipo_de_pele == 2) {
    pele = tipos_de_pele.Oleosa;
  }
  else if (tipo_de_pele == 3) {
    pele = tipos_de_pele.Normal;
  }
  else if (tipo_de_pele == 4) {
    pele = tipos_de_pele.Mista;
  }
  
  const visualiz1 = `
<div class="container">
  <div class="row">

    <div class="col-lg-10 col-12 text-center mx-auto mb-5">
      <small class="small-title">TIPO DE <strong class="text-black">PELE</strong></small>
      <h2>Descubra agora o <u>seu resultado</u></h2>
    </div>

    <div class="col-lg-6 col-12 mb-5 mb-lg-0">
      <div class="about-image-wrap h-100">
        <img src="images/${pele.imagem_url}" class="img-fluid about-image" alt="">

        <div class="about-image-info">
          <h4 class="text-white" style="text-transform:uppercase;">PELE ${pele.nome}</h4>

          <p class="text-white mb-0" style="text-transform:uppercase;">${pele.frase_de_efeito}</p>
        </div>
      </div>
    </div>

    <div class="col-lg-6 col-12 d-flex flex-column">
      <div class="about-thumb bg-white shadow-lg">

        <div class="about-info">
          <small class="small-title"> <strong class="text-warning"> </strong></small>

          <h2 class="mb-3" style="text-transform:uppercase;">SUA PELE É DO TIPO ${pele.nome}. CONFIRA AGORA AS CARACTERÍSTICAS:</h2>
          <br>`;

  var visualiz2 = '';
  for (const caract of pele.caracteristicas) {
    let pal_caract = caract.split(' ');
    visualiz2 += `
    <hr>
    <h5 class="mb-3" style="text-align:center;text-transform:uppercase;">${pal_caract[0]}</h5>
    <p style="text-align:center;text-transform:uppercase;">${pal_caract.slice(1).join(' ')}</p>`;
  }

  const visualiz3 = `
        </div>
      </div>

      <div class="row h-100">
        <div class="col-lg-6 col-6">
          <div class="about-thumb d-flex flex-column bg-purple mb-lg-0 h-100">

            <div class="about-info">
              <h5 class="text-white mb-4">CAUSAS:</h5>
              <h6 class="text-white mb-4">`;

  var visualiz4 = '';
  for (const causa of pele.causas) {
    visualiz4 += `
    -> ${causa}<br>`;
  }

  const visualiz5 = `
              </h6>
              <a class="custom-btn btn custom-bg-primary" href="#section_3">Confira os Produtos</a>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-6">
          <div class="about-thumb d-flex flex-column bg-purple mb-lg-0 h-100">

            <div class="about-info">
              <h5 class="text-white mb-4">CUIDADOS:</h5>
              <h6 class="text-white mb-4">`;

  var visualiz6 = '';
  for (const cuidado of pele.cuidados) {
    visualiz6 += `
    -> ${cuidado}<br>`;
  }

  const visualiz7 = `             
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

  var visualizacao = visualiz1 + visualiz2 + visualiz3 + visualiz4 + visualiz5 + visualiz6 + visualiz7
  section_2.insertAdjacentHTML('beforeend', visualizacao);
}