var stupidCardGame = function () {

  var cards = {
    cardNums : [],
    card0 : {shown : false, matched : false, divId : 'one'},
    card1 : {shown : false, matched : false, divId : 'two'},
    card2 : {shown : false, matched : false, divId : 'three'},
    card3 : {shown : false, matched : false, divId : 'four'},
    card4 : {shown : false, matched : false, divId : 'five'},
    card5 : {shown : false, matched : false, divId : 'six'},
    card6 : {shown : false, matched : false, divId : 'seven'},
    card7 : {shown : false, matched : false, divId : 'eight'},
    card8 : {shown : false, matched : false, divId : 'nine'},
    card9 : {shown : false, matched : false, divId : 'ten'},
    card10 : {shown : false, matched : false, divId : 'eleven'},
    card11 : {shown : false, matched : false, divId : 'twelve'}
  };

  function repeaters (cardNumber) {
    var thisCard = cardNumber;
    for ( i in cards.cardNums ) {

      while ( cards.cardNums[i] === thisCard ) {
        thisCard = Math.floor(Math.random() * 52);
      }

    }

    return thisCard;

  };

  function createCardProperties (card) {
    var suit, cardType,
        cardNumber = card;
    if ( card <= 13 ) {
     suit = 'heart';
    } else if ( card > 13 && card <=26 ) {
      suit = 'diamond';
      cardNumber -= 13;
    } else if ( card > 26 && card <= 39 ) {
      suit = 'club';
      cardNumber -= 26;
    } else {
      suit = 'spade';
      cardNumber -= 39;
    }

    switch ( cardNumber ) {
      case 1:
        cardType = "A";
        break;
      case 11:
        cardType = "J";
        break;
      case 12:
        cardType = "Q";
        break;
      case 13:
        cardType = "K";
        break;
      default:
        cardType = cardNumber;
        break;
    }

    return [suit, cardType];

  };

  function generateCards () {

    for ( var i = 0, cardsLeft = 12; i < cardsLeft; i++ ) {
     var card = Math.ceil(Math.random() * 52);
     card = repeaters(card);
     cards.cardNums.push(card);

     cards['card' + i]['suit'] = createCardProperties(card)[0];
     cards['card' + i]['cardType'] = createCardProperties(card)[1];

     showCards(cards['card' + i]['divId'], cards['card' + i]['cardType'], cards['card' + i]['suit']);

    }

  };

  function showCards (id, card, suit) {

    var thisDiv = document.getElementById(id);

    thisDiv.innerHTML = card;
    thisDiv.className = suit + ' back';

  };

  function cardTouch (card) {

  };

  generateCards();

}();