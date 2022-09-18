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

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };