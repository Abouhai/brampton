document.addEventListener('DOMContentLoaded',function(){
  // Mobile nav toggle
  var ham=document.querySelector('.hamburger');
  var nav=document.querySelector('.nav');
  if(ham&&nav){ham.addEventListener('click',function(){nav.classList.toggle('open');ham.textContent=nav.classList.contains('open')?'✕':'☰'})}

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(function(btn){
    btn.addEventListener('click',function(){
      var item=btn.parentElement;
      var ans=item.querySelector('.faq-a');
      var wasOpen=item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function(el){
        el.classList.remove('open');
        el.querySelector('.faq-a').style.maxHeight=null;
      });
      if(!wasOpen){item.classList.add('open');ans.style.maxHeight=ans.scrollHeight+'px'}
    });
  });

  // Pricing tabs
  var tabs=document.querySelectorAll('.pricing-tab');
  var groups=document.querySelectorAll('.pricing-group');
  tabs.forEach(function(tab){
    tab.addEventListener('click',function(){
      tabs.forEach(function(t){t.classList.remove('active')});
      tab.classList.add('active');
      var target=tab.getAttribute('data-tab');
      groups.forEach(function(g){g.style.display=g.getAttribute('data-group')===target?'grid':'none'});
    });
  });
});
