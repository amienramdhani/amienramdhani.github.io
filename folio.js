    var posY       = 0;   
    var frekuensi  = 15; 

    function smoothScroll(id){
      var tujuan = document.getElementById(id).offsetTop;

      var scrollAnimate = setTimeout(function(){
                            smoothScroll(id);
                          }, 5);                         

        posY += frekuensi;

        if(posY >= tujuan){
          clearTimeout(scrollAnimate);
          posY = 0;
        }else{
          window.scroll(0,  posY);
        }

        return false;
    }    

function validasi(form){
      var is_valid  = true; var errorText = '';
      for(i=0; i<3; i++) {
         if(form[i].value.trim().length <= 0){

           switch(i){ case 0: errorText = 'nama'; break; case 1: errorText = 'email'; break; case 2: errorText = 'pesan'; break; }
     
          if(form[i].nextElementSibling.className != 'error'){ 
              form[i].insertAdjacentHTML('afterend', "<div class='error'>"+ errorText +" tidak boleh kosong </div>");
              form[i].style.borderColor = 'red';
          }

          is_valid = false;

         }else{           
           if(form[i].nextElementSibling.className == 'error'){
             form[i].nextElementSibling.remove(); //hapus
             form[i].style.borderColor = '#0074b9';
           }

         }
       }
      if(is_valid == false) return false;
      return true;
    }
    
    var show            = document.getElementById("gambar_show");
    var array_gambar    = document.getElementById("karya_lain").children;
    var no_sekarang     = 0;

    function galeri_ganti(nomer){
      show.src        = nomer.getAttribute("src");
      no_sekarang     = nomer.className;
    }

    function galeri_prev(){
      no_sekarang = no_sekarang - 1;
      if(no_sekarang < 0) no_sekarang = 0;

      show.src    = array_gambar[no_sekarang].getAttribute("src");
    }

    function galeri_next(){
      no_sekarang = no_sekarang + 1;
      if(no_sekarang > 2) no_sekarang = 2;

      show.src    = array_gambar[no_sekarang].getAttribute("src");
    }
