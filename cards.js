



let kier=[two={value:2}, three={value:3}, four={value:4}, five={value:5}, six={value:6}, seven={value:7}, eight={value:8}, nine={value:9},ten={value:10}, jack={value:10}, queen={value:10}, king={value:10}, ace={ value:11}];
let pik=[two={value:2}, three={value:3}, four={value:4}, five={value:5}, six={value:6}, seven={value:7}, eight={value:8}, nine={value:9},ten={value:10}, jack={value:10}, queen={value:10}, king={value:10}, ace={ value:11}];
let trefl=[two={value:2}, three={value:3}, four={value:4}, five={value:5}, six={value:6}, seven={value:7}, eight={value:8}, nine={value:9},ten={value:10}, jack={value:10}, queen={value:10}, king={value:10}, ace={ value:11}];
let karo=[two={value:2}, three={value:3}, four={value:4}, five={value:5}, six={value:6}, seven={value:7}, eight={value:8}, nine={value:9},ten={value:10}, jack={value:10}, queen={value:10}, king={value:10}, ace={ value:11}];



function game(){
    //losuje kolor
    function colorDraw(){
        const color = Math.floor(Math.random()*4);
        switch (color){
            case 0: return kier;
            break;
            case 1: return pik;
            break;
            case 2: return trefl;
            break;
            case 3: return karo;
            break;
        }
    }
    //losuje figurę
    function cardDraw(color){
        return  num = Math.floor(Math.random()*color.length);
    }

    let cardColor = colorDraw();
    let number=cardDraw(cardColor);
    var figure = cardColor.slice(number,number+1)
    cardColor.splice(number,1);
    return figure;
}


