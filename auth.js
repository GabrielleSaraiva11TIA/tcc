// auth.js — carregue DEPOIS do script do Supabase no HTML:
// <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

const supabase = window.supabase.createClient(
  'https://SEU-PROJETO.supabase.co',   // seu Project URL real
  'SUA_ANON_KEY'                       // sua anon public key real
);

document.addEventListener('DOMContentLoaded', () => {
  const btnGoogle = document.querySelector('[data-provider="google"]');
  const btnApple  = document.querySelector('[data-provider="apple"]');

  btnGoogle?.addEventListener('click', async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin + '/dashboard.html' }
    });
  });

  btnApple?.addEventListener('click', async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'apple',
      options: { redirectTo: window.location.origin + '/dashboard.html' }
    });
  });
});