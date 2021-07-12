
let cards = [
    {
        image:"https://i.pinimg.com/236x/1b/c3/cf/1bc3cfcd8c7b7acafe07060c447a4650--marvel-dc-marvel-comics.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/236x/1b/c3/cf/1bc3cfcd8c7b7acafe07060c447a4650--marvel-dc-marvel-comics.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/736x/28/74/01/28740149f3877613185ad76ee98844bd.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/736x/28/74/01/28740149f3877613185ad76ee98844bd.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/236x/dc/75/9d/dc759d85d51ce8f0843470fdb629cd38.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/236x/dc/75/9d/dc759d85d51ce8f0843470fdb629cd38.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/236x/df/8d/c3/df8dc3fa85229519561f74ef7a5b8fce.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/236x/df/8d/c3/df8dc3fa85229519561f74ef7a5b8fce.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/736x/e6/0f/d5/e60fd59a35b39da9caa64d36180d7910.jpg",
        value:5,
        status:"closed"
    },

    {
        image:"https://i.pinimg.com/736x/e6/0f/d5/e60fd59a35b39da9caa64d36180d7910.jpg",
        value:5,
        status:"closed"
    },

]
console.log(cards);

let temp;
for(let i=cards.length-1;i>=0;i--){

    let j = Math.floor(Math.random()*(i+1));

    temp = cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
} 

let cardsCopy=cards;



function displayCards(data){


    let cardsString="";


    data.forEach(function(card,index){
        cardsString+= `


        <div class="card" style="background-image:url('${card.image}')">
             <div class="overlay ${card.status}" onclick="openCard(${index})">
             </div>

        </div>
        `;

    });

 document.getElementById('cards').innerHTML= cardsString;

}


displayCards(cards);
let cardCount=1
let val1=null,val2=null;
let score=0
function openCard(index){
    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;

    }
    else if (cardCount===2){
        val2=cards[index].value;


        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;
            val1=null;
            val2=null;
            cardCount=1;

        }
        else{
           alert("Game Over")
           location.reload();
        }
        
    }
    

    displayCards(cards);

}
