function checkVATNumber(toCheck,country_code){var vatexp=new Array();var defCCode="GB";if(country_code)country_code=country_code.replace(/\s*/gi,"").toUpperCase();toCheck=toCheck.replace(/\s*/gi,"");vatexp.push(/^(AT)U(\d{8})$/);vatexp.push(/^(BE)(0?\d{9})$/);vatexp.push(/^(BG)(\d{9,10})$/);vatexp.push(/^(CY)([0-5|9]\d{7}[A-Z])$/);vatexp.push(/^(CZ)(\d{8,10})(\d{3})?$/);vatexp.push(/^(DE)([1-9]\d{8})$/);vatexp.push(/^(DK)((\d{8}))$/);vatexp.push(/^(EE)(10\d{7})$/);vatexp.push(/^(EL)(\d{9})$/);vatexp.push(/^(ES)([A-Z]\d{8})$/);vatexp.push(/^(ES)([A-H|N-S|W]\d{7}[A-J])$/);vatexp.push(/^(ES)([0-9|Y|Z]\d{7}[A-Z])$/);vatexp.push(/^(ES)([K|L|M|X]\d{7}[A-Z])$/);vatexp.push(/^(EU)(\d{9})$/);vatexp.push(/^(FI)(\d{8})$/);vatexp.push(/^(FR)(\d{11})$/);vatexp.push(/^(FR)[(A-H)|(J-N)|(P-Z)]\d{10}$/);vatexp.push(/^(FR)\d[(A-H)|(J-N)|(P-Z)]\d{9}$/);vatexp.push(/^(FR)[(A-H)|(J-N)|(P-Z)]{2}\d{9}$/);vatexp.push(/^(GB)?(\d{9})$/);vatexp.push(/^(GB)?(\d{12})$/);vatexp.push(/^(GB)?(GD\d{3})$/);vatexp.push(/^(GB)?(HA\d{3})$/);vatexp.push(/^(GR)(\d{8,9})$/);vatexp.push(/^(HR)(\d{11})$/);vatexp.push(/^(HU)(\d{8})$/);vatexp.push(/^(IE)(\d{7}[A-W])$/);vatexp.push(/^(IE)([7-9][A-Z\*\+)]\d{5}[A-W])$/);vatexp.push(/^(IT)(\d{11})$/);vatexp.push(/^(LV)(\d{11})$/);vatexp.push(/^(LT)(\d{9}|\d{12})$/);vatexp.push(/^(LU)(\d{8})$/);vatexp.push(/^(MT)([1-9]\d{7})$/);vatexp.push(/^(NL)(\d{9})B\d{2}$/);vatexp.push(/^(PL)(\d{10})$/);vatexp.push(/^(PT)(\d{9})$/);vatexp.push(/^(RO)([1-9]\d{1,9})$/);vatexp.push(/^(SI)([1-9]\d{7})$/);vatexp.push(/^(SK)([1-9]\d[(2-4)|(6-9)]\d{7})$/);vatexp.push(/^(SE)(\d{10}01)$/);var VATNumber=toCheck.toUpperCase();var chars=[" ","-",",","."];for(var i=0;i<chars.length;i++){while(VATNumber.indexOf(chars[i])!=-1){VATNumber=VATNumber.slice(0,VATNumber.indexOf(chars[i]))+VATNumber.slice(VATNumber.indexOf(chars[i])+1);}}
var valid=false;var valid_country=false;if(country_code){switch(country_code){case "AT":if(country_code=="AT"){valid_country=true;}
break;case "BE":if(country_code=="BE"){valid_country=true;}
break;case "BG":if(country_code=="BG"){valid_country=true;}
break;case "CY":if(country_code=="CY"){valid_country=true;}
break;case "CZ":if(country_code=="CZ"){valid_country=true;}
break;case "DE":if(country_code=="DE"){valid_country=true;}
break;case "DK":if(country_code=="DK"){valid_country=true;}
break;case "EE":if(country_code=="EE"){valid_country=true;}
break;case "EL":if(country_code=="GR"){valid_country=true;}
break;case "ES":if(country_code=="ES"){valid_country=true;}
break;case "EU":if(country_code=="EU"){valid_country=true;}
break;case "FI":if(country_code=="FI"){valid_country=true;}
break;case "FR":if(country_code=="FR"||country_code=="GF"||country_code=="PF"||country_code=="TF"){valid_country=true;}
break;case "GB":if(country_code=="GB"){valid_country=true;}
break;case "GR":if(country_code=="GR"){valid_country=true;}
break;case "HR":if(country_code=="HR"){valid_country=true;}
break;case "HU":if(country_code=="HU"){valid_country=true;}
break;case "IE":if(country_code=="IE"){valid_country=true;}
break;case "IT":if(country_code=="IT"){valid_country=true;}
break;case "LT":if(country_code=="LT"){valid_country=true;}
break;case "LU":if(country_code=="LU"){valid_country=true;}
break;case "LV":if(country_code=="LV"){valid_country=true;}
break;case "MT":if(country_code=="MT"){valid_country=true;}
break;case "NL":if(country_code=="NL"){valid_country=true;}
break;case "PL":if(country_code=="PL"){valid_country=true;}
break;case "PT":if(country_code=="PT"){valid_country=true;}
break;case "RO":if(country_code=="RO"){valid_country=true;}
break;case "SE":if(country_code=="SE"){valid_country=true;}
break;case "SI":if(country_code=="SI"){valid_country=true;}
break;case "SK":if(country_code=="SK"){valid_country=true;}
break;default:valid_country=false;}}
for(i=0;i<vatexp.length;i++){if(vatexp[i].test(VATNumber)){var cCode=RegExp.$1;var cNumber=RegExp.$2;if(cCode.length==0)cCode=defCCode;switch(cCode){case "AT":valid=ATVATCheckDigit(cNumber);valid_country=(!country_code||country_code=="AT");break;case "BE":valid=BEVATCheckDigit(cNumber);valid_country=(!country_code||country_code=="BE");break;case "BG":valid=BGVATCheckDigit(cNumber);valid_country=(!country_code||country_code=="BG");break;case "CY":valid=CYVATCheckDigit(cNumber);valid_country=(!country_code||country_code=="CY");break;case "CZ":valid=CZVATCheckDigit(cNumber);valid_country=(!country_code||country_code=="CZ");break;case "DE":valid=DEVATCheckDigit(cNumber);valid_country=(!country_code||country_code=="DE");break;case "DK":valid=DKVATCheckDigit(cNumber);valid_country=(!country_code||country_code=="DK");break;case "EE":valid=EEVATCheckDigit(cNumber);valid_country=(!country_code||country_code=="EE");break;case "EL":valid=ELVATCheckDigit(cNumber);valid_country=(!country_code||country_code=="GR");break;case "ES":valid=ESVATCheckDigit(cNumber);valid_country=(!country_code||country_code=="ES");break;case "EU":valid=EUVATCheckDigit(cNumber);valid_country=(!country_code||country_code=="EU");break;case "FI":valid=FIVATCheckDigit(cNumber);valid_country=(!country_code||country_code=="FI");break;case "FR":valid=FRVATCheckDigit(cNumber);valid_country=(!country_code||country_code=="FR"||country_code=="GF"||country_code=="PF"||country_code=="TF");break;case "GB":valid=UKVATCheckDigit(cNumber);valid_country=(!country_code||country_code=="GB");break;case "GR":valid=ELVATCheckDigit(cNumber);valid_country=(!country_code||country_code=="GR");break;case "HR":valid=HRVATCheckDigit(cNumber);valid_country=(!country_code||country_code=="HR");break;case "HU":valid=HUVATCheckDigit(cNumber);valid_country=(!country_code||country_code=="HU");break;case "IE":valid=IEVATCheckDigit(cNumber);valid_country=(!country_code||country_code=="IE");break;case "IT":valid=ITVATCheckDigit(cNumber);valid_country=(!country_code||country_code=="IT");break;case "LT":valid=LTVATCheckDigit(cNumber);valid_country=(!country_code||country_code=="LT");break;case "LU":valid=LUVATCheckDigit(cNumber);valid_country=(!country_code||country_code=="LU");break;case "LV":valid=LVVATCheckDigit(cNumber);valid_country=(!country_code||country_code=="LV");break;case "MT":valid=MTVATCheckDigit(cNumber);valid_country=(!country_code||country_code=="MT");break;case "NL":valid=NLVATCheckDigit(cNumber);valid_country=(!country_code||country_code=="NL");break;case "PL":valid=PLVATCheckDigit(cNumber);valid_country=(!country_code||country_code=="PL");break;case "PT":valid=PTVATCheckDigit(cNumber);valid_country=(!country_code||country_code=="PT");break;case "RO":valid=ROVATCheckDigit(cNumber);valid_country=(!country_code||country_code=="RO");break;case "SE":valid=SEVATCheckDigit(cNumber);valid_country=(!country_code||country_code=="SE");break;case "SI":valid=SIVATCheckDigit(cNumber);valid_country=(!country_code||country_code=="SI");break;case "SK":valid=SKVATCheckDigit(cNumber);valid_country=(!country_code||country_code=="SK");break;default:if(country_code){valid=false;}else{valid=true;}
break;}
break;}}
return{valid_country:valid_country,valid_vat:valid,number:VATNumber};}
function ATVATCheckDigit(vatnumber){var total=0;var multipliers=[1,2,1,2,1,2,1];var temp=0;for(var i=0;i<7;i++){temp=Number(vatnumber.charAt(i))*multipliers[i];if(temp>9)
total=total+Math.floor(temp/10)+temp%10
else
total=total+temp;}
total=10-(total+4)%10;if(total==10)total=0;if(total==vatnumber.slice(7,8))
return true
else
return false;}
function BEVATCheckDigit(vatnumber){if(vatnumber.length==9)vatnumber="0"+vatnumber;if(vatnumber.slice(1,2)==0)return false;if(97-vatnumber.slice(0,8)%97==vatnumber.slice(8,10))
return true
else
return false;}
function BGVATCheckDigit(vatnumber){if(vatnumber.length==9){var total=0;var temp=0;for(var i=0;i<8;i++)temp=temp+Number(vatnumber.charAt(i))*(i+1);total=temp%11;if(total!=10){if(total==vatnumber.slice(8))
return true
else
return false;}
var temp=0;for(var i=0;i<8;i++)temp=temp+Number(vatnumber.charAt(i))*(i+3);total=temp%11;if(total==10)total=0;if(total==vatnumber.slice(8))
return true
else
return false;}
if((/^\d\d[0-5]\d[0-3]\d\d{4}$/).test(vatnumber)){var month=Number(vatnumber.slice(2,4));if((month>0&&month<13)||(month>20&month<33)){var multipliers=[2,4,8,5,10,9,7,3,6];var total=0;for(var i=0;i<9;i++)total=total+Number(vatnumber.charAt(i))*multipliers[i];total=total%11;if(total==10)total=0;if(total==vatnumber.substr(9,1))return true;}}
var multipliers=[21,19,17,13,11,9,7,3,1];var total=0;for(var i=0;i<9;i++)total=total+Number(vatnumber.charAt(i))*multipliers[i];if(total%10==vatnumber.substr(9,1))return true;var multipliers=[4,3,2,7,6,5,4,3,2];var total=0;for(var i=0;i<9;i++)total=total+Number(vatnumber.charAt(i))*multipliers[i];total=11-total%11;if(total==10)return false;if(total==11)total=0;if(total==vatnumber.substr(9,1))
return true;else
return false;}
function CYVATCheckDigit(vatnumber){if(Number(vatnumber.slice(0,2)==12))return false;var total=0;for(var i=0;i<8;i++){var temp=Number(vatnumber.charAt(i));if(i%2==0){switch(temp){case 0:temp=1;break;case 1:temp=0;break;case 2:temp=5;break;case 3:temp=7;break;case 4:temp=9;break;default:temp=temp*2+3;}}
total=total+temp;}
total=total%26;total=String.fromCharCode(total+65);if(total==vatnumber.substr(8,1))
return true
else
return false;}
function CZVATCheckDigit(vatnumber){var total=0;var multipliers=[8,7,6,5,4,3,2];var czexp=new Array();czexp[0]=(/^\d{8}$/);czexp[1]=(/^[0-5][0-9][0|1|5|6]\d[0-3]\d\d{3}$/);czexp[2]=(/^6\d{8}$/);czexp[3]=(/^\d{2}[0-3|5-8]\d[0-3]\d\d{4}$/);var i=0;if(czexp[0].test(vatnumber)){for(var i=0;i<7;i++)total=total+Number(vatnumber.charAt(i))*multipliers[i];total=11-total%11;if(total==10)total=0;if(total==11)total=1;if(total==vatnumber.slice(7,8))
return true
else
return false;}
else if(czexp[1].test(vatnumber)){if(temp=Number(vatnumber.slice(0,2))>53)return false;return true;}
else if(czexp[2].test(vatnumber)){for(var i=0;i<7;i++)total=total+Number(vatnumber.charAt(i+1))*multipliers[i];total=11-total%11;if(total==10)total=0;if(total==11)total=1;var lookup=[8,7,6,5,4,3,2,1,0,9,10];if(lookup[total-1]==vatnumber.slice(8,9))
return true
else
return false;}
else if(czexp[3].test(vatnumber)){var temp=Number(vatnumber.slice(0,2))+Number(vatnumber.slice(2,4))+Number(vatnumber.slice(4,6))+Number(vatnumber.slice(6,8))+Number(vatnumber.slice(8));if(temp%11==0&&Number(vatnumber)%11==0)
return true
else
return false;}
return false;}
function DEVATCheckDigit(vatnumber){var product=10;var sum=0;var checkdigit=0;for(var i=0;i<8;i++){sum=(Number(vatnumber.charAt(i))+product)%10;if(sum==0){sum=10};product=(2*sum)%11;}
if(11-product==10){checkdigit=0}else{checkdigit=11-product};if(checkdigit==vatnumber.slice(8,9))
return true
else
return false;}
function DKVATCheckDigit(vatnumber){var total=0;var multipliers=[2,7,6,5,4,3,2,1];for(var i=0;i<8;i++)total=total+Number(vatnumber.charAt(i))*multipliers[i];total=total%11;if(total==0)
return true
else
return false;}
function EEVATCheckDigit(vatnumber){var total=0;var multipliers=[3,7,1,3,7,1,3,7];for(var i=0;i<8;i++)total=total+Number(vatnumber.charAt(i))*multipliers[i];total=10-total%10;if(total==10)total=0;if(total==vatnumber.slice(8,9))
return true
else
return false;}
function ELVATCheckDigit(vatnumber){var total=0;var multipliers=[256,128,64,32,16,8,4,2];if(vatnumber.length==8){vatnumber="0"+vatnumber};for(var i=0;i<8;i++)total=total+Number(vatnumber.charAt(i))*multipliers[i];total=total%11;if(total>9){total=0;};if(total==vatnumber.slice(8,9))
return true
else
return false;}
function ESVATCheckDigit(vatnumber){var total=0;var temp=0;var multipliers=[2,1,2,1,2,1,2];var esexp=new Array();esexp[0]=(/^[A-H|J|U|V]\d{8}$/);esexp[1]=(/^[A-H|N-S|W]\d{7}[A-J]$/);esexp[2]=(/^[0-9|Y|Z]\d{7}[A-Z]$/);esexp[3]=(/^[K|L|M|X]\d{7}[A-Z]$/);var i=0;if(esexp[0].test(vatnumber)){for(i=0;i<7;i++){temp=Number(vatnumber.charAt(i+1))*multipliers[i];if(temp>9)
total=total+Math.floor(temp/10)+temp%10
else
total=total+temp;}
total=10-total%10;if(total==10){total=0;}
if(total==vatnumber.slice(8,9))
return true
else
return false;}
else if(esexp[1].test(vatnumber)){for(i=0;i<7;i++){temp=Number(vatnumber.charAt(i+1))*multipliers[i];if(temp>9)
total=total+Math.floor(temp/10)+temp%10
else
total=total+temp;}
total=10-total%10;total=String.fromCharCode(total+64);if(total==vatnumber.slice(8,9))
return true
else
return false;}
else if(esexp[2].test(vatnumber)){var tempnumber=vatnumber;if(tempnumber.substring(0,1)=='Y')tempnumber=tempnumber.replace(/Y/,"1");if(tempnumber.substring(0,1)=='Z')tempnumber=tempnumber.replace(/Z/,"2");return tempnumber.charAt(8)=='TRWAGMYFPDXBNJZSQVHLCKE'.charAt(Number(tempnumber.substring(0,8))%23);}
else if(esexp[3].test(vatnumber)){return vatnumber.charAt(8)=='TRWAGMYFPDXBNJZSQVHLCKE'.charAt(Number(vatnumber.substring(1,8))%23);}
else return false;}
function EUVATCheckDigit(vatnumber){return true;}
function FIVATCheckDigit(vatnumber){var total=0;var multipliers=[7,9,10,5,8,4,2];for(var i=0;i<7;i++)total=total+Number(vatnumber.charAt(i))*multipliers[i];total=11-total%11;if(total>9){total=0;};if(total==vatnumber.slice(7,8))
return true
else
return false;}
function FRVATCheckDigit(vatnumber){if(!(/^\d{11}$/).test(vatnumber))return false;var total=vatnumber.substring(2);total=(total*100+12)%97;if(total==vatnumber.slice(0,2))
return true
else
return false;}
function HRVATCheckDigit(vatnumber){var product=10;var sum=0;var checkdigit=0;for(var i=0;i<10;i++){sum=(Number(vatnumber.charAt(i))+product)%10;if(sum==0){sum=10};product=(2*sum)%11;}
if((product+vatnumber.slice(10,11)*1)%10==1)
return true
else
return false;}
function HUVATCheckDigit(vatnumber){var total=0;var multipliers=[9,7,3,1,9,7,3];for(var i=0;i<7;i++)total=total+Number(vatnumber.charAt(i))*multipliers[i];total=10-total%10;if(total==10)total=0;if(total==vatnumber.slice(7,8))
return true
else
return false;}
function IEVATCheckDigit(vatnumber){var total=0;var multipliers=[8,7,6,5,4,3,2];if(/^\d[A-Z\*\+]/.test(vatnumber))vatnumber="0"+vatnumber.substring(2,7)+vatnumber.substring(0,1)+vatnumber.substring(7,8);for(var i=0;i<7;i++)total=total+Number(vatnumber.charAt(i))*multipliers[i];total=total%23;if(total==0)
total="W"
else
total=String.fromCharCode(total+64);if(total==vatnumber.slice(7,8))
return true
else
return false;}
function ITVATCheckDigit(vatnumber){var total=0;var multipliers=[1,2,1,2,1,2,1,2,1,2];var temp;if(Number(vatnumber.slice(0,7))==0)return false;temp=Number(vatnumber.slice(7,10));if((temp<1)||(temp>201)&&temp!=999&&temp!=888)return false;for(var i=0;i<10;i++){temp=Number(vatnumber.charAt(i))*multipliers[i];if(temp>9)
total=total+Math.floor(temp/10)+temp%10
else
total=total+temp;}
total=10-total%10;if(total>9){total=0;};if(total==vatnumber.slice(10,11))
return true
else
return false;}
function LTVATCheckDigit(vatnumber){if(vatnumber.length==9){if(!(/^\d{7}1/).test(vatnumber))return false;var total=0;for(var i=0;i<8;i++)total=total+Number(vatnumber.charAt(i))*(i+1);if(total%11==10){var multipliers=[3,4,5,6,7,8,9,1];total=0;for(i=0;i<8;i++)total=total+Number(vatnumber.charAt(i))*multipliers[i];}
total=total%11;if(total==10){total=0;};if(total==vatnumber.slice(8,9))
return true
else
return false;}
else{if(!(/^\d{10}1/).test(vatnumber))return false;var total=0;var multipliers=[1,2,3,4,5,6,7,8,9,1,2];for(var i=0;i<11;i++)total=total+Number(vatnumber.charAt(i))*multipliers[i];if(total%11==10){var multipliers=[3,4,5,6,7,8,9,1,2,3,4];total=0;for(i=0;i<11;i++)total=total+Number(vatnumber.charAt(i))*multipliers[i];}
total=total%11;if(total==10){total=0;};if(total==vatnumber.slice(11,12))
return true
else
return false;}}
function LUVATCheckDigit(vatnumber){if(vatnumber.slice(0,6)%89==vatnumber.slice(6,8))
return true
else
return false;}
function LVVATCheckDigit(vatnumber){if((/^[0-3]/).test(vatnumber)){if((/^[0-3][0-9][0-1][0-9]/).test(vatnumber))
return true
else
return false;}
else{var total=0;var multipliers=[9,1,4,8,3,10,2,5,7,6];for(var i=0;i<10;i++)total=total+Number(vatnumber.charAt(i))*multipliers[i];if(total%11==4&&vatnumber[0]==9)total=total-45;if(total%11==4)
total=4-total%11
else if(total%11>4)
total=14-total%11
else if(total%11<4)
total=3-total%11;if(total==vatnumber.slice(10,11))
return true
else
return false;}}
function MTVATCheckDigit(vatnumber){var total=0;var multipliers=[3,4,6,7,8,9];for(var i=0;i<6;i++)total=total+Number(vatnumber.charAt(i))*multipliers[i];total=37-total%37;if(total==vatnumber.slice(6,8)*1)
return true
else
return false;}
function NLVATCheckDigit(vatnumber){var total=0;var multipliers=[9,8,7,6,5,4,3,2];for(var i=0;i<8;i++)total=total+Number(vatnumber.charAt(i))*multipliers[i];total=total%11;if(total>9){total=0;};if(total==vatnumber.slice(8,9))
return true
else
return false;}
function PLVATCheckDigit(vatnumber){var total=0;var multipliers=[6,5,7,2,3,4,5,6,7];for(var i=0;i<9;i++)total=total+Number(vatnumber.charAt(i))*multipliers[i];total=total%11;if(total>9){total=0;};if(total==vatnumber.slice(9,10))
return true
else
return false;}
function PTVATCheckDigit(vatnumber){var total=0;var multipliers=[9,8,7,6,5,4,3,2];for(var i=0;i<8;i++)total=total+Number(vatnumber.charAt(i))*multipliers[i];total=11-total%11;if(total>9){total=0;};if(total==vatnumber.slice(8,9))
return true
else
return false;}
function ROVATCheckDigit(vatnumber){var multipliers=[7,5,3,2,1,7,5,3,2];var VATlen=vatnumber.length;multipliers=multipliers.slice(10-VATlen);var total=0;for(var i=0;i<vatnumber.length-1;i++){total=total+Number(vatnumber.charAt(i))*multipliers[i];}
total=(10*total)%11;if(total==10)total=0;if(total==vatnumber.slice(vatnumber.length-1,vatnumber.length))
return true
else
return false;}
function SEVATCheckDigit(vatnumber){var R=0;var digit;for(var i=0;i<9;i=i+2){digit=Number(vatnumber.charAt(i));R=R+Math.floor(digit/5)+((digit*2)%10);}
var S=0;for(var i=1;i<9;i=i+2)S=S+Number(vatnumber.charAt(i));var cd=(10-(R+S)%10)%10;if(cd==vatnumber.slice(9,10))
return true
else
return false;}
function SIVATCheckDigit(vatnumber){var total=0;var multipliers=[8,7,6,5,4,3,2];for(var i=0;i<7;i++)total=total+Number(vatnumber.charAt(i))*multipliers[i];total=11-total%11;if(total==10){total=0;};if(total!=11&&total==vatnumber.slice(7,8))
return true
else
return false;}
function SKVATCheckDigit(vatnumber){if(Number(vatnumber%11)==0)
return true
else
return false;}
function UKVATCheckDigit(vatnumber){var multipliers=[8,7,6,5,4,3,2];if(vatnumber.substr(0,2)=='GD'){if(vatnumber.substr(2,3)<500)
return true
else
return false;}
if(vatnumber.substr(0,2)=='HA'){if(vatnumber.substr(2,3)>499)
return true
else
return false;}
var total=0;if(Number(vatnumber.slice(0))==0)return false;var no=Number(vatnumber.slice(0,7));for(var i=0;i<7;i++)total=total+Number(vatnumber.charAt(i))*multipliers[i];var cd=total;while(cd>0){cd=cd-97;}
cd=Math.abs(cd);if(cd==vatnumber.slice(7,9)&&no<9990001&&(no<100000||no>999999)&&(no<9490001||no>9700000))return true;if(cd>=55)
cd=cd-55
else
cd=cd+42;if(cd==vatnumber.slice(7,9)&&no>1000000)
return true;else
return false;}