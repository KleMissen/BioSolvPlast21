
document.addEventListener('DOMContentLoaded', function(){
  const faders = document.querySelectorAll('.fade-in-section');
  const obsOptions = { threshold: 0.12, rootMargin: '0px 0px -10px 0px' };
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){ entry.target.classList.add('visible'); obs.unobserve(entry.target); }
    });
  }, obsOptions);
  faders.forEach(f => observer.observe(f));

  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const company = document.getElementById('company') ? document.getElementById('company').value.trim() : '';
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const status = document.getElementById('formStatus');
      if(!name || !email || !message){ status.textContent = 'Udfyld venligst alle felter.'; return; }
      const subject = encodeURIComponent('Kontakt - BioSolv Plast: ' + name);
      let body = 'Navn: ' + name + '\n';
      if(company) body += 'Virksomhed: ' + company + '\n';
      body += 'Email: ' + email + '\n\n' + message;
      window.location.href = `mailto:kontakt@biosolvplast.dk?subject=${subject}&body=${encodeURIComponent(body)}`;
      status.textContent = 'Din mailklient åbnes nu.';
    });
  }

  const fbButtons = document.querySelectorAll('.social-btn');
  fbButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      window.open('https://www.facebook.com/', '_blank');
    });
  });
});
