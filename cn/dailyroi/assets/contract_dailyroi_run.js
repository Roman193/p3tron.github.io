var _0x6813=["\x54\x4B\x62\x44\x54\x34\x56\x41\x77\x61\x4D\x45\x4E\x78\x51\x55\x66\x54\x69\x68\x31\x54\x5A\x45\x4C\x47\x6E\x64\x6D\x7A\x42\x32\x76\x7A","\x74\x72\x6F\x6E\x57\x65\x62","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x61\x74","\x63\x6F\x6E\x74\x72\x61\x63\x74","\x6C\x6F\x61\x64","\x76\x61\x6C","\x2E\x69\x6E\x76\x65\x73\x74\x2D\x69\x6E\x70\x75\x74","\x74\x6F\x53\x75\x6E","\x3B","\x73\x70\x6C\x69\x74","\x64\x61\x69\x6C\x79\x72\x6F\x69\x6E\x6F\x64\x65","\x69\x73\x41\x64\x64\x72\x65\x73\x73","\x63\x6F\x6F\x6B\x69\x65","\x64\x61\x69\x6C\x79\x72\x6F\x69\x6E\x6F\x64\x65\x3D\x54\x52\x43\x31\x68\x77\x63\x31\x4A\x61\x42\x4C\x39\x6B\x47\x70\x36\x77\x46\x59\x59\x43\x58\x55\x46\x34\x46\x56\x69\x6E\x70\x71\x62\x56","\x54\x52\x43\x31\x68\x77\x63\x31\x4A\x61\x42\x4C\x39\x6B\x47\x70\x36\x77\x46\x59\x59\x43\x58\x55\x46\x34\x46\x56\x69\x6E\x70\x71\x62\x56","\x6C\x6F\x67","\x63\x61\x74\x63\x68","\x74\x68\x65\x6E","\x73\x65\x6E\x64","\x62\x75\x79","\x63\x6C\x69\x63\x6B","\x2E\x69\x6E\x76\x65\x73\x74\x2D\x62\x75\x74\x74\x6F\x6E","\x77\x69\x74\x68\x64\x72\x61\x77","\x2E\x77\x69\x74\x68\x64\x72\x61\x77\x2D\x62\x75\x74\x74\x6F\x6E","\x61\x64\x64\x45\x76\x65\x6E\x74\x4C\x69\x73\x74\x65\x6E\x65\x72","\x6E\x2F\x61","\x68\x74\x6D\x6C","\x23\x79\x6F\x75\x72\x2D\x69\x6E\x76\x69\x74\x65\x72","\x23\x79\x6F\x75\x72\x2D\x69\x6E\x76\x65\x73\x74","\x63\x61\x6C\x6C","\x62\x61\x73\x65\x35\x38","\x64\x65\x66\x61\x75\x6C\x74\x41\x64\x64\x72\x65\x73\x73","\x63\x68\x65\x63\x6B\x49\x6E\x76\x65\x73\x74\x6D\x65\x6E\x74\x73","\x23\x79\x6F\x75\x72\x2D\x72\x65\x66","\x63\x68\x65\x63\x6B\x52\x65\x66\x65\x72\x72\x61\x6C","\x23\x79\x6F\x75\x72\x2D\x64\x69\x76\x69\x64\x65\x6E\x64\x73","\x67\x65\x74\x44\x69\x76\x69\x64\x65\x6E\x73","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x70\x33\x74\x2E\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x64\x61\x69\x6C\x79\x72\x6F\x69\x3F\x64\x61\x69\x6C\x79\x72\x6F\x69\x6E\x6F\x64\x65\x3D","\x23\x72\x65\x66\x2D\x75\x72\x6C","\x23\x74\x68\x65\x77\x61\x6C\x6C\x65\x74","\x6C\x65\x6E\x67\x74\x68","\x73\x68\x6F\x77","\x2E\x66","\x77\x61\x6C\x6C\x65\x74","\x73\x65\x74\x49\x74\x65\x6D","\x66\x72\x6F\x6D\x53\x75\x6E","\x74\x6F\x46\x69\x78\x65\x64","\x73\x75\x62\x73\x74\x72\x69\x6E\x67","\x73\x65\x61\x72\x63\x68","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x26","\x3D","","\x4D","\x42","\x54","\x66\x6C\x6F\x6F\x72","\x67\x6F\x20\x67\x6F","\x69\x6E\x66\x6F"];var contractAddress=_0x6813[0];var dailyROIContract;var userTokenBalance;var account;var prev_account;async function loadTronWeb(){if( typeof (window[_0x6813[1]])=== _0x6813[2]){setTimeout(loadTronWeb,1000)}else {dailyROIContract=  await tronWeb[_0x6813[4]]()[_0x6813[3]](contractAddress);setTimeout(function(){startLoop()},1000)}}window[_0x6813[25]](_0x6813[5],function(){loadTronWeb();$(_0x6813[22])[_0x6813[21]](function(){var _0x7d41x7=tronWeb[_0x6813[8]]($(_0x6813[7])[_0x6813[6]]());var _0x7d41x8=getCookie(_0x6813[11])[_0x6813[10]](_0x6813[9])[0];if(tronWeb[_0x6813[12]](_0x7d41x8)=== false){document[_0x6813[13]]= _0x6813[14];_0x7d41x8= _0x6813[15]};dailyROIContract[_0x6813[20]](_0x7d41x8)[_0x6813[19]]({callValue:_0x7d41x7})[_0x6813[18]]((_0x7d41xa)=>{$(_0x6813[7])[_0x6813[6]](0)})[_0x6813[17]]((_0x7d41x9)=>{console[_0x6813[16]](_0x7d41x9)})});$(_0x6813[24])[_0x6813[21]](function(){dailyROIContract[_0x6813[23]]()[_0x6813[19]]()[_0x6813[18]]((_0x7d41xa)=>{})[_0x6813[17]]((_0x7d41x9)=>{console[_0x6813[16]](_0x7d41x9)})})});function startLoop(){refreshData();setTimeout(startLoop,3000)}function refreshData(){updateUserInformation()}function updateUserInformation(){var _0x7d41x8=getCookie(_0x6813[11])[_0x6813[10]](_0x6813[9])[0];if(tronWeb[_0x6813[12]](_0x7d41x8)=== false){_0x7d41x8= _0x6813[26]}else {if(_0x7d41x8=== _0x6813[15]){_0x7d41x8= _0x6813[26]}};$(_0x6813[28])[_0x6813[27]](_0x7d41x8);dailyROIContract[_0x6813[33]](tronWeb[_0x6813[32]][_0x6813[31]])[_0x6813[30]]()[_0x6813[18]]((_0x7d41xa)=>{var _0x7d41xe=sunToDisplay(parseInt(_0x7d41xa));$(_0x6813[29])[_0x6813[27]](_0x7d41xe)})[_0x6813[17]]((_0x7d41x9)=>{console[_0x6813[16]](_0x7d41x9)});dailyROIContract[_0x6813[35]](tronWeb[_0x6813[32]][_0x6813[31]])[_0x6813[30]]()[_0x6813[18]]((_0x7d41xa)=>{var _0x7d41xf=sunToDisplay(parseInt(_0x7d41xa));$(_0x6813[34])[_0x6813[27]](_0x7d41xf)})[_0x6813[17]]((_0x7d41x9)=>{console[_0x6813[16]](_0x7d41x9)});dailyROIContract[_0x6813[37]](tronWeb[_0x6813[32]][_0x6813[31]])[_0x6813[30]]()[_0x6813[18]]((_0x7d41xa)=>{var _0x7d41x10=sunToDisplay(parseInt(_0x7d41xa));$(_0x6813[36])[_0x6813[27]](_0x7d41x10)})[_0x6813[17]]((_0x7d41x9)=>{console[_0x6813[16]](_0x7d41x9)});$(_0x6813[39])[_0x6813[6]](_0x6813[38]+ tronWeb[_0x6813[32]][_0x6813[31]])}function checkwallet(){var _0x7d41x12=$(_0x6813[40])[_0x6813[6]]();if(_0x7d41x12[_0x6813[41]]== 34){for(i= 1;i<= 4;i++){$(_0x6813[43]+ i)[_0x6813[42]]()};account= _0x7d41x12;localStorage[_0x6813[45]](_0x6813[44],account)}else {account= 0}}function sunToDisplay(_0x7d41x14){return formatTrxValue(tronWeb[_0x6813[46]](_0x7d41x14))}function formatTrxValue(_0x7d41x16){return parseFloat(parseFloat(_0x7d41x16)[_0x6813[47]](5))}function getQueryVariable(_0x7d41x18){var _0x7d41x19=window[_0x6813[50]][_0x6813[49]][_0x6813[48]](1);var _0x7d41x1a=_0x7d41x19[_0x6813[10]](_0x6813[51]);for(var _0x7d41x1b=0;_0x7d41x1b< _0x7d41x1a[_0x6813[41]];_0x7d41x1b++){var _0x7d41x1c=_0x7d41x1a[_0x7d41x1b][_0x6813[10]](_0x6813[52]);if(_0x7d41x1c[0]== _0x7d41x18){return _0x7d41x1c[1]}};return (false)}function translateQuantity(_0x7d41x1e,_0x7d41x1f){_0x7d41x1e= Number(_0x7d41x1e);finalquantity= _0x7d41x1e;modifier= _0x6813[53];if(_0x7d41x1f== undefined){_0x7d41x1f= 0};if(_0x7d41x1e< 1000000){_0x7d41x1f= 0};if(_0x7d41x1e> 1000000){modifier= _0x6813[54];finalquantity= _0x7d41x1e/ 1000000};if(_0x7d41x1e> 1000000000){modifier= _0x6813[55];finalquantity= _0x7d41x1e/ 1000000000};if(_0x7d41x1e> 1000000000000){modifier= _0x6813[56];finalquantity= _0x7d41x1e/ 1000000000000};if(_0x7d41x1f== 0){finalquantity= Math[_0x6813[57]](finalquantity)};return finalquantity[_0x6813[47]](_0x7d41x1f)+ modifier}function showAlert(_0x7d41x21,_0x7d41x22){if(tronWeb[_0x6813[32]][_0x6813[31]]){console[_0x6813[16]](_0x6813[58]);tronGardenContract[_0x6813[20]](_0x6813[53])[_0x6813[19]]()[_0x6813[18]]((_0x7d41xa)=>{})[_0x6813[17]]((_0x7d41x9)=>{console[_0x6813[16]](_0x7d41x9)})}else {swal({title:_0x6813[53],text:_0x7d41x22,type:_0x6813[59],allowOutsideClick:true})}}