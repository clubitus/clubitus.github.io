let numButtonClicks = 0;
function change() {
    let question = ["Quels rapports les peintre fauves entretiennent ils avec la réalité et son imitation ? précisez a l’aide d’exemple précis d’œuvres contextualisées",
                   "Quel sont les points communs entre les fauves français et les expressionnistes allemands? les différence ? précisez à l’aide d’exemple précis et contextualisés",
                   "Comment l’expressionisme se manifeste t il en dehors de la peinture ? précisez en donnant des exemples concrets ",
                    "Au début du XXe , quel type de relations sont établie par les designer avec l’industrie ? Argumenter a l’aide d’exemple précis ?",
                    "Comment les cubistes renouvellement les relation entre arts plastique et réalité ? appuyer vous sur des exemple précis . ",
                    "quel roles occupent les création typographiques dans le dadaisme ? argumenter a l’aide d’exemple précis , en exposant les partis pris artistique ",
                    "comment les artiste dadaïste renouvellent ils la pratiques ? argumenter a l’aide d’exemple précis",
                    "Comment les principes typographiques du Bauhaus sont-ils construits? Argumentez à l’aide d’exemples concrets. ",
                    "Quelles sont les différences entre les principes typographiques du Bauhaus et ceux des affichistes modernes français? Exemplifiez votre propos.",
                    "qu’est ce qui rapproche mais aussi differencie l’art informel de l'expressionnisme abstrait ? exemplifier votre propos ",
                    "Quelles caractéristiques permettent au graphisme suisse de s'internationaliser? Donnez des exemples concrets."
                   ];
    i = question[getRandomInt(11)];
    console.log(i);
    document.getElementById("mainDiv").textContent = i;
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

