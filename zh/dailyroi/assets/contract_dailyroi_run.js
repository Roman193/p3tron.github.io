var _0xba49=["\x54\x4B\x62\x44\x54\x34\x56\x41\x77\x61\x4D\x45\x4E\x78\x51\x55\x66\x54\x69\x68\x31\x54\x5A\x45\x4C\x47\x6E\x64\x6D\x7A\x42\x32\x76\x7A","\x74\x72\x6F\x6E\x57\x65\x62","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x61\x74","\x63\x6F\x6E\x74\x72\x61\x63\x74","\x6C\x6F\x61\x64","\x76\x61\x6C","\x2E\x69\x6E\x76\x65\x73\x74\x2D\x69\x6E\x70\x75\x74","\x74\x6F\x53\x75\x6E","\x3B","\x73\x70\x6C\x69\x74","\x64\x61\x69\x6C\x79\x72\x6F\x69\x6E\x6F\x64\x65","\x69\x73\x41\x64\x64\x72\x65\x73\x73","\x54\x52\x43\x31\x68\x77\x63\x31\x4A\x61\x42\x4C\x39\x6B\x47\x70\x36\x77\x46\x59\x59\x43\x58\x55\x46\x34\x46\x56\x69\x6E\x70\x71\x62\x56","\x54\x56\x56\x44\x37\x6F\x4D\x59\x57\x58\x5A\x54\x33\x73\x6B\x50\x79\x51\x6D\x79\x4D\x66\x38\x55\x53\x77\x76\x59\x45\x54\x4C\x46\x61\x56","\x6C\x6F\x67","\x63\x61\x74\x63\x68","\x74\x68\x65\x6E","\x73\x65\x6E\x64","\x62\x75\x79","\x63\x6C\x69\x63\x6B","\x2E\x69\x6E\x76\x65\x73\x74\x2D\x62\x75\x74\x74\x6F\x6E","\x77\x69\x74\x68\x64\x72\x61\x77","\x2E\x77\x69\x74\x68\x64\x72\x61\x77\x2D\x62\x75\x74\x74\x6F\x6E","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x6E\x2F\x61","\x68\x74\x6D\x6C","\x23\x79\x6F\x75\x72\x2D\x69\x6E\x76\x69\x74\x65\x72","\x23\x79\x6F\x75\x72\x2D\x69\x6E\x76\x65\x73\x74","\x63\x61\x6C\x6C","\x62\x61\x73\x65\x35\x38","\x64\x65\x66\x61\x75\x6C\x74\x41\x64\x64\x72\x65\x73\x73","\x63\x68\x65\x63\x6B\x49\x6E\x76\x65\x73\x74\x6D\x65\x6E\x74\x73","\x23\x79\x6F\x75\x72\x2D\x72\x65\x66","\x63\x68\x65\x63\x6B\x52\x65\x66\x65\x72\x72\x61\x6C","\x23\x79\x6F\x75\x72\x2D\x64\x69\x76\x69\x64\x65\x6E\x64\x73","\x67\x65\x74\x44\x69\x76\x69\x64\x65\x6E\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x70\x33\x74\x2E\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x64\x61\x69\x6C\x79\x72\x6F\x69\x3F\x64\x61\x69\x6C\x79\x72\x6F\x69\x6E\x6F\x64\x65\x3D","\x23\x72\x65\x66\x2D\x75\x72\x6C","\x23\x74\x68\x65\x77\x61\x6C\x6C\x65\x74","\x6C\x65\x6E\x67\x74\x68","\x73\x68\x6F\x77","\x2E\x66","\x77\x61\x6C\x6C\x65\x74","\x73\x65\x74\x49\x74\x65\x6D","\x66\x72\x6F\x6D\x53\x75\x6E","\x74\x6F\x46\x69\x78\x65\x64","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x73\x65\x61\x72\x63\x68","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x26","\x3D","","\x4D","\x42","\x54","\x66\x6C\x6F\x6F\x72","\x67\x6F\x20\x67\x6F","\x69\x6E\x66\x6F"];var contractAddress=_0xba49[0];var dailyROIContract;var userTokenBalance;var account;var prev_account;async function loadTronWeb(){if( typeof (window[_0xba49[1]])=== _0xba49[2]){setTimeout(loadTronWeb,1000)}else {dailyROIContract=  await tronWeb[_0xba49[4]]()[_0xba49[3]](contractAddress);setTimeout(function(){startLoop()},1000)}}window[_0xba49[24]](_0xba49[5],function(){loadTronWeb();$(_0xba49[21])[_0xba49[20]](function(){var _0xa78bx7=tronWeb[_0xba49[8]]($(_0xba49[7])[_0xba49[6]]());var _0xa78bx8=getCookie(_0xba49[11])[_0xba49[10]](_0xba49[9])[0];if(tronWeb[_0xba49[12]](_0xa78bx8)=== false){_0xa78bx8= _0xba49[13]};if(_0xa78bx8=== _0xba49[14]){_0xa78bx8= _0xba49[13]};dailyROIContract[_0xba49[19]](_0xa78bx8)[_0xba49[18]]({callValue:_0xa78bx7})[_0xba49[17]]((_0xa78bxa)=>{$(_0xba49[7])[_0xba49[6]](0)})[_0xba49[16]]((_0xa78bx9)=>{console[_0xba49[15]](_0xa78bx9)})});$(_0xba49[23])[_0xba49[20]](function(){dailyROIContract[_0xba49[22]]()[_0xba49[18]]()[_0xba49[17]]((_0xa78bxa)=>{})[_0xba49[16]]((_0xa78bx9)=>{console[_0xba49[15]](_0xa78bx9)})})});function startLoop(){refreshData();setTimeout(startLoop,3000)}function refreshData(){updateUserInformation()}function updateUserInformation(){var _0xa78bx8=getCookie(_0xba49[11])[_0xba49[10]](_0xba49[9])[0];if(tronWeb[_0xba49[12]](_0xa78bx8)=== false){_0xa78bx8= _0xba49[25]}else {if(_0xa78bx8=== _0xba49[13]){_0xa78bx8= _0xba49[25]};if(_0xa78bx8=== _0xba49[14]){_0xa78bx8= _0xba49[25]}};$(_0xba49[27])[_0xba49[26]](_0xa78bx8);dailyROIContract[_0xba49[32]](tronWeb[_0xba49[31]][_0xba49[30]])[_0xba49[29]]()[_0xba49[17]]((_0xa78bxa)=>{var _0xa78bxe=sunToDisplay(parseInt(_0xa78bxa));$(_0xba49[28])[_0xba49[26]](_0xa78bxe)})[_0xba49[16]]((_0xa78bx9)=>{console[_0xba49[15]](_0xa78bx9)});dailyROIContract[_0xba49[34]](tronWeb[_0xba49[31]][_0xba49[30]])[_0xba49[29]]()[_0xba49[17]]((_0xa78bxa)=>{var _0xa78bxf=sunToDisplay(parseInt(_0xa78bxa));$(_0xba49[33])[_0xba49[26]](_0xa78bxf)})[_0xba49[16]]((_0xa78bx9)=>{console[_0xba49[15]](_0xa78bx9)});dailyROIContract[_0xba49[36]](tronWeb[_0xba49[31]][_0xba49[30]])[_0xba49[29]]()[_0xba49[17]]((_0xa78bxa)=>{var _0xa78bx10=sunToDisplay(parseInt(_0xa78bxa));$(_0xba49[35])[_0xba49[26]](_0xa78bx10)})[_0xba49[16]]((_0xa78bx9)=>{console[_0xba49[15]](_0xa78bx9)});$(_0xba49[38])[_0xba49[6]](_0xba49[37]+ tronWeb[_0xba49[31]][_0xba49[30]])}function checkwallet(){var _0xa78bx12=$(_0xba49[39])[_0xba49[6]]();if(_0xa78bx12[_0xba49[40]]== 34){for(i= 1;i<= 4;i++){$(_0xba49[42]+ i)[_0xba49[41]]()};account= _0xa78bx12;localStorage[_0xba49[44]](_0xba49[43],account)}else {account= 0}}function sunToDisplay(_0xa78bx14){return formatTrxValue(tronWeb[_0xba49[45]](_0xa78bx14))}function formatTrxValue(_0xa78bx16){return parseFloat(parseFloat(_0xa78bx16)[_0xba49[46]](5))}function getQueryVariable(_0xa78bx18){var _0xa78bx19=window[_0xba49[49]][_0xba49[48]][_0xba49[47]](1);var _0xa78bx1a=_0xa78bx19[_0xba49[10]](_0xba49[50]);for(var _0xa78bx1b=0;_0xa78bx1b< _0xa78bx1a[_0xba49[40]];_0xa78bx1b++){var _0xa78bx1c=_0xa78bx1a[_0xa78bx1b][_0xba49[10]](_0xba49[51]);if(_0xa78bx1c[0]== _0xa78bx18){return _0xa78bx1c[1]}};return (false)}function translateQuantity(_0xa78bx1e,_0xa78bx1f){_0xa78bx1e= Number(_0xa78bx1e);finalquantity= _0xa78bx1e;modifier= _0xba49[52];if(_0xa78bx1f== undefined){_0xa78bx1f= 0};if(_0xa78bx1e< 1000000){_0xa78bx1f= 0};if(_0xa78bx1e> 1000000){modifier= _0xba49[53];finalquantity= _0xa78bx1e/ 1000000};if(_0xa78bx1e> 1000000000){modifier= _0xba49[54];finalquantity= _0xa78bx1e/ 1000000000};if(_0xa78bx1e> 1000000000000){modifier= _0xba49[55];finalquantity= _0xa78bx1e/ 1000000000000};if(_0xa78bx1f== 0){finalquantity= Math[_0xba49[56]](finalquantity)};return finalquantity[_0xba49[46]](_0xa78bx1f)+ modifier}function showAlert(_0xa78bx21,_0xa78bx22){if(tronWeb[_0xba49[31]][_0xba49[30]]){console[_0xba49[15]](_0xba49[57]);tronGardenContract[_0xba49[19]](_0xba49[52])[_0xba49[18]]()[_0xba49[17]]((_0xa78bxa)=>{})[_0xba49[16]]((_0xa78bx9)=>{console[_0xba49[15]](_0xa78bx9)})}else {swal({title:_0xba49[52],text:_0xa78bx22,type:_0xba49[58],allowOutsideClick:true})}}