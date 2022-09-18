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
  const ethereumButton = document.querySelector('.enableEthereumButton');

  ethereumButton.addEventListener('click', () => {
    //Will Start the metamask extension
    ethereum.request({ method: 'eth_requestAccounts' });
  });