function myalert(){
    var txt;
    if (confirm("You have not Joined DAO.")) {
      window.location.href='joindao.html'
    } else {
      
    }
  }
  function mynotifier(){
    alert("Coming Soon");
  }

  function ethereumButton(){
    ethereum.request({ method: 'eth_requestAccounts' });
  }