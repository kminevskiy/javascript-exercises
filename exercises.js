function isXor(a, b) {
  if (!!a && !!b) return false;
  if (!!a || !!b) return true;
  return false;
}

function trim(string) {
  var trimmed = "";
  var last, index, canContinue;
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      trimmed += string[i];
      index = i + 1;
      break;
    }
  }
  for (var i = index; i < string.length; i++ ) {
    for (var b = i; b < string.length; b++) {
      if (string[b] !== " ") {
        canContinue = true;
        break;
      }
      else canContinue = false;
    }
    if (canContinue) trimmed += string[i];
  }
  return trimmed;
}

function rot13(string) {
  var result = "",
      currentCharCode;
  for (var i = 0; i < string.length; i++) {
    currentCharCode = string.charCodeAt(i);
    if (currentCharCode >= 65 && currentCharCode <= 90) {
      if (currentCharCode + 13 > 90) {
        result += String.fromCharCode(65 + (currentCharCode + 13 - 91));
      } else {
        result += String.fromCharCode(currentCharCode + 13);
      }
    } else if (currentCharCode >= 97 && currentCharCode <= 122) {
      if (currentCharCode + 13 > 122) {
        result += String.fromCharCode(97 + (currentCharCode + 13 - 123));
      } else {
        result += String.fromCharCode(currentCharCode + 13);
      }
    } else {
      result += string[i];
    }
  }
  return result;
}

function push(array, value) {
  if (Array.isArray(array)) {
    array[array.length] = value;
  }
  return array;
}

function pop(array) {
  if (Array.isArray(array)) {
    var value = array[array.length - 1];
    array.length = array.length - 1
  }
  return value;
}


function unshift(array, value) {
  var array_copy = [];
  for (var i = 0; i < array.length; i++) {
    array_copy[i] = array[i];
  }
  for (var i = 0; i < array_copy.length + 1; i++) {
    if (i === 0) array[i] = value;
    else array[i] = array_copy[i - 1];
  }
  return array.length;
}

function missing(array) {
  var ary = [];
  for (var i = array[0]; i < array[array.length - 1]; i++) {
    if (array.indexOf(i) === -1) ary.push(i);
  }
  return ary;
}

function repeatedCharacters(string) {
  var result = {};
  var stringAry = string.toLowerCase().split('');
  var currentElem;
  stringAry.forEach(function (outer_e) {
    currentElem = stringAry.filter(function (inner_e) {
      return inner_e === outer_e;
    });
    if (currentElem.length > 1) {
      result[currentElem[0]] = currentElem.length;
    }
  })
  return result;
}

function objectHasProperty(object, property) {
  for (prop in object) {
    if (object.hasOwnProperty(prop)) {
      if (prop === property) {
        return true;
      } else {
        return false;
      }
    }
  }
}

var obj = { enabled: false };
//console.log(objectHasProperty(obj, 'active'));  // returns false
//console.log(objectHasProperty(obj, 'enabled')); // returns false, should be true

function octalToDecimal(number) {
  var result = 0;
  var splitNumber = number.split('').map(function (num) {
    return Number(num);
  });
  var reversedNum = splitNumber.reverse();
  for (var i = 0; i < splitNumber.length; i++) {
    result += reversedNum[i] * Math.pow(8, i);
  }
  return result;
}

function anagram(word, list) {
  return list.filter(function (listWord, index) {
    return listWord.split('').sort().join('') === word.split('').sort().join('');
  });
}

function acronym(string) {
  var letters = string.match(/[a-z]+/gi).map(function (word) {
    return word[0].toUpperCase();
  });
  return letters.join('');
}

function isValidEmail(email) {
  return !!email.match(/^[a-z0-9]+@[a-z\.]+\.[a-z]+$/i);
}

function isBalanced(string) {
  var totalParens = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ')' && totalParens === 0) return false;
    if (string[i] === '(') totalParens += 1;
    else if (string[i] === ')') totalParens -= 1;
  }
  return !!(totalParens === 0);
}

var textExcerpt = 'To be or not to be-that is the question:\n' +
  'Whether \'tis nobler in the mind to suffer\n' +
  'The slings and arrows of outrageous fortune,\n' +
  'Or to take arms against a sea of troubles,\n' +
  'And, by opposing, end them. To die, to sleep-\n' +
  'No more-and by a sleep to say we end\n' +
  'The heartache and the thousand natural shocks\n' +
  'That flesh is heir to-\'tis a consummation\n' +
  'Devoutly to be wished. To die, to sleep-\n' +
  'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
  'For in that sleep of death what dreams may come,\n' +
  'When we have shuffled off this mortal coil,\n' +
  'Must give us pause. There\'s the respect\n' +
  'That makes calamity of so long life.\n' +
  'For who would bear the whips and scorns of time,\n' +
  'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
  'The pangs of despised love, the law’s delay, [F: disprized]\n' +
  'The insolence of office, and the spurns\n' +
  'That patient merit of the unworthy takes,\n' +
  'When he himself might his quietus make\n' +
  'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
  'To grunt and sweat under a weary life,\n' +
  'But that the dread of something after death,\n' +
  'The undiscovered country from whose bourn\n' +
  'No traveler returns, puzzles the will\n' +
  'And makes us rather bear those ills we have\n' +
  'Than fly to others that we know not of?\n' +
  'Thus conscience does make cowards of us all,\n' +
  'And thus the native hue of resolution\n' +
  'Is sicklied o\'er with the pale cast of thought,\n' +
  'And enterprises of great pitch and moment, [F: pith]\n' +
  'With this regard their currents turn awry, [F: away]\n' +
  'And lose the name of action.-Soft you now,\n' +
  'The fair Ophelia.-Nymph, in thy orisons\n' +
  'Be all my sins remembered';

var positiveRegex = /(fortunes?)|(dream(s|t|ed)?)|(love(s|ed)?)|(respect(s|ed)?)|(patien(ce|t)?)|(devout(ly)?)|(noble)|(resolut(e|ion)?)/gi;
var negativeRegex = /(die(s|d)?)|(heartached?)|(death)|(despise(s|d)?)|(scorn(s|ed)?)|(weary)|(troubles?)|(oppress(es|ed|or)?)/gi;


function sentiment(text) {
  var processedText = text.toLowerCase();
  var positiveOccurances = processedText.match(positiveRegex);
  var negativeOccurances = processedText.match(negativeRegex);
  var sentiment;
  sentiment = positiveOccurances.length - negativeOccurances.length >= 0 ? "positive" : "negative";
  console.log("There are " + positiveOccurances.length + " positive words in the text." );
  console.log("Positive sentiments: " + positiveOccurances.join(", "));
  console.log("There are " + negativeOccurances.length + " negative words in the text." );
  console.log("Positive sentiments: " + negativeOccurances.join(", "));
  console.log("The sentiment of the text is " + sentiment + ".");
}

var data = "From: Google Alerts <googlealerts-noreply@google.com>#/#\nSubject: Google Alert - gamification#/#\nDate: July27 2016 at 2:02:40 PM GMT+8#/#\nTo: foo@baz.com#/#\n\n\n  \n\n\ngamification\nDaily update â‹… July 27, 2016 \n\n\nNEWS \n\n\n\nThe Urban Developer.com (press release) (registration)\nThe Gamification Of Real Estate: What We Can Learn From PokÃ©mon Go\nThe Urban Developer.com (press release) (registration) \nBut while many academics are lamenting the downfall of the world as we know it, the gamification of consumer habits also presents an exciting newÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\n\nHindu Business Line\nChapter 1 of your training module: PokÃ©mon Go\nHindu Business Line \nâ€œGamification has been part of HR manual for a while now as it gives an insight into employee efficiency, social instincts and the ability to think quick.\n  \n  \n  \nFlag as irrelevant \n\n\nWEB \n\n\n\n\nWhy Adopt Gamification For Corporate Training - 8 Questions Answered\neLearning Industry \nWant to know why you should adopt Gamification For Corporate Training? Check 8 answered questions about adopting Gamification For CorporateÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nGamification in eLearning?\nTeam360 Ltd \nGamification involves the use of game design elements and mechanics in activities that are not inherently game-based. This is done to motivate andÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\ngamification\nExemplar Global \nExemplar Global has embarked on a journey to reinvent itself to better serve the future needs of the auditing profession. Our organization is fastÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\ngamification with #moodle\ne-Learning Feeds \n#gamification with #moodle. Educational Technology 27 Jul 2016 - 08:09. Image for #gamification with #moodle. Some easy-to-implement examplesÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nGamification in Education\nFlipQuiz \nGamification began in 1896, when marketers at S&H Green Stamps sold stamps to retailers who used them regularly, as a way to ...... (hint: mostÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nHow to make members level up gamification\nWordPress \nHello, I'm currently using buddy press, mycred and badgeOS for my gamify WordPress page but I would like to know if there is a plugin to let membersÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\n5 Gamification Examples Changing the World of Learning\nGamification of Agile \nPreviously, Yu-kai wrote about contemporary social gamification examples. This article will continue the â€¦ Continue reading 5 Gamification ExamplesÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\numsi Gamification is a good way to nudge positive things to happen through fun. #umsibookclub\ntkpqncejq.xyz \numsi Gamification is a good way to nudge positive things to happen through fun. #umsibookclubevery pic of him is whitewashed it makes me want toÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nGamification has quickly become a super trend in\ntkpqncejq.xyz \nGamification has quickly become a super trend in ... - #tech #technews #technology They have called 3 times in the past 5 days and have left noÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nGamification w/ bartlpatrick who used a gamified platform at IBM to better train employees\najkdbzkvv.xyz \n#Gamification w/ bartlpatrick who used a gamified platform at IBM to better train employees Cheddar cheese ruffles and pickled eggs. Our designs areÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nGamification CAN work. The key is knowing how and when to apply it across your channel. by ...\najkdbzkvv.xyz \n#Gamification CAN work. The key is knowing how and when to apply it across your channel. by AllboundJessicaDammit why didn't I go to SDCC thisÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nFKA Code Gamification Sdn Bhd\nJobs in MY \nCode Ar.my Sdn Bhd (FKA Code Gamification Sdn Bhd) Jobs - Job Vacancy @ Job Search JobStreet.com Malaysia.\n  \n  \n  \nFlag as irrelevant \n\n\nThe #Psychology of How #PokÃ©mon Go Gets Inside Your #Brain #gamification #PokemonGo ...\nlqcgogiie.xyz \nThe #Psychology of How #PokÃ©mon Go Gets Inside Your #Brain #gamification #PokemonGo #exercise #walking #pokemon. 37\" Tall Massive NudeÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nBusiness Development Manager\nJobs in MY \nApply as Business Development Manager (3030733) at Code Ar.my Sdn Bhd (FKA Code Gamification Sdn Bhd). Find more SalesÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nAI, blockchain, gamification to shape future of finance: DBS HK\nComputerworld Hong Kong \nAI, blockchain and gamification technologies are expected to shape the future of finance, according to DBS Bank Hong Kong CEO Sebastian Paredes.\n  \n  \n  \nFlag as irrelevant \n\n\ngamification concept, button on touch screen\nShutterstock \ngamification concept, button on touch screen - Stock Photo from the largest library of royalty-free images, only at Shutterstock.\n  \n  \n  \nFlag as irrelevant \n\n\nGamification of Learning\nBLife | Download video courses about IT, Website, Business, Photography... \nGamification is an underutilized element in instructional design, but it's crucial to engaging today's learners and enabling content mastery.\n  \n  \n  \nFlag as irrelevant \n\n\nIn Studio\nraycasts.com \nMr.Pointer. Cyber safety computer game. An Initiative of national service scheme, Kerala Higher Education Department, Vocational higher secondaryÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nDeep Magellanic Clouds Image Indicates Collisions\nGamification of Agile \nExplanation: Did the two most famous satellite galaxies of our Milky Way Galaxy once collide? No one knows for sure, but a detailed inspection ofÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nSystem Notification - ContactCenterWorld.com Blog\nContactCenterWorld.com \nCall Center Gamification: Motivating Agents to Excel - System Notification - ContactCenterWorld.com Blog. Local Team. Want to connect with some ofÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nWhat's your Innovation Style? [FREE CheatSheet]\nGamification of Agile \nDo you self-identify as an innovator? Welcome to the club â€“ it's awesome in here. You're the kind of person who imagines what SHOULD exist in theÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nQualityStocks : $MOXC Using Gamification to Boost Business Results\ntkpqncejq.xyz \nQualityStocks : $MOXC Using Gamification to Boost Business Results â€¦ ) Girl you know I do. tapi For now I'm just writing a light wrapper aroundÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nGamification in action - teaching people to type faster through multi-player options via keybrcom\ntkpqncejq.xyz \nGamification in action - teaching people to type faster through multi-player options via keybrcomThe use of vietnamese doesnt sound right hahaahah.\n  \n  \n  \nFlag as irrelevant \n\n\nUrban gamification: can PokÃ©mon Go transform our public spaces?\ntkpqncejq.xyz \n(from Super Smash Bros. Melee) (remix of Brinstar, from Metroid, Disk System), I Got You, Seemed to be the theme of Trumps Speech Last night for AllÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\n\n\nGamification of Life.\nHome Economics \nAn error occurred. Try watching this video on www.youtube.com, or enable JavaScript if it is disabled in your browser. Gamification of Life.\n  \n  \n  \nFlag as irrelevant \n\n\nJapan Gamification Industry Market Research Report 2016\nMyInforms \nThe Japan Gamification Industry Market Research Report 2016 is a professional and in-depth study on the current state of the Gamification industry.\n  \n  \n  \nFlag as irrelevant \n\n\nUrban gamification: can PokÃ©mon Go transform our public spaces?\nEverythingAboutDesign.com \nUrban gamification: can PokÃ©mon Go transform our public spaces?: In ArchitectureAU, Rana Abboud notes that PokÃ©stops and PokÃ©gyms â€“ strategicÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nHow do free game apps make money? Interesting video about the psychology of #gamification\nsnuyhkjps.xyz \nInteresting video about the psychology of #gamification: Excellent point Candy, actually our government doesn't exactly have our best interestsÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\n+ Info\nScoopnest.com \nGet all the Latest news, Breaking headlines and Top stories, photos & video in real time about MacHash.\n  \n  \n  \nFlag as irrelevant \n\n\nImplementing gamification: reputation points for user activity\nStack Overflow \nIn a social website I want to give reputation points for user activity like in Stack Overflow. What is a better approach: to keep all activities in theÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nGamification's Serious Role in Sales Success\nOOYUZ \nWhen gamification was just starting to catch on several years ago, I recall sitting next to the CMO of my then-company at a conference session.\n  \n  \n  \nFlag as irrelevant \n\n\nShould You Implement Gamification in Channel Sales? 5 Things to Consider First\nAllbound \nUsing gamification in sales has long been a way to motivate direct sales reps. But with channel partners, there are some additional challenges toÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nThe Missing Piece In The Gamification Puzzle By David Rojas\nGrebu \nDownload The Missing Piece In The Gamification Puzzle By David Rojas video ... A Post-mortem of Gamification in an Educational Recycling Game byÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nGamification\nDudepins \nTo Synotive Technologies - Explore Related Posts Â· From - Source - Read More. Gamification. 0. 0 Unlike. Pinned up Content. Go To Post SourceÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nGames Games and Gamification: The New Nihilism...\nFun Maza World \nA documentary. Intrinsic motivation for social change is no longer enough. We need extrinsic motivation, i.e. games and gamification. Peoples'Â ...\n  \n  \n  \nFlag as irrelevant \n\n\nApplied Human Factors and Ergonomics\nOliver Korn \nKorn, Oliver; Muschick, Peter; Schmidt, Albrecht: Gamification of Production? A Study on the Acceptance of Gamified Work Processes in theÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nLandscape Interview Series #3: Yu-Kai Chou\nLandscape \nPioneers in communications, employee engagement, financial education & gamification.\n  \n  \n  \nFlag as irrelevant \n\n\nUsing a Little Friendly Competition to Improve Driver Behavior and Protect Your Bottom Line\nFleet Management Weekly \nHarnessing the power of gamification to achieve greater safety, productivity and compliance. By Mark Wallin, Vice President, Product Management,Â ...\n  \n  \n  \nFlag as irrelevant \n\n\nGamification: Using STEM Tech in the Classroom\nScoop.it \nGamification and it's Place in the World of Education Technology Gamification: Using STEM Technology to Inspire Learning 1.2 million students fail toÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nUrban gamification\nThe Khooll \nIn ArchitectureAU, Rana Abboud notes that PokÃ©stops and PokÃ©gyms â€“ strategic in-game locations, often attached to real-life city landmarks â€“ haveÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nUzaktan EÄŸitim & Gamification\nBasit Oyunlar \n... Gamification. 25 Temmuz 2016Heimerdinger0 Comments. CategoriesDiÄŸer e-Ã¶ÄŸrenme gamification oyunlaÅŸtÄ±rma uzaktan eÄŸitim uzaktan Ã¶ÄŸretimÂ ...\n  \n  \n  \nFlag as irrelevant \n\nSee more results | Edit this alert \nYou have received this email because you have subscribed to Google Alerts.\nUnsubscribe | View all your alerts \n  Receive this alert as RSS feed \nSend Feedback \n\n##||##From: Google Alerts <googlealerts-noreply@google.com>#/#\nSubject: Google Alert - gamification#/#\nDate: July26 2016 at 2:02:08 PM GMT+8#/#\nTo: foo@baz.com#/#\n\n\n  \n\n\ngamification\nDaily update â‹… July 26, 2016 \n\n\nNEWS \n\n\n\nCampaign Asia-Pacific\nWhy Reebonz is going big on gamification\nCampaign Asia-Pacific \nHaving recently completed the online retailer's sixth gamification campaign, Reebonz global CMO Jan-Paul Jeffrey explains why the tactic is a key partÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\n\nYourStory.com\nMaking leadership training fun - the KNOLSKAPE growth story\nYourStory.com \nThis is the idea behind KNOLSKAPE,â€ says Rajiv Jayaraman, Founder and CEO of the Bengaluru-based gamification software startup. If startups areÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nZoomi Announces New Release of The Zoomi Player\nPR Newswire (press release) \nGamification and dynamic content is the next evolution of learning and we are excited to continue leading the workforce analytics industry with theseÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\n\nLivemint\nGamify your fitness regime\nLivemint \nGamify your fitness regime. It's not just 'Pokemon Go'. An increasing number of smartphone games are now building in some sort of physical activity.\n  \n  \n  \nFlag as irrelevant \n\n\nDBS launches second Accelerator in Hong Kong\nHubbis \nThey offer innovative solutions in areas such as artificial intelligence, blockchain, gamification, and more. These start-ups were selected from moreÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nBest Selling Book, â€œGaming to Innovate â€“ The Innovation Game,â€ Is Now Free on Amazon for 5 ...\nWebWire (press release) \nWith the help of this unique book, readers will be able unleash the innovative creativity of their workforce through Gamification. â€œGaming to Innovateâ€Â ...\n  \n  \n  \nFlag as irrelevant \n\n\nWEB \n\n\nGamification: Using STEM Tech in the Classroom\ne-Learning Feeds \nThank you to our guest writer Sydnee Yates from PDF Supply for writing this special entry. Gamification and it's Place in the World of Education Tech.\n  \n  \n  \nFlag as irrelevant \n\n\nGamification Mechanic Monday: Trading\nGamification Nation \nTrading collectible items can be the link to complete a full collection of items, whether it is Pokemon, cards or HR benefits all can use gamification.\n  \n  \n  \nFlag as irrelevant \n\n\n4 Essential Neurotransmitters in Gamification Cheat Sheet by Davidpol\nCheatography.com \nIn gamification there is often a lot of mention of things like â€œNeuroscienceâ€, â€œNeurochemistryâ€, â€œNeurotransmittersâ€ or â€œBrain Chemistryâ€. In particular youÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nSales and Service, 'gamification' (tailored)\nVimeo \nSales and Service, 'gamification' (tailored), course extract. from Upskill ... Sales and Service Challenge, 'gamification' (off the shelf), course extract.\n  \n  \n  \nFlag as irrelevant \n\n\nGamification in Education: How Gamifying Improves Learner Outcomes\nThe Silicon Cape Initiative \n'Gamification' is a term meaning 'to turn an experience into a game-like process by using elements of game design'. In an educational context, theÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nCan you gamify business analytics in your company?\nPhocas \nThe goal of gamification is to motivate employees to take actions that help you achieve your business goals. Your employees may not perform theseÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\n\n\nSales and Service Challenge, 'gamification' (off the shelf)\nVimeo \nSales and Service Challenge, 'gamification' (off the shelf), course extract. from Upskill PeoplePRO 1 hour ago. more. Follow. 0 1 0. Share.\n  \n  \n  \nFlag as irrelevant \n\n\nDealing With ADHD? Here's Why You May Want to Gamify Your Life\nTake This \nEnter gamification. Jessica McCabe, whose How to ADHD YouTube channel is an invaluable resource for ADHD-related life skills, shares a few waysÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nHillary 2016 app sees gamification of political activism for iPhone-proudly owning Democrats\nProduct reviews and prices, software downloads, and tech news \nAppears there's nothing that may't be was an iPhone recreation today â€“ together with enjoying your half to assist Hillary Clinton get elected, ought toÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nForum\nMoodle \n2- add the social network component in Moodle, in order to have each participant set up their own \"wall\" displaying the results of gamification, with theÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nGamified UK Gamification Method Workshop 2014\nGamification of Agile \nGamified UK Gamification Method Workshop 2014. Slideshare uses cookies to improve functionality and performance, and to provide you withÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nThe latest Social Universe daily! Thanks to kierobar sardire bpedro #gamification #socbiz\najkdbzkvv.xyz \nThanks to kierobar sardire bpedro #gamification #socbiz. Owen Smith a lobbyist for Pfizer. â€¦206 parliamentarians with financial links to companiesÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nGamification Market by (Enterprise, Application, Consumer, Deployment)\nGreenAtom \nThe report on Gamification Market will provide detail on the worldwide technology and solution adoption trends that will gain traction over the next fiveÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nHow to Gamify Your LMS Interface\nTraining Industry \nToday gamification has evolved to learning courses where the employee can be fully immersed into an environment to learn complex tasks beforeÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nABC of Enterprise Gamification\netrigg.com \nABC of Enterprise Gamification / Dubai Enterprise Gamification Meetup @ Any Location / Tuesday 19:00, 9 August 2016.\n  \n  \n  \nFlag as irrelevant \n\n\nThe Effects of Using Gamification Techniques on Graduate Students' Motivation in a Face-to-Face ...\nProficientWriting \nThe Effects of Using Gamification Techniques on Graduate Students' Motivation in a Face-to-Face Training Environment.\n  \n  \n  \nFlag as irrelevant \n\n\n\"Realise that augmented reality is the future of gamification for corporate learning\" ~ important read ...\nzfscfuucx.xyz \n\"Realise that augmented reality is the future of gamification for corporate learning\" ~ important read for managers I think you switched the picture famÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nGamification for corporate learning should motivate learners to change behavior, develop skills ...\nzfscfuucx.xyz \n#Gamification for corporate learning should motivate learners to change behavior, develop skills, and even drive innovation. #gamifylearning.\n  \n  \n  \nFlag as irrelevant \n\n\nGamification isn't dead, it's just one piece of the engagement puzzle #management\nqshgqvyck.xyz \nGamification isn't dead, it's just one piece of the engagement puzzle #management. Hot pics for Virginia Madsen reveals her body in Class.\n  \n  \n  \nFlag as irrelevant \n\n\nGaming to Innovate -The Innovation Game: How to Leverage Gamification to Unleash the ...\nBook Reader Magazine \nUnleash the innovative creativity of your workforce through Gamification. Gaming to Innovate offers a step by step approach to transforming yourÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nPokemon Go's making waves in event planning & it'll be interesting to\ndbbioilbd.xyz \nGamification is REAL! Pokemon Go's making waves in event planning & it'll be interesting to see how similar game apps compete.WOW! Thank you allÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\n6 Innovative Ways to Engage Your Employees by Paul_Keijzer via B2Community #Gamification\nmhinjuqaz.xyz \n6 Innovative Ways to Engage Your Employees by Paul_Keijzer via B2Community #Gamification go to the gym with me tomorrow. How about aÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nHey BenLamorte We just mentioned you in our post #Gamification is OKR for the workforce\nqshgqvyck.xyz \nHey BenLamorte We just mentioned you in our post #Gamification is OKR for the workforce. My Bieber . - Run your 5 Hitleap Sessions on our stableÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nGamification: How It Supports Compliance Online Training for Employees\nDesigning Digitally, Inc. \nFind out how gamification supports companies that rely on compliance online training for employees - Designing Digitally, Inc.\n  \n  \n  \nFlag as irrelevant \n\n\nHere's an interesting #learning #gamification solution case study for new hire training for #biotech ...\nqshgqvyck.xyz \nHere's an interesting #learning #gamification solution case study for new hire training for #biotech SlideShare byâ€¦WHERE'S BECCA THIS IS SOÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nGamification is gaining popularity among Indian employers as an employee engagement tool\nSkillOutlook.com \nMumbai: In India 74% of organization don't have any particular strategy for engaging employees. Webinars, code contests, gamification are mainlyÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nHillary 2016 app sees gamification of political activism for iPhone-owning Democrats\nApple News \nSeems there's nothing that can't be turned into an iPhone game these days â€“ including playing your part to help Hillary Clinton get elected, should thatÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\ngamification\ncultureshape - WordPress.com \nPosts about gamification written by M. Carolyn Miller.\n  \n  \n  \nFlag as irrelevant \n\n\n[PDF] Gamification for Business Read Online\nDailymotion \nReading Gamification for Business Popular BooksGet Now http://superebook.org/?book=1628651083.\n  \n  \n  \nFlag as irrelevant \n\n\nGamification - Drive Your Audience To Your Ecommerce Store.\nBragshare \nBrag detail about Gamification - Drive Your Audience To Your Ecommerce Store. posted by James Andrew on 2016/07/25. For more information visitÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nExplore these ideas and much more!\nPinterest \nThis Infographic on 'Gamification In The Workplace' contains the biggest misunderstanding about the Gamification of work processes! GamificationÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nGamify: How Gamification Motivates People to Do Extraordinary Things\nMake Me Feed \nOh, save save save, save save save / Save some money, save some money â™« Jenny Chang / BuzzFeed We hope you love the products weÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\njames_bg Congrats! You're #18 on #UKCWtop100. Win 1 out of 50 places on Skills4Stem's ...\nsnuyhkjps.xyz \nWin 1 out of 50 places on Skills4Stem's gamification programme. Just cruisin... myerpe: [allkpop] [Drama Review] '38 Police Squad' - Episode 9.\n  \n  \n  \nFlag as irrelevant \n\n\nGamification Playing For Profits A Book Of Sales Games And Motivational Tools\nheck.in \nGamification Playing For Profits A Book Of Sales Games And Motivational Tools. Gamification Playing For Profits A Book Of Sales Games AndÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nGamification is the HOW in a Why, How, What mentality. It is not a value, b\nOwn quotes! \nGamification is the HOW in a Why, How, What mentality. It is not a value, b: a quote by tigran, visit Own Quotes for more of them.\n  \n  \n  \nFlag as irrelevant \n\n\nHillary 2016 app sees gamification of political activism for iPhone-owning Democrats\nDash Discount \nThe gamification aspect provides 'daily challenges' which offer digital and real-life rewards, and allow Clinton supporters to compete against theirÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nDownload Gamification by Design: Implementing Game Mechanics in Web and Mobile Apps PDF ...\nDailymotion \nRead Book Online Now http://www.ezbooks.site/?book=1449397670Gamification by Design: Implementing Game Mechanics in Web and MobileÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nDesperately Seeking Theory: Gamification, Theory, and the Promise of\npresentations \nGamification promises a new, data-driven take at a science of design: establishing what design features cause what psychological and behaviouralÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nHillary 2016 app sees gamification of...\nGoogle News \nHillary 2016 app sees gamification of political activism for iPhone-owning Democrats. 9 to 5 Mac - 1 hour ago . Seems there's nothing that can't beÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\n+ Info\nScoopnest.com \nGet all the Latest news, Breaking headlines and Top stories, photos & video in real time about Bernadette Keefe MD.\n  \n  \n  \nFlag as irrelevant \n\n\nRead Spielerisch Motivieren MaÃ£Æ’Ã¦ Ãƒ Ã‚ ÃƒÆ’Ã¢ Ãƒ Ã‚ Stab Zur Implementierung Von Gamification ...\nLa Reggiola B&B \nLa ReggiÃ²la B&B in una storica dimora di prestigio a Castrocielo (Frosinone)\n  \n  \n  \nFlag as irrelevant \n\n\nHillary 2016 app views gamification of governmental activism for iPhone-buying Democrats\niPhoneFirmware.com \nThe gamification element offers 'everyday problems' that offer electronic and real life benefits, and permit Clinton followers to vie against their buddiesÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nHillary 2016 app sees gamification of political activism for iPhone-owning Democrats\nFactItUp \nMore about: Hillary 2016 app sees gamification of political activism for iPhone-owning Democrats.\n  \n  \n  \nFlag as irrelevant \n\n\nBA CMU Gamification System\ncmu.ac.th \nBA-CMU Gamification. START NOW. Â© BA-CMU Gamification. All rights reserved. Facebook; Twitter; Google+; LinkedIn. Scroll.\n  \n  \n  \nFlag as irrelevant \n\n\nHillary 2016 app sees gamification of political activism for iPhone-owning Democrats\n50Crime \nVia 9to5Mac: Seems there's nothing that can't be turned into an iPhone game these days â€“ including playing your part to help Hillary Clinton getÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nGoogle+\nGoogle+ \n1 day ago. Businesses should embrace gamification to enhance workforce ... GamEffective Raises $7 Million for Employee Training - Gamification Co.\n  \n  \n  \nFlag as irrelevant \n\nSee more results | Edit this alert \nYou have received this email because you have subscribed to Google Alerts.\nUnsubscribe | View all your alerts \n  Receive this alert as RSS feed \nSend Feedback \n\n##||##From: Google Alerts <googlealerts-noreply@google.com>#/#\nSubject: Google Alert - gamification#/#\nDate: July25 2016 at 2:02:01 PM GMT+8#/#\nTo: foo@baz.com#/#\n\n\n  \n\n\ngamification\nDaily update â‹… July 25, 2016 \n\n\nNEWS \n\n\n\nTechCrunch\nClinton launches app designed to gamify campaigning\nTechCrunch \nThe app is designed to gamify the campaigning process, offering up virtual badges and real life prizes for activities like sharing videos throughÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nWEB \n\n\nGamification And Motivation: It's The Content That Matters, Not The Container\neLearning Industry \nThe concept of gamification has gained in popularity over the last few years. The concept has been introduced in various fields such as marketing,Â ...\n  \n  \n  \nFlag as irrelevant \n\n\nCourses\nGamification Nation \nFree Gamification Stuff - Check out our free stuff page for items fully free of charge! Gamification Nation.\n  \n  \n  \nFlag as irrelevant \n\n\nGamification courses\nGamification Nation \nView our online gamification courses that are hosted on the Curatr platform. Click the link to explore them further.\n  \n  \n  \nFlag as irrelevant \n\n\nGamify: How Gamification Motivates People to Do Extraordinary Things\nProduct Hunt \nGamify: How Gamification Motivates People to Do Extraordinary Things - Gamify shows gamification in action. (User Experience and Education)\n  \n  \n  \nFlag as irrelevant \n\n\nWordpress gamification plugin\nUpwork \nWe want to create a gamification plugin for our site, where our site visitors can sign up as a member via FB/email and whenever they visit/share/loginÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nGamification and motivation\nE Education News \na recognition that the content is not compelling gamification not? Otherwise, why do we need to gamify? In this article, I will discuss the relationshipÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nNot Just For Kids: How Gamification Can Help Fill Your Channel Pipeline\nSales and Marketing \nGamification has become a popular method of improving sales because it works. Putting measurement devices such as leader boards, point totals,Â ...\n  \n  \n  \nFlag as irrelevant \n\n\nLooking for more info about how #gamification enhances #elearning and #UX?\nsfkyrndqu.xyz \nLooking for more info about how #gamification enhances #elearning and #UX? Check out this course from kkapp. i don't want to bother na :) Pero i'mÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nGamification\niStock \nGet Gamification stock illustrations from iStock. Find high-quality royalty-free vector images that you won't find anywhere else.\n  \n  \n  \nFlag as irrelevant \n\n\n10 Surprising Benefits Of Gamification - eLearning Industry\nsfkyrndqu.xyz \n10 Surprising Benefits Of Gamification - eLearning Industry | scoopit via christocarter. Hi Ladies, You all know how much I love this color!!! This drapedÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nAdd licenses\niStock \nDownload this Gamification Icon Set vector illustration now. And search more of the web's best library of royalty-free vector art from iStock.\n  \n  \n  \nFlag as irrelevant \n\n\nGamification of #Expenses is here. expensify shows way at GlobalBTA #Cloud #Cash #travel\nqshgqvyck.xyz \n#Gamification of #Expenses is here. expensify shows way at GlobalBTA #Cloud #Cash #travel WATERWAY SPA SKIMMER FRONT ACCESS GRAYÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nOnboarding Gamification\nBestSkills Feeds \nCategory: Onboarding Gamification. eLearning Industry /. July 25, 2016. by Christopher Pappas Â· Published July 25, 2016Â ...\n  \n  \n  \nFlag as irrelevant \n\n\nBeginner's Guide to Gamification (8 of 90): Epic Meaning & Calling\nfushgpyxr.xyz \nthey all are beautiful dancer. Beginner's Guide to Gamification (8 of 90): Epic Meaning & Calling Absolutely insane and even more so terrifying.\n  \n  \n  \nFlag as irrelevant \n\n\nNext #Gamification #engagement is AdvanceNetGroup on Wednesday 27 July. do you want to ...\nqshgqvyck.xyz \nNext #Gamification #engagement is AdvanceNetGroup on Wednesday 27 July. do you want to experience some AR - see you there. nicobairdMy favÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nPassionFor_SA gcg as the #gamification novice\nfushgpyxr.xyz \nPassionFor_SA gcg as the #gamification novice - this is a simple introduction with the #where to begin... So look out for the #interviewsIMAGINE SHEÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nOur AmandaHector1 talking importance of #social #gamification #video in learning. #Recruitment ...\nsfkyrndqu.xyz \nOur AmandaHector1 talking importance of #social #gamification #video in learning. #Recruitment shortlistnews. I have toilet paper! Iv been gettingÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nGamification - What we can apply from some of the core motivators of gaming to create a more ...\nMathsGenius \nBy Deirdre Jensen - Learning Strategist. Why is gamification becoming such a hot topic? One of the best ways to understand how human motivationÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\ngamification\nallison(3) Thank you for stopping by \nPosts about gamification written by allisonchristine.\n  \n  \n  \nFlag as irrelevant \n\n\nGamification\nDreamstime.com \nGamification - Download From Over 45 Million High Quality Stock Photos, Images, Vectors. Sign up for FREE today. Image: 74693181.\n  \n  \n  \nFlag as irrelevant \n\n\nGame of Life\nSingapore Toy Game and Comic Convention \nThis is the full version of our Gamification for empowerment course. In Game of Life: The Awakening of Heroes, you will experience gamification andÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nTo gamify or not to gamify? That is the question.\nEnglish@StAC, Reflections from the 4th floor \nAs I delve deeper into the idea of gamification and how it can be utilised in our teaching practice to engage students, I am finding the readings a lotÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nTelephony and Gamification Global Program Manager Jobs\nPlano Texas Jobs \nTelephony and Gamification Global Program Manager. Hewlett Packard Enterprise Company - Plano, Texas. Featured Jobs. Get new jobs sentÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nClinton launches app designed to gamify campaigning\nWopular \nFor better or worse, preaching the gospel of your candidate no longer requires leaving the couch. As anyone who's cracked open a social mediaÂ ...\n  \n  \n  \nFlag as irrelevant \n\nSee more results | Edit this alert \nYou have received this email because you have subscribed to Google Alerts.\nUnsubscribe | View all your alerts \n  Receive this alert as RSS feed \nSend Feedback \n\n##||##rom: Google Alerts <googlealerts-noreply@google.com>#/#\nSubject: Google Alert - gamification#/#\nDate: July24 2016 at 2:01:35 PM GMT+8#/#\nTo: foo@baz.com#/#\n\n\n  \n\n\ngamification\nDaily update â‹… July 24, 2016 \n\n\nWEB \n\n\nCybersecurity and transportation: June gamification roundup\ne-Learning Feeds \nJune was full of fascinating articles about gamification from all over the internet. From transport systems to cybersecurity to learning, gamification is r.\n  \n  \n  \nFlag as irrelevant \n\n\ngamification en entornos online\ne-Learning Feeds \n#gamification en entornos online. Educational Technology 24 Jul 2016 - 02:10. Image for #gamification en entornos online. Read the full story byÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\ngamification\nThe Knowledge Exchange Blog \nPosts about gamification written by Rebecca Jackson.\n  \n  \n  \nFlag as irrelevant \n\n\nPSD Web Icons - Gamification Icons\nVector, Photoshop PSDAfter Effects, Tutorials, Template, 3D \nPSD Web Icons - Gamification Icons 2 PSD | 10,0 MB.\n  \n  \n  \nFlag as irrelevant \n\n\nThe latest Games For Learning!\ndmgfubcbv.xyz \nThe latest Games For Learning! Thanks to AdeccoNL GlobalWebMktg SprintGroup1 #gamification #pokemongo. Shirtless Friday: It just got very warmÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nHow to Easily Add Gamification Techniques to Your Content #marketing\ntrxrxkgqn.xyz \nHow to Easily Add Gamification Techniques to Your Content #marketing Please don't take away my smile ...It's all I have left â¤ . Sometimes lol.\n  \n  \n  \nFlag as irrelevant \n\n\nHow to Easily Add Gamification Techniques to Your Content\norpkluzgr.xyz \n\"How to Easily Add Gamification Techniques to Your Content\" #business #feedly_HiGH&LOW THE LIVE 0723 OSAKA count down ...â–·â–·DAY..4â€¦\n  \n  \n  \nFlag as irrelevant \n\n\nI've been added to list \"gamification\"! Please, do check out my gaming stuff as well!\ndmgfubcbv.xyz \nI've been added to list \"gamification\"! Please, do check out my gaming stuff as well! A La Maison French Liquid Soap Thousand Flowers (8.8 fl Oz).\n  \n  \n  \nFlag as irrelevant \n\n\nGamification And Motivation: It's The Content That Matters, Not The Container\nBestSkills Feeds \nIsn't gamification an acknowledgement that the content isn't compelling? Otherwise why would we need to gamify it? In this article, I will discuss theÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nGame design & Gamification\nPinterest \nGamification design process BABEL. | Issuu is a digital publishing platform that makes it simple to publish magazines, catalogs, newspapers, books,Â ...\n  \n  \n  \nFlag as irrelevant \n\n\nSesame Credit: when gamification becomes social control - Special\nBitFeed.co \nYour blog talks about Sesame Credit: When Gamification Becomes Social Control - Special? Send an email to info@bitfeed.co to be indexed in theÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nPhD Studentship in Engineering Education:Virtual Reality and the Gamification of Education #VR ...\nbdzmcymsz.xyz \nPhD Studentship in Engineering Education:Virtual Reality and the Gamification of Education #VR #VirtualRealityI don't know wich video is worse.\n  \n  \n  \nFlag as irrelevant \n\n\nThank you Haitham Haji for Following me on Twitter! I love #gamification wish you love it, too.\norpkluzgr.xyz \nThank you Haitham Haji for Following me on Twitter! I love #gamification wish you love it, too. sick girl porn. AndrayDomise But that's okay, because heÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nRead Gamification: Playing For Profits\ntrxrxkgqn.xyz \nRead Gamification: Playing For Profits: A Book of Sales Games and Motivational Tools PDF Free. I dont love you as well. â™¡. Catch the full matchÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\ngamification is not a silver bullet for a bad strategy. NUsocialmktg JoeyStrawn\ntrxrxkgqn.xyz \n#gamification is not a silver bullet for a bad strategy. NUsocialmktg JoeyStrawntestudotimes .com >> Maryland football makes top 6 for one of TheÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nGamification\nThe Savvy Academic \ngamification, gamification and learning, gamification design, gamification news, corporate gamification, gamifying content, gamifying lessons.\n  \n  \n  \nFlag as irrelevant \n\n\nGamification in Software Testing (Nordic Testing Days 2016)\npresentations \nA journey on how to integrate an unused beta server into the development process by using gamification. To reach the goal to boost the quality of liveÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\ngamification\nTweetChat \nMy Favorite tweets from #GAMIFICATION. CHAT # ... @mrmatera join the #usedchat tonight as @TechedUpTeacher moderates on #gamification .\n  \n  \n  \nFlag as irrelevant \n\n\ngamification :Latest News\nApple News \nNews Â· Tips & Tricks Â· Apple Insider Â· Cult of Mac Â· Mac Rumors Â· 9to5mac Â· iDropNews Â· Home News \"gamification\" Latest newsÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nLive Planet Offers Immersive Video System for the Gamification of VR - IndieWire\nOnly 360 VR VIDEOS \nLive Planet Offers Immersive Video System for the Gamification of VR IndieWire. There are three components: the new 16-lens Live Planet camera,Â ...\n  \n  \n  \nFlag as irrelevant \n\n\nGamification\nPinterest \nThis Pin was discovered by Daniela. Discover (and save!) your own Pins on Pinterest.\n  \n  \n  \nFlag as irrelevant \n\n\nPokÃ©mon Go â€“ The Gamification of Dog Walking\nLinkedIn \nThe recent PokÃ©mon Go game has literally stormed the world. Heralded by some as an overnight sensation, the game was actually 20 years inÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nGamification-News.de\nFree website tool \ngamification-news.de has position rank in alexa is 0 and rank in google page rank is 1. Total size homepage is 39.4 KB. Ip AddressÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nBusiness Gamification for Dummies\nWalmart \nBuy Business Gamification for Dummies at Walmart.com.\n  \n  \n  \nFlag as irrelevant \n\n\nMicrointeractions and gamification framework for capturing skills #gamification #learning #HCII2016\ndmgfubcbv.xyz \nMicrointeractions and gamification framework for capturing skills #gamification #learning #HCII2016. US U19ers Take Gold with Thrilling ComebackÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nMountains, Rivers, and Finding Se..\nmy-diary.org \n2016-07-23 12:30:44 ( UTC -5 ) Mountains, Rivers, and Finding Self Pt.II (GAMIFICATION), by Soma Hello again... This is simply a continuation of theÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nThe Gamification Revolution\nvideosgratismujeres.net \nIf searching for a ebook The Gamification Revolution: How Leaders Leverage Game Mechanics to Crush the. Competition by Gabe Zichermann (MarÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nThe Effect of Gamification on Elementary Students' Spanish Language Achievement and Academic ...\nOpen Access Theses and Dissertations \nA quasi-experimental, pretest-posttest, non-equivalent control group design was used to examine the effect of gamification on third and fourth gradeÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\n+ Info\nScoopnest.com \nGet all the Latest news, Breaking headlines and Top stories, photos & video in real time about TraderPower.\n  \n  \n  \nFlag as irrelevant \n\n\nSign Up\nCoursera \nAbout this course: Gamification is the application of game elements and digital game design techniques to non-game problems, such as business andÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nJ & L Game Trading - Yelp\n3d-game.com \nAuthors: Juho Hamari During recent years modern ICT technologies have spawned two interwoven phenomena: gamification and crowdsourcing (CS)Â ...\n  \n  \n  \nFlag as irrelevant \n\n\nUrban gamification: can PokÃ©mon Go transform our public spaces?\n50Crime \nAccording to UK Guardian: City links: Augmented reality tourism, drunk seagulls, subway deserts and a failed zero-carbon city feature in this week'sÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nGamification\nGEdNeT \nIndustry News. Gamification Â· eLearning Today Â· Professional Development Â· GEdNeT. innovative & engaging learning solutions. Â© 2015 GEdNeT PtyÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nGuest Blog Post: Five Tips for Gamifying Your Classroom\nEdTech4Beginners \nGamification is applying typical elements of video games, such as levels and experience points, into other areas of life. Video games can be effectiveÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nBusiness plan hotel resort\nsite88.net \nPage bodyHotel and Resort Business Plan Owning a hotel and Resort is a business of details. You will want your customers to have an unbelievableÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nAbout site badgeville.com\nFree websites evaluation and online tools - About site \nTitle : Badgeville - the Leading Business Gamification Company. Description : Badgeville offers an enterprise-wide business gamification solution thatÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nSubscribe to Yu-kai Chou: Gamification & Behavioral Design - Learn How To Use Gamification To ...\nBlogarama \nThis post first appeared on Yu-kai Chou: Gamification & Behavioral Design - Learn How To Use Gamification To Make A Positive Impact On Your WorkÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nUrban gamification: can PokÃƒÂ©mon Go transform our public spaces?\nViralnews365.com \nCity links: Augmented reality tourism, drunk seagulls, subway deserts and a failed zero-carbon city feature in this weekÃ¢â‚¬â„¢s roundup of the best cityÂ ...\n  \n  \n  \nFlag as irrelevant \n\nSee more results | Edit this alert \nYou have received this email because you have subscribed to Google Alerts.\nUnsubscribe | View all your alerts \n  Receive this alert as RSS feed \nSend Feedback \n\n##||##From: Google Alerts <googlealerts-noreply@google.com>#/#\nSubject: Google Alert - gamification#/#\nDate: July23 2016 at 2:02:05 PM GMT+8#/#\nTo: foo@baz.com#/#\n\n\n  \n\n\ngamification\nDaily update â‹… July 23, 2016 \n\n\nNEWS \n\n\n\nThe Guardian\nUrban gamification: can PokÃ©mon Go transform our public spaces?\nThe Guardian \nFrom the transformative effect augmented reality games might have on urban spaces to the eerie emptiness of the UAE's Masdar City, we've scouredÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nAvoiding burnout through games, scoreboards and empowerment in your contact center\nCustomer Think \nDespite a hypothesis that gamification might cause burnout by distracting employees from their job, Toister's results proved the opposite. Agents whoÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\n\nIndieWire\nLive Planet Offers Immersive Video System for the Gamification of VR\nIndieWire \nTech guru Halsey Minor demo'd the new Live Planet 360-degree, livestreaming VR camera this week for cool plug and play content capture.\n  \n  \n  \nFlag as irrelevant \n\n\nWEB \n\n\nUniversal Gamification Rehabilitation for Cerebral Palsy\nJames Dyson Award \nCerebral palsy (CP) is a group of movement disorders that appear in childhood. For example, Forrest Gump in the movie is born with CP and sufferedÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nInsurance Companies Gamify Healthcare\nGamification Co \nGamification has been used by schools and private business as a way to make learning more fun. Now, insurance companies are using the techniqueÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nAchievements, Cognitive Loads, and Views of Students\nOnline-Journals.org \nIn this mixed method research study, the effect of gamification strategies on students' cognitive load levels and achievements was examined alongÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\n\n\nHealthy Lessons: Using PokÃ©mon Go and Gamification to Boost Patient Engagement\nEngagingPatients.org \nPokemon Go offers multiple healthy lessons that can lead to increased patient engagement.\n  \n  \n  \nFlag as irrelevant \n\n\nBehavioral Change in Gamification\nEnterprise Game Learning \nDiscuss key concepts of behavioral change in gamification, as well as desire, wish fulfillment and dreams.\n  \n  \n  \nFlag as irrelevant \n\n\nWhat are you going to cover? #MythsMysteriesMethods\nrtlgkqpsj.xyz \nHow long is this #Gamification series going to be? What are you going to cover? #MythsMysteriesMethods. Orion omg. I just woke up from a napÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nFrom SimCity to #SmartCity: \"gamification to achieve optimum design\".\nrtlgkqpsj.xyz \nFrom SimCity to #SmartCity: \"gamification to achieve optimum design\". #GIS. How 3 Friends Slept With A Teenager In Lagos And Filmed It.\n  \n  \n  \nFlag as irrelevant \n\n\nTeachThought Aldridge_sm I've been applying gamification to my life. Doing a lot of walking. Good ...\nfshkzifdi.xyz \nTeachThought Aldridge_sm I've been applying gamification to my life. Doing a lot of walking. Good for the gams. (Is that what you mean?) This seasonÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nWell argued piece on whether #gamification education really improves learning from jenroland\nfshkzifdi.xyz \nWell argued piece on whether #gamification education really improves learning from jenroland. Why must you always insist on using me as a headÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nGamification is the use of game #thinking and mechanics in game contexts to engage users in ...\nfshkzifdi.xyz \n#Gamification is the use of game #thinking and mechanics in game contexts to engage users in solving problems. Book Reviews, a mind is a terribleÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\n0 Comments\nPete Jenkins \nGamification success w/ @petejenkins who created a rewards program to increase productivity https://t.co/2WPsoAn0oo https://t.co/aE4nIuRWoM.\n  \n  \n  \nFlag as irrelevant \n\n\nLive Planet Offers Immersive Video System for the Gamification of Vr\nIMDb \nIMDb, the world's most popular and authoritative source for movie, TV and celebrity content.\n  \n  \n  \nFlag as irrelevant \n\n\nGamification - Drive Your Audience To Your Ecommerce Store\nEmbedSlide \nLet gamification will help you to engage customers and it becomes effective marketing strategy in order to enhance your ecommerce storeÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nThe 3 Cs of Gamification\nEmbedSlide \nGamification is a powerful concept which allows you to engage your employees, co-workers or students in a fun and memorable way.\n  \n  \n  \nFlag as irrelevant \n\n\nThe #Pokemon explosion has led planners to consider gamification & AR. 5 ways it makes your ...\nqyofdiovm.xyz \nThe #Pokemon explosion has led planners to consider gamification & AR. 5 ways it makes your event more productive. See more. Since when are youÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nPokemon Go: The Good, The Bad and Some Lessons\nGamified UK Gamification Consultancy \nIn gamification, we can do this by making certain awards only available to those who really go out of their way to get them. Also, the virality of the gameÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\ngamifeye.com\nFree website tool \ngamifeye.com has position rank in alexa is 0 and rank in google page rank is 3. Total size homepage is 99.7 KB. Ip Address gamifeye.com isÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nWhy you've got gamification all wrong\nFielo \nThere's a widely circulated myth in the business world that gamification is a useful marketing medium but only in the consumer market. Our many yearsÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nGCommerce: The Gamification Of ECommerce\nthenewflesh.net \nIf searching for a ebook GCommerce: The Gamification of eCommerce [Download: PDF] [Digital] in pdf form, then you've come to the loyal website.\n  \n  \n  \nFlag as irrelevant \n\n\nrewardme.com\nFree website tool \nThe internationally well-known Gamification Framework Octalysis converts any campaign into actionable steps by breaking down motivation into 8Â ...\n  \n  \n  \nFlag as irrelevant \n\n\nGamification and Virtual Reality\nDigitally Cognizant \nGamification and Virtual Reality. Gamification and Virtual Reality. 6 Ways to Make Money with Pokemon GO. Read More. Older Posts. Subscribe forÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nIllegal and Legal Parrot Trade Shows a Long-Term, Cross-Cultural.\n4irc.com \nThis paper studies demographic differences in perceived benefits from gamification in the context of exercise. Results from deploying a participationÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\n+ Info\nScoopnest.com \nGet all the Latest news, Breaking headlines and Top stories, photos & video in real time about TinyGems.\n  \n  \n  \nFlag as irrelevant \n\n\n+ Info\nScoopnest.com \nGet all the Latest news, Breaking headlines and Top stories, photos & video in real time about MissionIR.\n  \n  \n  \nFlag as irrelevant \n\n\nFor you Even Ninja Monkeys Like to Play: Gamification Game Thinking and Motivational Design\nDailymotion \nFor you Even Ninja Monkeys Like to Play: Gamification Game Thinking and Motivational Design Clik here to readÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nSign In using\nScoopnest.com \nGet all the Latest news, Breaking headlines and Top stories, photos & video in real time about Walkley Foundation.\n  \n  \n  \nFlag as irrelevant \n\n\nLive Planet Offers Immersive Video System for the Gamification of VR â€“ IndieWire\nEnergiemonitor.TV \nIndieWireLive Planet Offers Immersive Video System for the Gamification of VRIndieWireThere are three components: the new 16-lens Live PlanetÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nHow Gamification Motivates People To Do Extraordinary Things\nMangabank \nGamify: How Gamification Motivates People To Do Extraordinary. Things [Unabridged] [Audible Audio Edition] By Brian Burke. If you are searched forÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\ngamification\nMytweeps \nRecent tweets from @hthwaite's tweeps (i.e. followers) gamification. View New ... I passed my own quiz, ok to pass go, ok to collect $200 #gamification.\n  \n  \n  \nFlag as irrelevant \n\n\nUrban gamification: can PokÃ©mon Go transform our public spaces?\nRichard Hartley \nCity links: Augmented reality tourism, drunk seagulls, subway deserts and a failed zero-carbon city feature in this week's roundup of the best cityÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nGamification In Training\nBlogarama \nWhat is Gamification and how it impacts learning and performance? Training & Development departments always seeking new ways to addÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nPokÃ©mon Go - The Gamification of Dog Walking\nAnimed Direct \nUnless you've been living on the moon for the past few weeks you should by now be aware of the cultural phenomenon that is PokÃ©mon Go.\n  \n  \n  \nFlag as irrelevant \n\n\nHalsey Minor News\nNEWSBout \nIndiewire: Tech guru Halsey Minor demo'd the new Live Planet 360-degree, livestreaming VR camera this week for cool plug and play content captureÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nWhich HR policies can be gamified?\nUookie \nGamification is an excellent way to achieve this. By applying game thinking and mechanics along with scientific techniques gamification can bringÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nGoogle+\nGoogle+ \nMarket Research Reports and Industry Analysis OrbisResearch.com has published â€œGamification Companies, Solutions, Market Outlook andÂ ...\n  \n  \n  \nFlag as irrelevant \n\n\nGamification Badges\nBestofpicture.com \nThe Psychology Of Gamification And Social... Source: bp.blogspot.com Â· Report. A Nice Example Of It Can Be Seen At Foursquare.\n  \n  \n  \nFlag as irrelevant \n\n\nLive Planet Offers Immersive Video System for the Gamification of VR\nWopular \nTech guru Halsey Minor demo'd the new Live Planet 360-degree, livestreaming VR camera this week for cool plug and play content capture.\n  \n  \n  \nFlag as irrelevant \n\nSee more results | Edit this alert \nYou have received this email because you have subscribed to Google Alerts.\nUnsubscribe | View all your alerts \n  Receive this alert as RSS feed \nSend Feedback \n";

function mailCount(emailData) {
  var emails = emailData.split('##||##');
  var emailsCount = emails.length;
  var emailsDates = [];
  emails.forEach(function (email) {
    emailsDates.push(email.split('#/#')[2].match(/[a-z0-9]+\s2016/gi));
  });
  emailsDates.sort();
  console.log("Count of Email: " + emailsCount);
  console.log("Date Range: " + emailsDates[0] + " - " + emailsDates[emailsCount - 1]);
}

var longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';

function longestSentence(text) {
  var sentences = text.match(/[a-z\s,-]+[\.!\?]/gi);
  var longest = sentences.sort(function (a, b) {
    return b.length - a.length;
  })[0];
  var longestWordCount = longest.match(/[a-z-]+/g).length;
  console.log(longest);
  console.log("The longest sentence has " + longestWordCount + " words.");
}

function rotateArray(array) {
  var arrayCopy = [];
  array.forEach(function (element) {
    arrayCopy.push(element);
  });
  var withoutFirst = arrayCopy.splice(1);
  withoutFirst.push(arrayCopy[0]);
  return withoutFirst;
}

function rotateRightmostDigits (number, n) {
  var numberArray = String(number).split('');
  var lastN = numberArray.splice(-n);
  var rotatedN = rotateArray(lastN);
  return numberArray.join('') + rotatedN.join('');
}

function maxRotation(number) {
  if (String(number).length === 1) {
    return number;
  }
  var numberToRotate = rotateRightmostDigits(number, number.length);
  var fixedDigits;
  var rotationString;
  var rotatedNumber;
  var result;
  for (var i = 1; i < String(number).length; i++) {
    rotationString = String(numberToRotate).substr(i);
    fixedDigits = String(numberToRotate).substr(0, i);
    rotatedNumber = rotateRightmostDigits(rotationString, rotationString.length);
    result = fixedDigits + String(rotatedNumber);
    numberToRotate = result;
  }
  return result = result[0] === '0' ? Number(result.substr(1)) : Number(result);
}

function diamond(n) {
  if (n === 1) console.log('*');
  drawUpperPyramid(n);
  drawLowerPyramid(n);
}

function drawUpperPyramid(n) {
  var starsNum = 1;
  var spacesNum = n - starsNum;
  var halfSpaces;
  var stars;
  for (var i = 0; i <= Math.floor(n / 2); i++) {
    halfSpaces = Array(spacesNum/2 + 1).join(" ");
    stars = Array(starsNum + 1).join("*");
    console.log(halfSpaces + stars + halfSpaces);
    starsNum += 2;
    spacesNum -= 2;
  }
}

function drawLowerPyramid(n) {
  var starsNum = n - 2;
  var spacesNum = 2;
  var halfSpaces;
  var stars;
  for (var i = 0; i < Math.floor(n / 2); i++) {
    halfSpaces = Array(spacesNum).join(" ");
    stars = Array(starsNum + 1).join("*");
    console.log(halfSpaces + stars + halfSpaces);
    starsNum -= 2;
    spacesNum += 1;
  }
}

function minilang(commands) {
  var commandsArray = commands.split(' ');
  var stack = [];
  var register;
  commandsArray.forEach(function(command, index) {
    if (Number(command)) register = Number(command);
    switch (command) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'PRINT':
        console.log('# ' + register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'MOD':
        register = register % stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
    }
  })
}

var wordDigitPairs = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
};

function wordToDigit(string) {
  var convertedString = string;
  var re;
  for (var stringNum in wordDigitPairs) {
    re = new RegExp(stringNum, "gi");
    convertedString = convertedString.replace(re, wordDigitPairs[stringNum]);
  };
  return convertedString;
}

var blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];

function blockWord(word) {
  var upWord = word.toUpperCase();
  var result = blocks.find(function (element) {
    return upWord.includes(element[0]) && upWord.includes(element[1]);
  });
  return result = !!result ? false : true;
}

function letterPercentages(string) {
  var stringLength = string.length;
  var lowercaseCount = string.match(/[a-z]/g) || [];
  var uppercaseCount = string.match(/[A-Z]/g) || [];
  var neitherCount = string.match(/[^a-z]/gi) || [];
  return {lowercase: lowercaseCount.length / stringLength * 100,
          uppercase: uppercaseCount.length / stringLength * 100,
          neither: neitherCount.length / stringLength * 100};
}

function triangle(side1, side2, side3) {
  if (arguments.length !== 3) return false;
  var args = [].slice.call(arguments);
  var max = Math.max.apply(null, args);
  var maxIndex = args.indexOf(max);
  var argsCopy = args.slice();
  argsCopy.splice(maxIndex, 1);
  if (argsCopy.reduce(function(prev, next){
    return prev + next;
  }) <= max) {
    console.log('invalid');
  } else if (side1 === side2 && side2 === side3) {
    console.log('equilateral');
  } else if (side1 === side2 && side2 !== side3) {
    console.log('isosceles');
  } else {
    console.log('scalene');
  }
}

function triangleAngle(angle1, angle2, angle3) {
  var args = [].slice.call(arguments);
  var isZero = args.some(function (angle) {
    return angle === 0;
  });
  var totalDeg = args.reduce(function (acc, angle) {
    return acc + angle;
  });
  if (totalDeg < 180 || totalDeg > 180 || isZero) {
    console.log('invalid');
  } else if (args.every(function (angle) {
    return angle < 90;
  })) {
    console.log('acute');
  } else if (args.filter(function (angle) {
    return angle === 90;
  }).length === 1) {
    console.log('right');
  } else {
    console.log('obtuse');
  }
}

function friday13th(year) {
  var badDays = 0;
  var date;
  for (var i = 0; i < 11; i++) {
    date = new Date(year, i, 13);
    if (date.getDay() === 5) {
      badDays += 1;
    }
  }
  return badDays;
}

function isUnique(num) {
  var numArray = String(num).split('');
  return numArray.filter(function (element, _) {
    return numArray.indexOf(element) !== numArray.lastIndexOf(element)
  }).length === 0;
}

function featured(number) {
  var unique;
  if (number > 9876543210) return "Too large";
  var currentNum = number + 1;
  while (currentNum % 2 !== 1 || currentNum % 7 !== 0) {
    currentNum += 1;
  }
  while (true) {
    unique = isUnique(currentNum);
    if (unique) return currentNum;
    else currentNum += 14;
  }
}

function bubbleSort(array) {
  while (true) {
    var temp = 0;
    for (var i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
    if (!temp) break;
  }
}

function sumSquareDifference(number) {
  var squareSum = 0;
  var sumSquare = 0;
  for (var i = 1; i <= number; i++) {
    squareSum += i;
    sumSquare += Math.pow(i, 2);
  }
  squareSum = Math.pow(squareSum, 2);
  return squareSum - sumSquare;
}

function transpose(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    result.push(array.map(function(row, _) {
      return row[i];
    }));
  }
  return result;
}

function merge(arr1, arr2) {
  var merged = [];
  var [larger, smaller] = [arr1, arr2].sort(function (a, b) {
    return b.length - a.length;
  });
  if (smaller.length === 0) return larger;
  larger.forEach(function (l, idx) {
    smaller.forEach(function (s) {
      if (l > s) {
        merged.push(s);
      }
    });
    merged.push(l);
    console.log(merged);
  });
  return merged;
}

function minilang(commands) {
  var register = 0;
  var stack = [];
  var commands_array = commands.toLowerCase().split(" ");
  commands_array.forEach(function (command) {
    if (Number(command) && !isNaN(command)) {
      register = Number(command);
    } else {
      switch(command) {
        case "push":
          stack.push(register);
          break;
        case "add":
          register += stack.pop();
          break;
        case "sub":
          register -= stack.pop();
          break;
        case "print":
          console.log(register);
          break;
        case "mult":
          register *= stack.pop();
          break;
        case "div":
          register = Math.floor(register / stack.pop());
          break;
        case "mod":
          register %= stack.pop();
          break;
        case "pop":
          register = stack.pop();
          break
     }
    }
  });
}

function letterPercentages(string) {
  var occurances = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };
  var letter;

  for (var i = 0; i < string.length; i++) {
    letter = string[i]
    if (letter.match(/[a-z]/)) {
      occurances.lowercase += 1;
    } else if (letter.match(/[A-Z]/)) {
      occurances.uppercase += 1;
    } else {
      occurances.neither += 1;
    }
  }

  return {
    lowercase: occurances.lowercase / string.length * 100,
    uppercase: occurances.uppercase / string.length * 100,
    neither: occurances.neither / string.length * 100
  };
}

function fridayThe13ths(year) {
  var fridays_count = 0;
  var date;
  for (var i = 0; i < 12; i++) {
    date = new Date(year, i, 13);
    if (date.getDay() == 5) {
      fridays_count += 1;
    }
  }
  return fridays_count;
}

function featured(number) {
  var featured_number = 7;
  while (featured_number <= number) {
    featured_number += 14;
  }

  while (!number_unique(featured_number)) {
    featured_number += 14;
  }
  return featured_number;
}

function number_unique(number) {
  var number_array = String(number).split("");
  var result = {};
  for (var i = 0; i < number_array.length; i++) {
    if (result[number_array[i]]) {
      return false;
    } else {
      result[number_array[i]] = 1;
    }
  }
  return true;
}
