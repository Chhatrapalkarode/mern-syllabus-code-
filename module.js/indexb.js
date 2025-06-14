var url=require('url');
var ur="https://www.bing.com/search?q=google+chrome&filters=ufn%3a%22Google+Chrome%22+sid%3a%2279e515f6-5b00-082e-776b-8a6b6112fe92%22&asbe=HS&qs=MB&pq=goo&sk=HS1&sc=12-3&cvid=05369121273B41BEB647C0039F17F70C&FORM=QBRE&sp=2&ghc=1&lq=0"
var aa=url.parse(ur,true);
console.log(aa);