/* Amazon DTB Javascript API - v1.0.0 - 2016-04-05 12:46:00 PM */function aax_punt(a){var b=a.passback;document.write(b),document.close()}function matchCookie(a){function b(a){if(!c){c=!0;var b=document.createElement("iframe");b.style.display="none",b.src=a.cmp,document.body.appendChild(b)}}var c=!1;document.addEventListener?document.addEventListener("DOMContentLoaded",function(){b(a)},!1):document.attachEvent&&document.attachEvent("onreadystatechange",function(){b(a)})}function aax_render_ad(a){var b,c,d,e,f,g,h,i,j,k;if(a&&a.cmp&&""!=a.cmp&&"undefined"!=a.cmp&&matchCookie(a),b=window.aax_slots[window.aax_slots.length-1],"undefined"==typeof a.html||""==a.html)return void aax_punt(b);if(a.passback)return document.write(a.html),void document.close();if(c=a.html,null!=b.imp_pixel&&""!=b.imp_pixel&&(c+="<img src='"+b.imp_pixel+"' width=1 height=1>"),d=a.slotSize||b.size,!d)return void aax_punt(b);e=d.indexOf("x"),f=d.substring(0,e),g=d.substring(e+1),h="amznad"+Math.round(1e6*Math.random()),document.write('<iframe id="'+h+'" width="'+f+'" height="'+g+'" src="javascript:\'\'" scrolling="no" frameborder="0" marginwidth="0" marginheight="0" bgcolor="#FFFFFF" topmargin="0" leftmargin="0" rightmargin="0" bottommargin="0">'),document.write("</iframe>"),document.close();try{i=document.getElementById(h),j=i.contentWindow||i.contentDocument,j.document&&(j=j.document),j.write(c),j.close();try{a.ev&&(document.write('<script type="text/javascript" src="'+amzncpmads.CSM_JS+'"></script>'),document.write('<script type="text/javascript">'),k=b.aaxserver||"aax-cpm.amazon-adsystem.com",document.write('  amzncsm.host="'+k+'";\n'),document.write('  amzncsm.rmC(document.getElementById("'+h+'"), "'+a.iid+'", window, document);'),document.write("</script>"),document.close())}catch(l){console&&console.log}}catch(m){i&&(i.style.display="none"),aax_punt(b)}}function aax_getad(a){store_slot(a),a=normalize_slot(a),document.write("<!-- This ad unit's ad code format is not supported. Learn how to upgrade to the new ad code format: https://affiliate-program.amazon.com/gp/associates/help/t317 -->\n"),aax_punt(a)}function aax_getad_mpb(a){store_slot(a);try{a=normalize_slot(a);var b=make_params(a);b.slot_uuid=a.slot_uuid,send_req(b,a)}catch(c){aax_punt(a)}}function normalize_slot(a){return"undefined"==typeof a.src&&(a.src=320),"undefined"==typeof a.channel&&(a.channel=100),"undefined"==typeof a.imp_pixel&&(a.imp_pixel=null),"undefined"==typeof a.slot_name&&(a.slot_name=null),"undefined"==typeof a.passback&&(a.passback=""),"undefined"==typeof a.floor_cpm&&(a.floor_cpm=0),"undefined"==typeof a.slot_uuid&&(a.slot_uuid=null),"undefined"==typeof a.pubname&&(a.pubname=""),a}function store_slot(a){window.aax_slots||(window.aax_slots=[]),window.aax_slots.push(a)}function make_params(a){var b,c={};c.src=a.src,c.c=a.channel,a.size&&(c.sz=a.size),c.u=document.location;try{c.u=""+window.top.location}catch(d){window.top!==window.self&&(b=document.referrer,b&&(c.u=b))}return c.u=a.u||c.u,"undefined"!=typeof a.refurl&&(c.u=a.refurl),"undefined"!=typeof a.clickurl&&(c.ct=a.clickurl),c}function send_req(a,b){var c,d,e="";for(c in a)e+=c+"="+encodeURIComponent(a[c])+"&";e+="rnd="+Math.round(1e6*Math.random()),d=b.aaxserver||"aax-cpm.amazon-adsystem.com",document.write("<script src='//"+d+"/x/getad?jsd=1&"+e+"'></script>"),document.close()}var amzncpmads=amzncpmads||{};amzncpmads.CPM_JS||(amzncpmads.CSM_JS="../c.amazon-adsystem.com/aax2/csm.js.gz");