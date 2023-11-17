var listaFilmes = []
listaFilmes[0] = "https://www.cinesystem.com.br/filmes/images/poster/som-da-liberdade.jpg"
listaFilmes[1] = "https://oregional.com.br/media/blog/7461dd1311cf63564c62eea0ca213b7c.jpg"
listaFilmes[2] = "https://oregional.com.br/media/blog/e693dc00583c991e88617b6c8fb69f8c.jpg"
listaFilmes[3] = "https://www.sonypictures.com.br/sites/brazil/files/2023-10/SN_GT_1400x2100%20%281%29.png"
listaFilmes[4] = "https://br.web.img3.acsta.net/pictures/23/02/06/19/30/1280239.jpg"
listaFilmes[5] = "https://fr.web.img4.acsta.net/pictures/23/01/19/12/04/3557506.jpg"
listaFilmes[6] = "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/35e4ac6339f5fdcc164160a5755790cd.jpe"
listaFilmes[7] = "https://musicart.xboxlive.com/7/e09b5000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
listaFilmes[8] = "https://br.web.img3.acsta.net/pictures/23/04/03/16/27/2188262.jpg"
listaFilmes[9] = "https://veja.abril.com.br/wp-content/uploads/2016/11/thementalist.jpg?quality=70&strip=all"
listaFilmes[10]= "https://images.justwatch.com/poster/304470573/s332/temporada-8"
listaFilmes[11]= "https://m.media-amazon.com/images/M/MV5BMTM0ODIwNjI3NF5BMl5BanBnXkFtZTcwODU2ODUzMw@@._V1_FMjpg_UX1000_.jpg"
listaFilmes[12]= "https://br.web.img2.acsta.net/pictures/210/032/21003280_20130504002100017.jpg"
listaFilmes[13]= "https://m.media-amazon.com/images/I/81Auw7C3V+L._AC_UF1000,1000_QL80_.jpg"
listaFilmes[14]= "https://www.themoviedb.org/t/p/w500/6gcHdboppvplmBWxvROc96NJnmm.jpg"
listaFilmes[15]= "https://br.web.img2.acsta.net/pictures/14/02/04/14/08/054280.jpg"
listaFilmes[16]= "https://m.media-amazon.com/images/I/71vytida0hL._AC_UF894,1000_QL80_.jpg"
listaFilmes[17]= "https://br.web.img2.acsta.net/pictures/22/06/22/22/53/3291092.jpg"


// Modo de listagem 01
// document.write("<img src=" + listaFilmes[0] + ">");
// document.write("<img src=" + listaFilmes[1] + ">");
// document.write("<img src=" + listaFilmes[2] + ">");
// document.write("<img src=" + listaFilmes[3] + ">");
// document.write("<img src=" + listaFilmes[4] + ">");
// document.write("<img src=" + listaFilmes[5] + ">");
// document.write("<img src=" + listaFilmes[6] + ">");
// document.write("<img src=" + listaFilmes[7] + ">");
// document.write("<img src=" + listaFilmes[8] + ">");
// document.write("<img src=" + listaFilmes[9] + ">");
// document.write("<img src=" + listaFilmes[10] + ">");
// document.write("<img src=" + listaFilmes[11] + ">");
// document.write("<img src=" + listaFilmes[12] + ">");
// document.write("<img src=" + listaFilmes[13] + ">");
// document.write("<img src=" + listaFilmes[14] + ">");

// Modo de listagem 02 - usando loop For

for (var i = 0; i < listaFilmes.length; i++){
    document.write("<img src=" + listaFilmes[i] + ">")
}