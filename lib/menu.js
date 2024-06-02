document.write(`
<nav class="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example" id="topo">
         <div class="topnome" id="nome">
         <!-- Descrição do nome que aparece na barra de menu -->
            <h4 class="topnomecor" id="descnome">Pedro Nascimento Silva</h4>
         </div>
         <!-- div barra de menu -->
         <div class="container-fluid" id="barramenu">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarsExample04" id="navbarmenu">
               <ul class="navbar-nav ms-auto mb-2 mb-lg-0" id="itensmenu">
                  <li class="nav-item"><a class="btn btn-outline-success" aria-current="page" href="index.html" id="menu1">Principal</a></li>
                  &nbsp 
                  <li class="nav-item"><a class="btn btn-outline-success" href="sobremim.html" id="menu2">Sobre Mim</a></li>
                  &nbsp 
                  <li class="nav-item"><a class="btn btn-outline-success" href="formacao.html" id="menu3">Formação Acadêmica</a></li>
                  &nbsp 
                  <li class="nav-item"><a class="btn btn-outline-success" href="profissional.html" id="menu4">Atuação Profissional</a></li>
                  &nbsp 
                  <li class="nav-item"><a class="btn btn-outline-success" href="contato.html" id="menu5">Contato</a></li>
                  &nbsp 
               </ul>
            </div>
         </div>
      </nav>
      <!-- Foto de capa que aparece em todas as páginas -->
      <div class="fotocapa" id="divfoto">
         <img src="assets/img/pedro.jpeg" class="fotoperfil" id="fotoperfil">
      </div>
`);