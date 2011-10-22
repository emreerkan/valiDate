/*
 * valiDate
 * http://www.karalamalar.net/
 *
 * Copyright (c) 2009 İzzet Emre Erkan
 * Licensed under Creative Commons Attribution-Share Alike 3.0 Unported License
 * http://creativecommons.org/licenses/by-sa/3.0/
 *
 */
String.prototype.valiDate =
  function() {
    if(/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)[0-9]{2}$/.test(this)) {
      var v = this.replace(/[- /]/g,'.').split('.');
      var d=parseInt(v[0],10), m=parseInt(v[1],10), y=parseInt(v[2],10);
      var o = new Date(y, m - 1, d);
      return o.getDate() == d && o.getMonth() + 1 == m && o.getFullYear() == y ? o : false;
    }
    else
      return false;
  }