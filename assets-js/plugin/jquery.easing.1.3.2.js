!function(n){n.easing.jswing=n.easing.swing,n.extend(n.easing,{def:"easeOutQuad",swing:function(e,i,a,s,t){return n.easing[n.easing.def](e,i,a,s,t)},easeInOutExpo:function(n,e,i,a,s){return 0==e?i:e==s?i+a:(e/=s/2)<1?a/2*Math.pow(2,10*(e-1))+i:a/2*(-Math.pow(2,-10*--e)+2)+i}})}(jQuery);